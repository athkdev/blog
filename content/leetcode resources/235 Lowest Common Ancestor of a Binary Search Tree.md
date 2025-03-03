---
title: 235 Lowest Common Ancestor of a Binary Search Tree
tags:
  - medium
---

So, the lowest common ancestor for any two nodes (`p` and `q`) in a BST is termed as the minimum value node that contains both `p` and `q` in their sub trees. The lowest common ancestor for any node is itself or some previous node.

# Code:

### Java

```java
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root==null) return null;

        if (p.val > root.val && q.val > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        }
        if (p.val < root.val && q.val < root.val) {
            return lowestCommonAncestor(root.left,p,q);
        }
        return root;
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` .
- Memory
  The memory usage is `O(N)` since we would use the implicit call stack.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
