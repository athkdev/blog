---
title: 3217 Delete Nodes From Linked List Present in Array
date: 2024-08-30
tags:
  - medium
  - linked list
---

# Intuition

The problem is very similar to removing a node from the linked list. But instead of one nodes, now there are multiple nodes that need deletion.

So we convert the `nums` array into a set for constant time look-up. While iterating over the list if we come across any node that is present in this set, we set `next` property of that node's parent (previous node) to `next.next`. This means we skip the node in the middle (to be deleted) and straight jump to the next node.

This is fundamental to how deletions in linked lists work.

# Code

### Python3

```python
def modifiedList(self, nums: List[int], head: Optional[ListNode]) -> Optional[ListNode]:

    if not head: return None

    nums = set(nums)

    result = ListNode(0)
    result.next = head
    cur = head

    while head.next:
        if head.next.val in nums:
            head.next = head.next.next   # delete node at head - skip node
        else:
            head = head.next    # if current node is not in nums, iterate normally - no skipping

    return result.next.next if result.next.val in nums else result.next
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since each node in the linked list is getting processed only once.

- **Memory**

  The memory usage is $O(N)$ since we use a `set` for constant time look-up.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
