---
title: 200 Number of Islands
tags:
  - medium
---

The problem presents us with a grid consisting of `0`’s (water) and `1`’s (land). We are required to find total number of islands in the grid. An island is a collection of `1`’s next to each other - either vertically or horizontally - no, diagonal relations. But as part of a homework/revision once you solve this problem, try solving it but include diagonal relations too - it could be solved using just minor changes.

To come up with a solution to this, an overview intuition is that when we arrive at a `1` we need to find out if there is one more `1` right next to it. That includes one position up, down, left and right. If there exists a `1`, do the above check again on this `1` and so on - UNTIL we arrive at a `1` that has only 0’s around it.

You would have noticed that this is looks like a pair of base case and a sub-problem. The base case is to stop when you find a `1` with `0`’s around it, and the sub-problem is to keep on finding a `1` in any direction (apart from the `1` we have already visited - for this we can use another array of same dimensions that of our grid, so we can remember which `1` have been visited/pending). By performing Depth-First Search (DFS) on our grid we can find a singular island. We can also obtain it’s area if needed - it’s not needed in this problem, consider it a follow-up question ; )

![Untitled](200%20Number%20of%20Islands%202894422a60eb4f9daf69e02f6600bc71/Untitled.png)

## Code:

```cpp
class Solution {
public:

    void search(vector<vector<char>>& grid, vector<vector<bool>>& visited, int i, int j) {

		    if (i<0 || i>=grid.size() || j<0 || j>=grid[i].size()) return;

		    if (grid[i][j] == '1' && !visited[i][j]) { // checking visited[i][j] will help us ignore the 1's we have already visited
		        visited[i][j] = true;

		        search(grid,visited,i-1,j);
		        search(grid,visited,i+1,j);
		        search(grid,visited,i,j-1);
		        search(grid,visited,i,j+1);

		    }
		}

		void populate_by_false(vector<vector<bool>>& visited, int m, int n) {
		    visited.resize(m, vector<bool>(n, false));
		}

		int numIslands(vector<vector<char>>& grid) {
				vector<vector<bool>> visited;
		    populate_by_false(visited,grid.size(),grid[0].size());

		    int count=0;
		    for (int i=0;i<grid.size();++i) {
		        for (int j=0;j<grid[0].size();++j) {
		            if (grid[i][j] == '1' && !visited[i][j]) {
		                search(grid, visited, i, j);
		                ++count;
		            }
		        }
		    }

				return count;
    }

};
```

We iterate through our 2-D grid, and when we encounter a `1` that also isn’t visited (we get this by checking if `visited[i][j] == true/false`), we call our `search()` function which will recursively visit all surrounding neighbors.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
