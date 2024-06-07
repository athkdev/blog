---
title: 846 Hand of Straights
tags:
  - medium
---

This problem is fairly simple but the solution that I used here (taken and studied from lee on Leetcode) made me scratch my head a lot.

A basic idea is that we greedily form groups and if we are not able to form groups, i.e. `freq[i+j] == 0`, where `i = hand_number`, `j = position_of_group_member_to_be_formed`.

So, the statement `freq[i+j] -= freq[i]` is equivalent to simulating forming a group.

# Code:

### Python3

```python
class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        freq = Counter(hand)

        for i in sorted(freq):
            if freq[i] <= 0: continue

            for j in range(groupSize)[::-1]:
                freq[ i + j ] -= freq[ i ]
                if freq[ i + j ] < 0: return False

        return True
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(n * log(n))$ since we are sorting the frequency keys

- Memory
  The memory usage is $O(n)$ since we use the `collections.Counter` object to store frequencies

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
