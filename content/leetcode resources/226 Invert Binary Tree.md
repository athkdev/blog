---
title: 226 Invert Binary Tree
date: 2024-08-19
tags:
  - medium
  - binary tree
---

# Intuition

# Code

### Python3

```python
def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
    if not root: return None

    root.left, root.right = root.right, root.left

    self.invertTree(root.left)
    self.invertTree(root.right)

    return root
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting every node in the tree.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure (other than the input binary tree).

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
