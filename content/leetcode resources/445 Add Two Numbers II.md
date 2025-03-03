---
title: 445 Add Two Numbers II
date: 2024-08-30
tags:
  - medium
  - linked list
---

# Intuition

We are given two linked lists and we need to add them as decimal numbers and then return a list as a result of that addition.

A brute force way if just capture the lists into numbers, add them, convert the result to a list and return head. It's not bad, it's still linear time.

Another way is to use two stacks, one for each list. This would be helpful since we need to add starting from the `least significant bit` to the `most significant bit` - and a stack (being LIFO) would provide us with the `LSB` first.

Then we pop the elements in both the stack at the same time, add them, create a `ListNode` with that result, store the carry in another `ListNode` and attach the carry node to the result. Don't forget to update the carry node as the new head of the result list.

This carry node is helpful for the scenario that an extra head node would require if there's carry left after the addition. Think $99 + 99 = 198$. Notice that two lists of length 2 each when added, created a result list of length 3 - this is an edge case.

> Note: `N % 10` always gives us a single digit between 0 to 10 - which is also the unit's place of N. `N // 10` always gives the entire number N - exluding the units place.

> Note2: in Python we use a double-ended queue as a `stack` or a `queue` since it's internally built as a doubly linked list - think constant time appends and pops.

# Code

### Python3

```python
def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    s1 = deque()
    s2 = deque()

    while l1:
        s1.append(l1)
        l1 = l1.next

    while l2:
        s2.append(l2)
        l2 = l2.next

    summ = 0

    result = ListNode(0)

    while s1 or s2:
        if s1: summ += s1.pop().val

        if s2: summ += s2.pop().val

        digit, carry = summ % 10, summ // 10

        result.val = digit   # updating the result (left most node before attaching carry node)

        head = ListNode(carry)    # new head

        head.next = result
        result = head

        summ //= 10     # update any carry


    return result if result.val != 0 else result.next
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is the length of the longer linked list.

- **Memory**

  The memory usage is $O(N)$ since we are using a stack to store the linked lists. Here N is the length of the longeer linked list.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
