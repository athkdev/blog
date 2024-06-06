---
title: 144 Binary Tree Preorder Traversal
tags:
    - medium
---


# 144. Binary Tree Preorder Traversal

This is a fundamental tree problem that requires us to collect the preorder traversal of a tree in a list and return it. A preorder traversal is a tree/graph traversal where you visit the first node (root in a case of a tree), and then it’s children.

# Code:

### Python

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []
        def dfs(root: Optional[TreeNode]):
            if root == None: return None

            res.append(root.val)

            dfs(root.left)
            dfs(root.right)

            return None
        
        dfs(root)

        return res
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be visiting all the nodes in the tree.
    
- Memory
    
    The memory usage is `O(1)` since we are not using any extra datastructure (usually the returning result array does not count, if it counts, then it’s `O(N)`).
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)