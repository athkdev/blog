---
title: 700 Search in a Binary Search Tree
date: 2024-07-23
tags:
  - easy
  - binary search tree
---

# Intuition

We are required to search a node in a Binary Search Tree with respect to it's value. Carefully note, that we are provided with a Binary Search Tree and not just a Binary Tree. 

A Binary Search Tree is a special Binary Tree where `root.left.val < root.val` and `root.right.val > root.val`. It also does not allow duplicates in the tree.

So, we conditionally look only into the left subtree or the right subtree. This makes searching in the tree super efficient. Because unlike a regular Binary Tree where to search something you would make two function calls (order = 2), here you make only one function call for the next search space (order = log N).

# Code

### Python3

```python
def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
    if not root: return None

    if root.val == val: return root

    if val < root.val:
        return self.searchBST(root.left, val)
    else:
        return self.searchBST(root.right, val)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(log N)$ since the search space reduces by half every iteration, thus making searching in a BST super efficient.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
