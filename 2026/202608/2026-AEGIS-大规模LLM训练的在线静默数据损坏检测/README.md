<!--
name: 2026-AEGIS 本篇导航
creator: Li Cheng
created: 2026-08-20
modified: 2026-08-20
-->

# 2026 · 大规模 LLM 训练的在线静默数据损坏检测（AEGIS）

> 本文件夹为单篇论文归档：**原文 + 总结 + 导航 README** 同处。

## 速查卡

| 项 | 内容 |
|----|------|
| 英文原名 | Safeguarding LLM Training at Scale: Online SDC Detection and Insights from 35 Million GPU Hours |
| 作者 | Kinman Lei 等（清华大学 & 字节跳动） |
| 年份 | 2026 |
| 出处 | OSDI 2026（USENIX） |
| 论文页 | https://www.usenix.org/conference/osdi26/presentation/lei |
| 状态 | 已消化 |
| 一句话 | 用 cSensor–cVerifier 两阶段抽象把 SDC 检测拆成「关键路径轻量感知 + 气泡内惰性确认」，结合 GPU 混精特性与 LLM 训练固有冗余，3500 万 GPU 小时里查出 18 起 SDC/13 块坏卡，仅 0.86% 开销。 |

## 文件清单

| 文件 | 用途 |
|------|------|
| [`总结.md`](./总结.md) | 总结正文（★ 必读） |
| `osdi26-lei.pdf` | **论文原文**，照抄原名，保真备查 |
| `README.md` | 本导航卡 |

## 一图速记

- **问题** → 万卡训练的 SDC：静默、非确定性、永久性；离线诊断慢且漏检，重跑贵，经典 checksum 被 bf16 噪声淹没
- **抽象** → cSensor（inline 轻量感知，发 vTask） + cVerifier（气泡内惰性确定性确认）
- **方法 A** → 混精算法检测：FP32 累加器算 checksum；FlashAttention 用「行和=1」不变量
- **方法 B** → 自等价确定性检测：吃 FlashAttention/激活重计算的冗余，xorsum 指纹逐位对拍
- **控制** → 自适应阈值 + 动态采样，把开销压到预算（0.86%）
- **战果** → 18 SDC / 13 坏卡 / 0.86% 开销；recall 8/8（厂商诊断仅 2/8）
- **洞察** → 多数 SDC 静默逃告警；同卡时错时对但故障永久复发；仅见计算/显存型
