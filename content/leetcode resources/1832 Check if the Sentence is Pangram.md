---
title: 1832 Check if the Sentence Is Pangram
date: 2024-08-05
tags:
  - easy
  - set
---

# Intuition

We use set to check if the sentence given has all the alphabet.

We are using set arithmetic, namely `difference` -> `set(A) - set(B)` will create a set of all elements in A but not in B. So naturally, set A must be greater than B.

If you are interested in learning more about set arithmetic, look into `set union`, `set intersection` and `set difference`. Check out this [link](https://note.nkmk.me/en/python-set/)

# Code

### Python3

```python
def checkIfPangram(self, sentence: str) -> bool:
    return len(set(string.ascii_lowercase) - set(sentence)) == 0
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are converting the sentence of length N into a set. If N < 26, then it's O(26) cuz of the `string.ascii_lowercase)`.

- **Memory**

  The memory usage is $O(N)$ since we are in-fact using sets.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
