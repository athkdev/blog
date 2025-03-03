---
title: 451 Sort Characters By Frequency
tags:
  - medium
---

This straightforward implementation problem focuses on the frequency of the characters in the input string. We need to sort the input string with decreasing frequency characters.

So, we first create a frequency map of the input string, then sort the map according to the `freq.values()` .

Then finally iterate over the map and build the result string.

# Code:

### Python

```python
class Solution:
    def frequencySort(self, s: str) -> str:
        freq = {}

        for c in s:
            if c in freq:
                freq[c] += 1
            else:
                freq[c] = 1

        res = ''

        sorted_freq = {k: v for k, v in sorted(freq.items(), key=lambda item: item[1])}

        for k, v in sorted_freq.items():
            res += k * int(v)

        return res[::-1]
```

### Big O Analysis

- Runtime
  The runtime complexity for this problem is pretty interesting. Theoretically speaking, it’s$O(N\;*\;log(N))$ since we sort our dictionary values. But if you read the constraints of the problem, you notice that we would have only lowercase and uppercase alphabets in the input. So, $N = \{ a,b,c,....,y,z,A,B,C,....,Y,Z \}$ where $|N| = |26 + 26| = 52$. So, our N is atmost $52$ for all input sizes. Constant time! Yippee!
- Memory
  The memory usage is $O(N)$ since we use a hashmap to store the frequencies of the input characters. But then again, since $|N| = 52$, this too is constant space!

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
