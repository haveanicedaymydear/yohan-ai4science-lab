---
title: AI for Science Knowledge Map
sidebar_position: 1
---

# AI for Science Knowledge Map

This note is my current knowledge map for AI for Science. It helps me understand how scientific questions can be translated into machine learning tasks and how models, data, evaluation, and reproducible workflows connect.

At this stage, my goal is to understand how scientific questions are translated into AI tasks, including task definition, input-output formulation, model selection, evaluation, and reproducible experimentation.

## What AI for Science Means To Me

AI for Science uses AI methods to support scientific discovery, simulation, prediction, and research workflows. It is not only about applying a model to a dataset. It also requires understanding the scientific object, the representation, the task boundary, and the reliability of the output.

Examples include protein structure prediction, molecular docking, molecular property prediction, materials discovery, climate modeling, scientific simulation, and automated research workflows.

## Task Translation

```text
Scientific question
-> data representation
-> input-output definition
-> model family
-> evaluation metric
-> reproducible experiment
```

For example, a protein-ligand binding question can become inputs such as a protein structure and a ligand SMILES string, then outputs such as candidate binding poses, confidence scores, affinity estimates, or ranked molecules.

## Model Families

Graph Neural Networks are important because molecules, materials, and biological interactions can often be represented as graphs. Diffusion models are useful for generative tasks and structure generation. Transformers and foundation models are useful for sequence, structure, and multimodal scientific data. Scientific agents may support research workflows by reading papers, organizing hypotheses, running tools, checking outputs, and writing experiment logs.

## Reproducible Workflow

A useful reproduction record should include the scientific task, model or tool, input files, environment setup, errors and fixes, generated outputs, result inspection, and current limitations.

## What I Learned

AI for Science requires both modeling knowledge and workflow discipline. The important step is learning how to translate a scientific problem into a clear computational task and then document the experiment honestly.

## Current Limitations

My current understanding is still introductory. I do not yet claim domain expertise in biology, chemistry, materials science, or clinical research. I am building the ability to read tasks, understand representations, run code, and document reproducible workflows.

## Next Learning Steps

I will continue studying molecular docking, graph learning, protein models, scientific agents, and small reproducible experiments connected to real AI for Science tools.
