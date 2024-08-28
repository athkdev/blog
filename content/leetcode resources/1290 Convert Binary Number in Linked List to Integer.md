---
title: 1290 Convert Binary Number in a Linked List to Integer
date: 2024-08-28
tags:
  - easy
---

# Intuition

The process of converting a binary string/number to an integer with base 10 is a recursive sub-process and so in a linked list.


So we aim at designing a recursive function that adds up to a integer by raising 2 to the current list node value if it's 1 else 0.


We also have a `size` function that gives us the total size of the linked list.

# Code

### Python3

```python
class Solution:
    def getDecimalValue(self, head: ListNode, length = 0) -> int:
        n = self.size(head)
        
        def count(node, length=0):
            if not node:
                return 0

            return count(node.next, length + 1) + (pow(2, n - length - 1) if node.val == 1 else 0)

        return count(head)
    
    def size(self, head):
        if not head: return 0

        return 1 + self.size(head.next)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we would be processing each node of the list atleast once.

- **Memory**

  The memory usage is $O(N)$ since we are doing recursion so that's one function call in the stack memory for every node.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
