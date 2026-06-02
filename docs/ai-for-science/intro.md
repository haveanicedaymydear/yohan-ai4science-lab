---
title: AI for Science Knowledge Map
sidebar_position: 1
---

# AI for Science Knowledge Map

This note records my first-stage understanding as I move from general machine learning into the context of AI for Science. It is not meant to be an encyclopedic summary. Its purpose is to build a structured map for understanding how complex scientific questions can be transformed into AI tasks that are modelable, computable, verifiable, and iteratively improved.

At this stage, I do not claim to be a domain expert in biology, chemistry, physics, or materials science. My goal is to understand how scientific questions can be translated into AI workflows, including task definition, input-output formulation, data representation, model selection, evaluation, and reproducible experimentation.

## 1. AI for Science: From Scientific Problems to Modelable Tasks

AI for Science does not mean using AI to simply summarize papers or replace scientists. Its core idea is to bring AI into the scientific research process: modeling, prediction, search, simulation, experiment design, result analysis, and hypothesis iteration.

Traditional scientific methods have not failed. Newtonian mechanics, Keplerian modeling, statistical physics, quantum chemistry, and numerical simulation remain the foundation of scientific explanation. AI for Science becomes important because many real scientific systems are high-dimensional, multi-body, multi-scale, noisy, and extremely large in search space. Manual derivation, brute-force enumeration, or expensive experiments alone can be inefficient.

AI can help learn patterns, compress search spaces, propose candidates, and accelerate validation.

A simplified transformation chain is:

```text
Scientific question
-> Data representation
-> Model structure
-> Training objective
-> Evaluation metric
-> Experimental validation
-> Next hypothesis
```

Once this transformation is possible, AI becomes more than an information tool. It becomes part of the scientific workflow.

## 2. World Model: Learning What-If Reasoning

A world model is not only about predicting the physical world in a narrow sense. More generally, it learns the state representation and dynamic evolution of a system. The system may be a robotic environment, molecular system, material structure, physical simulation, or even an abstract experimental process.

A world model usually needs to do two things:

1. Compress complex observations into key state representations.
2. Learn how these states evolve under different conditions or actions.

This allows an AI system to perform internal **what-if reasoning**: if a condition changes, what may happen next?

JEPA-like ideas emphasize that a model does not need to predict every pixel or every surface detail. Instead, it should learn more abstract, stable, and predictable latent representations. This helps me understand that intelligence is not only about remembering details, but about extracting variables that actually affect the future.

The value of a world model is that it helps AI move from recognizing the current state toward reasoning about state evolution and planning.

## 3. Scientific Agent: A Research Workflow System, Not a Single Model

A Scientific Agent is not simply a single model or a chatbot. It is a workflow system designed for scientific tasks. It may use an LLM as a language and reasoning interface, while connecting to papers, databases, APIs, code environments, simulators, and experiment logs.

A general LLM can help read papers, explain concepts, or generate code snippets. A Scientific Agent aims to organize a more complete research process:

```text
literature search
-> problem definition
-> code repository inspection
-> environment setup
-> minimal experiment execution
-> result analysis
-> error logging
-> next-step planning
```

The key question is not only whether AI can answer questions. The deeper question is whether AI can help structure a research workflow.

In my current understanding, a Scientific Agent should not replace the researcher. It should support human-supervised research by making the process more structured, continuous, and reproducible.

## 4. Research Automation: Making Research Traceable, Reproducible, and Iterative

The value of research automation is not simply saving time. Its deeper value is to make the research process structured and traceable.

A useful experiment record should include:

- What is the research question?
- What is the hypothesis?
- What are the inputs and outputs?
- Which code version is used?
- How is the environment configured?
- What command is run?
- What parameters are used?
- What metrics are produced?
- What errors occur?
- What should be changed next?

If an experiment only remains at the level of "I ran it once," its value is limited. A stronger workflow records the process so that it can be compared, reproduced, and improved.

My current Yohan Lab is a lightweight, human-in-the-loop research documentation workflow:

```text
learning material input
-> concept organization
-> document generation
-> Git version control
-> website deployment
-> review and future reproduction
```

It is not a complete research automation system yet, but it trains me to turn learning and experiments into traceable research assets.

## 5. Protein Structure Prediction: From Sequence to Structure

Protein structure prediction aims to predict a protein's three-dimensional structure from its amino acid sequence. The scientific logic is that sequence affects structure, and structure affects function. If structure can be predicted reliably from sequence, biological research and drug discovery can become more efficient.

AlphaFold is a representative system in this direction. Its importance is not only that it predicts protein structures, but also that it demonstrates how deep learning can enter core scientific modeling problems.

RoseTTAFold is another important representative in protein structure prediction. At my current stage, I do not need to fully reproduce these large systems. However, I need to understand their task definition:

```text
Input: protein sequence and related biological/evolutionary information
Output: predicted 3D structure and confidence estimation
```

Protein structure prediction is a representative task showing how scientific objects move from sequence representation into structural modeling.

## 6. Molecular Docking and DiffDock: From Candidate Molecules to Binding Poses

Molecular docking studies how a small molecule ligand may bind to a target protein. It is important in drug discovery because whether a candidate molecule can bind to a target affects later screening, optimization, and experimental validation.

A typical docking task includes:

```text
Input: protein structure + ligand representation
Output: possible binding pose, conformation, or confidence score
```

