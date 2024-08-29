---
title: 160 Intersection of Two Linked Lists
date: 2024-08-29
tags:
  - medium
  - linked list
---

# Intuition

We need to find the intersection between two lists - that means there are nodes that are present in both lists.


One way to solve this is to put all nodes of `list1` in a set, iterate over `list2` and if any node exists in the set - then that's when our intersection list begins.


This approach would take linear runtime and memory. To solve it in constant memory, we can use the **_Two Pointer Intersection Algorithm_**. Start two pointers at the heads of the two lists and traverse over them simultaneously. Once any list gets to the end - redirect it such that it starts at the head of the another list. 


Do this till `pointer1 != pointer2`. This works because let the non-intersecting section of `list1` be A and non-intersecting section of `list2` be B. According the problem description, either both lists will end with the intersection or there's no intersection. So let this common intersection length be C.


So, the distance travelled by the first list would be $ A + C + B$ and the second list would be $B + C + A$.

![images/lc_160.png](images/lc_160.png)


# Code

### Python3 (linear memory)

```python
def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
    check = set()

    while headA:
        check.add(headA)
        headA = headA.next

    while headB:
        if headB in check:
            return headB
        headB = headB.next
    
    return None
```

### Python3 (constant memory)

```python
def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:

    p1, p2 = headA, headB

    while p1 != p2:
        if not p1:
            p1 = headB
        else:
            p1 = p1.next
        
        if not p2:
            p2 = headA
        else:
            p2 = p2.next
    
    return p1
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N + M)$ since we are visiting each node of each list atleast once.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure. (the set solution is $O(N)$)

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
