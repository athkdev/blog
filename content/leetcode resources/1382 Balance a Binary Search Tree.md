---
title: 1382 Balance a Binary Search Tree
date: 2024-06-26
tags:
  - medium
  - binary search tree
  - recursion
---

Problem provides us with the root of a binary search tree, we are required to balance it. One way it could be done is to off load all the nodes in the given tree into an array or a list, then build a new binary search tree from that list.

Note: it's crucial that while offloading nodes to the list, we do an `inorder()` traversal - as that would visit first the left side nodes, then the root and finally the right side nodes.

The fundamental knowledge of this problem is used extensively in [[/leetcode resources/108 Convert Sorted Array to Binary Search Tree]]

# Code

### Python3

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def balanceBST(self, root: TreeNode) -> TreeNode:
        sortedTree = []

        def inorder(node: TreeNode):
            if node == None: return

            inorder(node.left)
            sortedTree.append(node)
            inorder(node.right)
        
        inorder(root)

        def sortedArrToBST(start: int, end: int):
            if start > end: return None

            mid = (start + end) // 2

            curRoot = sortedTree[mid]
            curRoot.left = sortedArrToBST(start, mid - 1)
            curRoot.right = sortedArrToBST(mid+1, end)

            return curRoot
        
        return sortedArrToBST(0, len(sortedTree)-1)
```

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

import "fmt"

func balanceBST(root *TreeNode) *TreeNode {
    sorted := make([]*TreeNode, 0)

    sorted = inorder(root, sorted)

    return sortedArrToBst(0, len(sorted)-1, sorted)
}

func inorder(node *TreeNode, arr[] *TreeNode) [] *TreeNode {
    if node == nil {
        return arr
    }

    arr = inorder(node.Left, arr)
    arr = append(arr, node)
    arr = inorder(node.Right, arr)

    return arr
}

func sortedArrToBst(start, end int, sorted []*TreeNode) *TreeNode {
    if start > end {
        return nil
    }

    mid := (start + end) / 2

    curRoot := sorted[mid] 
    curRoot.Left = sortedArrToBst(start, mid - 1, sorted)
    curRoot.Right = sortedArrToBst(mid + 1, end, sorted)
    
    return curRoot
}
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all tree nodes and storing them in an array.

- **Memory**

  The memory usage is $O(N)$ since we use the an array to store the TreeNodes.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
