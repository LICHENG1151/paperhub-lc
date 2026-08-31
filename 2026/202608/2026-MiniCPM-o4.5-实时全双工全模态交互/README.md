<!--
name: 2026-MiniCPM-o4.5 本篇导航
creator: Li Cheng
created: 2026-08-31
modified: 2026-08-31
-->

# 2026 · MiniCPM-o 4.5：面向实时全双工的全模态交互（OpenBMB）

> 本文件夹为单篇论文归档：**原文 + 总结 + 导航 README** 同处。

## 速查卡

| 项 | 内容 |
|----|------|
| 英文原名 | MiniCPM-o 4.5: Towards Real-Time Full-Duplex Omni-Modal Interaction |
| 作者 | MiniCPM-o Team, OpenBMB（通讯：Maosong Sun / Zhiyuan Liu / Yuan Yao） |
| 年份 | 2026（arXiv 2026-04-30） |
| 出处 | arXiv preprint 2604.27393v1 [cs.CL] |
| 论文页 | https://arxiv.org/abs/2604.27393 |
| 代码 | https://github.com/OpenBMB/MiniCPM-o |
| 状态 | 已消化 |
| 一句话 | 9B 开源全模态模型，用 Omni-Flow（时分复用切窗 + 共享时间轴对齐 I/O）把回合制升级为实时全双工——边看边听边说且能主动，<12GB 内存边缘可跑，VL 逼近 Gemini 2.5 Flash、全模态与语音生成超 Qwen3-Omni-30B。 |

## 文件清单

| 文件 | 用途 |
|------|------|
| [`总结.md`](./总结.md) | 总结正文（★ 必读） |
| `Full Duplex.pdf` | **论文原文**，照抄原名，保真备查 |
| `README.md` | 本导航卡 |

## 一图速记

- **问题** → 类人交互瓶颈不在模态/延迟，而在**范式**：感知/响应相位分离（blocked I/O）+ 纯被动
- **主张** → 感知与响应在 token 级沿时间**持续耦合** + 交互由上下文驱动（主动）
- **框架 Omni-Flow** → 借时分复用切成时长 t 的 chunk，窗内"先感知后输出"，无输出发 `[listen]`；用户请求降格为**世界状态**（env-audio），模型自决 what/whether/when
- **消融** → chunk **1.0s** 最优；**显式边界**更好；**Listen-Speak > Listen-Text**（是否说与说什么解耦）
- **TAIL** → 自适应文本-语音交织，累计进度对齐时间边界 + 有界 look-ahead，治"语音滞后"
- **架构** → SigLIP0.4B(16×压缩) + Whisper0.3B(5×压缩→10tok/s) + **Qwen3-8B 骨干只出文本(3–4步/s)** + Llama0.3B 语音解码器(叠骨干隐状态→S3) + flow-matching 波形
- **训练** → 语音预训练(冻骨干)→联合预训练(全解冻)→联合 SFT(2 phase)→RL(GRPO+平滑长度奖励+RLAIF-V)
- **结果** → OpenCompass 77.6/78.2；OmniDocBench 文档解析最强；全双工 LiveSports-3K-CC 胜率 54.4(+12.9/+8.8)；文本超骨干；4090 INT4 212tok/s·11GB，llama.cpp-omni RTF 0.20–0.27
- **局限** → 长时漂移、语音偶不稳(中英夹杂)、web demo 网络敏感、主动行为仍简单
