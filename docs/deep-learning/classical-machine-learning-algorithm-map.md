---
title: Classical Machine Learning Algorithms
sidebar_position: 2
---

# Classical Machine Learning Algorithms

This note is the second part of my machine learning foundation map. It focuses on classical machine learning algorithms and model evaluation.

The goal is not to memorize algorithm names, but to understand why each model exists, what type of problem it solves, how it works, when it is useful, and where its boundaries are.

## 1. Overview: Several Basic Ways of Thinking in Classical Machine Learning

This stage can be summarized into several modeling perspectives: probability, distance, boundary, rule structure, ensemble learning, and compression.

| Modeling perspective | Representative algorithms | First-principles idea |
|---|---|---|
| Probability | Naive Bayes | Use existing evidence to estimate class probabilities under uncertainty. |
| Distance | KNN / K-means | Similar samples should be closer; classification uses neighbors and clustering uses centers. |
| Boundary | SVM | Find a classification boundary with the largest safe margin. |
| Rule structure | Decision Tree | Break complex decisions into a sequence of if-else rules. |
| Ensemble | Random Forest / Boosting / XGBoost / LightGBM / CatBoost | Let multiple weak or unstable models cooperate to reduce variance or bias. |
| Compression | PCA | Find directions that preserve the most information in high-dimensional data. |

These algorithms are not isolated terms. Each is an answer to a different kind of modeling problem.

## 2. Core Algorithm Modules

### 2.1 Naive Bayes: Efficient Probabilistic Classification Through a Simple Assumption

| Dimension | Explanation |
|---|---|
| First-principles view | After observing a set of features, estimate which class the sample most likely belongs to. |
| Core mechanism | Use Bayes' theorem to calculate posterior probability, while assuming conditional independence of features given the class. |
| Input / Output | Input: a set of features. Output: class probabilities or final class label. |
| Strengths | Fast training, fast inference, works with small datasets, and is useful as a quick baseline for text and probability-based classification. |
| Limitations | The conditional independence assumption is strong; if features are highly correlated, probability estimates can be distorted. |

Naive Bayes does not mean the real world is simple. It uses a simplified assumption to obtain an efficient and interpretable classifier.

### 2.2 KNN: Labeled Neighbor Voting

| Dimension | Explanation |
|---|---|
| First-principles view | Similar samples should be close in feature space, so a new sample can be judged by nearby samples. |
| Core mechanism | Compute the distance between a new sample and training samples, select the nearest K neighbors, and classify through voting or weighted voting. |
| Input / Output | Input: labeled training samples and new sample features. Output: class label or numerical prediction. |
| Strengths | Almost no training is required. It is intuitive, easy to implement, and suitable for small, low-dimensional datasets where distance is meaningful. |
| Limitations | Prediction can be slow. It is sensitive to K, noise, outliers, feature scaling, and high dimensionality. |

A key limitation is the **curse of dimensionality**. In high-dimensional space, distances between samples become less stable, and the difference between nearest and farthest points may become less meaningful. Since KNN relies heavily on distance, it can fail easily in high-dimensional data.

### 2.3 SVM: Finding the Maximum-Margin Decision Boundary

| Dimension | Explanation |
|---|---|
| First-principles view | A classification boundary should not only separate samples, but also stay as far as possible from both classes. |
| Core mechanism | SVM finds the maximum-margin hyperplane. The boundary is determined by the closest key samples, called support vectors. Kernel functions allow SVM to handle nonlinear patterns without explicitly expanding high-dimensional features. |
| Input / Output | Input: feature vectors and labels. Output: classification boundary and predicted class. |
| Strengths | Effective for small to medium datasets, high-dimensional features, and relatively clear margins. |
| Limitations | Training can be expensive for large datasets. Kernel and parameter choices strongly affect performance. Interpretability can be limited. |

The core of SVM is not merely finding a line. It is finding the most stable boundary with the largest safety margin.

### 2.4 Decision Tree: Turning Decisions into Rule Paths

| Dimension | Explanation |
|---|---|
| First-principles view | A complex decision can be decomposed into a series of local questions. |
| Core mechanism | Split data by features so that samples in each leaf become as pure as possible. The final model is equivalent to a series of if-else rules. |
| Input / Output | Input: sample features. Output: class label or regression value. |
| Strengths | Highly interpretable, easy to visualize, suitable for tabular data, and able to capture nonlinear relationships. |
| Limitations | Deep trees can memorize noise in the training data and overfit. Constraints such as maximum depth, minimum samples, and pruning are often needed. |

