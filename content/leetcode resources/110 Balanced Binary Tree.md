---
title: 110 Balanced Binary Tree
tags:
    - medium
---



The problem states: a height-balanced binary tree is a tree in which the difference of heights of children of a node should not exceed 1.

We calculate the heights of each child node at every recursive call, then check if the difference is more than 1. If yes, then return false. If no then call the next subtree.

Finally, as it is for all tree problems, if all the subtrees follow the instructions, we have solved our problem.

# Code:

### Java

```java
class Solution {
    public boolean isBalanced(TreeNode root) {
        if (root==null) return true;
        int leftHeight = height(root.left);
        int rightHeight = height(root.right);

        if (Math.abs(leftHeight-rightHeight) > 1) return false;

        return isBalanced(root.left) && isBalanced(root.right);
    }

    public int height(TreeNode node) {
        if(node==null)return 0;
        return 1 + Math.max(height(node.left),height(node.right));
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(log N)` .
    
- Memory
    
    The memory usage is `O(N)` since we would use the implicit call stack.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)