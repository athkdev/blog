---
title: 1493 Longest Subarray of 1's After Deleting One El
tags:
    - medium
---


# 1493. Longest Subarray of 1's After Deleting One Element

[Problem link 🔗](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/) 

The problem asks us to find the longest subarray that consists of only 1’s - but the twist is that we are allowed to delete any **singular** 0 that might be stopping us from finding a longest subarray.

We keep track of a two things in this problem - first, the longest subarray consisting of 1’s until any index `i` and second, the longest subarray consisting of 1’s AND a single 0 until that index `i`.

In the code below, 

`dp[i][0]` = max length of 1’s up and until index `i` 

`dp[i][1]` = max length of 1’s with only single 0 until index `i`.

Linearly moving through input array `nums` we can smartly fill the dp array to obtain our results. The moment we come across two or more 0’s side-to-side, we reset our `dp[i][1] = 0`.

Note: This is not a 2D DP problem although the `dp[i][j]` might confuse ya. We are using the inner vector/array to keep track of two things at once - it’s essentially the same as using two distinct arrays OR using a `vector<pair<int,int>>`.

# Code:

### C++

```cpp
class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        vector<vector<int>> dp;
        dp.resize(nums.size(), vector<int>(2, 0));

        dp[0][0] = nums[0] == 1 ? 1 : 0;

        for (int i=1;i<nums.size();++i) {
            if (nums[i] == 1) {
                dp[i][0] = dp[i-1][0] + 1;
                dp[i][1] = dp[i-1][1] + 1;
            } else {
                dp[i][0] = 0;
                dp[i][1] = dp[i-1][0];
            }
        }

        int res = INT_MIN;
        for (auto a : dp) {
            res = max(res, a[1]);
        }

        return res;

    }
};
```

### Big O Analysis

The time complexity is `O(N)` because it iterates through the input `nums` list once. (For the unoptimized code, time complexity is `O(N * k)` where k = window length.)

The space complexity is `O(N)` as well, due to the result vector `avgs` we created of length `N`.