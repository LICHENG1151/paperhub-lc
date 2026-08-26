<!--
name: 202608 论文归档索引
creator: Li Cheng
created: 2026-08-14
modified: 2026-08-26
-->

# 论文归档索引 · 2026-08

> 每篇论文 = 一个子文件夹（原文 PDF + `总结.md` + `README.md`）。点文件夹名进导航卡，点「总结」直达正文。
> 排序：按发表年份升序，一眼看出技术演进与阅读进度。

| 论文（文件夹） | 年份 | 来源 | 一句话总结 | 状态 | 总结 |
|---------------|------|------|-----------|------|------|
| [Cordis 时空可组合性范式](./2026-Cordis-时空可组合性的动态组合编程范式/README.md) | 2026 | DeepSeek×PKU | effect/coeffect 下沉为运行时机制，得到可回滚副作用+反应式依赖的动态组合范式（Cordis / Koishi 佐证） | 已消化 | [总结.md](./2026-Cordis-时空可组合性的动态组合编程范式/总结.md) |
| [AEGIS 在线 SDC 检测](./2026-AEGIS-大规模LLM训练的在线静默数据损坏检测/README.md) | 2026 | 清华×字节 · OSDI'26 | cSensor–cVerifier 两阶段：关键路径轻量感知 + 气泡内惰性确认，3500 万 GPU 小时查出 18 SDC/13 坏卡，仅 0.86% 开销 | 已消化 | [总结.md](./2026-AEGIS-大规模LLM训练的在线静默数据损坏检测/总结.md) |
| [花叔 Claude Code 从入门到精通](./2026-花叔-Claude-Code从入门到精通/README.md) | 2026 | 花叔（技术手册） | 五步循环 + Prompt/Context/Harness 三层心智模型，教「聪明人一周从零用 AI 构建产品」，主张把时间投在 Context 与 Harness 而非 Prompt | 已消化 | [总结.md](./2026-花叔-Claude-Code从入门到精通/总结.md) |
| [AgentX 智能体推理基准与 CUDA 护城河](./2026-SemiAnalysis-AgentX智能体推理基准与CUDA护城河/README.md) | 2026 | SemiAnalysis | 用「重放真实智能体编码 trace」的 AgentX 基准测护城河：M3 上 Nvidia 完胜、KV-offload 是分水岭（AMD 一个 Pareto 点都没用），但 40–60s 区间 MI355X+ATOM 每美元性能反超 GB300——护城河随负载/软件动态变化。⚠️原文付费未随档 | 精读中 | [总结.md](./2026-SemiAnalysis-AgentX智能体推理基准与CUDA护城河/总结.md) |
