---
title: 623 Add One Row to Tree
tags:
    - medium
---


# 623. Add One Row to Tree

The problem asks to add a row to a tree. Trying to reverse engineer this, I understand that adding a row is the same as adding nodes at a single depth in every branch from root till leaf.

Now that things are clear, this is just a DFS problem. Carry out DFS where you go from the root to every leaf. Also, keep track of the current running depth of your traversal.

Whenever `current_height == desired_depth` you have to add a new node.

To add a node, you would stop till `depth - 1`, then keep `node.left` and `node.right` temporarily in variables, create new `TreeNodes` and attach them to the current node. Don’t forget to continue to join the previous left and right nodes you stored in variables, as they contain the rest portion of the tree.

Note: the problem mentions that if `depth` is given input as 1, add a new head because there is no such value on `depth - 1`.

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
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        def dfs(node: TreeNode, height: int) -> TreeNode:
            if node == None: return None

            if depth == 1 and height == depth:
                newHead = TreeNode(val)
                newHead.left = node
                return newHead

            if height == depth - 1:
                tmpLeft, tmpRight = node.left, node.right
                node.left = TreeNode(val)
                node.right = TreeNode(val)
                node.left.left = tmpLeft
                node.right.right = tmpRight

            dfs(node.left, height + 1)
            dfs(node.right, height + 1)

            
            return node

        
        return dfs(root, 1)
        
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$, where N = number of nodes in the tree. 
    
- Memory
    
    The memory usage is $O(N)$, it’s the implicit call stack since we are building the tree recursively.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)