---
title: 21 Merge Two Sorted Lists
tags:
    - medium
---



Very fundamental problem. If you are well-versed with linked lists, it might come of as a very straightforward problem - otherwise, it’s a great learning exercise.

You are given two sorted lists - you are required to merge them such that the merged list is also sorted. Start off by traversing both lists simultaneously BUT only till the shortest list. At every iteration make sure to check both nodes (`l1` and `l2`) and append to the result accordingly.

In the code below, `while a is None and b is not None` means “only traverse till the shortest list”. So you can imagine, after the while loop, we would need to traverse the other list (longer) and add it to our result list.
Now, we don’t know if `l1` was shorter or `l2` was shorter - so we implemented while loops for both lists after our main merger while loop - just in case.

# Code:

### Python

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, a: Optional[ListNode], b: Optional[ListNode]) -> Optional[ListNode]:
        res = ListNode(0)
        ans = res

        while a is not None and b is not None:
            if a.val < b.val:
                res.next=a
                a=a.next
            else:
                res.next=b
                b=b.next
            res=res.next
        
        while a is not None:
            res.next = a
            a=a.next
            res=res.next
        while b is not None:
            res.next = b
            b=b.next
            res=res.next
        
        return ans.next
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(len(longer_list))` . This is because - recall the main merger while loop: here we only iterate the length of the shorter list. In the “just-in-case” while loops below, we iterate the rest of the remaining longer list.
    
- Memory
    
    The memory usage is `O(1)`, we only create variables and no such data structures whose size seems to be a function of our input `N`.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)