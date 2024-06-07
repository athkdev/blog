---
title: 138 Copy List with Random Pointer
tags:
    - medium
---



The prompt of the question might confuse you for the first minute or so - but upon closer inspection you can see that it’s a pretty straightforward linked list problem. 

You are required to do a deep copy - create a new list that has the same state (structure) of the list being copied.

A node in this list has a next pointer as usual and a random pointer where it points to any other node in the same list. Since while constructing the list for the first time, we won’t have information of all the nodes, we maintain a Map<Node,Node> that maps the original list’s node to our new list’s node.

In our second iteration, we point the random values in the new list as per the old list with the help of the map.

```java
/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        Node dummy = new Node(0);
        Node res = dummy;
        Node tmp = head;
        Map<Node, Node> mapping = new HashMap<>();

        while (tmp!= null) {
            res.next = new Node(tmp.val);
            mapping.put(tmp, res.next);
            res = res.next;
            tmp = tmp.next;
        }

        tmp = head;
        res = dummy;
        while (tmp != null) {
            res.next.random = mapping.get(tmp.random);
            // if (tmp.random != null) res.random.val = mapping.get(tmp.random).val;
            res = res.next;
            tmp = tmp.next;
        }
        return dummy.next;
    }
}
```

### Big O Analysis

The time complexity here is `O(N)` .

The space complexity is `O(N)` as well, because for every node in the old linked list - an entry will be created in the `Map<Node,Node>`