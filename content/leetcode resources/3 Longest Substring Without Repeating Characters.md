---
title: 3 Longest Substring Without Repeating Characters
tags:
  - medium
---

To solve a problem of this sort, I must understand the concept of a `sliding window` . When you have linear data structures to work with like arrays, lists, or strings - you can always maintain a window (fixed or sliding) and move it over the array. Think of it like this - when you are iterating over an array one element at a time, you are (in a way) maintaining a window of `n = 1`.

# Code:

### Python

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left,right,max_len = 0,0,0
        lookup = set()

        while right < len(s):
           # check if s[right] is window[left]
           # if yes -> left++
           # if no -> right++ (increase window)
            if s[right] in lookup:
               lookup.remove(s[left])
               left += 1
            else:
                lookup.add(s[right])
                right += 1
            max_len = max(max_len, right-left)
        return max_len
```

### Big O Analysis

The time complexity here is `O(N)` as left and right would have to travel to the end of string of length N.

The space complexity is `O(N)` as well, because the set we are using can increase and decrease with respect to string of length N.

### Optimization:

The space can be optimized - use a `HashMap` or `Array` to keep running track if we have encountered any alphabets - in our window. This would be constant space `O(1)` as there are only 26 alphabets = `O(26) = O(1)`

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
