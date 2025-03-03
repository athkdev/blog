---
title: 1689 Partitioning Into Minimum Number Of Deci-Bina
tags:
  - medium
---

# 1689. Partitioning Into Minimum Number Of Deci-Binary Numbers

Deceptive problem alert!

At first I spent a good 5 minutes thinking about how I can use DP to come up with a solution for this. Well, DP would work in fact, but a closer inspection of the problem says otherwise.

Well, the hidden sauce is in the information that we can only use `deci-binary` numbers. They are decimal number which only consists of 0’s and 1’s. Remember, in deci-binary system, 10 is still 10, not 2 (like in binary system)

Now that we have this information at hand, we can deduce that each number that will sum up to N (input), must have corresponding 1’s in the corresponding digits, so as to add up to N. I know this might be confusing, look at the image below. Credits to Leetcode user: [ciote](https://leetcode.com/ciote/)

![Untitled](1689%20Partitioning%20Into%20Minimum%20Number%20Of%20Deci-Bina%2006d1f18506d042739250779b1769bdcc/Untitled.png)

We don’t need to return the numbers themselves, just the total number. Hence, return the max digit in the input string because that’s how many numbers would be required.

I know, this might be one of the shortest problems you would have come across.

# Code:

### Python

```python
class Solution:
    def minPartitions(self, n: str) -> int:
        return int(max(n))
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` as where $N =  len(input)$ since finding the max in a string/list is linear operation.
- Memory
  Constant space!

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
