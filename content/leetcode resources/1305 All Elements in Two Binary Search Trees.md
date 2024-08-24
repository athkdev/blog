---
title: 1305 All Elements in Two Binary Search Trees
date: 2024-08-23
tags:
  - medium
  - bst
  - merge
---

# Intuition

We are required to extract all elements in two binary search trees and return them in a sorted list. Now one of the approaches is to get elements from both trees in a list, sort it and return. But here the bottleneck is the sort - which makes the solution `O(N*logN)`.


We can optimize that - since we are given BSTs, doing an in-order traversal on them would result in us extracting the values from each trees in a sorted manner. That's what a BST is known for. So we extract both elements from both trees in separate lists and then merge them manually taking advantage of the fact that they are both sorted too.


Remember just extending one list to another and sorting is again `N * logN`. Instead we merge them by having a pointer for each list, compare values at `list1[p1]` and `list2[p2]` and finally move pointers accordingly. This is linear time.



# Code

### Python3

```python
def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:

    tree1 = []
    tree2 = []

    def dfs(node, l):
        if not node: return

        dfs(node.left, l)
        l.append(node.val)
        dfs(node.right, l)
    
    dfs(root1,tree1)
    dfs(root2,tree2)

    result = []

    p1, p2 = 0, 0

    while p1 < len(tree1) and p2 < len(tree2):
        if tree1[p1] < tree2[p2]:
            result.append(tree1[p1])
            p1 += 1
        else:
            result.append(tree2[p2])
            p2 += 1
        
    result.extend(tree1[p1:])
    result.extend(tree2[p2:])

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are actually merging two lists - which is $2N$.

- **Memory**

  The memory usage is $O(N)$ since we are using lists to store data.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
