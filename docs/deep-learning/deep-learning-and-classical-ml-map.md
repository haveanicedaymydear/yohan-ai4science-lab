---
title: Deep Learning and Classical Machine Learning Foundations
sidebar_position: 1
---

# Deep Learning and Classical Machine Learning Foundations

This note is my first concept map for connecting classical machine learning and deep learning. I use it to clarify what different model families are designed to do, what kind of data structure they learn from, and how they may connect to future AI for Science projects.

## AI, Machine Learning, and Deep Learning

Artificial intelligence is a broad field for building systems that can reason, predict, generate, decide, or act. Machine learning is one important part of AI: it allows models to learn patterns from data instead of relying only on hand-written rules.

Deep learning is a major branch of machine learning. It uses multi-layer neural networks to learn representations from data. In image recognition, a deep model may first learn edges, then textures, then object parts, and finally full object-level patterns.

## Three Learning Paradigms

Supervised learning uses labeled examples. The model compares predictions with known answers and updates its parameters to reduce error. Typical tasks include classification, regression, spam detection, disease prediction, and price estimation.

Unsupervised learning works without explicit labels. It tries to discover structure in data, such as clusters, low-dimensional representations, anomalies, or hidden groups.

Reinforcement learning studies how an agent learns decisions through interaction and reward. It is useful for games, robotics, path planning, and control tasks where long-term outcomes matter.

## Deep Learning Model Map

CNNs learn local spatial patterns in image-like data. RNNs process sequences step by step. GRUs improve RNNs with gates that decide what to keep, forget, and update. Transformers use self-attention to model token relationships in parallel. Multi-head attention gives a model multiple representation spaces. Positional encoding gives order information to attention-based models.

RBF, or Radial Basis Function, is different from positional encoding. RBF focuses on distance from a center point and is often used in kernel methods, interpolation, and classical machine learning. Positional encoding focuses on sequence order.

ResNet uses residual connections:

```text
H(x) = F(x) + x
```

GANs train a generator and discriminator together. GNNs are designed for node-edge structure and are relevant to molecules, materials, and interaction networks.

## Classical Machine Learning Connection

Classical machine learning models remain important because they often provide interpretable baselines and strong performance on structured data. Models such as linear regression, logistic regression, decision trees, random forests, SVMs, Naive Bayes, KNN, PCA, and clustering methods help me understand probability, distance, decision boundaries, and feature engineering.

## What I Learned

Different model families are not isolated names. They can be understood by asking what structure the model is trying to learn: local image structure, sequential dependency, global attention, graph relationships, probability distributions, or decision boundaries.

## Current Limitations

This note is a concept map rather than a complete mathematical treatment. I still need to implement more models from scratch and compare them with library-based baselines.

## Next Learning Steps

I will connect these model families to small experiments, especially graph learning, molecular modeling, and reproducible AI for Science workflows.
