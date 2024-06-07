---
title: 2315 Count Asterisks
tags:
    - medium
---



We are required to count the number of asterisks between two pairs of `|`. Think of a pair of `|` as a wall within which you cannot see anything, and you can see everything between two such walls.

Well, we are just applying the same logic. We have a boolean flag variable that toggles to the moment we enter a wall (pair of `|`). When that boolean flag is off, we don’t capture anything. Once it is on, we read for asterisks and return the total.

# Code:

### Python

```python
class Solution:
    def countAsterisks(self, s: str) -> int:
        flag = True 

        res = 0
        for c in s:
            if c == '|':
                flag = not flag
            
            if flag and c == '*':
                res += 1
        
        return res
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as since we would be iterating the array atleast once.
    
- Memory
    
    The memory usage is `O(N)` since we use a stack to keep track of characters.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)