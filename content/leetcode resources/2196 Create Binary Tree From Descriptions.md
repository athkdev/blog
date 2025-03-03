---
title: 2196 Create Binary Tree From Descriptions
date: 2024-07-15
tags:
  - medium
  - binary tree
  - map
---

# Intuition

We are given an array with descriptions of nodes (parent and child relation). We have to construct a binary tree based on this information.

One way to solve it, is take a node and check if there exists it's parent/child in the list. But this would be too inefficient, worst case would be $O(N^2)$.

So instead we use a map to represent the tree. Finally, to find the root of the tree, we also maintain a set with only the children. i

Then we subtract all the keys in the map (tree representation) and this children set, to find the root of the tree.

# Code

### Python3

```python
def createBinaryTree(self, descriptions: List[List[int]]) -> Op tional[TreeNode]:
    m = defaultdict()
    children = set()

    for p, c, l in descriptions:
        parent = m.setdefault(p, TreeNode(p))  # setdefault is the equivalent of getOrDefault() in Java
        child = m.setdefault(c, TreeNode(c))

        if l:
            parent.left = child
        else:
            parent.right = child

        children.add(c)

    root = (set(m) - set(children)).pop()

    return m[root]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where `N == len(descriptions)`

- **Memory**

  The memory usage is $O(N)$ since we use a hashmap (python dict) to store parent and children nodes.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