Traditional docking tools rely on search and scoring functions. DiffDock represents a generative approach to molecular docking: it treats docking pose prediction as a generative modeling problem, generates candidate binding poses, and ranks them with confidence-related scoring.

In my learning plan, DiffDock is useful not because it proves drug discovery ability, but because it provides a concrete entry point for practicing an AI for Science reproduction workflow: reading a repository, identifying inputs and outputs, running inference, inspecting generated files, and recording errors and results.

## 7. GNN for Molecules: Turning Chemical Structure into Relational Representation

The first-principles idea behind GNN for Molecules is clear: molecules naturally have graph structure. Atoms can be represented as nodes, and chemical bonds can be represented as edges. A molecule's properties depend not only on individual atoms, but also on how atoms are connected.

Graph neural networks use message passing to allow nodes to exchange information through edges. This gradually encodes local chemical structure into a representation of the whole molecule.

This representation can be used for:

- molecular property prediction
- toxicity prediction
- activity prediction
- drug screening
- materials property modeling

For me, GNN for Molecules is an important bridge between general GNN knowledge and AI for Science practice. A possible small project would start from SMILES input, convert molecules into molecular graphs, and use a simple GCN or GIN for graph-level prediction.

## 8. Molecular Dynamics: From Static Structures to Dynamic Evolution

Molecular Dynamics focuses on how atoms and molecules move over time. It does not only study a static structure. It simulates dynamic trajectories under force fields, energy landscapes, and time-step updates.

This direction is naturally connected to world models. A molecular system is a dynamic system. Scientists care not only about what the structure is at one moment, but also how it evolves under different temperatures, force fields, solvents, or perturbations.

Possible roles of AI include:

- accelerating expensive simulations
- learning surrogate models
- predicting trajectories
- approximating force fields
- assisting experimental condition selection

At my current stage, I need to first understand basic concepts such as force field, trajectory, time step, and energy landscape. Later, I can explore tools such as OpenMM for minimal simulations.

Molecular Dynamics extends AI for Science from static structure prediction toward understanding system evolution.

## 9. GNoME: Generation, Prediction, and Validation in Materials Discovery

GNoME is a representative work in AI for materials discovery. It reflects a typical AI for Science loop in materials science:

```text
generate candidate structures
-> predict stability
-> validate with computational methods
-> feed results back into the discovery process
```

Unlike proteins and molecules, materials discovery involves crystal structures, elemental composition, stability, and physical property prediction. GNoME is important because it shows how AI can propose valuable candidates in a huge materials search space instead of only analyzing existing data.

At my current stage, I do not need to reproduce GNoME. I need to understand its position in the AI for Science map: it represents the materials science direction and shows how graph networks, candidate generation, and computational validation can be combined into a scientific discovery workflow.

## 10. My Role in Cross-Disciplinary Learning

When working with domain experts, I should not present myself as a biology, chemistry, or materials science expert. Mechanisms, targets, and experimental meanings must be confirmed by specialists.

My current role is to develop AI/CS-side translation ability. This means learning how to decompose a scientific question into:

- task definition
- input and output
- data format
- model choice
- evaluation metrics
- experiment workflow

For example, if the problem is protein-ligand binding, I would first clarify the target protein, candidate ligand, available structure file, task goal, and data source. Then I would decide whether the problem is suitable for traditional docking, a DiffDock-style model, or first-stage literature and code reproduction.

If the problem is molecular property prediction, I would consider how to convert SMILES into molecular graphs and use GNNs for graph-level prediction. If the problem involves dynamic behavior, I would consider whether Molecular Dynamics, trajectory analysis, or surrogate modeling is needed.

The goal is not to replace domain experts, but to translate scientific questions into executable AI workflows.

## 11. Current Boundary and Next Learning Route

I am still at an early stage of AI for Science learning. The most important task now is not to pretend that I have mastered all representative systems, but to understand the task definition, input-output structure, representative models, and minimal practical entry points of each direction.

My next learning route includes:

1. Building a Scientific Agent workflow page to describe a human-in-the-loop process from papers to experiments.
2. Creating an experiment log template so that each experiment records the research question, input, output, environment, command, metrics, errors, and next steps.
3. Starting with a minimal DiffDock reproduction to practice repository reading, inference execution, result inspection, and error logging.
4. Connecting general AI foundations to scientific tasks through small, reproducible experiments.

## 12. What I Learned

This knowledge map helped me move from general AI model learning toward the AI for Science context.

The key of AI for Science is not memorizing names such as AlphaFold, DiffDock, or GNoME. The deeper logic is understanding how scientific problems become data representations, how models learn from them, how results are validated, and how the process is recorded for iteration.

The starting point of AI for Science is not "I know many models." It is:

```text
Can I turn a scientific question into an executable, verifiable, and documented AI task?
```

## 13. Current Limitations

This note is a conceptual map. It does not yet include deep mathematical details, complete paper reviews, or full system reproductions. My understanding of biological, chemical, and materials-specific mechanisms remains early-stage and should be developed with domain knowledge.

## 14. Next Learning Steps

The next step is to turn this map into practice. I plan to:

- read selected README files and papers more carefully;
- create a reusable experiment log template;
- run small code reproduction tasks;
- record input, output, environment, command, error, and result;
- gradually connect AI models with real scientific workflow examples.
