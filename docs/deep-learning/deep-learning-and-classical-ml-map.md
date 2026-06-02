---
title: Deep Learning and Classical Machine Learning Foundations
sidebar_position: 1
---

# Deep Learning and Classical Machine Learning Foundations

This note is part of my first-stage AI learning record. Its purpose is not to list model names, but to build a structured map of why different models exist, what data structures they assume, how they work, and where their limitations begin.

At this stage, my goal is to develop a model-thinking framework before moving deeper into paper reading and code reproduction. When I encounter a model, I want to ask four questions:

- What kind of data structure is it designed for?
- What mechanism does it use to extract patterns?
- What type of task is it suitable for?
- Under what conditions may it fail?

## 1. A First-Principles View of Models

A machine learning model should not be understood only by its name or popularity. The more fundamental question is: **what structure exists in the data, and how does the model capture that structure?**

Different models are built around different assumptions:

| Question | First-principles answer |
|---|---|
| What does a model solve? | It converts structure in input data into predictions, classifications, generations, or decisions. |
| What does a model assume? | Each model assumes something about the data, such as locality, sequential order, relational structure, linearity, sparsity, or dynamics. |
| Why does a model work? | It works when its architecture matches the structure of the data. |
| Why does a model fail? | It fails when its assumptions do not match the data, or when its complexity exceeds what the data can support. |

This framework connects later to two important directions: AI for Science, where molecules, proteins, materials, and scientific systems must be represented in modelable forms; and Physical AI, where perception, state modeling, and interaction with real physical systems become central.

## 2. AI, Machine Learning, and Deep Learning

Artificial Intelligence is the broad goal: enabling machines to perform intelligent behavior such as understanding, prediction, generation, planning, and decision-making.

Machine Learning is one major way to achieve this goal. Instead of manually programming every rule, we allow models to learn patterns from data.

Deep Learning is a powerful branch of machine learning that uses multi-layer neural networks to learn hierarchical representations. It is especially strong in images, text, speech, multimodal data, and scientific representation learning.

| Level | Essence | Intuition |
|---|---|---|
| Artificial Intelligence | Making machines show intelligent behavior. | The highest-level goal. |
| Machine Learning | Learning patterns from data to form models. | A major method for building AI. |
| Deep Learning | Learning abstract features through multi-layer neural networks. | A strong branch of ML for complex data. |

The basic logic of deep learning is hierarchical representation learning: low-level features are extracted first, then combined into higher-level meanings. When the prediction is wrong, backpropagation adjusts parameters to improve the model.

## 3. Three Learning Paradigms

Machine learning tasks can be broadly divided into supervised learning, unsupervised learning, and reinforcement learning.

| Paradigm | Training signal | Core question | Typical tasks |
|---|---|---|---|
| Supervised Learning | Labeled answers. | How can inputs be mapped to correct outputs? | House price prediction, disease classification, spam detection. |
| Unsupervised Learning | No labels; only data itself. | What structure exists inside the data? | Clustering, dimensionality reduction, anomaly detection. |
| Reinforcement Learning | Reward signals. | How should an agent act to maximize long-term reward? | Game AI, robot control, path planning. |

Supervised learning is like training with standard answers. Unsupervised learning searches for structure without labels. Reinforcement learning forms strategies through interaction and feedback. These paradigms are not ranked; they correspond to different problem settings.

## 4. Deep Learning Model Modules

### 4.1 CNN: Local Spatial Structure in Images

CNNs are designed for grid-like data, especially images. Images have local spatial correlations: nearby pixels often form edges, textures, and shapes. A convolutional kernel slides over local windows and extracts hierarchical features.

| Dimension | Key point |
|---|---|
| Data structure | Images are two-dimensional pixel grids with local spatial correlation. |
| Core mechanism | Convolution kernels slide over local regions to extract edges, textures, and shapes. |
| First-principles view | Image meaning often appears locally first and is then combined into global structure. |
| Limitation | CNNs are not naturally strong at long-range global relationships or non-grid data. |

### 4.2 RNN and GRU: Sequence Memory and Gated Updates

RNNs are designed for sequential data such as text, speech, time series, and sensor streams. They process input step by step and pass hidden states forward. Their main weakness is that early information may fade in long sequences, leading to long-term dependency and gradient vanishing problems.

GRU is an improved member of the RNN family. It uses update gates and reset gates to decide what to remember and what to forget.

| Model | Core mechanism | First-principles view | Suitable boundary |
|---|---|---|---|
| RNN | Reads sequences step by step and passes hidden states forward. | Current judgment depends on current input and past memory. | Memory can decay in long sequences. |
| GRU | Uses gates to selectively keep or discard information. | Not all past information is equally important. | More stable and lighter than ordinary RNNs, but less parallel than Transformer. |

A key correction: **GRU is not a patch for Transformer. It is an improved version of RNN, designed to address long-term dependency problems in traditional recurrent networks.**

### 4.3 Transformer: Global Relationship Modeling with Attention

