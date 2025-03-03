---
title: 884 Uncommon Words from Two Sentences
date: 2024-09-17
tags:
  - easy
---

Since we are to find uncommon words - words that appear in both the sentences only once. We can use a frequency counter to keep track of the frequencies of words of both sentences, and return the ones that have a frequency of 1.

# Code

### Python3

```python
def uncommonFromSentences(self, s1: str, s2: str) -> List[str]:

    freq = defaultdict(int)

    for word in (s1 + ' ' + s2).split(' '):
        if word in freq:
            freq[word] += 1
        else:
            freq[word] = 1

    return [word for word, count in freq.items() if count == 1]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N + M)$ where N is length of string s1 and M is length of string s2.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store the frequencies.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
