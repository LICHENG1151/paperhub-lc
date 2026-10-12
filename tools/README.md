<!--
name: 统一论文归档脚本使用说明
creator: Li Cheng
created: 2026-10-12
modified: 2026-10-12
-->

# 统一论文归档脚本

[返回三维索引](../README.md)

一套脚本读取一份 JSON 清单，完成原文下载、SHA-256 去重复用、导航卡/人工速览笔记输出和三维索引生成。它不训练模型，也不自动编造论文总结；论文的 `ideas / evidence / limits / insight` 由阅读后人工填写。

依赖：Python 3.9+、curl、pypdf。无需模型 API、密钥或服务器。

从仓库根目录运行：

```bash
python3 tools/archive_papers.py fetch --input inputs/catalog.json --root . --jobs 3
python3 tools/archive_papers.py render --input inputs/catalog.json --root .
python3 tools/archive_papers.py check --input inputs/catalog.json --root .
```

新增论文只改 `inputs/catalog.json`：

- `key`：arXiv 编号或官方报告唯一标识，不能重复。
- `arxiv`：如 `2602.15763`；非 arXiv 材料使用 `download_url` 和 `source_file`。
- `path`：`年/归档月/发表月-模型或方法-中文主题`；归档月不是发表月。
- `published`：首次发表日期，精度可为月或日；修订版本日期不作为新发表时间。
- `sources / topics`：数组，支持校企合作和多主题归属。
- `status / evidence_level / read_scope`：阅读状态、证据等级与实际核对范围。
- `hook / ideas / evidence / limits / insight`：人工提炼的内容与边界。
- `existing: true`：已归档论文，复用原导航、总结和原文，不重写旧笔记。

`source.json` 固定原文版本、下载地址、页数与 SHA-256。支持 PDF、官方全文 HTML 和官方 Markdown 模型卡。下载先写 `.part`，超时断点续传，成功后替换；已校验文件再次执行会跳过。失败以非零退出码和条目键输出，不会静默当作完成。

根 README 的时间、来源、主题表均由同一清单生成，各表新到旧。月索引保留规范分区，并额外提供全月倒序总表。`check` 检查索引链接、锚点、倒序、唯一键、归档覆盖、PDF 页数与哈希以及新增笔记必需字段。

本次使用 `/tmp/paperhub-research` 作为下载缓存；该缓存不是归档依赖，成功下载的原文均存入对应论文目录。后续可通过 `--cache` 指定其他缓存目录。`render` 与 `check` 可完全离线运行。
