---
title: 1535 Find the Winner of an Array Game
tags:
    - medium
---



Tricky question: it tricks you into believing that you need to look out for `k iterations` - BUT WHEN IN REALITY ONCE A NUMBER LOSES TO ANOTHER NUMBER, IT’S NEVER GOING TO WIN SO YOU CAN TRASH IT.

So, no matter what value of `k` is, after `n rounds` the winner (element at `A[0]`) is not going to change - THAT’S YOUR ANSWER.

That means - either a smaller number that the maximum in array wins k times, then that’s your answer. Or, the largest element in the array wins. Solved.

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

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array once.
    
- Memory
    
    The memory usage is `O(1)`
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)