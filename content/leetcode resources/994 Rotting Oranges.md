---
title: 994 Rotting Oranges
tags:
  - medium
---

We are given a 2D integer matrix $grid$ with $m == grid.length$ and $n == grid[i].length$ where $grid[i] \in \{0, 1, 2\}$ where 0 represents an empty cell, 1 represents an a fresh orange and 2 represents a rotten orange.

The problem asks us to calculate the number of minutes after all oranges get rotten given, every 1 minute the 4-directional neighbours of a rotten orange also get rotten. We must return -1 if there’s a fresh orange left after doing the entire search.

This is a classic use case for a breadth-first search (BFS). We add all the rotten oranges to a search queue and then add neighbours of that node in every iteration. If the current node we are checking is a 0 (empty cell) or a 2 (rotten orange) we don’t add that to the queue, but if the current neighbour is a 1 (fresh orange) we change it to a 2.

Now, we can change it to a 2, because we know for a fact that it’s neighbour (the node that we just poped) is a rotten orange as we are putting only rotten oranges in the queue.

# Code:

### Python

```python
class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        row, col = len(grid), len(grid[0])
        dir = [(0,1),(0,-1),(-1,0),(1,0)]
        def isValid(m,n):
            return m < 0 or m >= row or n < 0 or n >= col

        def bfs(Q,vis):
            distance = 0
            while len(Q) > 0:
                n = len(Q)

                for _ in range(n):
                    i,j = Q.pop()

                    for x,y in dir:
                        newX, newY = x+i,y+j

                        if isValid(newX,newY) or grid[newX][newY] == 2 or grid[newX][newY] == 0:
                            continue

                        grid[newX][newY] = 2

                        vis[newX][newY] = True
                        Q.appendleft((newX,newY))
                distance += 1
            return distance

        queue = deque()
        visited = [[False for _ in range(col)] for _ in range(row)]

        for i in range(row):
            for j in range(len(grid[i])):
                if grid[i][j] == 2:
                    queue.appendleft((i,j))
                    visited[i][j] = True

        res = bfs(queue,visited)

        for i in range(row):
            for j in range(len(grid[i])):
                if grid[i][j] == 1:
                    return -1

        return res-1 if res != 0 else res
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(rows\;*\;cols)$ since we would visit all nodes at least once. There’s an exceptional case where a part of the matrix gets secluded due of 0’s in which case we don’t have to visit them.
- Memory
  The memory usage is $O(N)$ since we use a queue to store rotten oranges.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
