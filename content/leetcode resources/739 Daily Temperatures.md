---
title: 739 Daily Temperatures
tags:
    - medium
---



The problem requires us to return an array that denotes the number of days from one day to the next hot day; we are given an array of temperatures on days.

So, naturally speaking we need to ‘remember’ from each day what the last set of ‘cold’ days was. For that, we use a stack and at every day we check if there are colder days in the stack; this would imply that our current day is the hottest after that set of cold days.

We then pop the elements until we find a temperature hotter than our current day temperature (`t > temperatures[S[-1]]`) where `S[-1]` is the top element in the stack (similar to `stack.peek()` in other languages.

`Note: This way of maintaining an increasing/decreasing order of elements in a stack is a popular technique of problem-solving and is called $Monotonic\;Stack.$`

This problem is very similar in working to Leetcode 402. 

[[**402. Remove K Digits**](https://leetcode.com/problems/remove-k-digits/description)](402%20Remove%20K%20Digits%2073cef836bd53451c978f7017112dc02b.md)

# Code:

### Python3

```python
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        S = []
        res = [0 for _ in range(len(temperatures))]

        print(res)
        S.append(0)

        for i,t in enumerate(temperatures):
            while S and t > temperatures[S[-1]]:
                cur = S.pop()

                res[cur] = i - cur
            S.append(i)
        return res
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$ because we are visiting all elements once and then update the values of previous days in a backwards way. This way we are not visiting twice, just once by remembering the indices.
    
- Memory
    
    The memory usage is  $O (N)$  since we use are using a stack. Worst case, we would have a monotonically increasing input array where every following day is hotter than the previous. In this case, our stack will completely filled.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)