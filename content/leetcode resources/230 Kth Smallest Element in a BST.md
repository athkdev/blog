---
title: 230 Kth Smallest Element in a BST
date: 2024-08-19
tags:
  - medium
  - bst
---

# Intuition

We need the k-th smallest element in the BST. k-th smallest means think of an array with elements sorted ascendingly. Then `arr[k]` is the answer.

Well, to solve this problem we could put all the elements in an array, sort it and return `arr[k]`. But it's unnecessary. Why? Because we are working with a `Binary Search Tree` which is a special type of `Binary Tree` where every node left to it's parent node is smaller. Similarly, every node right to it's parent node is greater w.r.t. it's parent node.

We could use this property to get sorted elements during traversal in `O(N)` time. Think about it, if my left nodes are smaller than the parent, and right nodes are greater than the parent - my left-most node would be the smallest element in the tree, and right-most element would be the largest element.


Meaning - to get elements in a sorted order, one must recursively make all `left` calls, work on them, then finally make all `right` calls. Sounds like `in-order` traversal.

# Code

### Python3

```python
def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
    self.k = k
    self.res = 0

    def dfs(node, cnt):
        if not node: return

        dfs(node.left, cnt)

        self.k -= 1

        if self.k == 0:
            self.res = node.val
            return

        dfs(node.right, cnt)
    
    dfs(root, 0)
    return self.res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is number of nodes, but best case scenario is `O(K)`, where we return after k smallest elements have been traversed.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure (other than the input tree itself).

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
