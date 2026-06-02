---
title: DiffDock Minimal Reproduction Log
sidebar_position: 2
---

# DiffDock Minimal Reproduction Log

This note records my first minimal AI for Science code reproduction workflow using DiffDock. The purpose was not to train DiffDock or claim a drug discovery result. The purpose was to understand the path from protein-ligand input definition to environment debugging, inference execution, output inspection, and experiment logging.

## Objective

```text
Protein: 6agt
Ligand SMILES: COc(cc1)ccc1C#N
Environment: Google Colab
Tool: DiffDock Colab workflow
```

```text
Protein structure + ligand representation
-> DiffDock inference
-> candidate ligand binding poses
-> confidence and affinity-related scores
-> result inspection and experiment logging
```

## Debugging Record

The online demo first failed with a scheduling-related runtime error, so I moved the workflow to Google Colab. The first Colab run reached an empty result table and produced `IndexError: single positional indexer is out-of-bounds`, which showed that the visible error came from trying to read a missing first row.

I then fixed several upstream issues: BioPython was missing for protein sequence preparation, ESM embeddings had to be generated successfully, RDKit was required for ligand SMILES processing, and `datasets.process_mols` needed a local package path fix because of a namespace conflict.

## Result: 40 Candidate Docking Pose Files

After these fixes, the workflow generated a result table and 40 candidate `.sdf` docking pose files for protein `6agt` and ligand `COc(cc1)ccc1C#N`.

The final output included:

```text
6agt.pdb
df_diffdock_results.tsv
40 .sdf docking pose files
```

The result table included `diffdock_confidence`, `gnina_scored_affinity`, `gnina_minimized_affinity`, and `sdf_file` fields.

This reproduction does not claim biological validity or drug discovery success. Its purpose is to document a minimal AI for Science code reproduction workflow.

## Result Figure

![DiffDock confidence vs gnina affinity](/img/diffdock-confidence-affinity.png)

The two panels showed strong negative correlations in this run:

```text
diffdock_confidence vs gnina_scored_affinity: r = -0.982
diffdock_confidence vs gnina_minimized_affinity: r = -0.933
```

I interpret this as evidence that the workflow produced structured outputs that could be inspected and compared. It does not prove that the ligand has real biological activity.

## What I Learned

AI for Science reproduction is not just pressing a run button. Dependency installation, import paths, input file preparation, intermediate outputs, and final result inspection all matter.

## Current Limitations

This is a minimal reproduction record. I did not validate the docking poses biologically, compare against experimental binding data, evaluate multiple ligands, or reproduce the full DiffDock paper.

## Next Learning Steps

I will study how docking outputs are evaluated, how ligand poses are inspected structurally, how affinity scores should be interpreted, and how to compare DiffDock outputs with stronger baselines or experimental references.
