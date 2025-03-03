---
title: 404 Sum of Left Leaves
tags:
  - medium
---

We have to return the sum of all left-leaf values in the tree. This means the left leaf of every subtree. So, it could be on a right child node, just that it has to be a leaf, and it has to be a left leaf at that.

In the code below, we detect any left leaves by the condition `root.left and not root.left.left and not root.left.right`. If this condition meets, we return the `root.left.val` and call the function on any right subtree that may or may not be present.

If a leaf is not detected, then make recursive calls on `left` and `right` subtrees as usual.

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
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        if not root: return 0

        return \
        root.left.val + self.sumOfLeftLeaves(root.right) \
        if root.left and not root.left.left and not root.left.right \
        else self.sumOfLeftLeaves(root.left) + self.sumOfLeftLeaves(root.right)
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(N) \; where \; n=number\_of\_nodes$ in the tree.
- Memory
  The memory usage would be of the implicit call stack we would use while recursion.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
