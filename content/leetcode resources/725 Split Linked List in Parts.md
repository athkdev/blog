---
title: 725 Split Linked List in Parts
date: 2024-09-11
tags:
  - medium
  - linked list
---

Here, we need to return a list with smaller linked lists divided equally. Note, we do not need to return a list with lists containing the list nodes. We only need to return a list with `head` nodes of the partitioned smaller lists. 


Few things off my mind:
1. Since we need to have smaller linked lists, we need to iterate the larger list, iterate over required number of nodes, and mark the last node of this "partition" to `node.next = None`. This is what breaks the links between partition lists.

2. We can calculate the window size required, so we know when to break a partition. Also important, that they have mentioned that the paritions' size can only differ by one and the larger lists must be at the beginning of the result list.

3. By calculating the extra nodes by `E = list_size % k`. We can keep a counter of this and reduce by one for the first `E` nodes.

### Python3

```python
def splitListToParts(self, head: Optional[ListNode], k: int) -> List[Optional[ListNode]]:
    
    cur, list_size = head, 0
    while cur:
        list_size += 1
        cur = cur.next


    window_size = list_size // k
    extra = list_size % k

    res = [None] * k

    node = head
    for i in range(k):
        if node:
            res[i] = node

            for _ in range(window_size - 1 + (1 if i < extra else 0)):
                if node:
                    node = node.next
            
            if node:
                node.next, node = None, node.next   # both are assigned at the same time

    return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is the number of nodes in the linked list.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
