---
title: DiffDock Minimal Reproduction Log：从运行失败到 AI for Science 最小实验闭环
sidebar_position: 2
---

# DiffDock Minimal Reproduction Log：从运行失败到 AI for Science 最小实验闭环

## 1. 为什么选择 DiffDock

我选择 DiffDock 作为第一个 AI for Science 实操项目，是因为它连接了药物发现、分子对接、扩散模型、蛋白质结构、小分子表示、代码复现和实验记录等多个关键环节。

相比直接复现 AlphaFold、RoseTTAFold 或 GNoME 这类更复杂的系统，DiffDock 更适合作为一个入门级的 paper-to-experiment case。它的任务边界相对清晰：给定一个 protein structure 和一个 ligand representation，模型预测 ligand 可能如何与 protein 结合，并生成候选 docking pose。

本次实验的目标不是训练 DiffDock，也不是证明某个小分子具有真实药物价值，而是完成一个最小 AI for Science 工作流：

> 从 protein-ligand 输入，到环境调试、模型推理、结果生成、错误记录和初步解释。

---

## 2. 本次实验目标与输入

本次实验的最小目标是：

* 使用一个 protein PDB input；
* 使用一个 ligand SMILES input；
* 跑通 DiffDock inference；
* 生成 candidate docking poses；
* 得到结果表；
* 记录运行过程中的错误、修复方法和输出结果。

最终使用的输入为：

```text
Protein: 6agt
Ligand SMILES: COc(cc1)ccc1C#N
Running environment: Google Colab
Model / Tool: DiffDock Colab Notebook
```

其中，`6agt` 是 protein 的 PDB ID，`COc(cc1)ccc1C#N` 是 ligand 的 SMILES 表示。

从 AI 任务角度看，这次实验可以概括为：

```text
Protein structure + Ligand SMILES
→ DiffDock inference
→ Candidate ligand binding poses
→ Confidence / affinity scoring
→ Result inspection and experiment logging
```

---

## 3. 第一次尝试：Hugging Face Space 运行失败

我最初尝试使用 Hugging Face 上的 DiffDock Web Demo，因为 Web Demo 是最快验证输入输出关系的方式，不需要本地配置环境。

但该 Space 页面出现了运行时错误：

```text
Runtime error
Scheduling failure: unable to schedule
Failed to retrieve error logs: SSE is not enabled
```

这说明问题不是我的 protein 或 ligand 输入错误，而是 Hugging Face Space 当前无法成功调度运行容器。换句话说，在线 Demo 环境没有启动成功。

这次失败让我确认了一点：AI for Science 复现不能只依赖一个在线入口。真正的复现工作需要记录失败原因，并准备替代路线。

因此，我将路线切换到 Google Colab。

---

## 4. 第二次尝试：Colab 运行到最终可视化阶段失败

进入 Colab 后，我先尝试直接运行 notebook。最初运行没有生成有效结果，最终可视化 cell 报错：

```text
IndexError: single positional indexer is out-of-bounds
```

表面上看，这是最后一格可视化代码的问题。但进一步检查发现，真正原因不是可视化本身，而是结果表为空。

诊断输出显示：

```text
df_results shape: (0, 6)
SDF files: 0
```

并且生成的 `df_diffdock_results.tsv` 只有表头，没有任何 docking result 行。也就是说，最终代码尝试读取 `df_results.iloc[0]`，但结果表中根本没有第一行，因此报错。

这一阶段的结论是：

> 最后的 IndexError 只是表面症状，真正问题发生在更上游的 inference / result-generation 阶段。

---

## 5. 第一次关键修复：BioPython 缺失

继续向上排查后，我发现 ESM preparation 阶段报错：

```text
ModuleNotFoundError: No module named 'Bio'
```

`Bio` 来自 BioPython。这个包用于处理生物序列和结构相关数据。因为 BioPython 缺失，notebook 无法完成蛋白质序列提取，也就无法生成：

```text
data/prepared_for_esm.fasta
```

于是后续 ESM embedding 也失败。

我通过以下方式修复：

```python
%pip install -q biopython

import Bio
print("BioPython installed successfully.")
```

修复后，重新运行 ESM preparation，成功生成了 FASTA 文件：

```text
prepared_for_esm.fasta exists: True
```

这说明 protein structure 已经成功转换成蛋白质序列输入。

---

## 6. 第二次关键修复：ESM Embedding 成功生成

DiffDock 需要使用 ESM 对蛋白质序列进行 embedding。可以把 ESM 理解成“蛋白质语言模型”：它把氨基酸序列转化成深度学习向量表示。

在 BioPython 修复后，我重新运行 ESM embedding 步骤，并成功生成了 4 个 `.pt` embedding 文件：

```text
ESM output files: 4
```

这一步非常重要，因为它意味着：

```text
PDB structure
→ protein sequence
→ ESM protein embedding
```

这条上游链路已经打通。

---

## 7. 第三次关键修复：RDKit 缺失

接下来进入真正的 DiffDock inference 阶段，但又出现了新的错误：

```text
ModuleNotFoundError: No module named 'rdkit'
```

