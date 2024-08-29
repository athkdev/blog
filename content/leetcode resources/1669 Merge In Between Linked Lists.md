---
title: 1669 Merge In Between Linked Lists
date: 2024-08-29
tags:
  - medium
  - linked list
---

# Intuition

The problem is straight forward in that we need to insert another list in between list 1. We are given `a` and `b` - so we need to insert `list2` in place of $a^{th}$ to $b^{th}$ nodes.


If we have the node just before the $a^{th}$ nodes, we can just `startNode.next = list2`.


Similarly, if we have the corresponding $b^{th}$ node, we can just `list2.next = endNode` - given we iterate `list2` till the end.

# Code

### Python3

```python
def mergeInBetween(self, l1: ListNode, a: int, b: int, l2: ListNode) -> ListNode:
    if not l1:
        return None
    if not l2:
        return l1

    startNode = None
    endNode = None

    parent = None
    cur = l1
    length = 0
    while cur:
        if length == a:
            startNode = parent

        if length == b:
            endNode = cur

        parent = cur
        cur = cur.next
        length += 1

    startNode.next = l2

    while l2.next:
        l2 = l2.next

    l2.next = endNode.next

    return l1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is the number of nodes in `list1` or `list2` which ever is longest.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
