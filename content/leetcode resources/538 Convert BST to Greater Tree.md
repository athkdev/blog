---
title: 538 Convert BST to Greater Tree
date: 2024-07-06
tags:
  - medium
  - binary search tree
---

# Intuition
This problem is very important and fundamental for the understanding of how Binary Search Trees work because it leverages on a BST feature.

We are required to replace each node's val with the it's own value **plus** sum of all values greater than it.

In a BST, all values on the right are greater than the values on the left. This makes coming to a solution easy, now we just have to sum up all right values, set the node's value and call the same function on the left nodes.


> Note: this problem is duplicated in [[/leetcode resources/1038 Binary Search Tree to Greater Sum Tree]]

# Code

### Python3

```python
class Solution:
    def __init__(self):
        self.acc = 0
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def dfs(node: Optional[TreeNode]) -> Optional[TreeNode]:
            if not node: return None

            dfs(node.right)
            node.val += self.acc
            self.acc = node.val
            dfs(node.left)

            return node
        
        return dfs(root)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be visiting all nodes in the tree.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
