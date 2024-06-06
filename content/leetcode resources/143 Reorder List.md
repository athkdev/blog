---
title: 143 Reorder List
tags:
    - medium
---


# 143. Reorder List

The problem requires us to reorder the given linked list in such a way that

$$
L_0 \rightarrow L_1 \rightarrow L_2 \rightarrow L_4 \rightarrow L_{n-1} \rightarrow L_n \\becomes
$$

$$
L_0 \rightarrow L_{n} \rightarrow L_1 \rightarrow L_{n-1} \rightarrow L_2 \rightarrow L_3 
$$

That means there’s an alternating sequence between the first half and second half of the linkedlist. But, the second half is reversed. Which is why we use a stack datastructure to store that side of the list.

```markdown
1. Find the mid node of the list using slow and fast pointer technique
2. Then iterate till mid and store all elements in a queue or a list (it's fine to not use a datastructure for this, you can just iterate over the nodes)
3. Then iterate from mid to end and store all elements in a stack
4. Finally, use a toggle boolean value to pick up element from the queue and the stack at a time
		4.1. Attach each node to the list
```

> Note: the line [`h.next](http://h.next) = null;` is very crucial. Here, it acts as a way to the cycle in the list if any.
> 

# Code:

### Java

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public void reorderList(ListNode head) {
        if (head.next == null) return;

        Queue<ListNode> first = new LinkedList<>();
        Stack<ListNode> second = new Stack<>();

        ListNode slow = head, fast = head.next;

        ListNode mid = null; 
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        mid = slow;    // when the fast pointer reaches end, the slow pointer reaches the middle node (that's a famous algorithm - search "slow, fast pointers linkedlist" for more info

        ListNode h = head;
        while (h != mid) {
            first.add(h);
            h = h.next;
        }
        first.add(h);     // we want to include the mid too

        h = mid.next;
        while (h != null) {
            second.push(h);
            h = h.next;
        }

        h = new ListNode();
        boolean toggle = true;     // we toggle this boolean every iteration to pick one from both datastructures at a time
        while (!first.isEmpty() && !second.isEmpty()) {
            if (toggle) {
                h.next = first.poll();
            }
            else {
                h.next = second.pop();
            }
            toggle = !toggle;
            h = h.next;
        }

        while (!first.isEmpty()) {   // add any remaining nodes just in case
            h.next = first.poll();
            h = h.next;
        }

        while (!second.isEmpty()) {   // add any remaining reversed nodes just in case
            h.next = second.pop();
            h = h.next;
        }

        h.next = null;      // remove cycle
        head = h;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$ since we visit all nodes atleast once.
    
- Memory
    
    The memory usage is $O(N)$ since we use a stack and a queue (optional).
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)