Transformer uses attention to model relationships across an entire sequence. Unlike RNNs, it does not need to read tokens strictly step by step.

| Component | Function |
|---|---|
| Self-Attention | Calculates relationships between any token and other tokens in the sequence. |
| Multi-Head Attention | Observes relationships from multiple representation subspaces. |
| Positional Encoding | Adds order information because Transformer itself does not read sequentially. |
| Encoder / Decoder | Encodes input representations and decodes outputs. |

The first-principles idea of Transformer is that language understanding should not rely only on neighboring order. Each token should be able to directly observe the global context.

Multi-head attention can be understood as multiple analytical perspectives working at the same time: one head may focus on syntax, another on reference, another on long-distance dependency.

### 4.4 GRU vs Transformer

| Dimension | GRU | Transformer |
|---|---|---|
| Processing style | Processes sequentially by time step. | Processes the whole sequence in parallel. |
| Long-term dependency | Stronger than ordinary RNN, but still limited. | Directly models global relationships. |
| Computational cost | Lighter. | Usually requires more computation. |
| Typical scenario | Small models, low-compute settings, real-time sequences, embedded tasks. | NLP, large models, multimodal models, long-context tasks. |

A practical conclusion: in large-scale NLP and foundation model settings, Transformer is usually stronger. However, in small-scale, low-compute, real-time sequence tasks, GRU can still have engineering value.

### 4.5 ResNet: Learning the Change Rather Than Rewriting Everything

ResNet does not force each layer to relearn a complete mapping. Instead, it allows a layer to learn the residual change on top of the original input.

The core form is:

```text
H(x) = F(x) + x
```

| Part | Meaning |
|---|---|
| `x` | The original input, passed directly through a shortcut connection. |
| `F(x)` | The residual, or the part that needs to be changed. |
| `H(x)` | The final output, combining the original information and residual correction. |

The first-principles idea is that very deep networks are difficult to train and may lose information. Residual connections provide a high-speed path for information and gradients, allowing the network to revise an original representation gradually instead of rewriting everything at every layer.

### 4.6 GAN: Approximating a Real Distribution Through Adversarial Training

GAN contains two roles: a generator and a discriminator.

| Role | Task |
|---|---|
| Generator | Generates samples and tries to make them close to real data. |
| Discriminator | Judges whether a sample is real or generated. |

The first-principles idea of GAN is game-like competition. The generator improves its ability to create realistic samples, while the discriminator improves its ability to detect fake samples. Ideally, this pushes the generated distribution closer to the real distribution.

A common risk is **mode collapse**, where the generator repeatedly produces similar samples and loses diversity.

### 4.7 GNN: Modeling Objects in a Relational Network

Graph Neural Networks are designed for data where objects are connected by relationships.

| Concept | Meaning |
|---|---|
| Node | An entity, such as an atom, person, road intersection, or concept. |
| Edge | A relationship, such as a chemical bond, social connection, road, or knowledge link. |
| Message Passing | Nodes receive information from neighbors through edges and update their representations. |
| Graph Embedding | Nodes or entire graphs are encoded into vectors for prediction. |

The first-principles idea of GNN is that many objects cannot be understood only by their own attributes. Their meaning also comes from their position and neighbors in a relationship network.

This is especially important for AI for Science. Molecules can be represented as graphs of atoms and chemical bonds. Materials, protein interactions, and physical systems also often contain complex relational structures.

## 5. Concept Correction: RBF Is Not Positional Encoding

RBF and positional encoding may both feel related to "position," but they solve different problems.

| Concept | Problem solved | Core object |
|---|---|---|
| RBF / Radial Basis Function | Computes response or similarity based on distance to a center. | Distance, center, nonlinear mapping. |
| Positional Encoding | Adds order information to Transformer. | Token position in a sequence. |

RBF is about distance-based similarity. Positional encoding is about sequence order.

## 6. Classical Machine Learning Model Modules

### 6.1 Linear Regression: Predicting Continuous Values

| Dimension | Key point |
|---|---|
| Task | Predict continuous values such as house prices, sales, or costs. |
| Core assumption | The relationship between input variables and output can be approximated linearly. |
| Optimization objective | Minimize squared error between predictions and true values. |
| Limitation | Limited ability to express complex nonlinear relationships. |

### 6.2 Logistic Regression: Classification Through a Regression Form

Logistic regression contains the word "regression," but it is commonly used for classification, especially binary classification. It first computes a linear score and then passes it through the sigmoid function to obtain a probability between 0 and 1.

| Dimension | Key point |
|---|---|
| Task | Classification, such as disease prediction, default risk, or spam detection. |
| Key function | Sigmoid converts a continuous score into probability. |
| First-principles view | A simple and interpretable decision boundary is adjusted through a loss function. |
| One-sentence summary | It uses a regression-style form to solve classification tasks. |

### 6.3 Regularization: Limiting Freedom for Better Generalization

When there are too many variables or parameters, a model may perform well on the training set but fail on new data. Regularization adds constraints to model freedom: the model should fit the data, but its parameters should remain controlled.

