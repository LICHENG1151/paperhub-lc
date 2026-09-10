<!--
name: 2026年09月 论文与技术报告阅读索引
creator: Li Cheng
created: 2026-09-03
modified: 2026-09-10
-->

# 2026年09月 论文与技术报告阅读索引

> 分区固定顺序：**一、学术论文 · 二、厂商技术报告（按公司）· 三、行业分析 · 四、技术手册/教程**（空区省略）。
> 每篇独立归档为 `<发表月 YYYY-MM>-<来源>-<中文主题>/`，含 原文 + `总结.md` + `README.md`；`发表` 列按发表月份升序 = 技术演进线。

## 一、学术论文

本月主题：Loop/Looped Transformer（2023–2026）。

| 发表 | 论文 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|
| 2023-01 | Looped Transformers as Programmable Computers | 速览 | 固定权重浅层 Transformer 放入循环，执行程序计数器/条件分支/函数调用/迭代算法 | [README](2023-01-Giannou-可编程循环Transformer/README.md) · [总结](2023-01-Giannou-可编程循环Transformer/总结.md) |
| 2024-10 | On Expressive Power of Looped Transformers | 速览 | 给出循环 Transformer 的函数逼近率，并用 timestep encoding 增强表达能力 | [README](2024-10-Xu-循环Transformer表达能力/README.md) · [总结](2024-10-Xu-循环Transformer表达能力/总结.md) |
| 2025-01 | Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers | 精读中 | 构造式证明 O(1) 宽/层循环 Transformer 可模拟超图确定性算法；关键=关联矩阵进注意力+降解机制 | [README](2025-01-Huang-超图算法推理/README.md) · [总结](2025-01-Huang-超图算法推理/总结.md) |
| 2025-02 | Reasoning with Latent Thoughts: On the Power of Looped Transformers | 速览 | 循环复用参数增有效深度，多推理任务上接近同等有效深度的非循环模型 | [README](2025-02-Saunshi-潜在思维与循环Transformer/README.md) · [总结](2025-02-Saunshi-潜在思维与循环Transformer/总结.md) |
| 2025-09 | A Formal Comparison Between Chain of Thought and Latent Thought | 速览 | 形式化比较显式 CoT 与 latent/loop thought 的计算优势边界 | [README](2025-09-Xu-CoT与潜在思维比较/README.md) · [总结](2025-09-Xu-CoT与潜在思维比较/总结.md) |
| 2026-06 | Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers | 速览 | LOTUS 用并行 latent blocks + 循环迭代，把 latent CoT 效率与 explicit CoT 监督结合 | [README](2026-06-Fan-潜在与显式推理桥接/README.md) · [总结](2026-06-Fan-潜在与显式推理桥接/总结.md) |
| 2026-06 | Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping | 速览 | 用学习到的随机停止改善循环模型在训练长度之外的泛化稳定性 | [README](2026-06-Kuo-循环Transformer外推稳定性/README.md) · [总结](2026-06-Kuo-循环Transformer外推稳定性/总结.md) |
| 2026-07 | LayerNorm as Implicit Gain Control in Looped Transformers | 速览 | 从 Jacobian 谱稳定性解释 pre-LN 在循环 Transformer 中的作用 | [README](2026-07-Buehlmaier-LayerNorm增益控制/README.md) · [总结](2026-07-Buehlmaier-LayerNorm增益控制/总结.md) |
| 2026-07 | Looped Transformers with Source-Centered State Evolution | 速览 | 让循环状态围绕 source state 演化，改善训练与深度外推 | [README](2026-07-Kim-源中心状态演化/README.md) · [总结](2026-07-Kim-源中心状态演化/总结.md) |
| 2026-07 | DeepLoop: Depth Scaling for Looped Transformers | 速览 | 为循环复用下的 residual branch 推导新的 DeepNorm 缩放规则 | [README](2026-07-Li-DeepLoop深度缩放/README.md) · [总结](2026-07-Li-DeepLoop深度缩放/总结.md) |
| 2026-07 | Looped Latent Attention: Cross-Loop KV Compression | 速览 | 用跨循环低秩 latent 压缩 KV cache | [README](2026-07-ONeill-循环潜在注意力/README.md) · [总结](2026-07-ONeill-循环潜在注意力/总结.md) |
| 2026-07 | Adaptive Depth in Looped Transformers | 速览 | 分离循环轨迹学习与 halt/readout 学习，诊断自适应深度失效原因 | [README](2026-07-Popescu-循环Transformer自适应深度/README.md) · [总结](2026-07-Popescu-循环Transformer自适应深度/总结.md) |
| 2026-07 | When Does Recurrence Become an Algorithm? | 速览 | 研究 weight-tied recurrence 何时形成可泛化的算法程序 | [README](2026-07-Zhang-循环成为算法/README.md) · [总结](2026-07-Zhang-循环成为算法/总结.md) |
| 2026-08 | Dynamical Phase Selection Controls Compute Scaling | 速览 | 初始化选择不同动力学相，进而决定有效推理计算量 | [README](2026-08-Kim-动力学相选择/README.md) · [总结](2026-08-Kim-动力学相选择/总结.md) |
| 2026-08 | LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction | 速览 | 用 latent multi-token prediction 为每个循环步提供前视监督 | [README](2026-08-Shomali-LoopMTP/README.md) · [总结](2026-08-Shomali-LoopMTP/总结.md) |
| 2026-09 | Looped Transformers under the Jacobian Lens | 速览 | 检验 recurrent-depth 模型中是否仍存在可读出、具因果作用的 global workspace | [README](2026-09-Wang-Jacobian全局工作空间/README.md) · [总结](2026-09-Wang-Jacobian全局工作空间/总结.md) |
| 2026-09 | SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers | 速览 | 在严格匹配 FLOPs/参数量/KV cache 下评估 MoE looping | [README](2026-09-Wang-SMELT/README.md) · [总结](2026-09-Wang-SMELT/总结.md) |

## 二、厂商技术报告（按公司）

### DeepSeek

| 发表 | 报告 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|
| 2026-09 | DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression | 精读中 | 552B 多模态 MoE、1M 上下文；CED+CSA2+FP4 主 KV+SWA Bounded Replay 把 global KV 压到 ≈890 B/token（≈V4-Flash 1/4）、persistent KV≈1/8；后训练无算法新意，增益全来自数据/环境合成 | [README](2026-09-DeepSeek-V4.1-Flash的KV缓存压缩/README.md) · [总结](2026-09-DeepSeek-V4.1-Flash的KV缓存压缩/总结.md) |
