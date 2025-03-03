---
title: 102 Binary Tree Level Order Traversal
tags:
  - medium
---

Very straightforward, a level order traversal is the same thing as BFS. You arrive at a node, put it’s neighbours in a queue to be visited later. Make sure to also maintain a another loop inside your main BFS loop so that you keep track of “levels”.

# Code:

### Java

```java
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        if (root==null) return new ArrayList();

        List<List<Integer>> res = new ArrayList<>();
        Queue<TreeNode> Q = new ArrayDeque<>();

        Q.add(root);

        while(!Q.isEmpty()) {
            int n = Q.size();

            List<Integer> level = new ArrayList<>();

            for (int i=0;i<n;i++) {
                TreeNode current = Q.poll();
                level.add(current.val);

                addNeighbours(Q, current);
            }
            res.add(level);
        }

        return res;

    }

    private void addNeighbours(Queue<TreeNode> Q, TreeNode node) {

        if (node.left != null) Q.add(node.left);
        if (node.right != null) Q.add(node.right);
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` as since we would be iterating the array atleast once.
- Memory
  The memory usage is `O(1)` since we are not using any extra datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
