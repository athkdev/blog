---
title: 912 Sort An Array
date: 2024-07-25
tags:
  - medium
  - sorting
---

# Intuition

Problem wants us to solve without using any library sorting functions such as `arr.sort()` in Python or `Arrays.sort(arr)` in Java.

So let's implement a Merge Sort - since it fits the description of a `n * log (n)` algorithm. Remember, bubble sort, insertion sort take quadratic $n^2$ time, we need something faster.

Please refer my breaking down of a Merge Sort in this [[/notes/Merge Sort]].


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
