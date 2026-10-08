<!--
name: 202610论文归档索引
creator: Li Cheng
created: 2026-10-08
modified: 2026-10-08
-->

# 202610 · 确定性训练与逐位复现

归档日期：2026-10-08。仅保留最近两年（2024-10-08 至 2026-10-08）的 3 篇工作，3 篇 PDF 均已下载校验。子文件夹前缀记录论文发表或公开版本月份，不是本月归档日期；阅读状态均为速览。原文保留下载来源文件名，逐篇 README 记录来源、页数与 SHA-256。

## 一、学术论文

| 发表 | 标题 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|
| 2025-02 | Verde: Verification via Refereed Delegation for Machine Learning Programs | 速览 | 以争议仲裁和 RepOps 可复现算子验证委托给不可信计算方的机器学习程序。 | [README](./2025-02-Verde-机器学习委托计算验证与跨硬件可复现算子/README.md) · [总结](./2025-02-Verde-机器学习委托计算验证与跨硬件可复现算子/总结.md) |

## 二、厂商技术报告

### Gensyn

| 发表 | 标题 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|
| 2026-09 | OPEN-1B: A Fully Auditable Training Run | 速览 | 通过可复现算子、全局数据流和确定性通信重放并逐位验证大模型训练步骤。 | [README](./2026-09-OPEN-1B-异构硬件上可审计的大模型训练/README.md) · [总结](./2026-09-OPEN-1B-异构硬件上可审计的大模型训练/总结.md) |

### Microsoft

| 发表 | 标题 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|
| 2025-10 | RepDL: Bit-level Reproducible Deep Learning Training and Inference | 速览 | 用正确舍入和固定计算顺序构建跨 CPU/GPU 逐位一致的深度学习算子库。 | [README](./2025-10-RepDL-训练与推理的跨平台逐位复现/README.md) · [总结](./2025-10-RepDL-训练与推理的跨平台逐位复现/总结.md) |

## 补充工程资料

- [Megatron-LM 本地源码与版本审计文档集](../../../../0-code/training/third-party/Megatron-LM-docs/00-README.md)：04.1 专题区分本地开发快照、正式 0.19 与最新主线。
- [Megatron-LM 0.19.2 确定性入口源码](https://github.com/NVIDIA/Megatron-LM/blob/4b4acac9a1d28ea6829c8d4f566d75698a21249d/megatron/training/determinism.py)。
- [FlashAttention 确定性反向实现说明](https://github.com/Dao-AILab/flash-attention)。
- [PyTorch 可复现性文档](https://docs.pytorch.org/docs/stable/notes/randomness.html)。

上述为代码或在线文档，保留链接，不计入论文 PDF 数量。

## 筛选说明

已移除本次归档中 2013、2015、2020、2021、2022 年的 5 篇旧工作及对应 PDF/导航卡/总结。上述 3 篇为本次保留清单，不代表近两年所有相关工作的穷尽列表。Megatron 的固定配置确定性与论文中的跨平台数值契约需要分别评价。
