<!-- name: 2025-01-Huang-超图算法推理; creator: Li Cheng; created: 2026-09-03; modified: 2026-09-10 -->

# 2025 · Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers

> 本文件夹为单篇论文归档：**原文 + 总结 + 导航 README** 同处。

## 速查卡

| 项 | 内容 |
|----|------|
| 英文原名 | Neural Algorithmic Reasoning for Hypergraphs with Looped Transformers |
| 作者 | Zekai Huang, Yingyu Liang, Zhenmei Shi, Zhao Song, Zhen Zhuang |
| 年份 | 2025（arXiv 首版 2025-01；本总结据 v3 2026-01-24） |
| 出处 | arXiv:2501.10688 [cs.LG] |
| 论文页 | https://arxiv.org/abs/2501.10688 |
| 代码 | — |
| 状态 | 精读中 |
| 一句话 | 构造式证明：宽度 O(1)、层数 O(1) 的 weight-tied 循环 Transformer 能逐步模拟超图上的确定性组合算法（Dijkstra/BFS/DFS/Helly/motif 计数）；关键 = 关联矩阵进注意力 + 降解机制动态取最短超边，把特征维度与超图规模解耦。 |

## 文件清单

| 文件 | 用途 |
|------|------|
| [`总结.md`](./总结.md) | 总结正文（★ 必读） |
| `2501.10688_Neural_Algorithmic_Reasoning_Hypergraphs.pdf` | **论文原文**，照抄原名，保真备查 |
| `README.md` | 本导航卡 |

## 一图速记

- **问题** → 循环 Transformer 已能模拟**图**算法 [dLF24]，但超边连 >2 顶点、静态关联矩阵会让特征维度随规模膨胀 → 破坏 O(1) 目标
- **架构技巧** → 关联矩阵 Ã 塞进注意力做乘性掩码（`ψ=Ã·σ(QKᵀ)V`，hardmax），特征维度 d 独立于 n_v/n_e → **O(1)**
- **降解 §4.1** → 循环中动态取两顶点间最短超边当距离，不存静态邻接 → Dijkstra/BFS/DFS 上超图（10 层/3 头）
- **超边感知 §4.2** → 改写 Helly 判定为循环可执行（11 层/3 头）
- **§4.3** → 推广到确定性 motif 算法；**随机采样类不可模拟**
- **基本原语 §5** → Selection/Increment/Comparison/读写标量/AND/加法 等，各由单层 Transformer 模拟
- **结果 §6** → 全为**构造性存在证明**、无训练实验；超图 Dijkstra 27 层/3 头/O(1) 维；规模封顶 O(δ̂⁻¹)=⌊2π/δ̂⌋ 受浮点精度限制
- **局限** → 纯理论零训练、仅确定性算法、hardmax 理想化、规模卡精度、空间-迭代 trade-off
