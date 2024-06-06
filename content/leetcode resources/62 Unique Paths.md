---
title: 62 Unique Paths
tags:
    - medium
---


# 62. Unique Paths

This problem is pretty straightforward - it needs us to calculate how many paths exist between two points on a grid, specifically, from the top-left to bottom-right. This information is crucial, think of it this way - at each step, a `node` starting from top-left will have two choices moving forward. It can either go one step down OR can go one step right, till it reaches any of the boundary.

As you would have guessed, let’s first think of a brute-force approach. Here, a sub-problem can be defined as trying to find a path from `grid[m-1][n-1]` to `grid[0][0]`, where `m` and `n` are current node positions. Now, the base case here can be thought of as “keep on finding the node until `m-1` and `n-1` both eventually reach 0”. 

Let’s visualize this using the image below.

![Untitled](62%20Unique%20Paths%203531fe3a901d4d0bb5cadea7cf240b07/Untitled.png)

Let `small_grid = 2 x 2`, `medium_grid = 2 x 3`, and `large_grid = 2 x 4`.

The `small_grid`  generates two paths to get to it’s destination, `medium_grid` generates three paths and `large_grid` generates four such paths. Now, carefully observe and you would notice that they are all nested. A `large_grid` is made using a `medium_grid`, which is made using a `small_grid`. Voila! There we have our sub-problem neatly visualized. 

For eg. A `medium_grid` is formed when the `small_grid[0][1]` is extended one position right, then one down, as well as the `small_grid[1][1]` is extended one position right.

# Code:

### C++

```cpp
class Solution {
public:
    int generator(int m, int n, vector<vector<int>>& memo) {
        if (memo[m][n] != -1) return memo[m][n];

        if (m < 0 || n < 0) return 0;
        else if (m==1 || n==1) return 1;
        else {
            return memo[m][n] = generator(m-1,n,memo) + generator(m,n-1,memo);
        } 
    }

    void populate(vector<vector<int>>& memo,int m,int n) {
        memo.resize(m+1, vector<int>(n+1,-1));
    }

    int uniquePaths (int m, int n) {
        vector<vector<int>> memo;
        populate(memo,m,n);

        return generator(m,n,memo);
    }

};
```

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)