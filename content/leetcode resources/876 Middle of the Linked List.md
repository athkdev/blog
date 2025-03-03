---
title: 876 Middle of the Linked List
tags:
  - medium
---

This is a standard problem in the realm of linked lists - the fast-slow pointer technique helps us to find the element in the middle of the linkedlist without having to iterate the entire list atleast once.

The naive approach to this problem would be to 1) iterate to the end of list, and maintain a `length counter`, 2) iterate the list again but this time to `length counter / 2` and return `node.next`.

# Code:

### Java

```java
class Solution {
    public ListNode middleNode(ListNode head) {
        if (head == null) return null;
        if (head.next == null) return head;
        ListNode slow = head, fast = head.next;

        while (fast.next!=null && fast.next.next!=null) {
            slow = slow.next;
            fast=fast.next.next;
        }

        return slow.next;
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` . The fast pointer reaches the end in $\frac{N}{2}$ time, so the order is $N$.
- Memory
  The memory usage is `O(1)` since we no linear/non-linear data structure used.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
