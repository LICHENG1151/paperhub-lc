<!--
name: 2026-KimiK3 本篇导航
creator: Li Cheng
created: 2026-08-14
modified: 2026-08-14
-->

# 2026 · 面向开放前沿的稀疏多模态大模型（Kimi K3）

> 本文件夹为单篇论文归档：**原文 + 总结 + 导航 README** 同处。

## 速查卡

| 项 | 内容 |
|----|------|
| 英文原名 | Kimi K3: Open Frontier Intelligence（Technical Report of Kimi K3） |
| 作者 | Kimi Team（Moonshot AI） |
| 年份 | 2026 |
| 出处 | 技术报告（未见 arXiv 正式编号） |
| 权重 | https://huggingface.co/moonshotai/Kimi-K3 |
| 代码 | https://github.com/MoonshotAI/MoonEP（专家并行组件） |
| 状态 | 已消化 |
| 一句话 | 2.8T/104B 激活的原生多模态 MoE，1M 上下文；用 KDA+AttnRes+Stable LatentMoE 沿序列/深度/宽度三维重构信息流，较 K2 提效约 2.5×；性能仅次于 Fable 5 与 GPT-5.6 Sol，全量权重开源。 |

## 文件清单

| 文件 | 用途 |
|------|------|
| [`总结.md`](./总结.md) | 总结正文（★ 必读） |
| `[2026 arXiv KIMI] k3_tech_report.pdf` | **论文原文**，照抄原名，保真备查 |
| `README.md` | 本导航卡 |

## 一图速记

- **序列维** → Hybrid Attention：3×KDA + 1×Gated MLA（末层保全局）
- **深度维** → Attention Residuals：块级表示 + 跨层选择性检索（8 块×12 层）
- **宽度维** → Stable LatentMoE：896 选 16 + Normalized/SiTU-GLU/QB 三稳定化
- **多模态** → MoonViT-V2 从零 next-token 训练，语言+视觉联合优化
- **后训练** → SFT 冷启动(QAT) → 通用/智能体/编码三域多档 RL → 多教师蒸馏 + MTP 投机解码
- **基建** → FlashKDA / KCP / MoonEP / AgentENV(microVM，累计 5100 万+ 沙箱)
