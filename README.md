<!--
name: paperhub-lc论文与技术报告索引
creator: Li Cheng
created: 2026-10-12
modified: 2026-10-12
-->

# 论文与技术报告归档

更新：2026-10-12。共 **66 篇**独立归档，包含历史条目；本次新增聚焦 2025 年以来 LLM 本体架构。

**阅读优先级**：第一梯队 DeepSeek、智谱 GLM、Moonshot Kimi；第二梯队 Qwen、MiniMax、腾讯（Hunyuan、优图）、字节 Seed、小米 MiMo、蚂蚁集团。高校重点跟踪清华、北大、复旦、上交、Stanford、MIT、UC Berkeley、CMU、Princeton、Cornell，并兼顾其他相关实验室。优先级表示阅读安排，不是质量排名。

**检索方式**：[按时间](#by-time) · [按来源](#by-source) · [按主题](#by-topic)。使用页面查找可检索标题、模型、机构和主题；来源与主题支持一篇多归属，各表从新到旧。

**日期规则**：发表时间与归档月份分开。精确日期可核验时使用 YYYY-MM-DD，仅月份可确认时使用 YYYY-MM，同月仅月份条目置于已知日期之后；文件夹前缀按命名规范取 arXiv 编号月份或官方首发月。版本修订不将旧工作当成新论文。历史条目的月份沿用既有归档，未逐篇重审。

**证据规则**：A＝正式模型/官方公开检查点；B＝论文预训练、消融或规模实验；C＝方法或初步实验；H＝历史笔记，本轮未重新核验。A 不代表每个组件有独立消融，所有等级均不代表本地复现。官方模型卡单独标明载体，不冒充论文。

<a id="contents"></a>
## 目录

### 三种检索入口

- [1. 按时间检索](#by-time)：先看归档月份，再看全量发表时间倒序表。
- [2. 按厂家与实验室检索](#by-source)：按重点厂商、学校和研究机构分组；合作论文可出现在多个组。
- [3. 按主题与研究方向检索](#by-topic)：按架构、注意力、MoE、线性序列、多模态、训练与系统等方向分组。

### 厂家与实验室直达目录

**第一梯队厂商**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [DeepSeek（8 篇）](#source-0) | [智谱 GLM（3 篇）](#source-1) | [Moonshot Kimi（6 篇）](#source-2) |

**第二梯队厂商**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [阿里 Qwen（3 篇）](#source-3) | [MiniMax（2 篇）](#source-4) | [腾讯 Hunyuan（2 篇）](#source-5) |
| [腾讯优图（1 篇）](#source-21) | [字节 Seed（3 篇）](#source-6) | [小米 MiMo（3 篇）](#source-7) |
| [蚂蚁集团（1 篇）](#source-22) |  |  |

**重点高校**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [清华大学（9 篇）](#source-8) | [北京大学（3 篇）](#source-9) | [复旦大学（1 篇）](#source-10) |
| [上海交通大学（1 篇）](#source-11) | [Stanford（3 篇）](#source-12) | [MIT（1 篇）](#source-13) |
| [UC Berkeley（1 篇）](#source-14) | [CMU（2 篇）](#source-15) | [Princeton（1 篇）](#source-16) |
| [Cornell（1 篇）](#source-23) |  |  |

**其他高校与实验室**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [中国人民大学（1 篇）](#source-17) | [KAIST（2 篇）](#source-18) | [Mila（2 篇）](#source-19) |
| [UC San Diego（2 篇）](#source-20) |  |  |

**其他合作机构与历史来源**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [Astera Institute（1 篇）](#source-24) | [BIGAI（1 篇）](#source-25) | [Cartesia（2 篇）](#source-26) |
| [Cohere（1 篇）](#source-27) | [ELLIS与MPI（1 篇）](#source-28) | [EleutherAI（1 篇）](#source-29) |
| [Gensyn（1 篇）](#source-30) | [Google（1 篇）](#source-31) | [LLNL（1 篇）](#source-32) |
| [MakerMaker AI（1 篇）](#source-33) | [Meta FAIR（1 篇）](#source-34) | [Microsoft（1 篇）](#source-35) |
| [NVIDIA（1 篇）](#source-36) | [OpenBMB（1 篇）](#source-37) | [RWKV团队（1 篇）](#source-38) |
| [SemiAnalysis（1 篇）](#source-39) | [Together AI（1 篇）](#source-40) | [University of Maryland（1 篇）](#source-41) |
| [Université de Montréal（1 篇）](#source-42) | [上海人工智能实验室（2 篇）](#source-43) | [作者团队待核验（18 篇）](#source-44) |
| [其他联合高校（1 篇）](#source-45) | [华南理工大学（1 篇）](#source-46) | [无问芯穹（1 篇）](#source-47) |
| [浙江大学（1 篇）](#source-48) | [浙江大学与之江实验室（1 篇）](#source-49) | [爱丁堡大学（1 篇）](#source-50) |
| [纽约大学（1 篇）](#source-51) | [花叔（1 篇）](#source-52) | [苏州大学（1 篇）](#source-53) |
| [首都师范大学（1 篇）](#source-54) | [香港中文大学（2 篇）](#source-55) | [香港科技大学广州（1 篇）](#source-56) |

### 研究方向直达目录

| 研究方向入口 | 篇数 |
|---|---:|
| [KV压缩与长上下文](#topic-0) | 16 |
| [MoE与路由](#topic-1) | 19 |
| [分词与层次建模](#topic-2) | 2 |
| [后训练配套](#topic-3) | 3 |
| [多Token预测与投机解码](#topic-4) | 5 |
| [多模态骨干](#topic-5) | 5 |
| [循环与自适应深度](#topic-6) | 4 |
| [扩散与非自回归建模](#topic-7) | 2 |
| [智能体与系统工程](#topic-8) | 21 |
| [残差连接与稳定性](#topic-9) | 7 |
| [稀疏与局部注意力](#topic-10) | 8 |
| [线性注意力与SSM](#topic-11) | 9 |
| [训练系统与可复现性](#topic-12) | 4 |
| [记忆与隐空间计算](#topic-13) | 7 |


<a id="by-time"></a>

## 1. 按时间检索

[返回总目录](#contents)

### 归档批次

| 归档月 | 篇数 | 入口 |
|---|---:|---|
| 202610 | 41 | [月索引](2026/202610/00-README.md) |
| 202609 | 19 | [月索引](2026/202609/00-README.md) |
| 202608 | 5 | [月索引](2026/202608/00-README.md) |
| 202607 | 1 | [月索引](2026/202607/00-README.md) |

### 发表时间总表

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09-23 | Hunyuan-A13B Technical Report | 腾讯 Hunyuan | MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2026-09-HunyuanA13B-%E4%BD%8E%E6%BF%80%E6%B4%BB%E5%8F%82%E6%95%B0MoE%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2026-09-HunyuanA13B-%E4%BD%8E%E6%BF%80%E6%B4%BB%E5%8F%82%E6%95%B0MoE%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-09-Wang-SMELT/README.md) · [总结](2026/202609/2026-09-Wang-SMELT/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | OPEN-1B: A Fully Auditable Training Run | Gensyn | 训练系统与可复现性 | 速览 / H | [导航](2026/202610/2026-09-OPEN-1B-%E5%BC%82%E6%9E%84%E7%A1%AC%E4%BB%B6%E4%B8%8A%E5%8F%AF%E5%AE%A1%E8%AE%A1%E7%9A%84%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2026-09-OPEN-1B-%E5%BC%82%E6%9E%84%E7%A1%AC%E4%BB%B6%E4%B8%8A%E5%8F%AF%E5%AE%A1%E8%AE%A1%E7%9A%84%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | Looped Transformers under the Jacobian Lens: Does the Global Workspace Survive Recurrence? | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-09-Wang-Jacobian%E5%85%A8%E5%B1%80%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4/README.md) · [总结](2026/202609/2026-09-Wang-Jacobian%E5%85%A8%E5%B1%80%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression | DeepSeek | 智能体与系统工程 | 精读中 / H | [导航](2026/202609/2026-09-DeepSeek-V4.1-Flash%E7%9A%84KV%E7%BC%93%E5%AD%98%E5%8E%8B%E7%BC%A9/README.md) · [总结](2026/202609/2026-09-DeepSeek-V4.1-Flash%E7%9A%84KV%E7%BC%93%E5%AD%98%E5%8E%8B%E7%BC%A9/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale | DeepSeek、清华大学 | 智能体与系统工程 | 已消化 / H | [导航](2026/202609/2026-09-DSec-%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%AD%E7%BB%83%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B2%99%E7%AE%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/README.md) · [总结](2026/202609/2026-09-DSec-%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%AD%E7%BB%83%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B2%99%E7%AE%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours | 清华大学、字节 Seed | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-AEGIS-%E5%A4%A7%E8%A7%84%E6%A8%A1LLM%E8%AE%AD%E7%BB%83%E7%9A%84%E5%9C%A8%E7%BA%BF%E9%9D%99%E9%BB%98%E6%95%B0%E6%8D%AE%E6%8D%9F%E5%9D%8F%E6%A3%80%E6%B5%8B/README.md) · [总结](2026/202608/2026-08-AEGIS-%E5%A4%A7%E8%A7%84%E6%A8%A1LLM%E8%AE%AD%E7%BB%83%E7%9A%84%E5%9C%A8%E7%BA%BF%E9%9D%99%E9%BB%98%E6%95%B0%E6%8D%AE%E6%8D%9F%E5%9D%8F%E6%A3%80%E6%B5%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-08-Shomali-LoopMTP/README.md) · [总结](2026/202609/2026-08-Shomali-LoopMTP/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | Dynamical phase selection controls compute scaling in looped transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-08-Kim-%E5%8A%A8%E5%8A%9B%E5%AD%A6%E7%9B%B8%E9%80%89%E6%8B%A9/README.md) · [总结](2026/202609/2026-08-Kim-%E5%8A%A8%E5%8A%9B%E5%AD%A6%E7%9B%B8%E9%80%89%E6%8B%A9/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | Claude Code 从入门到精通 v2.0.0 —— 面向工程师与产品经理的 AI 编程完全指南 | 花叔 | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-%E8%8A%B1%E5%8F%94-Claude-Code%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/README.md) · [总结](2026/202608/2026-08-%E8%8A%B1%E5%8F%94-Claude-Code%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | AgentX - InferenceXv3: Does CUDA Moat Hold up in Agentic Inferencing? | SemiAnalysis | KV压缩与长上下文 | 精读中 / H | [导航](2026/202608/2026-08-SemiAnalysis-AgentX%E6%99%BA%E8%83%BD%E4%BD%93%E6%8E%A8%E7%90%86%E5%9F%BA%E5%87%86%E4%B8%8ECUDA%E6%8A%A4%E5%9F%8E%E6%B2%B3/README.md) · [总结](2026/202608/2026-08-SemiAnalysis-AgentX%E6%99%BA%E8%83%BD%E4%BD%93%E6%8E%A8%E7%90%86%E5%9F%BA%E5%87%86%E4%B8%8ECUDA%E6%8A%A4%E5%9F%8E%E6%B2%B3/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | A Programming Paradigm for Spatiotemporal Composability | DeepSeek、北京大学 | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-Cordis-%E6%97%B6%E7%A9%BA%E5%8F%AF%E7%BB%84%E5%90%88%E6%80%A7%E7%9A%84%E5%8A%A8%E6%80%81%E7%BB%84%E5%90%88%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/README.md) · [总结](2026/202608/2026-08-Cordis-%E6%97%B6%E7%A9%BA%E5%8F%AF%E7%BB%84%E5%90%88%E6%80%A7%E7%9A%84%E5%8A%A8%E6%80%81%E7%BB%84%E5%90%88%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | When Does Recurrence Become an Algorithm? Convergence Selection in Weight-Tied Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Zhang-%E5%BE%AA%E7%8E%AF%E6%88%90%E4%B8%BA%E7%AE%97%E6%B3%95/README.md) · [总结](2026/202609/2026-07-Zhang-%E5%BE%AA%E7%8E%AF%E6%88%90%E4%B8%BA%E7%AE%97%E6%B3%95/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Looped Transformers with Source-Centered State Evolution | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Kim-%E6%BA%90%E4%B8%AD%E5%BF%83%E7%8A%B6%E6%80%81%E6%BC%94%E5%8C%96/README.md) · [总结](2026/202609/2026-07-Kim-%E6%BA%90%E4%B8%AD%E5%BF%83%E7%8A%B6%E6%80%81%E6%BC%94%E5%8C%96/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-ONeill-%E5%BE%AA%E7%8E%AF%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202609/2026-07-ONeill-%E5%BE%AA%E7%8E%AF%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | LayerNorm as Implicit Gain Control in Looped Transformers | 作者团队待核验 | 循环与自适应深度 | 速览 / H | [导航](2026/202609/2026-07-Buehlmaier-LayerNorm%E5%A2%9E%E7%9B%8A%E6%8E%A7%E5%88%B6/README.md) · [总结](2026/202609/2026-07-Buehlmaier-LayerNorm%E5%A2%9E%E7%9B%8A%E6%8E%A7%E5%88%B6/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Kimi K3: Open Frontier Intelligence (Technical Report of Kimi K3) | Moonshot Kimi | 多模态骨干、MoE与路由 | 已消化 / H | [导航](2026/202607/2026-07-KimiK3-%E9%9D%A2%E5%90%91%E5%BC%80%E6%94%BE%E5%89%8D%E6%B2%BF%E7%9A%84%E7%A8%80%E7%96%8F%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202607/2026-07-KimiK3-%E9%9D%A2%E5%90%91%E5%BC%80%E6%94%BE%E5%89%8D%E6%B2%BF%E7%9A%84%E7%A8%80%E7%96%8F%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | DeepLoop: Depth Scaling for Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Li-DeepLoop%E6%B7%B1%E5%BA%A6%E7%BC%A9%E6%94%BE/README.md) · [总结](2026/202609/2026-07-Li-DeepLoop%E6%B7%B1%E5%BA%A6%E7%BC%A9%E6%94%BE/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Adaptive Depth in Looped Transformers: Diagnosing Learned Halting Gates and Trajectory Readouts | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Popescu-%E5%BE%AA%E7%8E%AFTransformer%E8%87%AA%E9%80%82%E5%BA%94%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202609/2026-07-Popescu-%E5%BE%AA%E7%8E%AFTransformer%E8%87%AA%E9%80%82%E5%BA%94%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |
| 2026-06 | Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-06-Kuo-%E5%BE%AA%E7%8E%AFTransformer%E5%A4%96%E6%8E%A8%E7%A8%B3%E5%AE%9A%E6%80%A7/README.md) · [总结](2026/202609/2026-06-Kuo-%E5%BE%AA%E7%8E%AFTransformer%E5%A4%96%E6%8E%A8%E7%A8%B3%E5%AE%9A%E6%80%A7/%E6%80%BB%E7%BB%93.md) |
| 2026-06 | Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-06-Fan-%E6%BD%9C%E5%9C%A8%E4%B8%8E%E6%98%BE%E5%BC%8F%E6%8E%A8%E7%90%86%E6%A1%A5%E6%8E%A5/README.md) · [总结](2026/202609/2026-06-Fan-%E6%BD%9C%E5%9C%A8%E4%B8%8E%E6%98%BE%E5%BC%8F%E6%8E%A8%E7%90%86%E6%A1%A5%E6%8E%A5/%E6%80%BB%E7%BB%93.md) |
| 2026-04-29 | GLM-5V-Turbo: Toward a Native Foundation Model for Multimodal Agents | 智谱 GLM | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2026-04-GLM5VTurbo-%E5%8E%9F%E7%94%9F%E5%A4%9A%E6%A8%A1%E6%80%81%E6%99%BA%E8%83%BD%E4%BD%93%E5%9F%BA%E7%A1%80%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-04-GLM5VTurbo-%E5%8E%9F%E7%94%9F%E5%A4%9A%E6%A8%A1%E6%80%81%E6%99%BA%E8%83%BD%E4%BD%93%E5%9F%BA%E7%A1%80%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-04-26 | DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文、残差连接与稳定性、MoE与路由 | 速览 / A | [导航](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2026-04 | MiniCPM-o 4.5: Towards Real-Time Full-Duplex Omni-Modal Interaction | OpenBMB | 多模态骨干 | 已消化 / H | [导航](2026/202608/2026-04-MiniCPM-o4.5-%E5%AE%9E%E6%97%B6%E5%85%A8%E5%8F%8C%E5%B7%A5%E5%85%A8%E6%A8%A1%E6%80%81%E4%BA%A4%E4%BA%92/README.md) · [总结](2026/202608/2026-04-MiniCPM-o4.5-%E5%AE%9E%E6%97%B6%E5%85%A8%E5%8F%8C%E5%B7%A5%E5%85%A8%E6%A8%A1%E6%80%81%E4%BA%A4%E4%BA%92/%E6%80%BB%E7%BB%93.md) |
| 2026-03-16 | Mamba-3: Improved Sequence Modeling using State Space Principles | CMU、Princeton、Together AI、Cartesia | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-03-16 | Attention Residuals | Moonshot Kimi | 残差连接与稳定性 | 速览 / B | [导航](2026/202610/2026-03-AttnRes-%E8%B7%A8%E5%B1%82%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9B%BF%E4%BB%A3%E5%9B%BA%E5%AE%9A%E6%AE%8B%E5%B7%AE%E7%B4%AF%E5%8A%A0/README.md) · [总结](2026/202610/2026-03-AttnRes-%E8%B7%A8%E5%B1%82%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9B%BF%E4%BB%A3%E5%9B%BA%E5%AE%9A%E6%AE%8B%E5%B7%AE%E7%B4%AF%E5%8A%A0/%E6%80%BB%E7%BB%93.md) |
| 2026-02-17 | GLM-5: from Vibe Coding to Agentic Engineering | 智谱 GLM、清华大学 | MoE与路由、稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2026-02-02 | Kimi K2.5: Visual Agentic Intelligence | Moonshot Kimi | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2026-02-KimiK2.5-%E8%A7%86%E8%A7%89%E4%B8%8E%E8%AF%AD%E8%A8%80%E8%81%94%E5%90%88%E5%BB%BA%E6%A8%A1%E7%9A%84MoE%E6%BC%94%E8%BF%9B/README.md) · [总结](2026/202610/2026-02-KimiK2.5-%E8%A7%86%E8%A7%89%E4%B8%8E%E8%AF%AD%E8%A8%80%E8%81%94%E5%90%88%E5%BB%BA%E6%A8%A1%E7%9A%84MoE%E6%BC%94%E8%BF%9B/%E6%80%BB%E7%BB%93.md) |
| 2026-01-12 | Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models | DeepSeek、北京大学 | 记忆与隐空间计算、MoE与路由 | 速览 / B | [导航](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/README.md) · [总结](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/%E6%80%BB%E7%BB%93.md) |
| 2026-01-06 | MiMo-V2-Flash Technical Report | 小米 MiMo | 稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码、MoE与路由 | 速览 / A | [导航](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/README.md) · [总结](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/%E6%80%BB%E7%BB%93.md) |
| 2025-12-31 | mHC: Manifold-Constrained Hyper-Connections | DeepSeek | 残差连接与稳定性 | 速览 / B | [导航](2026/202610/2025-12-mHC-%E6%B5%81%E5%BD%A2%E7%BA%A6%E6%9D%9F%E7%9A%84%E5%A4%9A%E6%B5%81%E6%AE%8B%E5%B7%AE%E8%BF%9E%E6%8E%A5/README.md) · [总结](2026/202610/2025-12-mHC-%E6%B5%81%E5%BD%A2%E7%BA%A6%E6%9D%9F%E7%9A%84%E5%A4%9A%E6%B5%81%E6%AE%8B%E5%B7%AE%E8%BF%9E%E6%8E%A5/%E6%80%BB%E7%BB%93.md) |
| 2025-12-29 | End-to-End Test-Time Training for Long Context | Stanford、UC Berkeley、UC San Diego、NVIDIA、Astera Institute | 记忆与隐空间计算、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/README.md) · [总结](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/%E6%80%BB%E7%BB%93.md) |
| 2025-12-02 | DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models | DeepSeek | 稀疏与局部注意力、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-10-30 | Kimi Linear: An Expressive, Efficient Attention Architecture | Moonshot Kimi | 线性注意力与SSM、KV压缩与长上下文、MoE与路由 | 速览 / A | [导航](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-10 | RepDL: Bit-level Reproducible Deep Learning Training and Inference | Microsoft | 训练系统与可复现性 | 速览 / H | [导航](2026/202610/2025-10-RepDL-%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%8E%A8%E7%90%86%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E9%80%90%E4%BD%8D%E5%A4%8D%E7%8E%B0/README.md) · [总结](2026/202610/2025-10-RepDL-%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%8E%A8%E7%90%86%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E9%80%90%E4%BD%8D%E5%A4%8D%E7%8E%B0/%E6%80%BB%E7%BB%93.md) |
| 2025-09-30 | TASP: Topology-aware Sequence Parallelism | 上海交通大学、清华大学、首都师范大学、无问芯穹 | 训练系统与可复现性、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/README.md) · [总结](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/%E6%80%BB%E7%BB%93.md) |
| 2025-09 | Qwen3-Next-80B-A3B-Instruct | 阿里 Qwen | 线性注意力与SSM、MoE与路由、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-09 | A Formal Comparison Between Chain of Thought and Latent Thought | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2025-09-Xu-CoT%E4%B8%8E%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E6%AF%94%E8%BE%83/README.md) · [总结](2026/202609/2025-09-Xu-CoT%E4%B8%8E%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E6%AF%94%E8%BE%83/%E6%80%BB%E7%BB%93.md) |
| 2025-08-08 | GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models | 智谱 GLM、清华大学 | MoE与路由、多Token预测与投机解码、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-07-28 | Kimi K2: Open Agentic Intelligence | Moonshot Kimi | MoE与路由、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-07-KimiK2-%E4%B8%87%E4%BA%BF%E5%8F%82%E6%95%B0MoE%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%A8%B3%E5%AE%9A%E5%8C%96/README.md) · [总结](2026/202610/2025-07-KimiK2-%E4%B8%87%E4%BA%BF%E5%8F%82%E6%95%B0MoE%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%A8%B3%E5%AE%9A%E5%8C%96/%E6%80%BB%E7%BB%93.md) |
| 2025-07-14 | Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation | KAIST、Mila、Google | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |
| 2025-07-10 | Dynamic Chunking for End-to-End Hierarchical Sequence Modeling | CMU、Cartesia | 分词与层次建模 | 速览 / B | [导航](2026/202610/2025-07-HNet-%E5%8A%A8%E6%80%81%E5%88%86%E5%9D%97%E7%9A%84%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%B1%82%E6%AC%A1%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-07-HNet-%E5%8A%A8%E6%80%81%E5%88%86%E5%9D%97%E7%9A%84%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%B1%82%E6%AC%A1%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-06-16 | MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention | MiniMax | 线性注意力与SSM、KV压缩与长上下文、后训练配套 | 速览 / A | [导航](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-05-21 | Hunyuan-TurboS: Advancing Large Language Models through Mamba-Transformer Synergy and Adaptive Chain-of-Thought | 腾讯 Hunyuan | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-05-14 | Qwen3 Technical Report | 阿里 Qwen | MoE与路由、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-05-Qwen3-%E7%A8%A0%E5%AF%86%E4%B8%8E%E7%BB%86%E7%B2%92%E5%BA%A6MoE%E6%9E%B6%E6%9E%84%E5%9F%BA%E7%BA%BF/README.md) · [总结](2026/202610/2025-05-Qwen3-%E7%A8%A0%E5%AF%86%E4%B8%8E%E7%BB%86%E7%B2%92%E5%BA%A6MoE%E6%9E%B6%E6%9E%84%E5%9F%BA%E7%BA%BF/%E6%80%BB%E7%BB%93.md) |
| 2025-05-12 | MiMo: Unlocking the Reasoning Potential of Language Model -- From Pretraining to Posttraining | 小米 MiMo | 多Token预测与投机解码、后训练配套 | 速览 / A | [导航](2026/202610/2025-05-MiMo-%E5%A4%9AToken%E9%A2%84%E6%B5%8B%E8%BE%85%E5%8A%A9%E7%9A%84%E5%B0%8F%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-MiMo-%E5%A4%9AToken%E9%A2%84%E6%B5%8B%E8%BE%85%E5%8A%A9%E7%9A%84%E5%B0%8F%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-05-11 | Seed1.5-VL Technical Report | 字节 Seed | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2025-05-Seed1.5VL-%E9%AB%98%E6%95%88%E8%A7%86%E8%A7%89%E7%BC%96%E7%A0%81%E4%B8%8E%E7%A8%80%E7%96%8F%E8%AF%AD%E8%A8%80%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-Seed1.5VL-%E9%AB%98%E6%95%88%E8%A7%86%E8%A7%89%E7%BC%96%E7%A0%81%E4%B8%8E%E7%A8%80%E7%96%8F%E8%AF%AD%E8%A8%80%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-05-10 | Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free | 阿里 Qwen、爱丁堡大学、Stanford、MIT、清华大学 | 残差连接与稳定性、稀疏与局部注意力 | 速览 / B | [导航](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/README.md) · [总结](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-04-10 | Seed1.5-Thinking: Advancing Superb Reasoning Models with Reinforcement Learning | 字节 Seed | MoE与路由、后训练配套 | 速览 / A | [导航](2026/202610/2025-04-Seed1.5Thinking-%E7%A8%80%E7%96%8F%E9%AA%A8%E5%B9%B2%E4%B8%8E%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8E%A8%E7%90%86%E8%AE%AD%E7%BB%83%E9%85%8D%E5%A5%97/README.md) · [总结](2026/202610/2025-04-Seed1.5Thinking-%E7%A8%80%E7%96%8F%E9%AA%A8%E5%B9%B2%E4%B8%8E%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8E%A8%E7%90%86%E8%AE%AD%E7%BB%83%E9%85%8D%E5%A5%97/%E6%80%BB%E7%BB%93.md) |
| 2025-03-18 | RWKV-7 "Goose" with Expressive Dynamic State Evolution | RWKV团队、EleutherAI、清华大学、纽约大学、浙江大学、其他联合高校 | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-03-12 | Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models | Cornell、Stanford、Cohere | 扩散与非自回归建模、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/README.md) · [总结](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/%E6%80%BB%E7%BB%93.md) |
| 2025-03-07 | Linear-MoE: Linear Sequence Modeling Meets Mixture-of-Experts | 上海人工智能实验室、华南理工大学、苏州大学、香港中文大学 | 线性注意力与SSM、MoE与路由、训练系统与可复现性 | 速览 / B | [导航](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/README.md) · [总结](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/%E6%80%BB%E7%BB%93.md) |
| 2025-03-03 | Forgetting Transformer: Softmax Attention with a Forget Gate | Mila、Université de Montréal、MakerMaker AI | 稀疏与局部注意力、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-19 | MoM: Linear Sequence Modeling with Mixture-of-Memories | 清华大学、复旦大学、上海人工智能实验室、香港科技大学广州、香港中文大学 | 线性注意力与SSM、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-18 | MoBA: Mixture of Block Attention for Long-Context LLMs | Moonshot Kimi、清华大学、浙江大学与之江实验室 | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-16 | Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-NSA-%E5%8E%9F%E7%94%9F%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E7%A1%AC%E4%BB%B6%E5%8F%8B%E5%A5%BD%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-NSA-%E5%8E%9F%E7%94%9F%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E7%A1%AC%E4%BB%B6%E5%8F%8B%E5%A5%BD%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-14 | Large Language Diffusion Models | 中国人民大学、蚂蚁集团 | 扩散与非自回归建模 | 速览 / B | [导航](2026/202610/2025-02-LLaDA-%E6%8E%A9%E7%A0%81%E6%89%A9%E6%95%A3%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-02-LLaDA-%E6%8E%A9%E7%A0%81%E6%89%A9%E6%95%A3%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-02-12 | LLM Pretraining with Continuous Concepts | Meta FAIR、KAIST、UC San Diego | 记忆与隐空间计算、分词与层次建模 | 速览 / B | [导航](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |
| 2025-02-11 | TransMLA: Multi-Head Latent Attention Is All You Need | 北京大学、BIGAI、腾讯优图、小米 MiMo | KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/README.md) · [总结](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/%E6%80%BB%E7%BB%93.md) |
| 2025-02-07 | Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach | University of Maryland、ELLIS与MPI、LLNL | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |
| 2025-02 | Verde: Verification via Refereed Delegation for Machine Learning Programs | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202610/2025-02-Verde-%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%A7%94%E6%89%98%E8%AE%A1%E7%AE%97%E9%AA%8C%E8%AF%81%E4%B8%8E%E8%B7%A8%E7%A1%AC%E4%BB%B6%E5%8F%AF%E5%A4%8D%E7%8E%B0%E7%AE%97%E5%AD%90/README.md) · [总结](2026/202610/2025-02-Verde-%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%A7%94%E6%89%98%E8%AE%A1%E7%AE%97%E9%AA%8C%E8%AF%81%E4%B8%8E%E8%B7%A8%E7%A1%AC%E4%BB%B6%E5%8F%AF%E5%A4%8D%E7%8E%B0%E7%AE%97%E5%AD%90/%E6%80%BB%E7%BB%93.md) |
| 2025-02 | Reasoning with Latent Thoughts: On the Power of Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2025-02-Saunshi-%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E4%B8%8E%E5%BE%AA%E7%8E%AFTransformer/README.md) · [总结](2026/202609/2025-02-Saunshi-%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E4%B8%8E%E5%BE%AA%E7%8E%AFTransformer/%E6%80%BB%E7%BB%93.md) |
| 2025-01-14 | MiniMax-01: Scaling Foundation Models with Lightning Attention | MiniMax | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/README.md) · [总结](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/%E6%80%BB%E7%BB%93.md) |
| 2025-01 | Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 精读中 / H | [导航](2026/202609/2025-01-Huang-%E8%B6%85%E5%9B%BE%E7%AE%97%E6%B3%95%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202609/2025-01-Huang-%E8%B6%85%E5%9B%BE%E7%AE%97%E6%B3%95%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |
| 2024-10 | On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2024-10-Xu-%E5%BE%AA%E7%8E%AFTransformer%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B/README.md) · [总结](2026/202609/2024-10-Xu-%E5%BE%AA%E7%8E%AFTransformer%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2023-01 | Looped Transformers as Programmable Computers | 作者团队待核验 | 循环与自适应深度 | 速览 / H | [导航](2026/202609/2023-01-Giannou-%E5%8F%AF%E7%BC%96%E7%A8%8B%E5%BE%AA%E7%8E%AFTransformer/README.md) · [总结](2026/202609/2023-01-Giannou-%E5%8F%AF%E7%BC%96%E7%A8%8B%E5%BE%AA%E7%8E%AFTransformer/%E6%80%BB%E7%BB%93.md) |

<a id="by-source"></a>

## 2. 按厂家与实验室检索

[返回总目录](#contents)

### 来源目录

**第一梯队厂商**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [DeepSeek（8 篇）](#source-0) | [智谱 GLM（3 篇）](#source-1) | [Moonshot Kimi（6 篇）](#source-2) |

**第二梯队厂商**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [阿里 Qwen（3 篇）](#source-3) | [MiniMax（2 篇）](#source-4) | [腾讯 Hunyuan（2 篇）](#source-5) |
| [腾讯优图（1 篇）](#source-21) | [字节 Seed（3 篇）](#source-6) | [小米 MiMo（3 篇）](#source-7) |
| [蚂蚁集团（1 篇）](#source-22) |  |  |

**重点高校**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [清华大学（9 篇）](#source-8) | [北京大学（3 篇）](#source-9) | [复旦大学（1 篇）](#source-10) |
| [上海交通大学（1 篇）](#source-11) | [Stanford（3 篇）](#source-12) | [MIT（1 篇）](#source-13) |
| [UC Berkeley（1 篇）](#source-14) | [CMU（2 篇）](#source-15) | [Princeton（1 篇）](#source-16) |
| [Cornell（1 篇）](#source-23) |  |  |

**其他高校与实验室**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [中国人民大学（1 篇）](#source-17) | [KAIST（2 篇）](#source-18) | [Mila（2 篇）](#source-19) |
| [UC San Diego（2 篇）](#source-20) |  |  |

**其他合作机构与历史来源**

| 来源入口 | 来源入口 | 来源入口 |
|---|---|---|
| [Astera Institute（1 篇）](#source-24) | [BIGAI（1 篇）](#source-25) | [Cartesia（2 篇）](#source-26) |
| [Cohere（1 篇）](#source-27) | [ELLIS与MPI（1 篇）](#source-28) | [EleutherAI（1 篇）](#source-29) |
| [Gensyn（1 篇）](#source-30) | [Google（1 篇）](#source-31) | [LLNL（1 篇）](#source-32) |
| [MakerMaker AI（1 篇）](#source-33) | [Meta FAIR（1 篇）](#source-34) | [Microsoft（1 篇）](#source-35) |
| [NVIDIA（1 篇）](#source-36) | [OpenBMB（1 篇）](#source-37) | [RWKV团队（1 篇）](#source-38) |
| [SemiAnalysis（1 篇）](#source-39) | [Together AI（1 篇）](#source-40) | [University of Maryland（1 篇）](#source-41) |
| [Université de Montréal（1 篇）](#source-42) | [上海人工智能实验室（2 篇）](#source-43) | [作者团队待核验（18 篇）](#source-44) |
| [其他联合高校（1 篇）](#source-45) | [华南理工大学（1 篇）](#source-46) | [无问芯穹（1 篇）](#source-47) |
| [浙江大学（1 篇）](#source-48) | [浙江大学与之江实验室（1 篇）](#source-49) | [爱丁堡大学（1 篇）](#source-50) |
| [纽约大学（1 篇）](#source-51) | [花叔（1 篇）](#source-52) | [苏州大学（1 篇）](#source-53) |
| [首都师范大学（1 篇）](#source-54) | [香港中文大学（2 篇）](#source-55) | [香港科技大学广州（1 篇）](#source-56) |


合作工作会出现在多个来源表；计数不可相加作为独立论文数。未核实机构的历史工作使用“作者团队待核验”，不根据姓名猜测学校。

<a id="source-0"></a>

### DeepSeek

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09 | DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression | DeepSeek | 智能体与系统工程 | 精读中 / H | [导航](2026/202609/2026-09-DeepSeek-V4.1-Flash%E7%9A%84KV%E7%BC%93%E5%AD%98%E5%8E%8B%E7%BC%A9/README.md) · [总结](2026/202609/2026-09-DeepSeek-V4.1-Flash%E7%9A%84KV%E7%BC%93%E5%AD%98%E5%8E%8B%E7%BC%A9/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale | DeepSeek、清华大学 | 智能体与系统工程 | 已消化 / H | [导航](2026/202609/2026-09-DSec-%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%AD%E7%BB%83%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B2%99%E7%AE%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/README.md) · [总结](2026/202609/2026-09-DSec-%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%AD%E7%BB%83%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B2%99%E7%AE%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | A Programming Paradigm for Spatiotemporal Composability | DeepSeek、北京大学 | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-Cordis-%E6%97%B6%E7%A9%BA%E5%8F%AF%E7%BB%84%E5%90%88%E6%80%A7%E7%9A%84%E5%8A%A8%E6%80%81%E7%BB%84%E5%90%88%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/README.md) · [总结](2026/202608/2026-08-Cordis-%E6%97%B6%E7%A9%BA%E5%8F%AF%E7%BB%84%E5%90%88%E6%80%A7%E7%9A%84%E5%8A%A8%E6%80%81%E7%BB%84%E5%90%88%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/%E6%80%BB%E7%BB%93.md) |
| 2026-04-26 | DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文、残差连接与稳定性、MoE与路由 | 速览 / A | [导航](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2026-01-12 | Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models | DeepSeek、北京大学 | 记忆与隐空间计算、MoE与路由 | 速览 / B | [导航](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/README.md) · [总结](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/%E6%80%BB%E7%BB%93.md) |
| 2025-12-31 | mHC: Manifold-Constrained Hyper-Connections | DeepSeek | 残差连接与稳定性 | 速览 / B | [导航](2026/202610/2025-12-mHC-%E6%B5%81%E5%BD%A2%E7%BA%A6%E6%9D%9F%E7%9A%84%E5%A4%9A%E6%B5%81%E6%AE%8B%E5%B7%AE%E8%BF%9E%E6%8E%A5/README.md) · [总结](2026/202610/2025-12-mHC-%E6%B5%81%E5%BD%A2%E7%BA%A6%E6%9D%9F%E7%9A%84%E5%A4%9A%E6%B5%81%E6%AE%8B%E5%B7%AE%E8%BF%9E%E6%8E%A5/%E6%80%BB%E7%BB%93.md) |
| 2025-12-02 | DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models | DeepSeek | 稀疏与局部注意力、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-02-16 | Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-NSA-%E5%8E%9F%E7%94%9F%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E7%A1%AC%E4%BB%B6%E5%8F%8B%E5%A5%BD%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-NSA-%E5%8E%9F%E7%94%9F%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E7%A1%AC%E4%BB%B6%E5%8F%8B%E5%A5%BD%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="source-1"></a>

### 智谱 GLM

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-04-29 | GLM-5V-Turbo: Toward a Native Foundation Model for Multimodal Agents | 智谱 GLM | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2026-04-GLM5VTurbo-%E5%8E%9F%E7%94%9F%E5%A4%9A%E6%A8%A1%E6%80%81%E6%99%BA%E8%83%BD%E4%BD%93%E5%9F%BA%E7%A1%80%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-04-GLM5VTurbo-%E5%8E%9F%E7%94%9F%E5%A4%9A%E6%A8%A1%E6%80%81%E6%99%BA%E8%83%BD%E4%BD%93%E5%9F%BA%E7%A1%80%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-02-17 | GLM-5: from Vibe Coding to Agentic Engineering | 智谱 GLM、清华大学 | MoE与路由、稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-08-08 | GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models | 智谱 GLM、清华大学 | MoE与路由、多Token预测与投机解码、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |

<a id="source-2"></a>

### Moonshot Kimi

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-07 | Kimi K3: Open Frontier Intelligence (Technical Report of Kimi K3) | Moonshot Kimi | 多模态骨干、MoE与路由 | 已消化 / H | [导航](2026/202607/2026-07-KimiK3-%E9%9D%A2%E5%90%91%E5%BC%80%E6%94%BE%E5%89%8D%E6%B2%BF%E7%9A%84%E7%A8%80%E7%96%8F%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202607/2026-07-KimiK3-%E9%9D%A2%E5%90%91%E5%BC%80%E6%94%BE%E5%89%8D%E6%B2%BF%E7%9A%84%E7%A8%80%E7%96%8F%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-03-16 | Attention Residuals | Moonshot Kimi | 残差连接与稳定性 | 速览 / B | [导航](2026/202610/2026-03-AttnRes-%E8%B7%A8%E5%B1%82%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9B%BF%E4%BB%A3%E5%9B%BA%E5%AE%9A%E6%AE%8B%E5%B7%AE%E7%B4%AF%E5%8A%A0/README.md) · [总结](2026/202610/2026-03-AttnRes-%E8%B7%A8%E5%B1%82%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9B%BF%E4%BB%A3%E5%9B%BA%E5%AE%9A%E6%AE%8B%E5%B7%AE%E7%B4%AF%E5%8A%A0/%E6%80%BB%E7%BB%93.md) |
| 2026-02-02 | Kimi K2.5: Visual Agentic Intelligence | Moonshot Kimi | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2026-02-KimiK2.5-%E8%A7%86%E8%A7%89%E4%B8%8E%E8%AF%AD%E8%A8%80%E8%81%94%E5%90%88%E5%BB%BA%E6%A8%A1%E7%9A%84MoE%E6%BC%94%E8%BF%9B/README.md) · [总结](2026/202610/2026-02-KimiK2.5-%E8%A7%86%E8%A7%89%E4%B8%8E%E8%AF%AD%E8%A8%80%E8%81%94%E5%90%88%E5%BB%BA%E6%A8%A1%E7%9A%84MoE%E6%BC%94%E8%BF%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-10-30 | Kimi Linear: An Expressive, Efficient Attention Architecture | Moonshot Kimi | 线性注意力与SSM、KV压缩与长上下文、MoE与路由 | 速览 / A | [导航](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-07-28 | Kimi K2: Open Agentic Intelligence | Moonshot Kimi | MoE与路由、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-07-KimiK2-%E4%B8%87%E4%BA%BF%E5%8F%82%E6%95%B0MoE%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%A8%B3%E5%AE%9A%E5%8C%96/README.md) · [总结](2026/202610/2025-07-KimiK2-%E4%B8%87%E4%BA%BF%E5%8F%82%E6%95%B0MoE%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%A8%B3%E5%AE%9A%E5%8C%96/%E6%80%BB%E7%BB%93.md) |
| 2025-02-18 | MoBA: Mixture of Block Attention for Long-Context LLMs | Moonshot Kimi、清华大学、浙江大学与之江实验室 | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="source-3"></a>

### 阿里 Qwen

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-09 | Qwen3-Next-80B-A3B-Instruct | 阿里 Qwen | 线性注意力与SSM、MoE与路由、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-05-14 | Qwen3 Technical Report | 阿里 Qwen | MoE与路由、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-05-Qwen3-%E7%A8%A0%E5%AF%86%E4%B8%8E%E7%BB%86%E7%B2%92%E5%BA%A6MoE%E6%9E%B6%E6%9E%84%E5%9F%BA%E7%BA%BF/README.md) · [总结](2026/202610/2025-05-Qwen3-%E7%A8%A0%E5%AF%86%E4%B8%8E%E7%BB%86%E7%B2%92%E5%BA%A6MoE%E6%9E%B6%E6%9E%84%E5%9F%BA%E7%BA%BF/%E6%80%BB%E7%BB%93.md) |
| 2025-05-10 | Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free | 阿里 Qwen、爱丁堡大学、Stanford、MIT、清华大学 | 残差连接与稳定性、稀疏与局部注意力 | 速览 / B | [导航](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/README.md) · [总结](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/%E6%80%BB%E7%BB%93.md) |

<a id="source-4"></a>

### MiniMax

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-06-16 | MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention | MiniMax | 线性注意力与SSM、KV压缩与长上下文、后训练配套 | 速览 / A | [导航](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-01-14 | MiniMax-01: Scaling Foundation Models with Lightning Attention | MiniMax | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/README.md) · [总结](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/%E6%80%BB%E7%BB%93.md) |

<a id="source-5"></a>

### 腾讯 Hunyuan

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09-23 | Hunyuan-A13B Technical Report | 腾讯 Hunyuan | MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2026-09-HunyuanA13B-%E4%BD%8E%E6%BF%80%E6%B4%BB%E5%8F%82%E6%95%B0MoE%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2026-09-HunyuanA13B-%E4%BD%8E%E6%BF%80%E6%B4%BB%E5%8F%82%E6%95%B0MoE%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-05-21 | Hunyuan-TurboS: Advancing Large Language Models through Mamba-Transformer Synergy and Adaptive Chain-of-Thought | 腾讯 Hunyuan | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |

<a id="source-6"></a>

### 字节 Seed

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-08 | Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours | 清华大学、字节 Seed | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-AEGIS-%E5%A4%A7%E8%A7%84%E6%A8%A1LLM%E8%AE%AD%E7%BB%83%E7%9A%84%E5%9C%A8%E7%BA%BF%E9%9D%99%E9%BB%98%E6%95%B0%E6%8D%AE%E6%8D%9F%E5%9D%8F%E6%A3%80%E6%B5%8B/README.md) · [总结](2026/202608/2026-08-AEGIS-%E5%A4%A7%E8%A7%84%E6%A8%A1LLM%E8%AE%AD%E7%BB%83%E7%9A%84%E5%9C%A8%E7%BA%BF%E9%9D%99%E9%BB%98%E6%95%B0%E6%8D%AE%E6%8D%9F%E5%9D%8F%E6%A3%80%E6%B5%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-05-11 | Seed1.5-VL Technical Report | 字节 Seed | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2025-05-Seed1.5VL-%E9%AB%98%E6%95%88%E8%A7%86%E8%A7%89%E7%BC%96%E7%A0%81%E4%B8%8E%E7%A8%80%E7%96%8F%E8%AF%AD%E8%A8%80%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-Seed1.5VL-%E9%AB%98%E6%95%88%E8%A7%86%E8%A7%89%E7%BC%96%E7%A0%81%E4%B8%8E%E7%A8%80%E7%96%8F%E8%AF%AD%E8%A8%80%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-04-10 | Seed1.5-Thinking: Advancing Superb Reasoning Models with Reinforcement Learning | 字节 Seed | MoE与路由、后训练配套 | 速览 / A | [导航](2026/202610/2025-04-Seed1.5Thinking-%E7%A8%80%E7%96%8F%E9%AA%A8%E5%B9%B2%E4%B8%8E%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8E%A8%E7%90%86%E8%AE%AD%E7%BB%83%E9%85%8D%E5%A5%97/README.md) · [总结](2026/202610/2025-04-Seed1.5Thinking-%E7%A8%80%E7%96%8F%E9%AA%A8%E5%B9%B2%E4%B8%8E%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8E%A8%E7%90%86%E8%AE%AD%E7%BB%83%E9%85%8D%E5%A5%97/%E6%80%BB%E7%BB%93.md) |

<a id="source-7"></a>

### 小米 MiMo

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-01-06 | MiMo-V2-Flash Technical Report | 小米 MiMo | 稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码、MoE与路由 | 速览 / A | [导航](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/README.md) · [总结](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/%E6%80%BB%E7%BB%93.md) |
| 2025-05-12 | MiMo: Unlocking the Reasoning Potential of Language Model -- From Pretraining to Posttraining | 小米 MiMo | 多Token预测与投机解码、后训练配套 | 速览 / A | [导航](2026/202610/2025-05-MiMo-%E5%A4%9AToken%E9%A2%84%E6%B5%8B%E8%BE%85%E5%8A%A9%E7%9A%84%E5%B0%8F%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-MiMo-%E5%A4%9AToken%E9%A2%84%E6%B5%8B%E8%BE%85%E5%8A%A9%E7%9A%84%E5%B0%8F%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-02-11 | TransMLA: Multi-Head Latent Attention Is All You Need | 北京大学、BIGAI、腾讯优图、小米 MiMo | KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/README.md) · [总结](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/%E6%80%BB%E7%BB%93.md) |

<a id="source-8"></a>

### 清华大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09 | DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale | DeepSeek、清华大学 | 智能体与系统工程 | 已消化 / H | [导航](2026/202609/2026-09-DSec-%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%AD%E7%BB%83%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B2%99%E7%AE%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/README.md) · [总结](2026/202609/2026-09-DSec-%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%AD%E7%BB%83%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B2%99%E7%AE%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours | 清华大学、字节 Seed | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-AEGIS-%E5%A4%A7%E8%A7%84%E6%A8%A1LLM%E8%AE%AD%E7%BB%83%E7%9A%84%E5%9C%A8%E7%BA%BF%E9%9D%99%E9%BB%98%E6%95%B0%E6%8D%AE%E6%8D%9F%E5%9D%8F%E6%A3%80%E6%B5%8B/README.md) · [总结](2026/202608/2026-08-AEGIS-%E5%A4%A7%E8%A7%84%E6%A8%A1LLM%E8%AE%AD%E7%BB%83%E7%9A%84%E5%9C%A8%E7%BA%BF%E9%9D%99%E9%BB%98%E6%95%B0%E6%8D%AE%E6%8D%9F%E5%9D%8F%E6%A3%80%E6%B5%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-02-17 | GLM-5: from Vibe Coding to Agentic Engineering | 智谱 GLM、清华大学 | MoE与路由、稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-09-30 | TASP: Topology-aware Sequence Parallelism | 上海交通大学、清华大学、首都师范大学、无问芯穹 | 训练系统与可复现性、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/README.md) · [总结](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/%E6%80%BB%E7%BB%93.md) |
| 2025-08-08 | GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models | 智谱 GLM、清华大学 | MoE与路由、多Token预测与投机解码、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-05-10 | Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free | 阿里 Qwen、爱丁堡大学、Stanford、MIT、清华大学 | 残差连接与稳定性、稀疏与局部注意力 | 速览 / B | [导航](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/README.md) · [总结](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-03-18 | RWKV-7 "Goose" with Expressive Dynamic State Evolution | RWKV团队、EleutherAI、清华大学、纽约大学、浙江大学、其他联合高校 | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-19 | MoM: Linear Sequence Modeling with Mixture-of-Memories | 清华大学、复旦大学、上海人工智能实验室、香港科技大学广州、香港中文大学 | 线性注意力与SSM、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-18 | MoBA: Mixture of Block Attention for Long-Context LLMs | Moonshot Kimi、清华大学、浙江大学与之江实验室 | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="source-9"></a>

### 北京大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-08 | A Programming Paradigm for Spatiotemporal Composability | DeepSeek、北京大学 | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-Cordis-%E6%97%B6%E7%A9%BA%E5%8F%AF%E7%BB%84%E5%90%88%E6%80%A7%E7%9A%84%E5%8A%A8%E6%80%81%E7%BB%84%E5%90%88%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/README.md) · [总结](2026/202608/2026-08-Cordis-%E6%97%B6%E7%A9%BA%E5%8F%AF%E7%BB%84%E5%90%88%E6%80%A7%E7%9A%84%E5%8A%A8%E6%80%81%E7%BB%84%E5%90%88%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/%E6%80%BB%E7%BB%93.md) |
| 2026-01-12 | Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models | DeepSeek、北京大学 | 记忆与隐空间计算、MoE与路由 | 速览 / B | [导航](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/README.md) · [总结](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/%E6%80%BB%E7%BB%93.md) |
| 2025-02-11 | TransMLA: Multi-Head Latent Attention Is All You Need | 北京大学、BIGAI、腾讯优图、小米 MiMo | KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/README.md) · [总结](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/%E6%80%BB%E7%BB%93.md) |

<a id="source-10"></a>

### 复旦大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-19 | MoM: Linear Sequence Modeling with Mixture-of-Memories | 清华大学、复旦大学、上海人工智能实验室、香港科技大学广州、香港中文大学 | 线性注意力与SSM、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-11"></a>

### 上海交通大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-09-30 | TASP: Topology-aware Sequence Parallelism | 上海交通大学、清华大学、首都师范大学、无问芯穹 | 训练系统与可复现性、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/README.md) · [总结](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/%E6%80%BB%E7%BB%93.md) |

<a id="source-12"></a>

### Stanford

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-12-29 | End-to-End Test-Time Training for Long Context | Stanford、UC Berkeley、UC San Diego、NVIDIA、Astera Institute | 记忆与隐空间计算、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/README.md) · [总结](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/%E6%80%BB%E7%BB%93.md) |
| 2025-05-10 | Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free | 阿里 Qwen、爱丁堡大学、Stanford、MIT、清华大学 | 残差连接与稳定性、稀疏与局部注意力 | 速览 / B | [导航](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/README.md) · [总结](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-03-12 | Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models | Cornell、Stanford、Cohere | 扩散与非自回归建模、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/README.md) · [总结](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/%E6%80%BB%E7%BB%93.md) |

<a id="source-13"></a>

### MIT

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-05-10 | Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free | 阿里 Qwen、爱丁堡大学、Stanford、MIT、清华大学 | 残差连接与稳定性、稀疏与局部注意力 | 速览 / B | [导航](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/README.md) · [总结](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/%E6%80%BB%E7%BB%93.md) |

<a id="source-14"></a>

### UC Berkeley

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-12-29 | End-to-End Test-Time Training for Long Context | Stanford、UC Berkeley、UC San Diego、NVIDIA、Astera Institute | 记忆与隐空间计算、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/README.md) · [总结](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/%E6%80%BB%E7%BB%93.md) |

<a id="source-15"></a>

### CMU

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-03-16 | Mamba-3: Improved Sequence Modeling using State Space Principles | CMU、Princeton、Together AI、Cartesia | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-07-10 | Dynamic Chunking for End-to-End Hierarchical Sequence Modeling | CMU、Cartesia | 分词与层次建模 | 速览 / B | [导航](2026/202610/2025-07-HNet-%E5%8A%A8%E6%80%81%E5%88%86%E5%9D%97%E7%9A%84%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%B1%82%E6%AC%A1%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-07-HNet-%E5%8A%A8%E6%80%81%E5%88%86%E5%9D%97%E7%9A%84%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%B1%82%E6%AC%A1%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-16"></a>

### Princeton

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-03-16 | Mamba-3: Improved Sequence Modeling using State Space Principles | CMU、Princeton、Together AI、Cartesia | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-17"></a>

### 中国人民大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-14 | Large Language Diffusion Models | 中国人民大学、蚂蚁集团 | 扩散与非自回归建模 | 速览 / B | [导航](2026/202610/2025-02-LLaDA-%E6%8E%A9%E7%A0%81%E6%89%A9%E6%95%A3%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-02-LLaDA-%E6%8E%A9%E7%A0%81%E6%89%A9%E6%95%A3%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |

<a id="source-18"></a>

### KAIST

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-07-14 | Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation | KAIST、Mila、Google | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |
| 2025-02-12 | LLM Pretraining with Continuous Concepts | Meta FAIR、KAIST、UC San Diego | 记忆与隐空间计算、分词与层次建模 | 速览 / B | [导航](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |

<a id="source-19"></a>

### Mila

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-07-14 | Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation | KAIST、Mila、Google | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |
| 2025-03-03 | Forgetting Transformer: Softmax Attention with a Forget Gate | Mila、Université de Montréal、MakerMaker AI | 稀疏与局部注意力、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="source-20"></a>

### UC San Diego

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-12-29 | End-to-End Test-Time Training for Long Context | Stanford、UC Berkeley、UC San Diego、NVIDIA、Astera Institute | 记忆与隐空间计算、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/README.md) · [总结](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/%E6%80%BB%E7%BB%93.md) |
| 2025-02-12 | LLM Pretraining with Continuous Concepts | Meta FAIR、KAIST、UC San Diego | 记忆与隐空间计算、分词与层次建模 | 速览 / B | [导航](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |

<a id="source-21"></a>

### 腾讯优图

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-11 | TransMLA: Multi-Head Latent Attention Is All You Need | 北京大学、BIGAI、腾讯优图、小米 MiMo | KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/README.md) · [总结](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/%E6%80%BB%E7%BB%93.md) |

<a id="source-22"></a>

### 蚂蚁集团

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-14 | Large Language Diffusion Models | 中国人民大学、蚂蚁集团 | 扩散与非自回归建模 | 速览 / B | [导航](2026/202610/2025-02-LLaDA-%E6%8E%A9%E7%A0%81%E6%89%A9%E6%95%A3%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-02-LLaDA-%E6%8E%A9%E7%A0%81%E6%89%A9%E6%95%A3%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |

<a id="source-23"></a>

### Cornell

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-12 | Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models | Cornell、Stanford、Cohere | 扩散与非自回归建模、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/README.md) · [总结](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/%E6%80%BB%E7%BB%93.md) |

<a id="source-24"></a>

### Astera Institute

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-12-29 | End-to-End Test-Time Training for Long Context | Stanford、UC Berkeley、UC San Diego、NVIDIA、Astera Institute | 记忆与隐空间计算、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/README.md) · [总结](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/%E6%80%BB%E7%BB%93.md) |

<a id="source-25"></a>

### BIGAI

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-11 | TransMLA: Multi-Head Latent Attention Is All You Need | 北京大学、BIGAI、腾讯优图、小米 MiMo | KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/README.md) · [总结](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/%E6%80%BB%E7%BB%93.md) |

<a id="source-26"></a>

### Cartesia

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-03-16 | Mamba-3: Improved Sequence Modeling using State Space Principles | CMU、Princeton、Together AI、Cartesia | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-07-10 | Dynamic Chunking for End-to-End Hierarchical Sequence Modeling | CMU、Cartesia | 分词与层次建模 | 速览 / B | [导航](2026/202610/2025-07-HNet-%E5%8A%A8%E6%80%81%E5%88%86%E5%9D%97%E7%9A%84%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%B1%82%E6%AC%A1%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-07-HNet-%E5%8A%A8%E6%80%81%E5%88%86%E5%9D%97%E7%9A%84%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%B1%82%E6%AC%A1%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-27"></a>

### Cohere

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-12 | Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models | Cornell、Stanford、Cohere | 扩散与非自回归建模、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/README.md) · [总结](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/%E6%80%BB%E7%BB%93.md) |

<a id="source-28"></a>

### ELLIS与MPI

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-07 | Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach | University of Maryland、ELLIS与MPI、LLNL | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |

<a id="source-29"></a>

### EleutherAI

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-18 | RWKV-7 "Goose" with Expressive Dynamic State Evolution | RWKV团队、EleutherAI、清华大学、纽约大学、浙江大学、其他联合高校 | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-30"></a>

### Gensyn

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09 | OPEN-1B: A Fully Auditable Training Run | Gensyn | 训练系统与可复现性 | 速览 / H | [导航](2026/202610/2026-09-OPEN-1B-%E5%BC%82%E6%9E%84%E7%A1%AC%E4%BB%B6%E4%B8%8A%E5%8F%AF%E5%AE%A1%E8%AE%A1%E7%9A%84%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2026-09-OPEN-1B-%E5%BC%82%E6%9E%84%E7%A1%AC%E4%BB%B6%E4%B8%8A%E5%8F%AF%E5%AE%A1%E8%AE%A1%E7%9A%84%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |

<a id="source-31"></a>

### Google

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-07-14 | Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation | KAIST、Mila、Google | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |

<a id="source-32"></a>

### LLNL

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-07 | Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach | University of Maryland、ELLIS与MPI、LLNL | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |

<a id="source-33"></a>

### MakerMaker AI

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-03 | Forgetting Transformer: Softmax Attention with a Forget Gate | Mila、Université de Montréal、MakerMaker AI | 稀疏与局部注意力、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="source-34"></a>

### Meta FAIR

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-12 | LLM Pretraining with Continuous Concepts | Meta FAIR、KAIST、UC San Diego | 记忆与隐空间计算、分词与层次建模 | 速览 / B | [导航](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |

<a id="source-35"></a>

### Microsoft

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-10 | RepDL: Bit-level Reproducible Deep Learning Training and Inference | Microsoft | 训练系统与可复现性 | 速览 / H | [导航](2026/202610/2025-10-RepDL-%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%8E%A8%E7%90%86%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E9%80%90%E4%BD%8D%E5%A4%8D%E7%8E%B0/README.md) · [总结](2026/202610/2025-10-RepDL-%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%8E%A8%E7%90%86%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E9%80%90%E4%BD%8D%E5%A4%8D%E7%8E%B0/%E6%80%BB%E7%BB%93.md) |

<a id="source-36"></a>

### NVIDIA

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-12-29 | End-to-End Test-Time Training for Long Context | Stanford、UC Berkeley、UC San Diego、NVIDIA、Astera Institute | 记忆与隐空间计算、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/README.md) · [总结](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/%E6%80%BB%E7%BB%93.md) |

<a id="source-37"></a>

### OpenBMB

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-04 | MiniCPM-o 4.5: Towards Real-Time Full-Duplex Omni-Modal Interaction | OpenBMB | 多模态骨干 | 已消化 / H | [导航](2026/202608/2026-04-MiniCPM-o4.5-%E5%AE%9E%E6%97%B6%E5%85%A8%E5%8F%8C%E5%B7%A5%E5%85%A8%E6%A8%A1%E6%80%81%E4%BA%A4%E4%BA%92/README.md) · [总结](2026/202608/2026-04-MiniCPM-o4.5-%E5%AE%9E%E6%97%B6%E5%85%A8%E5%8F%8C%E5%B7%A5%E5%85%A8%E6%A8%A1%E6%80%81%E4%BA%A4%E4%BA%92/%E6%80%BB%E7%BB%93.md) |

<a id="source-38"></a>

### RWKV团队

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-18 | RWKV-7 "Goose" with Expressive Dynamic State Evolution | RWKV团队、EleutherAI、清华大学、纽约大学、浙江大学、其他联合高校 | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-39"></a>

### SemiAnalysis

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-08 | AgentX - InferenceXv3: Does CUDA Moat Hold up in Agentic Inferencing? | SemiAnalysis | KV压缩与长上下文 | 精读中 / H | [导航](2026/202608/2026-08-SemiAnalysis-AgentX%E6%99%BA%E8%83%BD%E4%BD%93%E6%8E%A8%E7%90%86%E5%9F%BA%E5%87%86%E4%B8%8ECUDA%E6%8A%A4%E5%9F%8E%E6%B2%B3/README.md) · [总结](2026/202608/2026-08-SemiAnalysis-AgentX%E6%99%BA%E8%83%BD%E4%BD%93%E6%8E%A8%E7%90%86%E5%9F%BA%E5%87%86%E4%B8%8ECUDA%E6%8A%A4%E5%9F%8E%E6%B2%B3/%E6%80%BB%E7%BB%93.md) |

<a id="source-40"></a>

### Together AI

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-03-16 | Mamba-3: Improved Sequence Modeling using State Space Principles | CMU、Princeton、Together AI、Cartesia | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-41"></a>

### University of Maryland

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-07 | Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach | University of Maryland、ELLIS与MPI、LLNL | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |

<a id="source-42"></a>

### Université de Montréal

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-03 | Forgetting Transformer: Softmax Attention with a Forget Gate | Mila、Université de Montréal、MakerMaker AI | 稀疏与局部注意力、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="source-43"></a>

### 上海人工智能实验室

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-07 | Linear-MoE: Linear Sequence Modeling Meets Mixture-of-Experts | 上海人工智能实验室、华南理工大学、苏州大学、香港中文大学 | 线性注意力与SSM、MoE与路由、训练系统与可复现性 | 速览 / B | [导航](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/README.md) · [总结](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/%E6%80%BB%E7%BB%93.md) |
| 2025-02-19 | MoM: Linear Sequence Modeling with Mixture-of-Memories | 清华大学、复旦大学、上海人工智能实验室、香港科技大学广州、香港中文大学 | 线性注意力与SSM、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-44"></a>

### 作者团队待核验

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09 | SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-09-Wang-SMELT/README.md) · [总结](2026/202609/2026-09-Wang-SMELT/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | Looped Transformers under the Jacobian Lens: Does the Global Workspace Survive Recurrence? | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-09-Wang-Jacobian%E5%85%A8%E5%B1%80%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4/README.md) · [总结](2026/202609/2026-09-Wang-Jacobian%E5%85%A8%E5%B1%80%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-08-Shomali-LoopMTP/README.md) · [总结](2026/202609/2026-08-Shomali-LoopMTP/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | Dynamical phase selection controls compute scaling in looped transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-08-Kim-%E5%8A%A8%E5%8A%9B%E5%AD%A6%E7%9B%B8%E9%80%89%E6%8B%A9/README.md) · [总结](2026/202609/2026-08-Kim-%E5%8A%A8%E5%8A%9B%E5%AD%A6%E7%9B%B8%E9%80%89%E6%8B%A9/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | When Does Recurrence Become an Algorithm? Convergence Selection in Weight-Tied Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Zhang-%E5%BE%AA%E7%8E%AF%E6%88%90%E4%B8%BA%E7%AE%97%E6%B3%95/README.md) · [总结](2026/202609/2026-07-Zhang-%E5%BE%AA%E7%8E%AF%E6%88%90%E4%B8%BA%E7%AE%97%E6%B3%95/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Looped Transformers with Source-Centered State Evolution | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Kim-%E6%BA%90%E4%B8%AD%E5%BF%83%E7%8A%B6%E6%80%81%E6%BC%94%E5%8C%96/README.md) · [总结](2026/202609/2026-07-Kim-%E6%BA%90%E4%B8%AD%E5%BF%83%E7%8A%B6%E6%80%81%E6%BC%94%E5%8C%96/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-ONeill-%E5%BE%AA%E7%8E%AF%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202609/2026-07-ONeill-%E5%BE%AA%E7%8E%AF%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | LayerNorm as Implicit Gain Control in Looped Transformers | 作者团队待核验 | 循环与自适应深度 | 速览 / H | [导航](2026/202609/2026-07-Buehlmaier-LayerNorm%E5%A2%9E%E7%9B%8A%E6%8E%A7%E5%88%B6/README.md) · [总结](2026/202609/2026-07-Buehlmaier-LayerNorm%E5%A2%9E%E7%9B%8A%E6%8E%A7%E5%88%B6/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | DeepLoop: Depth Scaling for Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Li-DeepLoop%E6%B7%B1%E5%BA%A6%E7%BC%A9%E6%94%BE/README.md) · [总结](2026/202609/2026-07-Li-DeepLoop%E6%B7%B1%E5%BA%A6%E7%BC%A9%E6%94%BE/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Adaptive Depth in Looped Transformers: Diagnosing Learned Halting Gates and Trajectory Readouts | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Popescu-%E5%BE%AA%E7%8E%AFTransformer%E8%87%AA%E9%80%82%E5%BA%94%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202609/2026-07-Popescu-%E5%BE%AA%E7%8E%AFTransformer%E8%87%AA%E9%80%82%E5%BA%94%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |
| 2026-06 | Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-06-Kuo-%E5%BE%AA%E7%8E%AFTransformer%E5%A4%96%E6%8E%A8%E7%A8%B3%E5%AE%9A%E6%80%A7/README.md) · [总结](2026/202609/2026-06-Kuo-%E5%BE%AA%E7%8E%AFTransformer%E5%A4%96%E6%8E%A8%E7%A8%B3%E5%AE%9A%E6%80%A7/%E6%80%BB%E7%BB%93.md) |
| 2026-06 | Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-06-Fan-%E6%BD%9C%E5%9C%A8%E4%B8%8E%E6%98%BE%E5%BC%8F%E6%8E%A8%E7%90%86%E6%A1%A5%E6%8E%A5/README.md) · [总结](2026/202609/2026-06-Fan-%E6%BD%9C%E5%9C%A8%E4%B8%8E%E6%98%BE%E5%BC%8F%E6%8E%A8%E7%90%86%E6%A1%A5%E6%8E%A5/%E6%80%BB%E7%BB%93.md) |
| 2025-09 | A Formal Comparison Between Chain of Thought and Latent Thought | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2025-09-Xu-CoT%E4%B8%8E%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E6%AF%94%E8%BE%83/README.md) · [总结](2026/202609/2025-09-Xu-CoT%E4%B8%8E%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E6%AF%94%E8%BE%83/%E6%80%BB%E7%BB%93.md) |
| 2025-02 | Verde: Verification via Refereed Delegation for Machine Learning Programs | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202610/2025-02-Verde-%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%A7%94%E6%89%98%E8%AE%A1%E7%AE%97%E9%AA%8C%E8%AF%81%E4%B8%8E%E8%B7%A8%E7%A1%AC%E4%BB%B6%E5%8F%AF%E5%A4%8D%E7%8E%B0%E7%AE%97%E5%AD%90/README.md) · [总结](2026/202610/2025-02-Verde-%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%A7%94%E6%89%98%E8%AE%A1%E7%AE%97%E9%AA%8C%E8%AF%81%E4%B8%8E%E8%B7%A8%E7%A1%AC%E4%BB%B6%E5%8F%AF%E5%A4%8D%E7%8E%B0%E7%AE%97%E5%AD%90/%E6%80%BB%E7%BB%93.md) |
| 2025-02 | Reasoning with Latent Thoughts: On the Power of Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2025-02-Saunshi-%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E4%B8%8E%E5%BE%AA%E7%8E%AFTransformer/README.md) · [总结](2026/202609/2025-02-Saunshi-%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E4%B8%8E%E5%BE%AA%E7%8E%AFTransformer/%E6%80%BB%E7%BB%93.md) |
| 2025-01 | Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 精读中 / H | [导航](2026/202609/2025-01-Huang-%E8%B6%85%E5%9B%BE%E7%AE%97%E6%B3%95%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202609/2025-01-Huang-%E8%B6%85%E5%9B%BE%E7%AE%97%E6%B3%95%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |
| 2024-10 | On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2024-10-Xu-%E5%BE%AA%E7%8E%AFTransformer%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B/README.md) · [总结](2026/202609/2024-10-Xu-%E5%BE%AA%E7%8E%AFTransformer%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2023-01 | Looped Transformers as Programmable Computers | 作者团队待核验 | 循环与自适应深度 | 速览 / H | [导航](2026/202609/2023-01-Giannou-%E5%8F%AF%E7%BC%96%E7%A8%8B%E5%BE%AA%E7%8E%AFTransformer/README.md) · [总结](2026/202609/2023-01-Giannou-%E5%8F%AF%E7%BC%96%E7%A8%8B%E5%BE%AA%E7%8E%AFTransformer/%E6%80%BB%E7%BB%93.md) |

<a id="source-45"></a>

### 其他联合高校

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-18 | RWKV-7 "Goose" with Expressive Dynamic State Evolution | RWKV团队、EleutherAI、清华大学、纽约大学、浙江大学、其他联合高校 | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-46"></a>

### 华南理工大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-07 | Linear-MoE: Linear Sequence Modeling Meets Mixture-of-Experts | 上海人工智能实验室、华南理工大学、苏州大学、香港中文大学 | 线性注意力与SSM、MoE与路由、训练系统与可复现性 | 速览 / B | [导航](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/README.md) · [总结](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/%E6%80%BB%E7%BB%93.md) |

<a id="source-47"></a>

### 无问芯穹

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-09-30 | TASP: Topology-aware Sequence Parallelism | 上海交通大学、清华大学、首都师范大学、无问芯穹 | 训练系统与可复现性、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/README.md) · [总结](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/%E6%80%BB%E7%BB%93.md) |

<a id="source-48"></a>

### 浙江大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-18 | RWKV-7 "Goose" with Expressive Dynamic State Evolution | RWKV团队、EleutherAI、清华大学、纽约大学、浙江大学、其他联合高校 | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-49"></a>

### 浙江大学与之江实验室

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-18 | MoBA: Mixture of Block Attention for Long-Context LLMs | Moonshot Kimi、清华大学、浙江大学与之江实验室 | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="source-50"></a>

### 爱丁堡大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-05-10 | Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free | 阿里 Qwen、爱丁堡大学、Stanford、MIT、清华大学 | 残差连接与稳定性、稀疏与局部注意力 | 速览 / B | [导航](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/README.md) · [总结](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/%E6%80%BB%E7%BB%93.md) |

<a id="source-51"></a>

### 纽约大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-18 | RWKV-7 "Goose" with Expressive Dynamic State Evolution | RWKV团队、EleutherAI、清华大学、纽约大学、浙江大学、其他联合高校 | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-52"></a>

### 花叔

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-08 | Claude Code 从入门到精通 v2.0.0 —— 面向工程师与产品经理的 AI 编程完全指南 | 花叔 | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-%E8%8A%B1%E5%8F%94-Claude-Code%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/README.md) · [总结](2026/202608/2026-08-%E8%8A%B1%E5%8F%94-Claude-Code%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/%E6%80%BB%E7%BB%93.md) |

<a id="source-53"></a>

### 苏州大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-07 | Linear-MoE: Linear Sequence Modeling Meets Mixture-of-Experts | 上海人工智能实验室、华南理工大学、苏州大学、香港中文大学 | 线性注意力与SSM、MoE与路由、训练系统与可复现性 | 速览 / B | [导航](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/README.md) · [总结](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/%E6%80%BB%E7%BB%93.md) |

<a id="source-54"></a>

### 首都师范大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-09-30 | TASP: Topology-aware Sequence Parallelism | 上海交通大学、清华大学、首都师范大学、无问芯穹 | 训练系统与可复现性、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/README.md) · [总结](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/%E6%80%BB%E7%BB%93.md) |

<a id="source-55"></a>

### 香港中文大学

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-07 | Linear-MoE: Linear Sequence Modeling Meets Mixture-of-Experts | 上海人工智能实验室、华南理工大学、苏州大学、香港中文大学 | 线性注意力与SSM、MoE与路由、训练系统与可复现性 | 速览 / B | [导航](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/README.md) · [总结](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/%E6%80%BB%E7%BB%93.md) |
| 2025-02-19 | MoM: Linear Sequence Modeling with Mixture-of-Memories | 清华大学、复旦大学、上海人工智能实验室、香港科技大学广州、香港中文大学 | 线性注意力与SSM、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="source-56"></a>

### 香港科技大学广州

[返回来源目录](#by-source) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-02-19 | MoM: Linear Sequence Modeling with Mixture-of-Memories | 清华大学、复旦大学、上海人工智能实验室、香港科技大学广州、香港中文大学 | 线性注意力与SSM、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |

<a id="by-topic"></a>

## 3. 按主题与研究方向检索

[返回总目录](#contents)

### 主题目录

| 研究方向入口 | 篇数 |
|---|---:|
| [KV压缩与长上下文](#topic-0) | 16 |
| [MoE与路由](#topic-1) | 19 |
| [分词与层次建模](#topic-2) | 2 |
| [后训练配套](#topic-3) | 3 |
| [多Token预测与投机解码](#topic-4) | 5 |
| [多模态骨干](#topic-5) | 5 |
| [循环与自适应深度](#topic-6) | 4 |
| [扩散与非自回归建模](#topic-7) | 2 |
| [智能体与系统工程](#topic-8) | 21 |
| [残差连接与稳定性](#topic-9) | 7 |
| [稀疏与局部注意力](#topic-10) | 8 |
| [线性注意力与SSM](#topic-11) | 9 |
| [训练系统与可复现性](#topic-12) | 4 |
| [记忆与隐空间计算](#topic-13) | 7 |

<a id="topic-0"></a>

### KV压缩与长上下文

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09-23 | Hunyuan-A13B Technical Report | 腾讯 Hunyuan | MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2026-09-HunyuanA13B-%E4%BD%8E%E6%BF%80%E6%B4%BB%E5%8F%82%E6%95%B0MoE%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2026-09-HunyuanA13B-%E4%BD%8E%E6%BF%80%E6%B4%BB%E5%8F%82%E6%95%B0MoE%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | AgentX - InferenceXv3: Does CUDA Moat Hold up in Agentic Inferencing? | SemiAnalysis | KV压缩与长上下文 | 精读中 / H | [导航](2026/202608/2026-08-SemiAnalysis-AgentX%E6%99%BA%E8%83%BD%E4%BD%93%E6%8E%A8%E7%90%86%E5%9F%BA%E5%87%86%E4%B8%8ECUDA%E6%8A%A4%E5%9F%8E%E6%B2%B3/README.md) · [总结](2026/202608/2026-08-SemiAnalysis-AgentX%E6%99%BA%E8%83%BD%E4%BD%93%E6%8E%A8%E7%90%86%E5%9F%BA%E5%87%86%E4%B8%8ECUDA%E6%8A%A4%E5%9F%8E%E6%B2%B3/%E6%80%BB%E7%BB%93.md) |
| 2026-04-26 | DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文、残差连接与稳定性、MoE与路由 | 速览 / A | [导航](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2026-02-17 | GLM-5: from Vibe Coding to Agentic Engineering | 智谱 GLM、清华大学 | MoE与路由、稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2026-01-06 | MiMo-V2-Flash Technical Report | 小米 MiMo | 稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码、MoE与路由 | 速览 / A | [导航](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/README.md) · [总结](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/%E6%80%BB%E7%BB%93.md) |
| 2025-12-29 | End-to-End Test-Time Training for Long Context | Stanford、UC Berkeley、UC San Diego、NVIDIA、Astera Institute | 记忆与隐空间计算、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/README.md) · [总结](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/%E6%80%BB%E7%BB%93.md) |
| 2025-12-02 | DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models | DeepSeek | 稀疏与局部注意力、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-10-30 | Kimi Linear: An Expressive, Efficient Attention Architecture | Moonshot Kimi | 线性注意力与SSM、KV压缩与长上下文、MoE与路由 | 速览 / A | [导航](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-09-30 | TASP: Topology-aware Sequence Parallelism | 上海交通大学、清华大学、首都师范大学、无问芯穹 | 训练系统与可复现性、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/README.md) · [总结](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/%E6%80%BB%E7%BB%93.md) |
| 2025-06-16 | MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention | MiniMax | 线性注意力与SSM、KV压缩与长上下文、后训练配套 | 速览 / A | [导航](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-05-21 | Hunyuan-TurboS: Advancing Large Language Models through Mamba-Transformer Synergy and Adaptive Chain-of-Thought | 腾讯 Hunyuan | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-03-12 | Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models | Cornell、Stanford、Cohere | 扩散与非自回归建模、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/README.md) · [总结](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/%E6%80%BB%E7%BB%93.md) |
| 2025-02-18 | MoBA: Mixture of Block Attention for Long-Context LLMs | Moonshot Kimi、清华大学、浙江大学与之江实验室 | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-16 | Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-NSA-%E5%8E%9F%E7%94%9F%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E7%A1%AC%E4%BB%B6%E5%8F%8B%E5%A5%BD%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-NSA-%E5%8E%9F%E7%94%9F%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E7%A1%AC%E4%BB%B6%E5%8F%8B%E5%A5%BD%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-11 | TransMLA: Multi-Head Latent Attention Is All You Need | 北京大学、BIGAI、腾讯优图、小米 MiMo | KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/README.md) · [总结](2026/202610/2025-02-TransMLA-GQA%E5%88%B0%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%9A%84%E7%BB%93%E6%9E%84%E8%BF%81%E7%A7%BB/%E6%80%BB%E7%BB%93.md) |
| 2025-01-14 | MiniMax-01: Scaling Foundation Models with Lightning Attention | MiniMax | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/README.md) · [总结](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/%E6%80%BB%E7%BB%93.md) |

<a id="topic-1"></a>

### MoE与路由

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09-23 | Hunyuan-A13B Technical Report | 腾讯 Hunyuan | MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2026-09-HunyuanA13B-%E4%BD%8E%E6%BF%80%E6%B4%BB%E5%8F%82%E6%95%B0MoE%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2026-09-HunyuanA13B-%E4%BD%8E%E6%BF%80%E6%B4%BB%E5%8F%82%E6%95%B0MoE%E6%A8%A1%E5%9E%8B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Kimi K3: Open Frontier Intelligence (Technical Report of Kimi K3) | Moonshot Kimi | 多模态骨干、MoE与路由 | 已消化 / H | [导航](2026/202607/2026-07-KimiK3-%E9%9D%A2%E5%90%91%E5%BC%80%E6%94%BE%E5%89%8D%E6%B2%BF%E7%9A%84%E7%A8%80%E7%96%8F%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202607/2026-07-KimiK3-%E9%9D%A2%E5%90%91%E5%BC%80%E6%94%BE%E5%89%8D%E6%B2%BF%E7%9A%84%E7%A8%80%E7%96%8F%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-04-29 | GLM-5V-Turbo: Toward a Native Foundation Model for Multimodal Agents | 智谱 GLM | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2026-04-GLM5VTurbo-%E5%8E%9F%E7%94%9F%E5%A4%9A%E6%A8%A1%E6%80%81%E6%99%BA%E8%83%BD%E4%BD%93%E5%9F%BA%E7%A1%80%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-04-GLM5VTurbo-%E5%8E%9F%E7%94%9F%E5%A4%9A%E6%A8%A1%E6%80%81%E6%99%BA%E8%83%BD%E4%BD%93%E5%9F%BA%E7%A1%80%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-04-26 | DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文、残差连接与稳定性、MoE与路由 | 速览 / A | [导航](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2026-02-17 | GLM-5: from Vibe Coding to Agentic Engineering | 智谱 GLM、清华大学 | MoE与路由、稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2026-02-02 | Kimi K2.5: Visual Agentic Intelligence | Moonshot Kimi | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2026-02-KimiK2.5-%E8%A7%86%E8%A7%89%E4%B8%8E%E8%AF%AD%E8%A8%80%E8%81%94%E5%90%88%E5%BB%BA%E6%A8%A1%E7%9A%84MoE%E6%BC%94%E8%BF%9B/README.md) · [总结](2026/202610/2026-02-KimiK2.5-%E8%A7%86%E8%A7%89%E4%B8%8E%E8%AF%AD%E8%A8%80%E8%81%94%E5%90%88%E5%BB%BA%E6%A8%A1%E7%9A%84MoE%E6%BC%94%E8%BF%9B/%E6%80%BB%E7%BB%93.md) |
| 2026-01-12 | Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models | DeepSeek、北京大学 | 记忆与隐空间计算、MoE与路由 | 速览 / B | [导航](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/README.md) · [总结](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/%E6%80%BB%E7%BB%93.md) |
| 2026-01-06 | MiMo-V2-Flash Technical Report | 小米 MiMo | 稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码、MoE与路由 | 速览 / A | [导航](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/README.md) · [总结](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/%E6%80%BB%E7%BB%93.md) |
| 2025-12-02 | DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models | DeepSeek | 稀疏与局部注意力、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-10-30 | Kimi Linear: An Expressive, Efficient Attention Architecture | Moonshot Kimi | 线性注意力与SSM、KV压缩与长上下文、MoE与路由 | 速览 / A | [导航](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-09 | Qwen3-Next-80B-A3B-Instruct | 阿里 Qwen | 线性注意力与SSM、MoE与路由、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-08-08 | GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models | 智谱 GLM、清华大学 | MoE与路由、多Token预测与投机解码、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-07-28 | Kimi K2: Open Agentic Intelligence | Moonshot Kimi | MoE与路由、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-07-KimiK2-%E4%B8%87%E4%BA%BF%E5%8F%82%E6%95%B0MoE%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%A8%B3%E5%AE%9A%E5%8C%96/README.md) · [总结](2026/202610/2025-07-KimiK2-%E4%B8%87%E4%BA%BF%E5%8F%82%E6%95%B0MoE%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%A8%B3%E5%AE%9A%E5%8C%96/%E6%80%BB%E7%BB%93.md) |
| 2025-05-21 | Hunyuan-TurboS: Advancing Large Language Models through Mamba-Transformer Synergy and Adaptive Chain-of-Thought | 腾讯 Hunyuan | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-05-14 | Qwen3 Technical Report | 阿里 Qwen | MoE与路由、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-05-Qwen3-%E7%A8%A0%E5%AF%86%E4%B8%8E%E7%BB%86%E7%B2%92%E5%BA%A6MoE%E6%9E%B6%E6%9E%84%E5%9F%BA%E7%BA%BF/README.md) · [总结](2026/202610/2025-05-Qwen3-%E7%A8%A0%E5%AF%86%E4%B8%8E%E7%BB%86%E7%B2%92%E5%BA%A6MoE%E6%9E%B6%E6%9E%84%E5%9F%BA%E7%BA%BF/%E6%80%BB%E7%BB%93.md) |
| 2025-05-11 | Seed1.5-VL Technical Report | 字节 Seed | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2025-05-Seed1.5VL-%E9%AB%98%E6%95%88%E8%A7%86%E8%A7%89%E7%BC%96%E7%A0%81%E4%B8%8E%E7%A8%80%E7%96%8F%E8%AF%AD%E8%A8%80%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-Seed1.5VL-%E9%AB%98%E6%95%88%E8%A7%86%E8%A7%89%E7%BC%96%E7%A0%81%E4%B8%8E%E7%A8%80%E7%96%8F%E8%AF%AD%E8%A8%80%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-04-10 | Seed1.5-Thinking: Advancing Superb Reasoning Models with Reinforcement Learning | 字节 Seed | MoE与路由、后训练配套 | 速览 / A | [导航](2026/202610/2025-04-Seed1.5Thinking-%E7%A8%80%E7%96%8F%E9%AA%A8%E5%B9%B2%E4%B8%8E%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8E%A8%E7%90%86%E8%AE%AD%E7%BB%83%E9%85%8D%E5%A5%97/README.md) · [总结](2026/202610/2025-04-Seed1.5Thinking-%E7%A8%80%E7%96%8F%E9%AA%A8%E5%B9%B2%E4%B8%8E%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8E%A8%E7%90%86%E8%AE%AD%E7%BB%83%E9%85%8D%E5%A5%97/%E6%80%BB%E7%BB%93.md) |
| 2025-03-07 | Linear-MoE: Linear Sequence Modeling Meets Mixture-of-Experts | 上海人工智能实验室、华南理工大学、苏州大学、香港中文大学 | 线性注意力与SSM、MoE与路由、训练系统与可复现性 | 速览 / B | [导航](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/README.md) · [总结](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/%E6%80%BB%E7%BB%93.md) |
| 2025-01-14 | MiniMax-01: Scaling Foundation Models with Lightning Attention | MiniMax | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/README.md) · [总结](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/%E6%80%BB%E7%BB%93.md) |

<a id="topic-2"></a>

### 分词与层次建模

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-07-10 | Dynamic Chunking for End-to-End Hierarchical Sequence Modeling | CMU、Cartesia | 分词与层次建模 | 速览 / B | [导航](2026/202610/2025-07-HNet-%E5%8A%A8%E6%80%81%E5%88%86%E5%9D%97%E7%9A%84%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%B1%82%E6%AC%A1%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-07-HNet-%E5%8A%A8%E6%80%81%E5%88%86%E5%9D%97%E7%9A%84%E7%AB%AF%E5%88%B0%E7%AB%AF%E5%B1%82%E6%AC%A1%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-12 | LLM Pretraining with Continuous Concepts | Meta FAIR、KAIST、UC San Diego | 记忆与隐空间计算、分词与层次建模 | 速览 / B | [导航](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |

<a id="topic-3"></a>

### 后训练配套

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-06-16 | MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention | MiniMax | 线性注意力与SSM、KV压缩与长上下文、后训练配套 | 速览 / A | [导航](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-05-12 | MiMo: Unlocking the Reasoning Potential of Language Model -- From Pretraining to Posttraining | 小米 MiMo | 多Token预测与投机解码、后训练配套 | 速览 / A | [导航](2026/202610/2025-05-MiMo-%E5%A4%9AToken%E9%A2%84%E6%B5%8B%E8%BE%85%E5%8A%A9%E7%9A%84%E5%B0%8F%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-MiMo-%E5%A4%9AToken%E9%A2%84%E6%B5%8B%E8%BE%85%E5%8A%A9%E7%9A%84%E5%B0%8F%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-04-10 | Seed1.5-Thinking: Advancing Superb Reasoning Models with Reinforcement Learning | 字节 Seed | MoE与路由、后训练配套 | 速览 / A | [导航](2026/202610/2025-04-Seed1.5Thinking-%E7%A8%80%E7%96%8F%E9%AA%A8%E5%B9%B2%E4%B8%8E%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8E%A8%E7%90%86%E8%AE%AD%E7%BB%83%E9%85%8D%E5%A5%97/README.md) · [总结](2026/202610/2025-04-Seed1.5Thinking-%E7%A8%80%E7%96%8F%E9%AA%A8%E5%B9%B2%E4%B8%8E%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8E%A8%E7%90%86%E8%AE%AD%E7%BB%83%E9%85%8D%E5%A5%97/%E6%80%BB%E7%BB%93.md) |

<a id="topic-4"></a>

### 多Token预测与投机解码

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-02-17 | GLM-5: from Vibe Coding to Agentic Engineering | 智谱 GLM、清华大学 | MoE与路由、稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2026-01-06 | MiMo-V2-Flash Technical Report | 小米 MiMo | 稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码、MoE与路由 | 速览 / A | [导航](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/README.md) · [总结](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/%E6%80%BB%E7%BB%93.md) |
| 2025-09 | Qwen3-Next-80B-A3B-Instruct | 阿里 Qwen | 线性注意力与SSM、MoE与路由、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-08-08 | GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models | 智谱 GLM、清华大学 | MoE与路由、多Token预测与投机解码、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-05-12 | MiMo: Unlocking the Reasoning Potential of Language Model -- From Pretraining to Posttraining | 小米 MiMo | 多Token预测与投机解码、后训练配套 | 速览 / A | [导航](2026/202610/2025-05-MiMo-%E5%A4%9AToken%E9%A2%84%E6%B5%8B%E8%BE%85%E5%8A%A9%E7%9A%84%E5%B0%8F%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-MiMo-%E5%A4%9AToken%E9%A2%84%E6%B5%8B%E8%BE%85%E5%8A%A9%E7%9A%84%E5%B0%8F%E6%A8%A1%E5%9E%8B%E6%8E%A8%E7%90%86%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |

<a id="topic-5"></a>

### 多模态骨干

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-07 | Kimi K3: Open Frontier Intelligence (Technical Report of Kimi K3) | Moonshot Kimi | 多模态骨干、MoE与路由 | 已消化 / H | [导航](2026/202607/2026-07-KimiK3-%E9%9D%A2%E5%90%91%E5%BC%80%E6%94%BE%E5%89%8D%E6%B2%BF%E7%9A%84%E7%A8%80%E7%96%8F%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202607/2026-07-KimiK3-%E9%9D%A2%E5%90%91%E5%BC%80%E6%94%BE%E5%89%8D%E6%B2%BF%E7%9A%84%E7%A8%80%E7%96%8F%E5%A4%9A%E6%A8%A1%E6%80%81%E5%A4%A7%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-04-29 | GLM-5V-Turbo: Toward a Native Foundation Model for Multimodal Agents | 智谱 GLM | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2026-04-GLM5VTurbo-%E5%8E%9F%E7%94%9F%E5%A4%9A%E6%A8%A1%E6%80%81%E6%99%BA%E8%83%BD%E4%BD%93%E5%9F%BA%E7%A1%80%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-04-GLM5VTurbo-%E5%8E%9F%E7%94%9F%E5%A4%9A%E6%A8%A1%E6%80%81%E6%99%BA%E8%83%BD%E4%BD%93%E5%9F%BA%E7%A1%80%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-04 | MiniCPM-o 4.5: Towards Real-Time Full-Duplex Omni-Modal Interaction | OpenBMB | 多模态骨干 | 已消化 / H | [导航](2026/202608/2026-04-MiniCPM-o4.5-%E5%AE%9E%E6%97%B6%E5%85%A8%E5%8F%8C%E5%B7%A5%E5%85%A8%E6%A8%A1%E6%80%81%E4%BA%A4%E4%BA%92/README.md) · [总结](2026/202608/2026-04-MiniCPM-o4.5-%E5%AE%9E%E6%97%B6%E5%85%A8%E5%8F%8C%E5%B7%A5%E5%85%A8%E6%A8%A1%E6%80%81%E4%BA%A4%E4%BA%92/%E6%80%BB%E7%BB%93.md) |
| 2026-02-02 | Kimi K2.5: Visual Agentic Intelligence | Moonshot Kimi | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2026-02-KimiK2.5-%E8%A7%86%E8%A7%89%E4%B8%8E%E8%AF%AD%E8%A8%80%E8%81%94%E5%90%88%E5%BB%BA%E6%A8%A1%E7%9A%84MoE%E6%BC%94%E8%BF%9B/README.md) · [总结](2026/202610/2026-02-KimiK2.5-%E8%A7%86%E8%A7%89%E4%B8%8E%E8%AF%AD%E8%A8%80%E8%81%94%E5%90%88%E5%BB%BA%E6%A8%A1%E7%9A%84MoE%E6%BC%94%E8%BF%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-05-11 | Seed1.5-VL Technical Report | 字节 Seed | 多模态骨干、MoE与路由 | 速览 / A | [导航](2026/202610/2025-05-Seed1.5VL-%E9%AB%98%E6%95%88%E8%A7%86%E8%A7%89%E7%BC%96%E7%A0%81%E4%B8%8E%E7%A8%80%E7%96%8F%E8%AF%AD%E8%A8%80%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-Seed1.5VL-%E9%AB%98%E6%95%88%E8%A7%86%E8%A7%89%E7%BC%96%E7%A0%81%E4%B8%8E%E7%A8%80%E7%96%8F%E8%AF%AD%E8%A8%80%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |

<a id="topic-6"></a>

### 循环与自适应深度

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-07 | LayerNorm as Implicit Gain Control in Looped Transformers | 作者团队待核验 | 循环与自适应深度 | 速览 / H | [导航](2026/202609/2026-07-Buehlmaier-LayerNorm%E5%A2%9E%E7%9B%8A%E6%8E%A7%E5%88%B6/README.md) · [总结](2026/202609/2026-07-Buehlmaier-LayerNorm%E5%A2%9E%E7%9B%8A%E6%8E%A7%E5%88%B6/%E6%80%BB%E7%BB%93.md) |
| 2025-07-14 | Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation | KAIST、Mila、Google | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |
| 2025-02-07 | Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach | University of Maryland、ELLIS与MPI、LLNL | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |
| 2023-01 | Looped Transformers as Programmable Computers | 作者团队待核验 | 循环与自适应深度 | 速览 / H | [导航](2026/202609/2023-01-Giannou-%E5%8F%AF%E7%BC%96%E7%A8%8B%E5%BE%AA%E7%8E%AFTransformer/README.md) · [总结](2026/202609/2023-01-Giannou-%E5%8F%AF%E7%BC%96%E7%A8%8B%E5%BE%AA%E7%8E%AFTransformer/%E6%80%BB%E7%BB%93.md) |

<a id="topic-7"></a>

### 扩散与非自回归建模

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2025-03-12 | Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models | Cornell、Stanford、Cohere | 扩散与非自回归建模、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/README.md) · [总结](2026/202610/2025-03-BlockDiffusion-%E5%9D%97%E9%97%B4%E8%87%AA%E5%9B%9E%E5%BD%92%E4%B8%8E%E5%9D%97%E5%86%85%E6%89%A9%E6%95%A3%E7%94%9F%E6%88%90/%E6%80%BB%E7%BB%93.md) |
| 2025-02-14 | Large Language Diffusion Models | 中国人民大学、蚂蚁集团 | 扩散与非自回归建模 | 速览 / B | [导航](2026/202610/2025-02-LLaDA-%E6%8E%A9%E7%A0%81%E6%89%A9%E6%95%A3%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-02-LLaDA-%E6%8E%A9%E7%A0%81%E6%89%A9%E6%95%A3%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B%E7%9A%84%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |

<a id="topic-8"></a>

### 智能体与系统工程

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09 | SMELT: Scaling Laws for Compute-Matched MoE Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-09-Wang-SMELT/README.md) · [总结](2026/202609/2026-09-Wang-SMELT/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | Looped Transformers under the Jacobian Lens: Does the Global Workspace Survive Recurrence? | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-09-Wang-Jacobian%E5%85%A8%E5%B1%80%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4/README.md) · [总结](2026/202609/2026-09-Wang-Jacobian%E5%85%A8%E5%B1%80%E5%B7%A5%E4%BD%9C%E7%A9%BA%E9%97%B4/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | DeepSeek-V4.1-Flash: Pushing the Limits of KV Cache Compression | DeepSeek | 智能体与系统工程 | 精读中 / H | [导航](2026/202609/2026-09-DeepSeek-V4.1-Flash%E7%9A%84KV%E7%BC%93%E5%AD%98%E5%8E%8B%E7%BC%A9/README.md) · [总结](2026/202609/2026-09-DeepSeek-V4.1-Flash%E7%9A%84KV%E7%BC%93%E5%AD%98%E5%8E%8B%E7%BC%A9/%E6%80%BB%E7%BB%93.md) |
| 2026-09 | DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale | DeepSeek、清华大学 | 智能体与系统工程 | 已消化 / H | [导航](2026/202609/2026-09-DSec-%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%AD%E7%BB%83%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B2%99%E7%AE%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/README.md) · [总结](2026/202609/2026-09-DSec-%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%99%BA%E8%83%BD%E4%BD%93%E8%AE%AD%E7%BB%83%E7%9A%84%E5%BC%B9%E6%80%A7%E6%B2%99%E7%AE%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours | 清华大学、字节 Seed | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-AEGIS-%E5%A4%A7%E8%A7%84%E6%A8%A1LLM%E8%AE%AD%E7%BB%83%E7%9A%84%E5%9C%A8%E7%BA%BF%E9%9D%99%E9%BB%98%E6%95%B0%E6%8D%AE%E6%8D%9F%E5%9D%8F%E6%A3%80%E6%B5%8B/README.md) · [总结](2026/202608/2026-08-AEGIS-%E5%A4%A7%E8%A7%84%E6%A8%A1LLM%E8%AE%AD%E7%BB%83%E7%9A%84%E5%9C%A8%E7%BA%BF%E9%9D%99%E9%BB%98%E6%95%B0%E6%8D%AE%E6%8D%9F%E5%9D%8F%E6%A3%80%E6%B5%8B/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | LoopMTP: A Looped Transformer Guided by Latent Multi-Token Prediction | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-08-Shomali-LoopMTP/README.md) · [总结](2026/202609/2026-08-Shomali-LoopMTP/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | Dynamical phase selection controls compute scaling in looped transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-08-Kim-%E5%8A%A8%E5%8A%9B%E5%AD%A6%E7%9B%B8%E9%80%89%E6%8B%A9/README.md) · [总结](2026/202609/2026-08-Kim-%E5%8A%A8%E5%8A%9B%E5%AD%A6%E7%9B%B8%E9%80%89%E6%8B%A9/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | Claude Code 从入门到精通 v2.0.0 —— 面向工程师与产品经理的 AI 编程完全指南 | 花叔 | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-%E8%8A%B1%E5%8F%94-Claude-Code%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/README.md) · [总结](2026/202608/2026-08-%E8%8A%B1%E5%8F%94-Claude-Code%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E7%B2%BE%E9%80%9A/%E6%80%BB%E7%BB%93.md) |
| 2026-08 | A Programming Paradigm for Spatiotemporal Composability | DeepSeek、北京大学 | 智能体与系统工程 | 已消化 / H | [导航](2026/202608/2026-08-Cordis-%E6%97%B6%E7%A9%BA%E5%8F%AF%E7%BB%84%E5%90%88%E6%80%A7%E7%9A%84%E5%8A%A8%E6%80%81%E7%BB%84%E5%90%88%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/README.md) · [总结](2026/202608/2026-08-Cordis-%E6%97%B6%E7%A9%BA%E5%8F%AF%E7%BB%84%E5%90%88%E6%80%A7%E7%9A%84%E5%8A%A8%E6%80%81%E7%BB%84%E5%90%88%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | When Does Recurrence Become an Algorithm? Convergence Selection in Weight-Tied Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Zhang-%E5%BE%AA%E7%8E%AF%E6%88%90%E4%B8%BA%E7%AE%97%E6%B3%95/README.md) · [总结](2026/202609/2026-07-Zhang-%E5%BE%AA%E7%8E%AF%E6%88%90%E4%B8%BA%E7%AE%97%E6%B3%95/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Looped Transformers with Source-Centered State Evolution | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Kim-%E6%BA%90%E4%B8%AD%E5%BF%83%E7%8A%B6%E6%80%81%E6%BC%94%E5%8C%96/README.md) · [总结](2026/202609/2026-07-Kim-%E6%BA%90%E4%B8%AD%E5%BF%83%E7%8A%B6%E6%80%81%E6%BC%94%E5%8C%96/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Looped Latent Attention: Cross-Loop KV Compression for Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-ONeill-%E5%BE%AA%E7%8E%AF%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202609/2026-07-ONeill-%E5%BE%AA%E7%8E%AF%E6%BD%9C%E5%9C%A8%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | DeepLoop: Depth Scaling for Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Li-DeepLoop%E6%B7%B1%E5%BA%A6%E7%BC%A9%E6%94%BE/README.md) · [总结](2026/202609/2026-07-Li-DeepLoop%E6%B7%B1%E5%BA%A6%E7%BC%A9%E6%94%BE/%E6%80%BB%E7%BB%93.md) |
| 2026-07 | Adaptive Depth in Looped Transformers: Diagnosing Learned Halting Gates and Trajectory Readouts | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-07-Popescu-%E5%BE%AA%E7%8E%AFTransformer%E8%87%AA%E9%80%82%E5%BA%94%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202609/2026-07-Popescu-%E5%BE%AA%E7%8E%AFTransformer%E8%87%AA%E9%80%82%E5%BA%94%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |
| 2026-06 | Stabilizing Extrapolation in Looped Transformers via Learned Stochastic Stopping | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-06-Kuo-%E5%BE%AA%E7%8E%AFTransformer%E5%A4%96%E6%8E%A8%E7%A8%B3%E5%AE%9A%E6%80%A7/README.md) · [总结](2026/202609/2026-06-Kuo-%E5%BE%AA%E7%8E%AFTransformer%E5%A4%96%E6%8E%A8%E7%A8%B3%E5%AE%9A%E6%80%A7/%E6%80%BB%E7%BB%93.md) |
| 2026-06 | Bridging the Gap Between Latent and Explicit Reasoning with Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2026-06-Fan-%E6%BD%9C%E5%9C%A8%E4%B8%8E%E6%98%BE%E5%BC%8F%E6%8E%A8%E7%90%86%E6%A1%A5%E6%8E%A5/README.md) · [总结](2026/202609/2026-06-Fan-%E6%BD%9C%E5%9C%A8%E4%B8%8E%E6%98%BE%E5%BC%8F%E6%8E%A8%E7%90%86%E6%A1%A5%E6%8E%A5/%E6%80%BB%E7%BB%93.md) |
| 2025-09 | A Formal Comparison Between Chain of Thought and Latent Thought | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2025-09-Xu-CoT%E4%B8%8E%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E6%AF%94%E8%BE%83/README.md) · [总结](2026/202609/2025-09-Xu-CoT%E4%B8%8E%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E6%AF%94%E8%BE%83/%E6%80%BB%E7%BB%93.md) |
| 2025-02 | Verde: Verification via Refereed Delegation for Machine Learning Programs | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202610/2025-02-Verde-%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%A7%94%E6%89%98%E8%AE%A1%E7%AE%97%E9%AA%8C%E8%AF%81%E4%B8%8E%E8%B7%A8%E7%A1%AC%E4%BB%B6%E5%8F%AF%E5%A4%8D%E7%8E%B0%E7%AE%97%E5%AD%90/README.md) · [总结](2026/202610/2025-02-Verde-%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%A7%94%E6%89%98%E8%AE%A1%E7%AE%97%E9%AA%8C%E8%AF%81%E4%B8%8E%E8%B7%A8%E7%A1%AC%E4%BB%B6%E5%8F%AF%E5%A4%8D%E7%8E%B0%E7%AE%97%E5%AD%90/%E6%80%BB%E7%BB%93.md) |
| 2025-02 | Reasoning with Latent Thoughts: On the Power of Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2025-02-Saunshi-%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E4%B8%8E%E5%BE%AA%E7%8E%AFTransformer/README.md) · [总结](2026/202609/2025-02-Saunshi-%E6%BD%9C%E5%9C%A8%E6%80%9D%E7%BB%B4%E4%B8%8E%E5%BE%AA%E7%8E%AFTransformer/%E6%80%BB%E7%BB%93.md) |
| 2025-01 | Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers | 作者团队待核验 | 智能体与系统工程 | 精读中 / H | [导航](2026/202609/2025-01-Huang-%E8%B6%85%E5%9B%BE%E7%AE%97%E6%B3%95%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202609/2025-01-Huang-%E8%B6%85%E5%9B%BE%E7%AE%97%E6%B3%95%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |
| 2024-10 | On Expressive Power of Looped Transformers: Theoretical Analysis and Enhancement via Timestep Encoding | 作者团队待核验 | 智能体与系统工程 | 速览 / H | [导航](2026/202609/2024-10-Xu-%E5%BE%AA%E7%8E%AFTransformer%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B/README.md) · [总结](2026/202609/2024-10-Xu-%E5%BE%AA%E7%8E%AFTransformer%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="topic-9"></a>

### 残差连接与稳定性

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-04-26 | DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文、残差连接与稳定性、MoE与路由 | 速览 / A | [导航](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2026-03-16 | Attention Residuals | Moonshot Kimi | 残差连接与稳定性 | 速览 / B | [导航](2026/202610/2026-03-AttnRes-%E8%B7%A8%E5%B1%82%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9B%BF%E4%BB%A3%E5%9B%BA%E5%AE%9A%E6%AE%8B%E5%B7%AE%E7%B4%AF%E5%8A%A0/README.md) · [总结](2026/202610/2026-03-AttnRes-%E8%B7%A8%E5%B1%82%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9B%BF%E4%BB%A3%E5%9B%BA%E5%AE%9A%E6%AE%8B%E5%B7%AE%E7%B4%AF%E5%8A%A0/%E6%80%BB%E7%BB%93.md) |
| 2025-12-31 | mHC: Manifold-Constrained Hyper-Connections | DeepSeek | 残差连接与稳定性 | 速览 / B | [导航](2026/202610/2025-12-mHC-%E6%B5%81%E5%BD%A2%E7%BA%A6%E6%9D%9F%E7%9A%84%E5%A4%9A%E6%B5%81%E6%AE%8B%E5%B7%AE%E8%BF%9E%E6%8E%A5/README.md) · [总结](2026/202610/2025-12-mHC-%E6%B5%81%E5%BD%A2%E7%BA%A6%E6%9D%9F%E7%9A%84%E5%A4%9A%E6%B5%81%E6%AE%8B%E5%B7%AE%E8%BF%9E%E6%8E%A5/%E6%80%BB%E7%BB%93.md) |
| 2025-08-08 | GLM-4.5: Agentic, Reasoning, and Coding (ARC) Foundation Models | 智谱 GLM、清华大学 | MoE与路由、多Token预测与投机解码、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/README.md) · [总结](2026/202610/2025-08-GLM4.5-%E6%B7%B1%E8%80%8C%E7%AA%84MoE%E4%B8%8E%E5%A4%9A%E5%A4%B4%E6%B3%A8%E6%84%8F%E5%8A%9B%E8%AE%BE%E8%AE%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-07-28 | Kimi K2: Open Agentic Intelligence | Moonshot Kimi | MoE与路由、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-07-KimiK2-%E4%B8%87%E4%BA%BF%E5%8F%82%E6%95%B0MoE%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%A8%B3%E5%AE%9A%E5%8C%96/README.md) · [总结](2026/202610/2025-07-KimiK2-%E4%B8%87%E4%BA%BF%E5%8F%82%E6%95%B0MoE%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E7%A8%B3%E5%AE%9A%E5%8C%96/%E6%80%BB%E7%BB%93.md) |
| 2025-05-14 | Qwen3 Technical Report | 阿里 Qwen | MoE与路由、残差连接与稳定性 | 速览 / A | [导航](2026/202610/2025-05-Qwen3-%E7%A8%A0%E5%AF%86%E4%B8%8E%E7%BB%86%E7%B2%92%E5%BA%A6MoE%E6%9E%B6%E6%9E%84%E5%9F%BA%E7%BA%BF/README.md) · [总结](2026/202610/2025-05-Qwen3-%E7%A8%A0%E5%AF%86%E4%B8%8E%E7%BB%86%E7%B2%92%E5%BA%A6MoE%E6%9E%B6%E6%9E%84%E5%9F%BA%E7%BA%BF/%E6%80%BB%E7%BB%93.md) |
| 2025-05-10 | Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free | 阿里 Qwen、爱丁堡大学、Stanford、MIT、清华大学 | 残差连接与稳定性、稀疏与局部注意力 | 速览 / B | [导航](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/README.md) · [总结](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/%E6%80%BB%E7%BB%93.md) |

<a id="topic-10"></a>

### 稀疏与局部注意力

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-04-26 | DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文、残差连接与稳定性、MoE与路由 | 速览 / A | [导航](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2026-06-DeepSeekV4-%E5%8E%8B%E7%BC%A9%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E6%B5%81%E5%BD%A2%E6%AE%8B%E5%B7%AE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2026-02-17 | GLM-5: from Vibe Coding to Agentic Engineering | 智谱 GLM、清华大学 | MoE与路由、稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2026-02-GLM5-%E9%9D%A2%E5%90%91%E9%95%BF%E7%A8%8B%E4%BB%BB%E5%8A%A1%E7%9A%84%E7%A8%80%E7%96%8FMoE%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2026-01-06 | MiMo-V2-Flash Technical Report | 小米 MiMo | 稀疏与局部注意力、KV压缩与长上下文、多Token预测与投机解码、MoE与路由 | 速览 / A | [导航](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/README.md) · [总结](2026/202610/2026-01-MiMoV2Flash-%E5%B1%80%E9%83%A8%E5%85%A8%E5%B1%80%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E8%BD%BB%E9%87%8FMTP/%E6%80%BB%E7%BB%93.md) |
| 2025-12-02 | DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models | DeepSeek | 稀疏与局部注意力、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-12-DeepSeekV3.2-DSA%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B%E4%B8%8E%E5%BC%80%E6%94%BE%E6%A8%A1%E5%9E%8B%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-05-10 | Gated Attention for Large Language Models: Non-linearity, Sparsity, and Attention-Sink-Free | 阿里 Qwen、爱丁堡大学、Stanford、MIT、清华大学 | 残差连接与稳定性、稀疏与局部注意力 | 速览 / B | [导航](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/README.md) · [总结](2026/202610/2025-05-GatedAttention-%E8%BE%93%E5%87%BA%E9%97%A8%E6%8E%A7%E4%B8%8E%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%B1%87%E8%81%9A%E7%8E%B0%E8%B1%A1/%E6%80%BB%E7%BB%93.md) |
| 2025-03-03 | Forgetting Transformer: Softmax Attention with a Forget Gate | Mila、Université de Montréal、MakerMaker AI | 稀疏与局部注意力、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-18 | MoBA: Mixture of Block Attention for Long-Context LLMs | Moonshot Kimi、清华大学、浙江大学与之江实验室 | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-MoBA-%E5%9F%BA%E4%BA%8E%E5%9D%97%E8%B7%AF%E7%94%B1%E7%9A%84%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-16 | Native Sparse Attention: Hardware-Aligned and Natively Trainable Sparse Attention | DeepSeek | 稀疏与局部注意力、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-02-NSA-%E5%8E%9F%E7%94%9F%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E7%A1%AC%E4%BB%B6%E5%8F%8B%E5%A5%BD%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-02-NSA-%E5%8E%9F%E7%94%9F%E5%8F%AF%E8%AE%AD%E7%BB%83%E7%9A%84%E7%A1%AC%E4%BB%B6%E5%8F%8B%E5%A5%BD%E7%A8%80%E7%96%8F%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |

<a id="topic-11"></a>

### 线性注意力与SSM

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-03-16 | Mamba-3: Improved Sequence Modeling using State Space Principles | CMU、Princeton、Together AI、Cartesia | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2026-03-Mamba3-%E5%A4%8D%E6%95%B0%E7%8A%B6%E6%80%81%E4%B8%8EMIMO%E7%9A%84%E9%AB%98%E6%95%88%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-10-30 | Kimi Linear: An Expressive, Efficient Attention Architecture | Moonshot Kimi | 线性注意力与SSM、KV压缩与长上下文、MoE与路由 | 速览 / A | [导航](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-10-KimiLinear-KDA%E4%B8%8EMLA%E7%9A%84%E6%B7%B7%E5%90%88%E7%BA%BF%E6%80%A7%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-09 | Qwen3-Next-80B-A3B-Instruct | 阿里 Qwen | 线性注意力与SSM、MoE与路由、多Token预测与投机解码 | 速览 / A | [导航](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-09-Qwen3Next-%E9%97%A8%E6%8E%A7Delta%E4%B8%8E%E9%AB%98%E7%A8%80%E7%96%8FMoE%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-06-16 | MiniMax-M1: Scaling Test-Time Compute Efficiently with Lightning Attention | MiniMax | 线性注意力与SSM、KV压缩与长上下文、后训练配套 | 速览 / A | [导航](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/README.md) · [总结](2026/202610/2025-06-MiniMaxM1-%E6%B7%B7%E5%90%88%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%A8%A1%E5%9E%8B%E7%9A%84%E9%95%BF%E6%8E%A8%E7%90%86%E9%AA%8C%E8%AF%81/%E6%80%BB%E7%BB%93.md) |
| 2025-05-21 | Hunyuan-TurboS: Advancing Large Language Models through Mamba-Transformer Synergy and Adaptive Chain-of-Thought | 腾讯 Hunyuan | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/README.md) · [总结](2026/202610/2025-05-HunyuanTurboS-Mamba%E4%B8%8ETransformer%E7%9A%84%E5%B7%A5%E4%B8%9A%E7%BA%A7%E6%B7%B7%E5%90%88%E9%AA%A8%E5%B9%B2/%E6%80%BB%E7%BB%93.md) |
| 2025-03-18 | RWKV-7 "Goose" with Expressive Dynamic State Evolution | RWKV团队、EleutherAI、清华大学、纽约大学、浙江大学、其他联合高校 | 线性注意力与SSM | 速览 / B | [导航](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-03-RWKV7-%E5%B9%BF%E4%B9%89Delta%E6%9B%B4%E6%96%B0%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-03-07 | Linear-MoE: Linear Sequence Modeling Meets Mixture-of-Experts | 上海人工智能实验室、华南理工大学、苏州大学、香港中文大学 | 线性注意力与SSM、MoE与路由、训练系统与可复现性 | 速览 / B | [导航](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/README.md) · [总结](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/%E6%80%BB%E7%BB%93.md) |
| 2025-02-19 | MoM: Linear Sequence Modeling with Mixture-of-Memories | 清华大学、复旦大学、上海人工智能实验室、香港科技大学广州、香港中文大学 | 线性注意力与SSM、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-01-14 | MiniMax-01: Scaling Foundation Models with Lightning Attention | MiniMax | 线性注意力与SSM、MoE与路由、KV压缩与长上下文 | 速览 / A | [导航](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/README.md) · [总结](2026/202610/2025-01-MiniMax01-LightningAttention%E4%B8%8EMoE%E7%9A%84%E5%A4%A7%E8%A7%84%E6%A8%A1%E7%BB%84%E5%90%88/%E6%80%BB%E7%BB%93.md) |

<a id="topic-12"></a>

### 训练系统与可复现性

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-09 | OPEN-1B: A Fully Auditable Training Run | Gensyn | 训练系统与可复现性 | 速览 / H | [导航](2026/202610/2026-09-OPEN-1B-%E5%BC%82%E6%9E%84%E7%A1%AC%E4%BB%B6%E4%B8%8A%E5%8F%AF%E5%AE%A1%E8%AE%A1%E7%9A%84%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2026-09-OPEN-1B-%E5%BC%82%E6%9E%84%E7%A1%AC%E4%BB%B6%E4%B8%8A%E5%8F%AF%E5%AE%A1%E8%AE%A1%E7%9A%84%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |
| 2025-10 | RepDL: Bit-level Reproducible Deep Learning Training and Inference | Microsoft | 训练系统与可复现性 | 速览 / H | [导航](2026/202610/2025-10-RepDL-%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%8E%A8%E7%90%86%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E9%80%90%E4%BD%8D%E5%A4%8D%E7%8E%B0/README.md) · [总结](2026/202610/2025-10-RepDL-%E8%AE%AD%E7%BB%83%E4%B8%8E%E6%8E%A8%E7%90%86%E7%9A%84%E8%B7%A8%E5%B9%B3%E5%8F%B0%E9%80%90%E4%BD%8D%E5%A4%8D%E7%8E%B0/%E6%80%BB%E7%BB%93.md) |
| 2025-09-30 | TASP: Topology-aware Sequence Parallelism | 上海交通大学、清华大学、首都师范大学、无问芯穹 | 训练系统与可复现性、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/README.md) · [总结](2026/202610/2025-09-TASP-%E6%8B%93%E6%89%91%E6%84%9F%E7%9F%A5%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E5%BA%8F%E5%88%97%E5%B9%B6%E8%A1%8C/%E6%80%BB%E7%BB%93.md) |
| 2025-03-07 | Linear-MoE: Linear Sequence Modeling Meets Mixture-of-Experts | 上海人工智能实验室、华南理工大学、苏州大学、香港中文大学 | 线性注意力与SSM、MoE与路由、训练系统与可复现性 | 速览 / B | [导航](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/README.md) · [总结](2026/202610/2025-03-LinearMoE-%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E7%AE%97%E5%AD%90%E4%B8%8EMoE%E7%9A%84%E7%BB%9F%E4%B8%80%E8%AE%AD%E7%BB%83%E7%B3%BB%E7%BB%9F/%E6%80%BB%E7%BB%93.md) |

<a id="topic-13"></a>

### 记忆与隐空间计算

[返回主题目录](#by-topic) · [返回总目录](#contents)

| 发表 | 标题 | 来源 | 主题 | 状态 / 证据 | 入口 |
|---|---|---|---|---|---|
| 2026-01-12 | Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models | DeepSeek、北京大学 | 记忆与隐空间计算、MoE与路由 | 速览 / B | [导航](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/README.md) · [总结](2026/202610/2026-01-Engram-%E6%9D%A1%E4%BB%B6%E8%AE%B0%E5%BF%86%E6%9F%A5%E8%A1%A8%E4%B8%8E%E8%AE%A1%E7%AE%97%E5%AE%B9%E9%87%8F%E8%A7%A3%E8%80%A6/%E6%80%BB%E7%BB%93.md) |
| 2025-12-29 | End-to-End Test-Time Training for Long Context | Stanford、UC Berkeley、UC San Diego、NVIDIA、Astera Institute | 记忆与隐空间计算、KV压缩与长上下文 | 速览 / B | [导航](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/README.md) · [总结](2026/202610/2025-12-TTTE2E-%E6%B5%8B%E8%AF%95%E6%97%B6%E6%9B%B4%E6%96%B0%E6%9D%83%E9%87%8D%E7%9A%84%E9%95%BF%E4%B8%8A%E4%B8%8B%E6%96%87%E8%AE%B0%E5%BF%86/%E6%80%BB%E7%BB%93.md) |
| 2025-07-14 | Mixture-of-Recursions: Learning Dynamic Recursive Depths for Adaptive Token-Level Computation | KAIST、Mila、Google | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/README.md) · [总结](2026/202610/2025-07-MoR-%E6%8C%89Token%E8%B7%AF%E7%94%B1%E7%9A%84%E5%8A%A8%E6%80%81%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6/%E6%80%BB%E7%BB%93.md) |
| 2025-03-03 | Forgetting Transformer: Softmax Attention with a Forget Gate | Mila、Université de Montréal、MakerMaker AI | 稀疏与局部注意力、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/README.md) · [总结](2026/202610/2025-03-FoX-%E5%B8%A6%E9%81%97%E5%BF%98%E9%97%A8%E7%9A%84Softmax%E6%B3%A8%E6%84%8F%E5%8A%9B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-19 | MoM: Linear Sequence Modeling with Mixture-of-Memories | 清华大学、复旦大学、上海人工智能实验室、香港科技大学广州、香港中文大学 | 线性注意力与SSM、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/README.md) · [总结](2026/202610/2025-02-MoM-%E5%A4%9A%E8%AE%B0%E5%BF%86%E7%8A%B6%E6%80%81%E8%B7%AF%E7%94%B1%E7%9A%84%E7%BA%BF%E6%80%A7%E5%BA%8F%E5%88%97%E6%A8%A1%E5%9E%8B/%E6%80%BB%E7%BB%93.md) |
| 2025-02-12 | LLM Pretraining with Continuous Concepts | Meta FAIR、KAIST、UC San Diego | 记忆与隐空间计算、分词与层次建模 | 速览 / B | [导航](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/README.md) · [总结](2026/202610/2025-02-CoCoMix-%E8%BF%9E%E7%BB%AD%E6%A6%82%E5%BF%B5%E4%B8%8EToken%E6%B7%B7%E5%90%88%E7%9A%84%E9%A2%84%E8%AE%AD%E7%BB%83/%E6%80%BB%E7%BB%93.md) |
| 2025-02-07 | Scaling up Test-Time Compute with Latent Reasoning: A Recurrent Depth Approach | University of Maryland、ELLIS与MPI、LLNL | 循环与自适应深度、记忆与隐空间计算 | 速览 / B | [导航](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/README.md) · [总结](2026/202610/2025-02-Huginn-%E5%85%B1%E4%BA%AB%E9%80%92%E5%BD%92%E6%B7%B1%E5%BA%A6%E7%9A%84%E9%9A%90%E7%A9%BA%E9%97%B4%E6%8E%A8%E7%90%86/%E6%80%BB%E7%BB%93.md) |

## 4. 覆盖边界与后续跟踪

这是一份重点筛选目录，不宣称穷尽所有 2025 年以来工作。第一梯队优先选取可核查结构的技术报告；第二梯队中后训练主导的报告单列“后训练配套”。清华、北大、复旦、Stanford、MIT、UC Berkeley 均有作者署名可核验的相关条目；上海交通大学本轮纳入 TASP，明确是长上下文并行系统配套，纯模型结构重点工作仍需继续补充。合作论文按多来源标签检索，不按姓名猜测学校。历史条目保留原阅读状态并标 H，未重新验证其全部结论。

## 5. 统一维护入口

- [输入清单](inputs/catalog.json)：唯一数据源，包含标题、来源多标签、主题多标签、日期、路径与人工速览笔记。
- [统一脚本](tools/archive_papers.py)：`fetch / render / check`，校验成功的原文按 SHA-256 复用，已有论文按路径与唯一键去重。
- [使用说明](tools/README.md)：增量归档、离线重建与验证命令。索引由脚本生成，不手工维护多份论文清单。
