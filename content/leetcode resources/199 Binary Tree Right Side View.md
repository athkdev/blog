---
title: 199 Binary Tree Right Side View
date: 2024-08-17
tags:
  - medium
  - binary tree
---

# Intuition

My first intuition here was that if I need the nodes only on the right side - I need to only iterate/recurse through the `node.right` nodes. Something like a linked list - because that's what we do in a linked list right (`node.next`).

But after carefully reading the question, it says that even if the element if on the left side of the tree and the right side is empty - that's a valid answer. And why shouldn't it be? When I look at a tree from the right side that _has_ a left sub-tree but _does not have_ a right sub-tree, the left subtree would be visible.

So I realise that `level order traversal` or `breadth first search` is a good application here. We go level by level and for every level just append the last node - that the one visible from the right side.

> Note: had it been a question to find the _left side view_ of the tree, instead of appending the last element of the level, we must append the first element.


# Code

### Python3

```python
def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
    '''
    level order traversal might help: 

    store all nodes in the current level and only return the rightmost (last-most) added node
    '''
    if not root: return []

    res = []

    queue = deque([root])

    while queue:
        n = len(queue)

        level = []
        for _ in range(n):
            cur = queue.pop()
            level.append(cur)
            
            if cur.left:
                queue.appendleft(cur.left)
            
            if cur.right:
                queue.appendleft(cur.right)
        
        res.append(level[-1].val)
    
    return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since in the worst case scenario, we would have to visit all the nodes in the tree.

- **Memory**

  The memory usage is $O(N)$ since we use a `queue` for the BFS. Note: in Python since we don't have a queue, we use a `deque` (double ended queue). We append from the left and pop from the right OR vice-versa.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
