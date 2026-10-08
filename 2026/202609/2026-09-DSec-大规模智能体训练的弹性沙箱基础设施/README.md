<!--
name: 大规模智能体训练的弹性沙箱基础设施导航
creator: Li Cheng
created: 2026-10-08
modified: 2026-10-08
-->

# 2026 · DSec 大规模智能体训练沙箱

[返回月索引](../00-README.md)

## 速查卡

| 项 | 内容 |
|---|---|
| 英文原名 | DeepSeek Elastic Compute (DSec): A Sandbox Infrastructure for Effective Agentic Training at Scale |
| 作者 | Jialiang Huang et al.（DeepSeek-AI、清华大学） |
| 发表 | 2026-09；v1 首页标注 2026-09-19 |
| 出处 | DeepSeek 技术报告，[arXiv:2609.22978v1](https://arxiv.org/abs/2609.22978v1) |
| 代码 | [OverlayBD 存储组件](https://github.com/kvcache-ai/AgentENV/tree/main/storage/overlaybd)；不能据此认定完整 DSec 已开源 |
| 状态 | 已消化 |
| 一句话 | 用多后端沙箱、分层环境、按需镜像和资源超卖支撑大规模 Agent RL，并将 rollout 生命周期与可抢占 GPU 任务解耦。 |

## 文件清单

| 文件 | 用途 |
|---|---|
| [总结.md](./总结.md) | 架构、关键机制、实验数值、抢占恢复边界与个人评述 |
| [2609.22978v1.pdf](./2609.22978v1.pdf) | 原文，31 页；保留用户提供文件的名称和内容 |
| README.md | 本导航卡 |

## 原文校验

- 来源：用户提供的本地 PDF；从月目录根部移入本篇文件夹，未改写内容。
- 文件大小：786,319 字节。
- SHA-256：`649edc87e70b8e57f9515360b15ed5576c6c8afb3c46a3763e83c22a85a660e2`。
- 阅读范围：正文 §1–10；视觉核对首页、架构图 1 和实验图 10–13；未部署系统或复现实验。
