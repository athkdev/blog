---
title: 542 01 Matrix
tags:
  - medium
---

We are required to replace each $1$ in the given array with the distance to the nearest $0$.

This problem tricks one into using DFS (at least it did to me), because one would think to find a $0$ its best to do a DFS in all directions after arriving at a $1$. Turns out that does not work, and if you try to make it work there are multiple repeated computations.

Instead, try a BFS. And instead of finding a $1$ from $0$, do the opposite.

```markdown
1. Add all the zeroes in the matrix to a BFS queue, and mark them visited.
2. Maintain a distance variable and update in layer-by-layer in our while loop
3. Poll a element and check if it is a 1
   3.1. If yes, set the distance variable to res[i][j]
4. Finally, add all neighbours of the current element into the queue
```

> Note: While adding neighbours of the current element to the queue, make sure to use direction vectors, else the code is going to look wild xD

# Code:

### Java

```java
class Solution {
    public int[][] updateMatrix(int[][] mat) {
        int[][] res = new int[mat.length][mat[0].length];
        Queue<int[]> Q = new LinkedList<>();
        boolean[][] visited = new boolean[mat.length][mat[0].length];

        for (int i=0;i<mat.length;++i) {
            for (int j=0;j<mat[i].length;++j) {
                if (mat[i][j]==0) {
                    Q.offer(new int[]{i,j});
                    visited[i][j]=true;
                }
                else visited[i][j] = false;
            }
        }

        int distance = 0;
        while (!Q.isEmpty()) {
            int n = Q.size();
            for (int i=0;i<n;++i) {
                int[] node = Q.poll();
                int x = node[0], y = node[1];

                if (mat[x][y] == 1) {
                    res[x][y] = distance;
                }

                addNeighbours(res,Q,node,visited);
            }
            ++distance;
        }
        return res;
    }

    private void addNeighbours(int[][] A, Queue<int[]> Q, int[] node,boolean[][] visited) {
        int x = node[0], y = node[1];

        int[][] directions = {{0,1},{0,-1},{1,0},{-1,0}};

        for (int[] dir : directions) {
            int dirX = dir[0], dirY = dir[1];

            int newX = x + dirX, newY = y + dirY;
            if (newX < 0 || newX > A.length-1 || newY < 0 || newY > A[0].length-1) continue;
            if (visited[newX][newY]) continue;

            Q.offer(new int[]{newX,newY});
            visited[newX][newY]=true;
        }
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` as since we would be iterating the array once.
- Memory
  The memory usage is `O(1)`

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
