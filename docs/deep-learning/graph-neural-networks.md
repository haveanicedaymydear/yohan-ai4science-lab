---
title: Graph Neural Networks
sidebar_position: 3
---

# Graph Neural Networks

Graph Neural Networks are deep learning models designed for data represented as nodes and edges. They are important in AI for Science because many scientific objects naturally have relational structure, including molecules, proteins, materials, citation networks, and interaction systems.

## My Current Understanding

A graph contains nodes, edges, and features. In a molecular graph, atoms can be treated as nodes and chemical bonds can be treated as edges. A GNN updates each node representation by aggregating information from neighboring nodes.

```text
Graph structure + node features + edge features
-> message passing
-> updated node representations
-> graph-level or node-level prediction
```

## Technical Summary

Common GNN ideas include message passing, neighborhood aggregation, graph convolution, graph attention, and graph-level pooling. In AI for Science, GNNs can support molecular property prediction, binding affinity estimation, material property prediction, and interaction modeling.

## What I Learned

GNNs are useful when the relationship between objects matters as much as the objects themselves.

## Current Limitations

My current understanding focuses on the conceptual workflow. I still need more practice implementing message passing layers and comparing GNN variants on real datasets.

## Next Learning Steps

I will study molecular graph construction, graph convolution, graph attention networks, and small property prediction experiments.
