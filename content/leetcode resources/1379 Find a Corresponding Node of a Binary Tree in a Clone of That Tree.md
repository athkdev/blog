---
title: 1379 Find a Corresponding Node of a Binary Tree in a Clone of That Tree
date: 2024-07-22
tags:
  - easy 
  - binary tree
---

# Intuition

This is a straight-forward tree problem. We are provided with two clone trees, and are required to return a corresponding node of type `TreeNode` in `cloned`.

So, we traverse both the trees at the same pace and then once we find the `target` node in `original`, we return the `cloned` node at that instant.


# Code

### Python3

```python
def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
    if not original or not cloned: return None

    if original == target: return cloned

    return self.getTargetCopy(original.left, cloned.left, target) or self.getTargetCopy(original.right, cloned.right, target)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all nodes in the tree.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
