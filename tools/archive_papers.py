# -*- coding: utf-8 -*-
#!/usr/bin/env python3
"""Manifest-driven paper archive. fetch -> render -> check; no LLM-generated summaries."""
import argparse, concurrent.futures, hashlib, html, json, re, subprocess, sys
from collections import defaultdict
from datetime import date
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import quote, unquote, urlsplit

class MetadataParser(HTMLParser):
    def __init__(self): super().__init__(); self.meta={}
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='meta' and a.get('name','').startswith('citation_'):
            self.meta.setdefault(a['name'],[]).append(a.get('content',''))

def digest(p): return hashlib.sha256(p.read_bytes()).hexdigest()
def link(p): return quote(str(p), safe='/.-_')
def cell(s): return str(s).replace('|','\\|').replace('\n',' ')
def header(name, today, created=None):
    return f'<!--\nname: {name}\ncreator: Li Cheng\ncreated: {created or today}\nmodified: {today}\n-->\n\n'
def download(url, path):
    path.parent.mkdir(parents=True,exist_ok=True)
    tmp=path.with_name(path.name+'.part')
    # Resume partial transfers instead of discarding bytes after a timeout.
    last=''
    for attempt in range(12):
        cmd=['curl','-L','--fail','--silent','--show-error','--connect-timeout','15','--max-time','60']
        if tmp.exists() and tmp.stat().st_size:cmd+=['--continue-at','-']
        cmd += [url,'-o',str(tmp)]
        r=subprocess.run(cmd,capture_output=True,text=True)
        if r.returncode==0:
            tmp.replace(path);return
        last=r.stderr.strip() or f'curl exit {r.returncode}'
        # A server may reject byte-range requests; retain the partial separately.
        if r.returncode==33 and tmp.exists():tmp.replace(tmp.with_name(tmp.name+'.range-rejected'))
    raise RuntimeError(last)

def fetch_one(a, root, cache):
    if a.get('existing'): return a['key']+' existing: reuse'
    folder=root/a['path']; folder.mkdir(parents=True,exist_ok=True)
    record=folder/'source.json'
    if record.exists():
        meta=json.loads(record.read_text()); p=folder/meta['file']
        if p.exists() and digest(p)==meta['sha256']:return a['key']+' cached: verified'
    if a.get('arxiv'):
        aid=a['arxiv']; cached=cache/(aid+'.json')
        if cached.exists():
            m=json.loads(cached.read_text()); candidate=cache/m['pdf']
            if candidate.exists() and digest(candidate)==m['sha256']:
                import shutil
                dest=folder/m['pdf'];shutil.copy2(candidate,dest)
                meta=dict(m,file=m['pdf'],download_url='https://arxiv.org/pdf/'+aid+m.get('version',''),retrieved=date.today().isoformat())
                record.write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n')
                return aid+' imported: verified'
        absfile=cache/(aid+'.html')
        if not absfile.exists():download('https://arxiv.org/abs/'+aid,absfile)
        p=MetadataParser();p.feed(absfile.read_text());m=p.meta
        if not m.get('citation_title'):raise ValueError(aid+': invalid arXiv metadata')
        if a.get('title_verified') and m['citation_title'][0]!=a['title']:raise ValueError(aid+': title mismatch; review manifest')
        versions=re.findall(r'(?:https://arxiv.org/abs/|arXiv:)'+re.escape(aid)+r'(v\d+)',absfile.read_text())
        v=versions[0] if versions else ''
        if a.get('source_format')=='html':
            filename=aid+v+'.html';dest=folder/filename;url='https://arxiv.org/html/'+aid+v
            download(url,dest)
            raw=dest.read_text()
            if len(raw)<5000 or 'ltx_document' not in raw:raise ValueError(aid+': invalid full-text HTML')
            meta={'id':aid,'title':m['citation_title'][0],'date':m.get('citation_date',[''])[0].replace('/','-'),'authors':m.get('citation_author',[]),'abstract':m.get('citation_abstract',[''])[0],'version':v,'file':filename,'download_url':url,'pages':None,'sha256':digest(dest),'retrieved':date.today().isoformat()}
            record.write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n')
            return a['key']+' HTML full text: verified'
        filename=aid+v+'.pdf'; dest=folder/filename; url='https://arxiv.org/pdf/'+aid+v
        download(url,dest)
        from pypdf import PdfReader
        if not dest.read_bytes().startswith(b'%PDF-'):raise ValueError(aid+': not a PDF')
        reader=PdfReader(dest);pages=len(reader.pages)
        if not pages:raise ValueError(aid+': empty PDF')
        (cache/(aid+'.txt')).write_text('\n\n'.join('[PAGE '+str(i+1)+']\n'+x.extract_text() for i,x in enumerate(reader.pages)))
        meta={'id':aid,'title':m['citation_title'][0],'date':m.get('citation_date',[''])[0].replace('/','-'),'authors':m.get('citation_author',[]),'abstract':m.get('citation_abstract',[''])[0],'version':v,'file':filename,'download_url':url,'pages':pages,'sha256':digest(dest),'retrieved':date.today().isoformat()}
    else:
        dest=folder/a['source_file'];download(a['download_url'],dest)
        if dest.stat().st_size<100:raise ValueError('source suspiciously short')
        meta={'title':a['title'],'file':a['source_file'],'download_url':a['download_url'],'sha256':digest(dest),'retrieved':date.today().isoformat(),'pages':None}
    record.write_text(json.dumps(meta,ensure_ascii=False,indent=2)+'\n')
    return a['key']+' downloaded: verified'

