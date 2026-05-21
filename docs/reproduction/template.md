---
title: 代码复现模板
sidebar_position: 1
---

# 代码复现模板

这个模板用于记录我复现深度学习论文、AI for Science 项目或开源模型代码的过程。

## 1. 项目信息

- Paper:
- GitHub Repo:
- Task:
- Framework:
- Date:
- Status:

## 2. 复现目标

这次复现的目标是什么？

例如：

- 跑通官方 demo
- 复现论文中的核心指标
- 理解模型结构
- 修改部分代码完成小实验
- 将方法迁移到自己的项目中

## 3. 环境配置

记录 Python 版本、CUDA 版本、依赖库和安装方式。

```bash
conda create -n project-name python=3.10
conda activate project-name
pip install -r requirements.txt
```

## 4. 数据准备

记录数据来源、下载方式、数据格式和目录结构。

```text
data/
├── train/
├── test/
└── processed/
```

## 5. 运行命令

记录训练、测试、推理或 demo 命令。

```bash
python train.py
python eval.py
python inference.py
```

## 6. 关键配置

记录重要参数。

```yaml
batch_size:
learning_rate:
epochs:
model:
dataset:
seed:
```

## 7. 遇到的问题

### Problem 1

报错信息：

```text
在这里粘贴报错信息
```

原因分析：

```text
在这里记录你认为可能的原因
```

解决方式：

```text
在这里记录最终解决方案
```

## 8. 复现结果

- Paper reported:
- My result:
- Difference:

## 9. 结果分析

这里记录：

- 是否成功复现
- 和论文结果是否一致
- 如果不一致，可能原因是什么
- 模型输出是否合理
- 是否存在数据、环境、参数或随机种子影响

## 10. 我的理解

用自己的语言总结这个项目真正有价值的地方。

例如：

- 这个方法解决了什么问题？
- 它的核心创新是什么？
- 它适合什么场景？
- 它有什么局限？

## 11. 下一步改进

- [ ] 阅读论文 Method 部分
- [ ] 跑通官方 demo
- [ ] 复现核心实验
- [ ] 做一个小规模 ablation
- [ ] 写一篇复现报告