Regularization is not about minimizing training error as much as possible. It is about making the model more reliable on unseen data.

### 6.4 Lasso and Ridge: Removing Variables vs Shrinking Variables

| Model | Regularization | Intuition | Core effect | Suitable scenario |
|---|---|---|---|---|
| Lasso | L1: `sum(|w|)` | Penalizes the absolute values of coefficients. | Some coefficients can become exactly 0, enabling feature selection. | High-dimensional features, noisy variables, interpretability. |
| Ridge | L2: `sum(w^2)` | Penalizes the squared values of coefficients. | Coefficients are shrunk but usually not exactly 0. | Multicollinearity, stable prediction, keeping all variables. |

The first-principles distinction is: Lasso seeks sparsity, while Ridge seeks stability. Lasso is like removing variables; Ridge is like shrinking variables.

### 6.5 Why L1 Can Be Sparse and L2 Usually Is Not

| Question | Explanation |
|---|---|
| Why can L1 push coefficients to 0? | The absolute value function has a sharp corner at 0, so optimization can stop at exactly 0 more easily. |
| Why does L2 usually only approach 0? | The square function is smooth. As parameters approach 0, the penalty becomes smaller, so it tends to shrink continuously rather than set parameters exactly to 0. |
| Geometric intuition | L1 has corners in its constraint region, so optimal solutions often fall on axes. L2 is smooth, so solutions are more likely to be spread across dimensions. |

## 7. Summary Map

| Model / Method | Object handled | Core mechanism | One-sentence judgment |
|---|---|---|---|
| CNN | Images / grid data | Local convolution | Extracts features from local spatial structure. |
| RNN | Sequential data | Hidden state recurrence | Keeps historical information step by step. |
| GRU | Sequential data | Gated memory | Selectively remembers and forgets. |
| Transformer | Sequence / multimodal data | Attention mechanism | Directly models global relationships. |
| ResNet | Deep networks | Residual connection | Learns changes while preserving original information. |
| GAN | Generation tasks | Generator-discriminator competition | Approximates a real distribution through adversarial training. |
| GNN | Graph-structured data | Message passing | Understands objects through relational networks. |
| Linear Regression | Continuous prediction | Linear fitting | Predicts values through linear relationships. |
| Logistic Regression | Classification | Sigmoid probability mapping | Uses a regression form for classification. |
| Lasso | High-dimensional linear models | L1 regularization | Removes variables and creates sparsity. |
| Ridge | Multicollinearity / overfitting control | L2 regularization | Shrinks variables and improves stability. |

## 8. Open Questions for Further Study

The next learning stage should move from intuitive understanding toward mechanism-level explanation:

1. How can the sparsity of L1 regularization be explained more rigorously through geometry and optimization?
2. Is Transformer always better than GRU in sequence tasks? Which low-compute or real-time tasks may still favor GRU?
3. How can GNN jointly model atoms, chemical bonds, and three-dimensional structures in molecular property prediction?
4. Can GAN mode collapse be reduced through Wasserstein GAN, regularization, or diversity constraints?
5. How can these foundational models transfer to AI for Science tasks involving molecules, proteins, materials, and world models?

## 9. Next Learning Steps

My next step is to expand from the first model map into classical machine learning algorithms and then connect them to scientific modeling.

| Priority | Topic | Learning goal |
|---|---|---|
| 1 | Naive Bayes | Understand probabilistic modeling and conditional independence assumptions. |
| 2 | KNN | Understand distance-based non-parametric classification. |
| 3 | SVM | Understand maximum margin, kernel functions, and RBF. |
| 4 | Decision Tree / Random Forest | Understand tree models, ensemble learning, and interpretability. |
| 5 | Boosting / XGBoost | Understand how weak learners are combined sequentially. |
| 6 | K-means / PCA | Build foundations in unsupervised learning and dimensionality reduction. |
| 7 | Metrics | Review Accuracy, Precision, Recall, F1, AUC, MAE, and RMSE. |
| 8 | Bias-Variance Tradeoff | Understand overfitting, underfitting, and generalization. |

## 10. What I Learned

The most important takeaway from this note is that different models correspond to different assumptions about data structure and task formulation. CNNs correspond to local spatial structure. RNNs and GRUs correspond to sequential memory. Transformers correspond to global relationship modeling. GNNs correspond to relational networks. ResNet addresses deep network training. GAN addresses generative distribution approximation. Lasso and Ridge control model complexity through regularization.

My goal is not to memorize model names, but to understand why each model exists, when it works, when it fails, and how it may transfer to real AI and AI for Science problems.

## 11. Current Limitations

This note is still a first-stage conceptual map. It does not yet include mathematical derivations, code implementations, or benchmark comparisons. Some explanations are intentionally simplified so that I can build a stable high-level framework before moving into deeper technical details.

## 12. Next Learning Steps

The next step is to connect these concepts with implementation. I plan to write small code examples, reproduce simple experiments, and connect these foundational models to AI for Science tasks such as molecular graphs, protein representation, and scientific workflow documentation.
