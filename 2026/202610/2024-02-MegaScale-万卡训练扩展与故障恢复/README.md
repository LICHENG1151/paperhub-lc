<!--
name: MegaScale导航
creator: Li Cheng
created: 2026-10-28
modified: 2026-10-28
-->

# MegaScale：万卡训练扩展与故障恢复

返回 [202610 月归档索引](../00-README.md)。

| 项目 | 内容 |
|---|---|
| 英文原名 | MegaScale: Scaling Large Language Model Training to More Than 10,000 GPUs |
| 作者 | Ziheng Jiang、Haibin Lin、Yinmin Zhong 等；字节跳动、北京大学 |
| 发表 | 2024-02-23，arXiv:2402.15627v1 |
| 出处 | https://arxiv.org/abs/2402.15627v1 |
| 代码 | https://github.com/volcengine/veScale（论文脚注入口，完整功能覆盖未核验） |
| 状态 | 已消化 |
| 一句话 | 全栈优化使 175B 在 12288 GPU 达到 55.2% MFU，并通过诊断换机、checkpoint 和 Rank 级观测维护长期训练稳定性 |

- [总结.md](./总结.md)：训练优化、容错流程、监控信号、慢节点案例、实验口径及 ltp_ha/AOM 启发。
- [2402.15627.pdf](./2402.15627.pdf)：arXiv 原论文，16 页。
