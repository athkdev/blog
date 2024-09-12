---
title: 1367 Linked List in Binary Tree
date: 2024-09-11
tags:
  - medium
  - linked list
  - binary tree
---

We can normally iterate the binary tree like we would do always, but for every node we can check by DFS if the linkedlist and "any path" of the binary tree is matching. If it does, return True, if not, return False.


Let's call this on the left nodes, or the right nodes. We use `or` because it doesn't matter if we find our list on the left branch or the right. So it reduces to `traverse_tree(node.left) or traverse_tree(node.right)`.

# Code

### Python3

```python
def isSubPath(self, head: Optional[ListNode], root: Optional[TreeNode]) -> bool:

    def match(tree, ll):
        if not ll:
            return True
        if not tree:
            return False
        
        if tree.val == ll.val:
            left = match(tree.left, ll.next)
            right = match(tree.right, ll.next)

            if left or right:    # prioritize any True and send it back the chain
                return True
        
        return False

    def traverse(node):
        if not node:
            return False
        

        if match(node, head):
            return True

        return traverse(node.left) or traverse(node.right)

    return traverse(root)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * M)$ where M is the number of nodes in the linked list, and N is the number of nodes in the binary tree.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
