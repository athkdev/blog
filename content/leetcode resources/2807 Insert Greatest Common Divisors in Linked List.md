---
title: 2807 Insert Greatest Common Divisors in Linked List
date: 2024-08-30
tags:
  - medium
  - linked list
---

# Intuition

The problem is straightforward in that we iterate till the second last element and keep on adding a new node after the current node we are at.


We calculate the GCD using a function (or by yourself) - and point our `current.next` to `new_gcd_node`.  Also remember to save `current.next` in a temp variable since it's necessary for traversing.


Also, ensure to point `new_gcd_node.next` to the temp variable you saved. This way insertion is complete.

# Code

### Python3

```python
def insertGreatestCommonDivisors(self, head: Optional[ListNode]) -> Optional[ListNode]:
    result = ListNode(0) 
    result.next = head
    cur = head

    while cur.next:
        gcdNode = ListNode(gcd(cur.val, cur.next.val))

        tmpNext = cur.next

        gcdNode.next = tmpNext
        cur.next = gcdNode

        cur = tmpNext

    return result.next
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are traversing all nodes in the list atleast once and also proportionately adding (N-1) new nodes (the gcd nodes).

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
