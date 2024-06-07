---
title: 230 Kth Smallest Element in a BST
tags:
    - medium
---



We are required to find the k-th smallest element in a binary search tree. As we have seen in many other problems of the type “k-th smallest/largest/minimum/maximum” - they are perfect to use utilize your min/max heap knowledge.

Iterate over the tree, add all nodes to a max-heap, poll (remove) excess elements if size of heap goes over k. Then just return the element at the top of the heap.

# Code:

### Java

```java
class Solution {
    PriorityQueue<TreeNode> kSmallest = new PriorityQueue<>((a,b) -> b.val - a.val);
    public int kthSmallest(TreeNode root, int k) {
        populateKSmallest(root,k);

        return kSmallest.peek().val;
    }

    private void populateKSmallest(TreeNode root,int k) {
        if (root == null) return;

        kSmallest.add(root);

        if (kSmallest.size() > k) {
            kSmallest.poll();
        }

        populateKSmallest(root.left,k);
        populateKSmallest(root.right,k);
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would visit all nodes atleast once.
    
- Memory
    
    The memory usage is `O(k)` since we use a priority queue which will be always filled with k nodes.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)