Decision trees are powerful because they are clear. Their weakness is also clarity: they may turn random noise into rules.

### 2.5 Random Forest: Bagging and Collective Judgment

| Dimension | Explanation |
|---|---|
| First-principles view | A single decision tree can be unstable, but multiple diverse trees can make more reliable decisions together. |
| Core mechanism | Train many decision trees through random sampling of data and random selection of features, then aggregate predictions by voting or averaging. This is the idea of Bagging. |
| Input / Output | Input: structured features and labels. Output: ensemble classification or regression result. |
| Strengths | More stable than a single tree, more resistant to overfitting, suitable for tabular data, and able to provide feature importance. |
| Limitations | Less interpretable than a single tree. The model is larger and may not be ideal for high-dimensional sparse text data. |

Random Forest is a parallel ensemble of independent trees. Its diversity helps reduce the instability of a single decision tree.

### 2.6 Boosting / XGBoost: Sequential Error Correction and Residual Approximation

| Dimension | Explanation |
|---|---|
| First-principles view | One weak model may not solve a complex problem, but many weak models can correct one another step by step. |
| Core mechanism | Boosting trains models sequentially, with each round focusing on correcting previous errors. GBDT fits residuals, while XGBoost uses first-order and second-order gradient information for more refined optimization. |
| Input / Output | Input: structured data and labels. Output: a strong predictor formed by combining multiple weak learners. |
| Strengths | Strong performance on tabular data, competitions, and industrial modeling; capable of capturing complex nonlinear patterns. |
| Limitations | More parameters, more complex training, and still prone to overfitting if not controlled properly. |

If Bagging is parallel voting, Boosting is sequential correction.

### 2.7 LightGBM: Engineering Optimization for Large-Scale GBDT

| Dimension | Explanation |
|---|---|
| First-principles view | On large-scale data, a model must not only be accurate but also efficient to train. |
| Core mechanism | LightGBM uses histogram binning to compress continuous features into discrete bins, then searches split points at the bin level. It also uses optimizations such as GOSS and EFB. |
| Input / Output | Input: large-scale structured data. Output: gradient boosting tree model. |
| Strengths | Fast training, low memory usage, and strong performance on large tabular datasets. |
| Limitations | Histogram discretization may lose a small amount of precision; inappropriate parameters can still cause overfitting. |

LightGBM trades a small amount of precision for significant gains in training speed and memory efficiency.

#### Additional note: binning, EFB, and GOSS

Histogram binning compresses continuous values into discrete intervals. EFB bundles mutually exclusive sparse features to reduce dimensionality. GOSS keeps large-gradient samples and samples from small-gradient samples to improve training efficiency. These are all engineering optimizations, but they work at different levels.

### 2.8 CatBoost: Categorical Features and Ordered Boosting

| Dimension | Explanation |
|---|---|
| First-principles view | Real tabular data often contains many categorical features. Handling them stably while avoiding leakage is important for generalization. |
| Core mechanism | CatBoost is a strong GBDT-family model designed for categorical features. Ordered Boosting helps reduce target leakage and prediction shift. |
| Input / Output | Input: structured tabular data, especially with categorical features. Output: classification or regression result. |
| Strengths | Strong categorical feature handling, stable default performance, lower tuning burden, and good generalization. |
| Limitations | The training mechanism is more complex. On some extremely large tasks, training speed and resource usage must be considered. |

CatBoost is not only about reducing overfitting. It provides a more stable GBDT solution for categorical features and training bias.

### 2.9 K-means: Center-Based Clustering Without Labels

| Dimension | Explanation |
|---|---|
| First-principles view | Even without labels, samples can be organized into groups based on similarity. |
| Core mechanism | Preset K cluster centers, assign each sample to the nearest center, and repeatedly update center positions until stable. |
| Input / Output | Input: unlabeled feature vectors. Output: cluster labels and cluster centers. |
| Strengths | Simple, efficient, suitable for user segmentation, data exploration, image compression, and initial clustering. |
| Limitations | K must be specified in advance. It is sensitive to initial centers and outliers, and performs poorly on crescent-shaped, non-spherical, or uneven-density clusters. |

K-means lets unlabeled data organize itself around K centers.

### 2.10 PCA: Finding the View That Preserves the Most Information

