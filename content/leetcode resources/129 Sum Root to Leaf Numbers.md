---
title: 129 Sum Root to Leaf Numbers
tags:
  - medium
---

A very good problem that tests your fundamental knowledge of how trees work. The algorithm is pretty straightforward, until you come across a leaf node, just keep track of all node’s values visited in the form of a number (or a string). Once you reach a leaf, return the number stored, and call the function recursively on other nodes.

# Code:

### Python3

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
        def dfs(node: TreeNode, cur: str) -> int:
            if not node: return 0

            if not node.left and not node.right: # if current node is a leaf
                return int(cur + f'{node.val}')

            return dfs(node.left, cur + f'{node.val}') + dfs(node.right, cur + f'{node.val}')

        return dfs(root, '')
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` as since we would visit all nodes atleast once.
- Memory
  The memory usage is `O(N)`, since the tree is recursive, we would use the implicit call stack.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
