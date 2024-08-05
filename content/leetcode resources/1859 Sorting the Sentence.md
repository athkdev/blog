---
title: 1859 Sorting the Sentence
date: 2024-08-05
tags:
  - easy
  - sort
---

# Intuition

We need to sort the words in the sentence - so first split the sentence using the `' '` delimiter. Then extract the sorting order number with `word[-1]` -> and convert it to a int `int(word[-1])`.

Then while sorting, we use a comparator and pass the sorting order number to the lambda function.

> Lambda functions in Python are amazing: learn more about them [here](https://note.nkmk.me/en/python-lambda-usage/)

# Code

### Python3

```python
def sortSentence(self, s: str) -> str:
    return ' '.join([x[:-1] for x in sorted(s.split(' '), key=lambda x: int(x[-1]))])
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * log N)$ since we are sorting the words in the sentence of length N.

- **Memory**

  The memory usage is $O(N)$ since are using the `sorted` function which returns a list.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
