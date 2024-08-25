---
title: 2415 Reverse Odd Levels of Binary Tree
date: 2024-08-24
tags:
  - medium
  - binary tree
---

# Intuition

We are required to reverse the values on each odd level.

Let's break this down - we need access of elements in every level? Also, we need access to the height of every level to determine if it's odd.

We can do a `level-order traversal` a.k.a `breadth-first search` and keep track of every level. Then reverse the elements and change value on the nodes. It's very similar to how one would reverse an array - by iterating till mid element and swapping values on `left` and `right` pointers.

Note: for Python devs, assume you are in a `for` loop and `i` is the iterator variable - `~i` accesses the corresponding element from the opposite end.

# Code

### Python3

```python
def reverseOddLevels(self, root: Optional[TreeNode], h: int = 0) -> Optional[TreeNode]:

    '''
    level order traversal

    1. collect all values at a level in a list
    2. reverse it and assign to the nodes
    '''

    queue = collections.deque([root])

    depth = 0
    while queue:
        n = len(queue)

        for _ in range(n):
            node = queue.pop()

            if node.left:
                queue.appendleft(node.left)
            if node.right:
                queue.appendleft(node.right )
        
        depth += 1

        if depth % 2 != 0:   # if level height is odd
            for i in range(len(queue)//2):
                queue[i].val, queue[~i].val = queue[~i].val, queue[i].val
    

    return root
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are accessing each node once in a context. We are also reversing, but that's not nested.

- **Memory**

  The memory usage is $O(N)$ since we use a `collections.deque` (a double ended queue) to store our nodes.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