| Dimension | Explanation |
|---|---|
| First-principles view | In high-dimensional data, not every direction is equally important. The most informative directions usually have the largest variance. |
| Core mechanism | PCA finds directions with maximum variance as principal components, then uses a small number of components to replace the original high-dimensional features. |
| Input / Output | Input: high-dimensional feature matrix. Output: lower-dimensional feature representation. |
| Strengths | Useful for dimensionality reduction, visualization, denoising, and feature compression. |
| Limitations | Principal components may be hard to interpret. PCA only captures linear structure and inevitably loses some information. |

PCA is like choosing a good viewing angle: it uses fewer dimensions to preserve the most variation.

## 3. Key Distinction: KNN vs K-means

KNN and K-means have similar names, but they solve different tasks.

| Dimension | KNN | K-means | One-sentence distinction |
|---|---|---|---|
| Learning type | Supervised learning | Unsupervised learning | KNN uses labels; K-means does not. |
| Meaning of K | Number of neighbors | Number of clusters | One looks at neighbors; the other defines groups. |
| Core task | Predict the class of a new sample | Automatically group data | One predicts, the other discovers structure. |
| Core mechanism | Neighbor voting | Center iteration | One relies on nearby samples; the other relies on centers. |

KNN is a supervised classification or regression method. K-means is an unsupervised clustering method.

## 4. Model Evaluation and Generalization

A model should not be judged only by whether it "works well." It must be evaluated by where it performs well, where it fails, and whether it can generalize to new data.

| Concept | First-principles explanation |
|---|---|
| Accuracy | Overall correctness; suitable for balanced classes. |
| Precision | Among samples predicted as positive, how many are truly positive. Useful when false positives are costly. |
| Recall | Among true positive samples, how many are recovered. Useful when false negatives are costly. |
| F1-score | A balance between Precision and Recall. |
| ROC-AUC | Measures the model's ability to rank positive and negative samples. |
| MAE / RMSE | Regression error metrics. RMSE is more sensitive to large errors. |
| Overfitting | Good training performance but poor performance on new data; usually high variance. |
| Underfitting | Poor performance on both training and testing data; usually high bias. |
| Bias-Variance Tradeoff | Simple models may have high bias; complex models may have high variance. The goal is to find a balance. |

Evaluation metrics transform intuition into comparable evidence. The purpose of evaluation is not only to report a score, but to understand error types, generalization ability, and task cost.

## 5. Compressed Summary

This stage can be summarized as follows:

- Naive Bayes uses conditional independence to turn complex evidence into probability contributions.
- KNN is labeled neighbor voting, suitable for small, low-dimensional data where distance is meaningful.
- SVM searches for the maximum-margin hyperplane, with support vectors determining the boundary.
- Decision Tree explains decisions through rule paths, but deep trees can overfit.
- Random Forest is Bagging: many trees are trained in parallel to reduce instability.
- Boosting is sequential error correction: later models correct earlier mistakes.
- XGBoost improves gradient boosting through engineering optimization and second-order information.
- LightGBM uses histogram binning, GOSS, and EFB to accelerate large-scale training.
- CatBoost is strong in categorical feature handling and Ordered Boosting.
- K-means is center-based unsupervised clustering.
- PCA is dimensionality reduction through maximum-variance directions.
- Model evaluation is not just about reporting a number; it is about explaining errors, generalization, and task-specific tradeoffs.

## 6. What I Learned

The most important lesson from this stage is that classical machine learning is not outdated. It provides foundational model thinking: probability, distance, boundary, rules, ensembles, compression, and evaluation.

These ideas remain important even when moving toward deep learning and AI for Science. Many scientific modeling tasks still require careful problem formulation, feature representation, baseline models, evaluation metrics, and generalization awareness.

## 7. Current Limitations

This note is still conceptual and does not yet include hands-on implementation for every algorithm. Some algorithms, such as XGBoost, LightGBM, and CatBoost, require deeper study of objective functions, regularization, parameter tuning, and real datasets.

## 8. Next Learning Steps

My next step is to connect these classical machine learning foundations to scientific modeling. This includes:

- Understanding how AI enters scientific discovery workflows.
- Studying world models and system dynamics.
- Learning scientific agents and research automation.
- Exploring protein structure prediction, molecular docking, molecular graphs, molecular dynamics, and materials discovery.
- Building small reproducible experiments that connect concepts with code and documented outputs.
