---
title: 108 Convert Sorted Array to Binary Search Tree
date: 2024-06-26
tags:
  - medium
  - binary search tree
  - recursion
---

It's crucial that while offloading nodes to the list, we do an `inorder()` traversal - as that would visit first the left side nodes, then the root and finally the right side nodes.

[[/leetcode resources/1382 Balance a Binary Search Tree]] uses the fundamental knowledge that you build in this problem. I recommend solving that too while you are on this one.


# Code

### Python3

```python
def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:

    def construct_tree(start: int, end: int) -> Optional[TreeNode]:
        if start > end: return None

        mid = (start + end) // 2

        cur_root = TreeNode(nums[mid])

        cur_root.left = construct_tree(start, mid - 1)
        cur_root.right = construct_tree(mid + 1, end)

        return cur_root
    
    return construct_tree(0, len(nums)-1)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would have to visit all nodes in the array atleast once to construct the tree.

- **Memory**

  The memory usage is $O(N)$ since we are creating a new `TreeNode` for every value in the array.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
