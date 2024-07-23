---
title: 112 Path Sum
date: 2024-07-22
tags:
  - easy
  - binary tree
---

# Intuition
We are required to track the sum of our current values and when we reach a leaf node, we verify if our sum has reached the `targetSum`. If it has, good on us - if no, keep searching.

The line `res = dfs(node.left, total+node.val) or dfs(node.right, total+node.right)` is very important here - it basically says, look for the condition of the path sum, in the left OR the right sub-tree.

# Code

### Python3

```python
def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
    def dfs(node: TreeNode, total: int) -> bool:
        if not node: return False

        if total + node.val == targetSum and not node.left and not node.right:
            return True
        
        res = dfs(node.left, total + node.val) or dfs(node.right, total + node.val)

        return res
        

    return dfs(root, 0)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all nodes in the tree.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
