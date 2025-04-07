---
title: 438 Find All Anagrams in a String
date: 2025-04-06
tags:
  - medium
---

The problem basically boils down to be able to find a window of characters that matches all the character (one-to-one) from the given string `p`.

A good way to check this would be to maintain a frequency table of the elements inside the sliding window. Increment its frequency once a character enters the window, and decrement once it leaves out.

> Note: make sure to remove the key from the dictionary once the frequency reaches 0.

# Code

### Python3

```python
def findAnagrams(self, s: str, p: str) -> List[int]:

    count = Counter(p)
    freq = defaultdict(int)

    result = []
    left = 0
    for right, c in enumerate(s):

        freq[c] += 1

        while sum(freq.values()) > len(p):
            freq[s[left]] -= 1
            # this is important, because then the count keeps on going in negative which messes up the count logic
            if freq[s[left]] <= 0:
                del freq[s[left]]
            left += 1

        if freq == count:
            result.append(left)

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting every character in the input only once.

- **Memory**

  The memory usage is $O(N)$ since we use the `Counter` and `defaultdict` for storing the window frequencies.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
