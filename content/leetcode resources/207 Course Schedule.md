---
title: 207 Course Schedule
tags:
    - medium
---



This is a graph problem. Given is `numCourses` (graph vertices) and and edge list. Each edge consists of a courses to be taken and a prerequisite for it. $[C_i,P_i]$ - here Ci is a course that requires you to complete the prerequisite Pi.

But in paradoxical situation like $[[1,0],[0,1]]$ where a course is a prerequisite of another prerequisite represents a cycle. So, if there exists a cycle like this, you cannot complete all courses, so return False else return True.

```markdown
1. We have a DFS function that checks is we have a cycle starting from every node
2. We will ensure to call this function on every n < numCourse.
3. DFS maintains a visited set relative to each new node.
		3.1. Add every visited neighbour to the set.
		3.2. If a neighbour is already in the set, a cycle has been detected.
4. So,
```

# Code:

### Java

```java
class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        var adjList = getAdjList(prerequisites,numCourses);

        for (int i=0;i<numCourses;++i) {
            Set<Integer> visited = new HashSet<>();
            boolean validCourse = dfs(adjList,i,visited);
            if (!validCourse) return false;

        }

        return true;
    }

    private Map<Integer, List<Integer>> getAdjList(int[][] prereq,int n) {
        Map<Integer, List<Integer>> adj = new HashMap<>();

        for (var p : prereq) {
            int course = p[0], pre = p[1];

            if (adj.containsKey(course)) {
                adj.get(course).add(pre);
            }
            else {
                List<Integer> neighbours = new ArrayList<>();
                neighbours.add(pre);
                adj.put(course, neighbours);
            }
        }

        for (int i=0;i<n;++i) {
            if (!adj.containsKey(i))
                adj.put(i,new ArrayList<>());
        }

        return adj;
    }

    private boolean dfs(Map<Integer,List<Integer>> adj, int node, Set<Integer> visited) {
        if (visited.contains(node)) return false; 
        if (adj.get(node).size()== 0) return true;

        visited.add(node);

        List<Integer> neighbours = adj.get(node);

        visited.add(node);
        for (Integer n : neighbours) {
            var isValid  = dfs(adj,n,visited);
            if (!isValid) return false;
        }
        visited.remove(node);
        adj.put(node, new ArrayList<>());

        return true;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would visit all nodes atleast once.
    
- Memory
    
    The memory usage is `O(N)` since we use a set.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)