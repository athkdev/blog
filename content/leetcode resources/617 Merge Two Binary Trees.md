---
title: 617 Merge Two Binary Trees
date: 2024-07-23
tags:
  - easy
  - binary tree
---

# Intuition

Given two binary trees, merge them into a single tree and return the root.

They have also provided the rules of merging. Well, whenever two nodes coincide, add the values of both the nodes and attach it to the new tree. If they do not coincide, create a new one.

So if we have both t1 and t2, then build the tree as usual, but when both or either one is None, then return `t1 or t2`. Ideally, this is not the best design, since we are attaching references to the input tree in our result tree. In a scenario where the input trees are destroyed, our result tree would have holes in it.

Follow up: Can you structure it such that a new TreeNode is attached and not a reference to the input trees.

> The code for this is quite tricky to get one's head around atleast for some time - it sure was for me haha.


# Code

### Python3

```python
def mergeTrees(self, t1: Optional[TreeNode], t2: Optional[TreeNode]) -> Optional[TreeNode]:
    '''
    merge two trees t1 and t2 and return the root
    '''
    
    if t1 and t2:
        '''
        both positions in both trees exist
        '''
        result_tree = TreeNode(t1.val + t2.val)

        result_tree.left = self.mergeTrees(t1.left, t2.left)
        result_tree.right = self.mergeTrees(t1.right, t2.right)

        return result_tree
    
    else:
        '''
        either node in t1 does not exist, or node in t2 does not exist, OR both does not exist
        '''
        return t1 or t2
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N + M)$ where `N == number of nodes in t1` and `M == number of nodes` in t2.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
