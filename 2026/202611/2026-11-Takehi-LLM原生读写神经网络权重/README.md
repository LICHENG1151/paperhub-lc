<!--
name: LLM原生读写神经网络权重
creator: Li Cheng
created: 2026-11-03
modified: 2026-11-03
-->

# 2026-11 · LLM原生读写神经网络权重

[返回月索引](../00-README.md)

## 速查卡

- **英文原名**：Sparks of Weight-Space Programming: LLMs can natively read & write neural network weights
- **作者**：Rikiya Takehi*, Jayden Teoh*, Alex Zhang, Omar Khattab（*共同一作）
- **出处**：MIT CSAIL 博客（rikiyat.github.io），研究博客非正式论文
- **发表月份**：2026-11
- **月份依据**：页面 meta 标注发表日期 2026-11-02。
- **原文入口**：https://rikiyat.github.io/blog/weight-space-programming/
- **实验日志**：https://github.com/RikiyaT/lm_understand-logs
- **状态**：速览
- **一句话**：前沿 LLM 不经 optimizer 直接读 weights 判断网络行为、直接改 weights 修复/生成网络；0.016% 编辑把 Qwen3.5-0.8B 的 MATH-500 从 7.9% 提到 48.1%。

## 文件清单

- [总结.md](./总结.md)：速览笔记（含 8 个实验结果表与个人评述）。
- [weight-space-programming.html](./weight-space-programming.html)：原文 HTML，照抄原文件名。
- `css/`、`js/`、`assets/`：原文引用的样式、脚本与图表数据，与 HTML 同级存放，离线双击 HTML 即可阅读（Distill 风格交互图表依赖本地 js 与 json 数据）。
- [README.md](./README.md)：本篇导航。

## 原文校验

- 下载日期：2026-11-03。
- 下载地址：https://rikiyat.github.io/blog/weight-space-programming/
- SHA-256（weight-space-programming.html）：`60e015f47e4c011297229519a93e36f845883303d80912f48328d8b00de33df9`
- 外部依赖（Google Fonts、distill.pub 模板脚本）未随档，离线打开时字体回退为系统字体，不影响正文与数据图表。
