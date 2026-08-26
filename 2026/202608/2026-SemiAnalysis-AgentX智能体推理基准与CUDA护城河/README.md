<!--
name: 2026-SemiAnalysis-AgentX 本篇导航
creator: Li Cheng
created: 2026-08-26
modified: 2026-08-26
-->

# 2026 · AgentX（InferenceX v3）：智能体推理下的 CUDA 护城河（SemiAnalysis）

> 本文件夹为单篇论文/报告归档：**总结 + 导航 README**。
> ⚠️ 原文为付费 newsletter 且当前网络策略下无法抓取，**原文未随档**，仅存稳定链接。

## 速查卡

| 项 | 内容 |
|----|------|
| 英文原名 | AgentX - InferenceXv3: Does CUDA Moat Hold up in Agentic Inferencing? |
| 作者 | Cam Quilici, Bryan Shan, Alec Ibarra, Daniel Nishball, Zane Fong, Kimbo Chen, Dylan Patel（SemiAnalysis） |
| 年份 | 2026（发表约 2026-08-24） |
| 出处 | SemiAnalysis Newsletter（付费文章） |
| 文章 | https://newsletter.semianalysis.com/p/agentx-inferencexv3-does-cuda-moat |
| 代码 | https://github.com/SemiAnalysisAI/InferenceX |
| 看板 | https://inferencex.semianalysis.com/ （对比页 `/compare`） |
| 状态 | 精读中（原文付费未读全，证据链偏二手，见总结 §0） |
| 一句话 | 用"重放真实智能体编码 trace + 逐块保真 KV 结构"的 AgentX 基准回答护城河问题：CUDA 优势在长上下文/KV-offload/成熟框架上仍厚（MiniMax M3 完胜），但 AMD MI355X+ATOM 在特定延迟区间每美元性能可反超——护城河随负载与软件动态变化，非绝对。 |

## 文件清单

| 文件 | 用途 |
|------|------|
| [`总结.md`](./总结.md) | 总结正文（★ 必读；含数据可信度分级 §0） |
| `README.md` | 本导航卡 |
| —（原文） | **未随档**：付费+网络策略双限制，见上方文章链接 |

## 一图速记

- **问题** → 旧基准（定长 8k1k）测不出真实智能体负载；CUDA 护城河在"多轮长上下文"下还立吗？
- **做法** → 采 3 个月 Claude Code/Codex trace → 匿名化（形状保真、内容合成 filler、KV block 逐块保真）→ AIPerf 离线变并发重放
- **规模** → ~2MW / 1000+ 芯片 / 302 组对比 / MI355X·GB300·GB200·B200·H200… / vLLM·SGLang·TRT-LLM·ATOM
- **画像** → 中位 ISL/OSL≈140k/396，P90 ISL≈317k，理论命中率 99.2%（无限缓存上界）
- **结果** → M3 上 Nvidia 完胜（B300 TRT-LLM TP2 夺冠）；40–60s 区间 MI355X+ATOM 每美元性能反超 GB300
- **分水岭** → KV offload：Nvidia Pareto 点普遍启用，AMD 一个都没用（AMD vLLM 的 GPU→CPU offload 低效）
- **TCO 悖论** → GB200/300 无 wide-EP/DCP 时每 TCO 性能反而更差
- **影响** → AgentX 当北极星，撬动 70+ 上游 PR（vLLM/SGLang/TRT-LLM/ATOM/LMCache/Mooncake…）
- **⚠️ 注意** → Nvidia 博客 30x/80x/50x 为厂商自报口径，非 SA 独立验证
