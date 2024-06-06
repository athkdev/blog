---
title: 2265 Count Nodes Equal to Average of Subtree
tags:
    - medium
---


# 2265. Count Nodes Equal to Average of Subtree

Calculating the average of the entire tree separately and returning is incorrect - putting it out there because the problem can be misconstrued in that manner.

Instead, what’s asked is the running averages for every node, where you consider every node’s subtree and not the entire tree.

We return a list from our DFS function instead of a singular value since we need access to the `node_count`, `running_sum`, and `current_answer` in the same instances.

# Code

### Python

```python
class Solution:
    def averageOfSubtree(self, root: TreeNode) -> int:
        
        def calc(node: TreeNode) -> List[int]:
            if node == None: return [0,0,0]

            left, right = calc(node.left), calc(node.right)

            totalVal = left[0] + right[0] + node.val
            count = left[1] + right[1] + 1

            return [totalVal, count, left[2] + right[2] + (1 if totalVal // count == node.val else 0)]

        return calc(root)[2]
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$  since we visit all nodes at least once.
    
- Memory
    
    The memory usage is $O (N)$ since we would use the implicit call stack while making recursive tree calls.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)