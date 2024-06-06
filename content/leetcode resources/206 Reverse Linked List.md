---
title: 206 Reverse Linked List
tags:
    - medium
---


# 206. Reverse Linked List

Linked Lists are linear data structures which are pointing in either one or two directions (doubly LLs). Looking at the name, they are linked - but linked to what? Well the elements in a list (let’s call each a `node`). The node are connected to each other (hence link), in the sense that they are pointing to one another. So, each node has to have a `next` pointer, and a `value` variable. Consider this Java class for a Node of a LL.

```java
class Node<T> {
		private Node<T> next;
		private T data;

		Node (T _data) {
				data = _data;
				next = null;
		}
}
```

To reverse a linked list, we need **four** important steps including traversing the list. For every node, we are 

1. storing the direct next variable temporarily (`next = current.next`).
2. updating the next of the current node to the previous. This is where the “reversing” happens. (`current.next = prev`) (Remember `prev` would be initially `null`, which is correct because the previous of the `head` will be a `null` pointer.)
3. update the `prev` pointer to the `current` one. Think from the perspective of the while loop which is iterating the list, the `current` pointer is the one we are on. Because we are reversing, we have to set the `current` as the `previous`. Just like if we were building a linked list from an array, we would set `current` to `current.next`. (`prev = current`)
4. and lastly, we update the current to next. (`current = next`).

# Code:

### Java

```cpp
class Solution {
    public ListNode reverseList(ListNode head) {
        if (head == null) return null;
        if (head.next == null) return head;

        ListNode current = head;
        ListNode next = null, prev = null;

        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }
}
```

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)