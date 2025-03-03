---
title: 133 Clone Graph
tags:
  - medium
---

We are required to clone a graph, where “cloning” implies a deep copy, creating an exact same graph with the same values, but none of the nodes can have the same memory as the original graph.

Like BSTs, graphs are recursive data structures. We can build them with a Depth-First approach or a Breadth-First approach. In the solution below, we are doing DFS.

The basic idea is very similar to other graph, matrices and trees problems.

```markdown
1. When you encounter a node, create a new Node with it's values.
2. Then call the same function on it's neighbours, recursively.
3. Make sure to maintain a copy node and a original node so it does not get mixed up.
```

# Code:

### Java

```java
class Solution {
    public Node cloneGraph(Node node) {
        if (node==null) return null;

        Node[] visited = new Node[101];
        Arrays.fill(visited,null);
        Node copy = new Node(node.val);
        dfs(node,copy,visited);
        return copy;
    }

    public void dfs(Node node, Node copy, Node[] visited) {
        visited[node.val]=copy;

        for (Node n : node.neighbors) {
            if (visited[n.val]==null) {
                Node newNode = new Node(n.val);
                copy.neighbors.add(newNode);
                dfs(n,newNode,visited);
            }
            else {
                copy.neighbors.add(visited[n.val]);
            }
        }
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` as since we would visit all nodes atleast once.
- Memory
  The memory usage is `O(N)` since we use a visited array. In this particular case, $1 <= N <= 100$

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
