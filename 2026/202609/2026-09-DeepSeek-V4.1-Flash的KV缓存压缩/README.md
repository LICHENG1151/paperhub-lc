<!-- name: 2026-09-DeepSeek-V4.1-Flash的KV缓存压缩; creator: Li Cheng; created: 2026-09-10; modified: 2026-09-10 -->

# 2026 · DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression

> 本文件夹为单篇归档：**原文 + 总结 + 导航 README** 同处。属**厂商技术报告（DeepSeek）**分区。

## 速查卡

| 项 | 内容 |
|----|------|
| 英文原名 | DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression |
| 发布方 | DeepSeek-AI |
| 年份 | 2026-09（报告日期约 2026 年 9 月） |
| 出处 | 厂商技术报告（Tech Report），原文 PDF 随档 |
| 链接 | 无公开 arXiv 链接 |
| 代码 | — |
| 状态 | 精读中 |
| 一句话 | 552B 多模态 MoE、1M 上下文；靠 CED 编解码 + CSA2 跨层稀疏复用 + FP4 主 KV + SWA Bounded Replay 四件套，把 global KV 压到 ≈890 B/token（≈V4-Flash 的 1/4）、persistent KV 压到 ≈1/8；后训练明确不引入新算法，增益全来自 Agent 数据/环境合成 pipeline。 |

## 文件清单

| 文件 | 用途 |
|------|------|
| [`总结.md`](./总结.md) | 总结正文（★ 必读） |
| `DeepSeek_V41_Tech_Report.pdf` | **报告原文**，照抄原名，保真备查 |
| `README.md` | 本导航卡 |

## 一图速记

- **立意** → 长上下文 + Agent 化下，**KV 缓存（存储/带宽）才是推理瓶颈**；把 KV 压缩沿三维度同时推到极限
- **省计算** → **CED**：decoder 的 global KV 从 encoder 末层投影，prefill 只算半程（激活 8B prefill / 16B decode）
- **省存储·层维** → **CSA2** Full/Reindex/Reuse 三模式 + 跨层 KV/index 复用 + Hierarchical Sparse Indexer（首层建池、后层池内打分）
- **省存储·entry 维** → **FP4 主 KV**（E2M1/MXFP4）→ ≈890 B/token（≈V4-Flash 1/4）；SWA KV 对量化敏感仍 FP8
- **省持久化** → **SWA Bounded Replay**：不持久化 SWA KV，miss 时重放最近 n_win token 近似重建 → persistent KV ≈V4-Flash 1/8
- **其它** → Single-Pass mHC + Mega-mHC kernel（activation traffic 砍到 (2n+2)d）/ Engram 196B 条件记忆（不计激活）/ DSpark 投机解码 / head-wise Muon + Sinkhorn 优化器 / 45T token 预训练
- **后训练** → SFT→RL→OPD，**无算法新意**；增益全来自 Agent 任务合成 + DSec 百万级 sandbox（最终一致性调度）+ 可控 reasoning effort + 异步 RL（token 级中断续跑）
- **⚠️ 定性** → 前瞻/合成文档（对手型号超现实时间线）；**只分析架构思路，不引用 benchmark 分数**
- **迁移点** → ① SWA「短 TTL + bounded replay」→ 长 session KV 生命周期管理；② DSec「最终一致性 + 节点本地硬约束」→ 大规模调度绕中心瓶颈；③ RL token 级中断续跑 → HA「抢占不丢进度」
