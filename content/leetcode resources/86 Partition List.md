---
title: 86 Partition List
date: 2025-03-03
tags:
  - medium
---

The idea is very similar from leetcode 2161. Since we want to preserve the relative order, while traversing the list, lets offload the elements that are less than `x` to another linked list, and the greater/equal ones to another. Finally, just connect the first sublist with the second.

# Code

### Python3

```python
def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:

    lt, gt = ListNode(0), ListNode(0)

    l, g = lt, gt

    h = head

    while h != None:
        if h.val < x:
            l.next = h
            l = l.next
        else:
            g.next = h
            g = g.next

        h = h.next

    g.next = None

    l.next = gt.next

    return lt.next
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all list nodes only once.

- **Memory**

  The memory usage is $O(1)$ since we do not use extra data structures (only use the instance variables created on the heap).

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
