---
title: Classical Machine Learning Algorithms
sidebar_position: 2
---

# Classical Machine Learning Algorithms

This note organizes my current understanding of classical machine learning algorithms. The goal is to understand what each method assumes, what kind of problem it solves, and how it can serve as a baseline for deeper AI models.

## Probability-Based Models

Naive Bayes is a probabilistic classifier based on Bayes' theorem. It assumes features are conditionally independent given the class label. Logistic regression is a linear model for classification and is useful for understanding loss functions, regularization, and interpretability.

## Distance-Based Models

KNN predicts by looking at the most similar samples in the training set. K-means groups samples by minimizing distance to cluster centers.

## Boundary-Based Models

SVM tries to find a decision boundary with a large margin. Kernel methods allow SVMs to model nonlinear boundaries. Decision trees split data according to feature rules and can model nonlinear patterns, but a single tree may overfit.

## Ensemble Models

Random forests combine many decision trees to reduce variance. Boosting methods build models sequentially, where later models focus on errors made by earlier ones. Gradient Boosting, XGBoost, LightGBM, and CatBoost are strong tools for structured datasets.

## Dimensionality Reduction

PCA finds directions of maximum variance and projects data into a lower-dimensional space. It is useful for visualization, compression, denoising, and understanding feature structure.

## Model Evaluation

Classification can use accuracy, precision, recall, F1 score, ROC-AUC, and confusion matrices. Regression can use MAE, MSE, RMSE, and R-squared. Unsupervised learning often requires more careful interpretation because labels may not exist.

## What I Learned

Classical algorithms teach different modeling ideas: probability, distance, decision boundaries, tree-based rules, ensemble learning, and feature transformation.

## Current Limitations

This note focuses on conceptual organization. I still need more implementation practice, especially comparing models on the same dataset with proper preprocessing and validation.

## Next Learning Steps

I will build small experiments for classification, regression, clustering, and dimensionality reduction, then compare classical baselines with neural network approaches.
