---
title: 138 Copy List with Random Pointer
date: 2025-06-12
tags:
  - medium
  - linked_list
---

Lets view this operation into two separate operations.

> A) We need to deep copy a list - implying that each memory address of a node in this new list should be new, and have no node pointing to any node from the older list.

> B) In the new list, we need the same order of the random pointers as the old list.

In order to obtain new memory addresses simply just create new `Node(_val)`.

And keep track of the mapping between the old and the new pointers - this will be helpful later while assigning the `random` pointers.

> [!tip] Tip
>
> Make sure to have a mapping in both directions for reasons you'll understanding while dry running the code.

![Explaination for leetcode 138](leetcode-resources/images/lc_138.png)

# Code

### Python3

```python
"""
# Definition for a Node.
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random
"""

class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        d = Node(10**5)
        dummy = d

        mapping = defaultdict()  # {}
        mappingRev = defaultdict()

        h = head
        while h: #   2

            newNode = Node(h.val)      # 2
            dummy.next = newNode     # [0, 1, 2]
            dummy = dummy.next       # traverse forward
            mapping[newNode] = h     # {new: old}
            mappingRev[h] = newNode

            h = h.next

        # assigning the random pointers
        h = d.next
        while h:
            if mapping[h].random:
                h.random =  mappingRev[mapping[h].random]
            else:
                h.random = None

            h = h.next

        return d.next
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting each node at most only once, during a single traversal.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store the mapping from new to old nodes.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
