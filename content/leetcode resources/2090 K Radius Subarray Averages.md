---
title: 2090 K Radius Subarray Averages
tags:
    - medium
---



[Problem link 🔗](https://leetcode.com/problems/longest-common-subsequence/) 

This is a classic **sliding window** problem. It asks to calculate the average of a sub-array with center at index `i` and the sub-array is found by going `k` elements to the left and right of center `i`, and then replace `i` with that average (in a new array `avgs`).

Think of a brute-force  - it’s pretty straightforward. You iterate the array, then for every `i` in bounds (`i - k ≥ 0 && i + k < array_length`), you calculate the sum of `2 * k +1` elements (this is how long the window will be) using another for OR while loop and store at `avgs[i]`. But when you run this solution (see the unoptimized code below), Leetcode doesn’t accept because time limit exceeds. Well, well, well - this calls for some time optimization.

Usually, it is a good idea to dry run the code, see which bits of the code are redundant OR maybe are getting recalculated again. Think of the time when we calculate a `factorial`, in order to avoid re-computation of smaller factorials, we **memoise** them in a hashmap. This saves a lot of time especially in exponential/polynomial time algorithms.

Here, there is such a relation too. Once you calculate a `window_sum` i.e. of length (2 * k + 1), the next window_sum in the iteration doesn’t need to be calculated all over again. It can be obtained by removing the first element of the window and adding in a new element at the end. Essentially, boiling down the problem of adding `(2*k + 1)` elements, to just subtracting and adding two elements.

![Untitled](2090%20K%20Radius%20Subarray%20Averages%20396a6fdd092741d68ea06c3850fe0760/Untitled.png)

Note: Essentially by doing so, we are breaking down the window calculation to a **constant time operation** as opposed to the previous - where it was a function of `k`, so increase in `k` would have impacted the algorithm speed with larger inputs.

# Code:

### C++ (unoptimized, brute-force)

```cpp
class Solution {
public:
    vector<int> getAverages(vector<int>& nums, int k) {
        vector<int> avgs = vector<int>(nums.size(), -1);

        
        for (int i=0;i<nums.size();++i) {
            if (i-k >= 0 && i+k < nums.size()) {
                int cur_sum = 0;

								// re-computing all values in the window for every iteration
                for (int j=i-k;j<=i+k;++j) {
                    cur_sum += nums[j]; 
                }

                avgs[i] = cur_sum / (2 * k + 1);
            }
        }

        return avgs;
    }
};
```

### C++ (optimized for time)

```cpp
class Solution {
public:
    vector<int> getAverages(vector<int>& nums, int k) {
        vector<int> avgs = vector<int>(nums.size(), -1);

        long prev_window = 0;
        if (nums.size() >= 2*k+1) {
            for (int i=0;i<2*k+1;++i) {
                prev_window += nums[i];
            }
        }

        for (int i=0;i<nums.size();++i) {
            if (i-k >= 0 && i+k < nums.size()) {
                avgs[i] = std::floor(prev_window / ((2*k)+1));

								// only subtracting and adding two elements 
                prev_window -= nums[i-k];
                prev_window += nums[i+k+1 < nums.size() ? i+k+1 : i+k];
            }
        }

        return avgs;
    }
};
```

### Big O Analysis

The time complexity is `O(N)` because it iterates through the input `nums` list once. (For the unoptimized code, time complexity is `O(N * k)` where k = window length.)

The space complexity is `O(N)` as well, due to the result vector `avgs` we created of length `N`.