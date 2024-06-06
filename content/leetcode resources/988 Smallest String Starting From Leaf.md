---
title: 988 Smallest String Starting From Leaf
tags:
    - medium
---


# 988. Smallest String Starting From Leaf

Carry out usual `DFS` and keep track of current string that is getting created. Once you reach `leaves`, update the `smallest` current string. We are using an external variable for this which is why we have to use the `nonlocal` variable.

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
    def smallestFromLeaf(self, root: Optional[TreeNode]) -> str:
        def dfs(node: TreeNode, curStr: str):
            if node == None: return

            curStr += chr(ord('a') + node.val)
            
            dfs(node.left, curStr)
            dfs(node.right, curStr)

            if not node.left and not node.right:
                nonlocal smallest
                smallest = min(curStr[::-1], smallest)
        
        smallest = '~'
        dfs(root, '')
        return smallest
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$  since we would visit all nodes.
    
- Memory
    
    The memory usage is $O(N)$ since we use the implicit call stack for recursion.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)