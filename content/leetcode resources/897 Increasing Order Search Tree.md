---
title: 897 Increasing Order Search Tree
date: 2024-08-23
tags:
  - medium
  - bst
---

# Intuition

We need to the structure of the given binary tree such that all of it's nodes have no left property, and the tree is built only on right nodes.

Here's how I thought about it: a tree with only right nodes is a linked list. Think of `node.right` of a tree as the same as `node.next` of a linked list.

So we extract the nodes from the tree using `in-order traversal` and store them in a list.

Then we build a linked list recursively treating the `node.right` pointer as a `node.next`.

# Code

### Python3

```python
def increasingBST(self, root: TreeNode) -> TreeNode:

    tree_list= []

    def extract_elements(node: TreeNode, li: List[TreeNode]):
        if not node:
            return None

        extract_elements(node.left, li)
        li.append(node)   # in-order
        extract_elements(node.right, li)

    extract_elements(root, tree_list)

    def build(node: TreeNode, i: int):
        if i >= len(tree_list): return None

        if not node:
            node = TreeNode()

        node.left = None
        node.right = TreeNode(tree_list[i].val)

        build(node.right, i+1)

        return node

    return build(None, 0).right
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since extracting the tree is a linear process and so is building the linked list.

- **Memory**

  The memory usage is $O(N)$ since we storing all nodes in a list.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
