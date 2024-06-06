---
title: 746 Min Cost Climbing Stairs
tags:
    - medium
---


# 746. Min Cost Climbing Stairs

We need to calculate the minimum cost required to go to climb all the way to the top of the stairs. Now, the criteria as to what counts as climbing is you can either climb one step or two steps at  a time.

# Code:

### C++ (unoptimized, brute-force)

```cpp
class Solution {
public:
    int min_cost (vector<int>& cost, int cur_ind) {
        if (cur_ind == cost.size()-1) return cost[cur_ind];
        if (cur_ind == cost.size()-2) return cost[cur_ind];

        return std::min(cost[cur_ind] + min_cost(cost, cur_ind+1), cost[cur_ind] + min_cost(cost, cur_ind+2));
    }

    int minCostClimbingStairs(vector<int>& cost) {
        return min(min_cost(cost,0),min_cost(cost,1));
    }
};
```

### C++ (optimized for time)

```cpp
class Solution {
public:
    int min_cost (vector<int>& cost, int cur_ind, unordered_map<int,int>& memo) {
        if (memo.count(cur_ind) == 1) return memo[cur_ind];
        
        if (cur_ind == cost.size()-1) return cost[cur_ind];
        if (cur_ind == cost.size()-2) return cost[cur_ind];

        return memo[cur_ind] = std::min(cost[cur_ind] + min_cost(cost, cur_ind+1,memo), cost[cur_ind] + min_cost(cost, cur_ind+2,memo));

    }

    int minCostClimbingStairs(vector<int>& cost) {
        unordered_map<int,int> memo;
        return min(min_cost(cost,0,memo),min_cost(cost,1,memo));
    }
};
```

### Big O Analysis

The time complexity is `O(N)` because it iterates through the input `nums` list once. (For the unoptimized code, time complexity is `O(N * k)` where k = window length.)

The space complexity is `O(N)` as well, due to the result vector `avgs` we created of length `N`.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)