def ordered(items):return sorted(items,key=lambda a:(a['published'],a['title']),reverse=True)
def table(items, prefix='', detailed=True):
    rows=['| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |','|---|---|---|---|---|---|']
    for a in ordered(items):
        p=Path(prefix)/a['path'];source='、'.join(a['sources']);tags='、'.join(a['topics'])
        rows.append('| '+' | '.join(map(cell,[a['published'],a['title'],source,tags,a['status']+' / '+a['evidence_level']]))+f' | [导航]({link(p/"README.md")}) · [总结]({link(p/"总结.md")}) |')
    return '\n'.join(rows)+'\n'

def render(config,root):
    today=config['updated'];articles=config['articles']
    for a in articles:
        if a.get('existing'):continue
        folder=root/a['path'];source=folder/'source.json'
        if not source.exists():raise ValueError(a['key']+': fetch required before render')
        m=json.loads(source.read_text());authors=a.get('authors') or ', '.join(m.get('authors',[])[:3])+(' et al.' if len(m.get('authors',[]))>3 else '')
        h=header(a['subject'],today).replace('-->\n',f'title: {a["title"]}\nauthors: {authors}\nvenue: {a["venue"]}\nyear: {a["published"][:4]}\nurl: {a["url"]}\ncode: {a.get("code","")}\ntags: {", ".join(a["topics"])}\nrelated_repo:\nrelated_dev:\n-->\n',1)
        evidence='\n'.join('- '+s for s in a['evidence'])
        ideas='\n'.join('- '+s for s in a['ideas'])
        summary=h+f'# {a["published"][:4]} · {a["subject"]}\n\n**状态**：{a["status"]}\n\n> 原文：[{a["title"]}]({a["url"]})。本次为速览归档，不代表已复现实验。\n> [当月索引](../00-README.md) · [本篇导航](README.md)\n\n## 一句话总结\n\n{a["hook"]}\n\n## 核心思想\n\n{ideas}\n\n## 验证依据与阅读范围\n\n{evidence}\n\n- 本次核对范围：{a["read_scope"]}。\n- 证据等级：{a["evidence_level"]}；所有性能结论均为作者报告，未在本地独立复现。\n\n## 结论与局限\n\n{a["limits"]}\n\n## 个人评述与启发\n\n{a["insight"]}\n\n## 原文与日期记录\n\n- 发表索引时间：{a["published"]}。{a.get("date_note","")}\n- 归档日期：{today}；归档批次：{a["archive_month"]}。\n- 来源归属：{"、".join(a["sources"])}；归属依据：{a["affiliation_evidence"]}。\n- 原文：[本地文件]({link(m["file"])})；下载地址：{m["download_url"]}。\n- 固定版本：{m.get("version","官方快照")}；页数：{m.get("pages") or "不适用"}；SHA-256：`{m["sha256"]}`。\n- [元数据与校验记录](source.json)。\n'
        (folder/'总结.md').write_text(summary)
        nav=header(a['subject']+'导航',today)+f'# {a["subject"]}\n\n[返回当月索引](../00-README.md)\n\n| 项 | 内容 |\n|---|---|\n'
        for k,v in [('英文原名',a['title']),('作者',authors),('发表',a['published']),('来源','、'.join(a['sources'])),('出处',a['venue']),('原文',a['url']),('代码',a.get('code') or '未单独核验'),('优先级',a['priority']),('状态',a['status']),('证据',a['evidence_level']),('一句话',a['hook'])]:nav+=f'| {k} | {cell(v)} |\n'
        nav+=f'\n## 文件清单\n\n| 文件 | 用途 |\n|---|---|\n| [总结.md](总结.md) | 结构、验证边界与个人评述 |\n| [原文]({link(m["file"])}) | 原始文件，未改写；保留来源文件名 |\n| [source.json](source.json) | 版本、下载地址、页数、SHA-256 |\n\n日期说明：{a.get("date_note") or "按 arXiv 首次提交日期索引；文件夹月份按 arXiv 编号或官方首发月命名。"}\n'
        (folder/'README.md').write_text(nav)
    intro=header('paperhub-lc论文与技术报告索引',today)+f'# 论文与技术报告归档\n\n更新：{today}。共 **{len(articles)} 篇**独立归档，包含历史条目；本次新增聚焦 2025 年以来 LLM 本体架构。\n\n'
    intro+='**阅读优先级**：第一梯队 DeepSeek、智谱 GLM、Moonshot Kimi；第二梯队 Qwen、MiniMax、腾讯（Hunyuan、优图）、字节 Seed、小米 MiMo、蚂蚁集团。高校重点跟踪清华、北大、复旦、上交、Stanford、MIT、UC Berkeley、CMU、Princeton、Cornell，并兼顾其他相关实验室。优先级表示阅读安排，不是质量排名。\n\n'
    intro+='**检索方式**：[按时间](#by-time) · [按来源](#by-source) · [按主题](#by-topic)。使用页面查找可检索标题、模型、机构和主题；来源与主题支持一篇多归属，各表从新到旧。\n\n'
    intro+='**日期规则**：发表时间与归档月份分开。精确日期可核验时使用 YYYY-MM-DD，仅月份可确认时使用 YYYY-MM，同月仅月份条目置于已知日期之后；文件夹前缀按命名规范取 arXiv 编号月份或官方首发月。版本修订不将旧工作当成新论文。历史条目的月份沿用既有归档，未逐篇重审。\n\n'
    intro+='**证据规则**：A＝正式模型/官方公开检查点；B＝论文预训练、消融或规模实验；C＝方法或初步实验；H＝历史笔记，本轮未重新核验。A 不代表每个组件有独立消融，所有等级均不代表本地复现。官方模型卡单独标明载体，不冒充论文。\n\n'
    # A compact directory stays at the top of the long README.  It is generated
    # from the same groups as the tables below, so anchors and counts cannot drift.
    intro+='<a id="contents"></a>\n## 目录\n\n'
    intro+='### 三种检索入口\n\n- [1. 按时间检索](#by-time)：先看归档月份，再看全量发表时间倒序表。\n- [2. 按厂家与实验室检索](#by-source)：按重点厂商、学校和研究机构分组；合作论文可出现在多个组。\n- [3. 按主题与研究方向检索](#by-topic)：按架构、注意力、MoE、线性序列、多模态、训练与系统等方向分组。\n\n'
    intro+='<!-- FACET_DIRECTORY -->\n\n'
    intro+='<a id="by-time"></a>\n\n## 1. 按时间检索\n\n[返回总目录](#contents)\n\n### 归档批次\n\n| 归档月 | 篇数 | 入口 |\n|---|---:|---|\n'
    months=sorted({a['archive_month'] for a in articles},reverse=True)
    for month in months:intro+=f'| {month} | {sum(a["archive_month"]==month for a in articles)} | [月索引]({month[:4]}/{month}/00-README.md) |\n'
    intro+='\n### 发表时间总表\n\n'+table(articles)
    intro+='\n<a id="by-source"></a>\n\n## 2. 按厂家与实验室检索\n\n[返回总目录](#contents)\n\n### 来源目录\n\n'
    groups=defaultdict(list)
    for a in articles:
        for s in a['sources']:groups[s].append(a)
    source_order=config['source_order']+[s for s in sorted(groups) if s not in config['source_order']]
    source_links={s:f'[{s}（{len(groups[s])} 篇）](#source-{i})' for i,s in enumerate(source_order) if s in groups}
    priority_groups=[(group['label'],group['sources']) for group in config['source_groups']]
    assigned={s for _,names in priority_groups for s in names}
    priority_groups.append(('其他合作机构与历史来源',[s for s in source_order if s not in assigned]))
    source_directory=''
    for label,names in priority_groups:
        names=[s for s in names if s in source_links]
        if not names:continue
        source_directory+=f'**{label}**\n\n| 来源入口 | 来源入口 | 来源入口 |\n|---|---|---|\n'
        for start in range(0,len(names),3):
            row=[source_links[s] for s in names[start:start+3]]
            source_directory+='| '+' | '.join(row+['']*(3-len(row)))+' |\n'
        source_directory+='\n'
    intro+=source_directory
    intro+='\n合作工作会出现在多个来源表；计数不可相加作为独立论文数。未核实机构的历史工作使用“作者团队待核验”，不根据姓名猜测学校。\n\n'
    for i,s in enumerate(source_order):
        if s in groups:intro+=f'<a id="source-{i}"></a>\n\n### {s}\n\n[返回来源目录](#by-source) · [返回总目录](#contents)\n\n'+table(groups[s])+'\n'
    intro+='<a id="by-topic"></a>\n\n## 3. 按主题与研究方向检索\n\n[返回总目录](#contents)\n\n### 主题目录\n\n'
    topics=defaultdict(list)
    for a in articles:
        for t in a['topics']:topics[t].append(a)
    topic_directory='| 研究方向入口 | 篇数 |\n|---|---:|\n'
    for i,t in enumerate(sorted(topics)):topic_directory+=f'| [{t}](#topic-{i}) | {len(topics[t])} |\n'
    intro+=topic_directory+'\n'
    for i,t in enumerate(sorted(topics)):intro+=f'<a id="topic-{i}"></a>\n\n### {t}\n\n[返回主题目录](#by-topic) · [返回总目录](#contents)\n\n'+table(topics[t])+'\n'
    intro=intro.replace('<!-- FACET_DIRECTORY -->','### 厂家与实验室直达目录\n\n'+source_directory+'### 研究方向直达目录\n\n'+topic_directory)
    intro+='## 4. 覆盖边界与后续跟踪\n\n'+config['coverage_note']+'\n\n## 5. 统一维护入口\n\n- [输入清单](inputs/catalog.json)：唯一数据源，包含标题、来源多标签、主题多标签、日期、路径与人工速览笔记。\n- [统一脚本](tools/archive_papers.py)：`fetch / render / check`，校验成功的原文按 SHA-256 复用，已有论文按路径与唯一键去重。\n- [使用说明](tools/README.md)：增量归档、离线重建与验证命令。索引由脚本生成，不手工维护多份论文清单。\n'
    (root/'README.md').write_text(intro)
    # Regenerate the requested month only; older monthly indexes remain intact.
    month=config['target_month'];items=[a for a in articles if a['archive_month']==month];base=root/month[:4]/month
    text=header(month+'论文归档索引',today,config.get('month_created',today))+f'# {month} · LLM 架构与技术报告归档\n\n[根目录三维索引](../../README.md)\n\n本月共 {len(items)} 篇；新增论文归档于 {today}，保留既有确定性训练与逐位复现条目。发表时间与归档月份不同；每张表按发表时间倒序。\n\n## 发表时间总表\n\n'
    local=[]
    for a in items:
        b=dict(a);b['path']=Path(a['path']).name;local.append(b)
    text+=table(local)+'\n'
    academic=[a for a in local if a['kind']=='学术论文'];vendors=[a for a in local if a['kind']=='厂商技术报告']
    if academic:text+='## 一、学术论文\n\n'+short_table(academic)+'\n'
    if vendors:
        text+='## 二、厂商技术报告\n\n'
        owners=list(dict.fromkeys(a['owner'] for a in ordered(vendors)))
        for owner in owners:text+='### '+owner+'\n\n'+short_table([a for a in vendors if a['owner']==owner])+'\n'
    for title in ['行业分析','技术手册/教程']:
        others=[a for a in local if a['kind']==title]
        if others:text+='## '+title+'\n\n'+short_table(others)+'\n'
    text+='## 归档说明\n\n2026-10-08 的确定性训练归档原文与笔记保留。本次新增均标“速览”，未执行论文实验。此前月份已经归档的 Kimi K3、DeepSeek-V4.1-Flash 等在根索引复用原入口，不重复建立副本。\n'
    extra=config.get('month_preserved_notes','')
    if extra:text+='\n'+extra+'\n'
    (base/'00-README.md').write_text(text)

