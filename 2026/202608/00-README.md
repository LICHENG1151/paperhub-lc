<!--
name: 202608 论文与技术报告归档索引
creator: Li Cheng
created: 2026-08-14
modified: 2026-09-10
-->

# 2026年08月 论文与技术报告阅读索引

> 分区固定顺序：**一、学术论文 · 二、厂商技术报告（按公司）· 三、行业分析 · 四、技术手册/教程**（空区省略）。
> 每篇独立归档为 `<发表月 YYYY-MM>-<来源>-<中文主题>/`，含 原文 + `总结.md` + `README.md`；`发表` 列按发表月份升序。

## 一、学术论文

| 发表 | 论文 | 来源 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|---|
| 2026-08 | AEGIS: Safeguarding LLM Training at Scale（在线 SDC 检测） | 清华×字节 · OSDI'26 | 已消化 | cSensor–cVerifier 两阶段：关键路径轻量感知 + 气泡内惰性确认，3500 万 GPU 小时查出 18 SDC/13 坏卡，仅 0.86% 开销 | [README](2026-08-AEGIS-大规模LLM训练的在线静默数据损坏检测/README.md) · [总结](2026-08-AEGIS-大规模LLM训练的在线静默数据损坏检测/总结.md) |
| 2026-08 | A Programming Paradigm for Spatiotemporal Composability | DeepSeek×PKU | 已消化 | effect/coeffect 从编译期静态标注下沉为运行时机制，得到可回滚副作用 + 反应式依赖的动态组合范式（Cordis / Koishi 佐证） | [README](2026-08-Cordis-时空可组合性的动态组合编程范式/README.md) · [总结](2026-08-Cordis-时空可组合性的动态组合编程范式/总结.md) |

## 二、厂商技术报告（按公司）

### OpenBMB

| 发表 | 报告 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|
| 2026-04 | MiniCPM-o 4.5: Towards Real-Time Full-Duplex Omni-Modal Interaction | 已消化 | 9B 开源全模态，用 Omni-Flow（时分复用切窗 + 共享时间轴对齐 I/O）把回合制升级为实时全双工，<12GB 边缘可跑，VL 逼近 Gemini 2.5 Flash | [README](2026-04-MiniCPM-o4.5-实时全双工全模态交互/README.md) · [总结](2026-04-MiniCPM-o4.5-实时全双工全模态交互/总结.md) |

> 备注：MiniCPM-o 4.5 发表月按 arXiv 2604 = 2026-04，故文件夹前缀早于本目录（202608 归档月）。

## 三、行业分析

| 发表 | 报告 | 来源 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|---|
| 2026-08 | AgentX（InferenceX v3）：智能体推理下的 CUDA 护城河 | SemiAnalysis（付费） | 精读中 | 用「重放真实智能体编码 trace + 逐块保真 KV」的 AgentX 基准测护城河：CUDA 在长上下文/KV-offload 上仍厚（M3 完胜），但 AMD MI355X+ATOM 特定延迟区间每美元性能可反超——护城河随负载/软件动态变化。⚠️原文付费未随档 | [README](2026-08-SemiAnalysis-AgentX智能体推理基准与CUDA护城河/README.md) · [总结](2026-08-SemiAnalysis-AgentX智能体推理基准与CUDA护城河/总结.md) |

## 四、技术手册/教程

| 发表 | 手册 | 来源 | 状态 | 一句话 | 入口 |
|---|---|---|---|---|---|
| 2026-08 | Claude Code 从入门到精通 v2.0.0 | 花叔（个人手册） | 已消化 | 五步循环 + Prompt/Context/Harness 三层心智模型，教「聪明人一周从零用 AI 构建产品」，主张把时间投在 Context 与 Harness 而非 Prompt | [README](2026-08-花叔-Claude-Code从入门到精通/README.md) · [总结](2026-08-花叔-Claude-Code从入门到精通/总结.md) |
