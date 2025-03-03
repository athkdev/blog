---
title: 896 Monotonic Array
tags:
  - medium
---

# 896. Monotonic Array

The problem statement is interesting because of how simplified it looks. Well, it is, but because it asks to us to find if it is increasing or decreasing in the same problem makes it (kinda) more twisty.

So, design is pretty straightforward - we keep track of two `boolean` variables, which will keep track of whether the array is increasing or decreasing. We traverse the array and at each iteration we consider a window of two elements at a time. We do an AND operation of the two elements with `increasing` and `decreasing`.

`increasing &= nums[i-1] <= nums[i]`: this will make increasing false, when `nums[i-1] > nums[i]`

`decreasing &= nums[i-1] >= nums[i]`: this will make decreasing false, when `nums[i-1] < nums[i]`

# Code:

### CPP

```cpp
class Solution {
public:
    bool isMonotonic(vector<int>& nums) {
        bool increasing = true, decreasing = true;

        for (int i=1;i<nums.size();++i) {
            increasing = increasing & nums[i-1] <= nums[i];
            decreasing = decreasing & nums[i-1] >= nums[i];
        }
        return increasing || decreasing;
    }
};
```

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
