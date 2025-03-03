---
title: 83 Remove Duplicates from Sorted List
tags:
  - medium
---

The problem requires us to iterate a sorted list and remove any duplicates possible. It’s a straightforward problem, but don’t get confused like I did. I did not read the “sorted” and thought it was a regular list. So I used a `set` to keep track of duplicates.

BUT, since it’s a sorted list, one can just iterate once, and see if the next value is the same as the current one, if yes → skip the nodes.

# Code:

### Python3

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # LIST IS SORTED BRO, SO JUST CHECK CONSEQUTIVELY

        n = head
        while n:
            while n.next and n.next.val == n.val:
                n.next = n.next.next

            n = n.next

        return head
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` , regardless of whether duplicates are present or not we would still have to visit each node atleast once.
- Memory
  The memory usage is `O(1)` since we do not use any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
