---
title: 1315 Sum of Nodes with Even-Valued Grandparent
date: 2024-08-23
tags:
  - medium
  - binary tree
---

# Intuition

We track the current node, it's parent and it's grand-parent all in one scope.


When we are advancing in the tree - the current node becomes the parent, and the previous parent becomes the current grand-parent.


Then we just check if `grandparent` is not None and `grandparent.val % 2 == 0` - if yes then add to answer.

# Code

### Python3

```python
def sumEvenGrandparent(self, root: TreeNode) -> int:
    
    def dfs(node, parent, grandparent):
        if not node: return 0

        total = 0
        
        if grandparent and grandparent.val % 2 == 0:
            total += node.val
        
        total += dfs(node.left, node, parent)
        total += dfs(node.right, node, parent)

        return total
    
    return dfs(root, None, None)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all tree nodes once.

- **Memory**

  The memory usage is $O(H)$ where H is the height of the tree.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
