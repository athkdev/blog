---
title: 2461 Maximum Sum of Distinct Subarrays With Length K
date: 2025-03-15
tags:
  - medium
---

We need to find the maximum sum of all the subarrays in the input array, EXCEPT we do not consider any of the window that has any elements more than 1 time in it.


These problems can be solved with maintaining a sliding window of `k` length and also maintaining a hashtable as a frequency count to check if any element is present more than 1 time.


This check can be done with `len(dict) == k`. Also, as we move the window, if any count reaches $0$ its necessary that entry is removed from the table or else our logic for checking if there are duplicates or not, would not function properly.

# Code

### Python3

```python
def maximumSubarraySum(self, nums: List[int], k: int) -> int:
    '''

    only record when len(set) < k

    '''

    if len(nums) < k:
        return 0

    window_sum = 0
    result = 0

    chk = defaultdict(int)
    left = 0
    for right in range(len(nums)):

        if right < k:
            window_sum += nums[right]

            chk[nums[right]] += 1
            if len(chk) == k:
                result = max(result, window_sum)
            continue

        window_sum += nums[right]
        window_sum -= nums[left]

        chk[nums[right]] += 1
        chk[nums[left]] -= 1

        if chk[nums[left]] == 0:
            del chk[nums[left]]

        if len(chk) == k:
            result = max(result, window_sum)

        left += 1

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to current window element frequencies.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
