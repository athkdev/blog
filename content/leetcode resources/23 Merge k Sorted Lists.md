---
title: 23 Merge k Sorted Lists
date: 2024-08-28
tags:
  - hard
  - linked lists
---

# Intuition

We are given k sorted lists and need to merge them all in one single linked list.

Let's dive deeper into some observations. One way to brute force this would be to iterate over all `k` lists, have another loop which moves over the start pointers for all lists and updates them.

One efficient way to approach this would be to introduce a `min-heap`. A min heap is a tree like data structure where the parent nodes are smaller than the child nodes. This would mean the top-most element in a min-heap would be the smallest element in the data.

We can use this feature and insert all the list starting nodes into the min-heap so we get the list node with smallest value at `heap[0]`. We can then pop this element and insert `heap[0].next` into the heap - if it exists.

This needs to keep happen until `len(heap) > 0`. Fairly straight forward algorithm - but a very clever application of a heap.

# Code

### Python3

```python
def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
    heap = []

    '''
    put the first elements of all lists in a heap
    '''
    for i, l in enumerate(lists):
        if l:
            heappush(heap, (l.val,i, l))

    head = ListNode(0)

    result = head

    while heap:
        key, i, smallest = heappop(heap)

        result.next = smallest   # building the result

        result = result.next   # move list forward

        if result.next:
            '''
            put it again into the list because result.next.val could be greater OR less than heap.pop()
            '''
            heappush(heap, (result.next.val, i, result.next))

    return head.next
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log(k))$ since we are reducing our search space of size K in half (rates) but for every rate that we test - we also iterate the entire array of size N.

- **Memory**

  The memory usage is $O(N)$ since we use a heap to store list nodes.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