def short_table(items):
    text='| 发表 | 标题 | 状态 | 一句话 | 入口 |\n|---|---|---|---|---|\n'
    for a in ordered(items):text+='| '+' | '.join(map(cell,[a['published'],a['title'],a['status'],a['hook']]))+f' | [导航]({link(Path(a["path"])/"README.md")}) · [总结]({link(Path(a["path"])/"总结.md")}) |\n'
    return text

def check(config,root):
    errors=[];keys=set();paths=set();new=0
    for a in config['articles']:
        if a['key'] in keys:errors.append('duplicate key '+a['key'])
        keys.add(a['key'])
        if a['path'] in paths:errors.append('duplicate path '+a['path'])
        paths.add(a['path'])
        for f in ['README.md','总结.md']:
            if not (root/a['path']/f).is_file():errors.append('missing '+a['path']+'/'+f)
        if not a['sources'] or not a['topics']:errors.append('empty facets '+a['key'])
        if not a.get('existing'):
            new+=1;folder=root/a['path'];sp=folder/'source.json'
            if not sp.exists():errors.append('missing source '+a['key']);continue
            m=json.loads(sp.read_text());p=folder/m['file']
            if not p.exists() or digest(p)!=m['sha256']:errors.append('invalid hash '+a['key'])
            if p.suffix=='.pdf':
                from pypdf import PdfReader
                try:
                    if len(PdfReader(p).pages)!=m['pages']:errors.append('PDF page count '+a['key'])
                except Exception as e:errors.append('invalid PDF '+str(e))
            s=(folder/'总结.md').read_text()
            for field in ['title:','url:','creator: Li Cheng','**状态**：','## 一句话总结','## 核心思想','## 个人评述与启发']:
                if field not in s:errors.append('missing field '+field+' '+a['key'])
    files=[root/'README.md',root/config['target_month'][:4]/config['target_month']/'00-README.md']
    files += [root/a['path']/f for a in config['articles'] if not a.get('existing') for f in ['README.md','总结.md']]
    for p in files:
        if not p.exists():errors.append('missing '+str(p));continue
        s=p.read_text();last=None
        for line in s.splitlines():
            match=re.match(r'^\| (\d{4}-\d{2}(?:-\d{2})?) \|',line)
            if match:
                d=match[1]
                if last is not None and d>last:errors.append('not descending '+str(p)+' '+d)
                last=d
            elif not line.startswith('|'):last=None
        for dest in re.findall(r'\]\(([^)]+)\)',s):
            if dest.startswith(('http:','https:','mailto:')):continue
            path,_,anchor=unquote(dest).partition('#')
            target=(p.parent/path).resolve() if path else p
            if not target.exists():errors.append('broken local link '+str(p)+' -> '+dest)
            if anchor and target.exists() and f'id="{anchor}"' not in target.read_text():errors.append('broken anchor '+dest)
    all_leaves={str(p.parent.relative_to(root)) for p in root.glob('20*/20*/**/总结.md')}
    if all_leaves!=paths:errors.append('catalog coverage mismatch '+str(all_leaves^paths))
    result={'articles':len(keys),'new_articles':new,'sources':len({s for a in config['articles'] for s in a['sources']}),'topics':len({s for a in config['articles'] for s in a['topics']}),'checked_markdown':len(files),'errors':errors}
    print(json.dumps(result,ensure_ascii=False,indent=2))
    return bool(errors)

def main():
    ap=argparse.ArgumentParser(description=__doc__);ap.add_argument('command',choices=['fetch','render','check']);ap.add_argument('--input',type=Path,required=True);ap.add_argument('--root',type=Path,required=True);ap.add_argument('--cache',type=Path,default=Path('/tmp/paperhub-research'));ap.add_argument('--jobs',type=int,default=3);args=ap.parse_args()
    cfg=json.loads(args.input.read_text());args.root.mkdir(parents=True,exist_ok=True);args.cache.mkdir(parents=True,exist_ok=True)
    if args.command=='fetch':
        failed=[]
        with concurrent.futures.ThreadPoolExecutor(max_workers=args.jobs) as pool:
            fs={pool.submit(fetch_one,a,args.root,args.cache):a['key'] for a in cfg['articles']}
            for f in concurrent.futures.as_completed(fs):
                try:print(f.result(),flush=True)
                except Exception as e:failed.append(fs[f]);print(fs[f]+' FAILED '+str(e),flush=True)
        if failed:print('Failed keys: '+', '.join(failed));return 1
    elif args.command=='render':render(cfg,args.root);print('Rendered archive and three-dimensional indexes')
    else:return check(cfg,args.root)
    return 0
if __name__=='__main__':sys.exit(main())