RDKit 是化学信息学工具包，主要用于处理小分子结构，例如读取 SMILES、生成分子对象、处理原子和化学键等。

DiffDock 需要 RDKit 来理解 ligand，因此我安装了 RDKit：

```python
%pip install -q rdkit

from rdkit import Chem
from rdkit.Chem import RemoveHs

print("RDKit installed successfully.")
```

这一步修复后，ligand 的 SMILES 输入才能被正确处理。

---

## 8. 第四次关键修复：datasets.process_mols 模块冲突

修复 RDKit 后，DiffDock inference 又出现了新的报错：

```text
ModuleNotFoundError: No module named 'datasets.process_mols'
```

进一步分析后发现，这不是文件真的不存在，而是 Python 包命名冲突。

DiffDock 项目中本来有一个本地目录：

```text
/content/DiffDock/datasets/process_mols.py
```

但 Colab 环境中可能存在另一个外部包也叫 `datasets`。Python 在导入：

```python
from datasets.process_mols import ...
```

时，没有正确导入 DiffDock 本地的 `datasets` 目录。

我将这个问题理解为：

> package namespace conflict：本地项目目录和外部 Python 包同名，导致导入路径冲突。

修复方法是把 DiffDock 项目目录加入 Python 搜索路径，并显式让本地目录成为 Python package：

```python
%cd /content/DiffDock

!touch datasets/__init__.py
!touch models/__init__.py
!touch utils/__init__.py

import os, sys
sys.path.insert(0, "/content/DiffDock")
os.environ["PYTHONPATH"] = "/content/DiffDock:" + os.environ.get("PYTHONPATH", "")
```

修复后，重新运行 inference。

---

## 9. 最终成功：生成 40 个候选 Docking Pose

在完成以上修复后，DiffDock inference 成功运行，并生成了最终结果。

最终输出包括：

```text
6agt.pdb
df_diffdock_results.tsv
40 个 .sdf docking pose 文件
```

这说明模型为 protein `6agt` 和 ligand `COc(cc1)ccc1C#N` 生成了 40 个候选结合姿态。

结果表 `df_diffdock_results.tsv` 包含以下列：

```text
pdb_file
smiles
diffdock_confidence
gnina_scored_affinity
gnina_minimized_affinity
sdf_file
```

每一行对应一个候选 docking pose。
每一个 `.sdf` 文件对应一个 ligand 的预测三维结合姿态。

---

## 10. 结果图：DiffDock Confidence 与 Gnina Affinity 的关系

最终结果图展示了两类关系：

```text
DiffDock confidence vs gnina_scored_affinity
DiffDock confidence vs gnina_minimized_affinity
```

![DiffDock confidence vs gnina affinity](/img/diffdock-confidence-affinity.jpg)

左图标题中显示：

```text
r = -0.982
```

右图标题中显示：

```text
r = -0.933
```

这表示在本次实验中，DiffDock confidence 与 gnina affinity 相关评分之间呈现明显负相关趋势。

但这不能被过度解释为“这个 ligand 具有真实药物价值”。更准确的理解是：

> 本次实验生成的候选 docking pose 不是随机文本输出，而是形成了可分析的结构文件、结果表和评分关系。它证明了 DiffDock inference workflow 成功跑通，但不能单独证明生物学结论。

这次实验的价值主要在 workflow validation，而不是 biological validation。

---

## 11. 本次复现真正证明了什么

这次复现证明的不是“我已经掌握药物发现”，而是：

> 我完成了一个 AI for Science 最小实操闭环。

完整流程可以总结为：

```text
Protein PDB ID
→ 下载 protein structure
→ 提取 protein sequence
→ 生成 FASTA 文件
→ 生成 ESM embedding
→ 输入 ligand SMILES
→ RDKit 处理小分子
→ DiffDock inference
→ 生成候选 SDF docking poses
→ gnina scoring / minimization
→ 输出结果表和相关性图
→ 记录错误、修复方法和下一步计划
```

这是一次典型的 paper-to-experiment workflow。

---

## 12. 这次试错让我学到了什么

第一，AI for Science 的复现不是简单点击“Run all”。
真实流程中，环境依赖、路径、模块冲突、输入文件和结果文件都会出问题。

第二，报错本身是实验记录的一部分。
从 Hugging Face Space runtime error，到 Colab 中的 BioPython、RDKit、datasets import 问题，每一次失败都帮助我定位系统中的一个环节。

第三，Research Automation 的价值开始变得具体。
如果没有结构化记录，我很容易只看到最后一个 IndexError，而忽略真正的上游失败原因。通过记录 input、output、error log、result files 和 next step，实验过程变得可追踪、可复现、可迭代。

第四，AI/CS 背景在跨学科合作中的价值在于“转译”。
当生物医学专家提出 protein-ligand binding 问题时，我可以把它拆成：

```text
target protein 是什么？
ligand 是什么？
输入文件格式是什么？
使用 docking 还是 property prediction？
输出是 pose、affinity 还是 ranking？
如何记录和评估结果？
```

这正是 AI for Science 项目中非常重要的执行能力。
