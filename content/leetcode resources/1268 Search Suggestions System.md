---
title: 1268 Search Suggestions System
date: 2025-01-29
tags:
  - medium
---

Brute force approach: we compute all increasing substrings from the search word, and for each `searchTerm` we check if the products match.

Optimization: instead of looking over all products to see if it has a matching product, we use binary search - since we sort the products array at first.

Alternative approach: trie.

# Code

### Python3

```python
def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:

    k = 3

    N = len(searchWord)
    result = []

    products.sort()  # P lg P

    for i in range(N):  # O (N)
        searchTerm = searchWord[:i+1]

        current = []

        for p in products:   # O (K * log P)
            if len(current) == k:
                break

            if len(p) > len(searchTerm) - 1 and p[:len(searchTerm)] == searchTerm: # O (K)
                current.append(p)

        result.append(current)

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(K * P log P)$ where K is variable `searchTerm` (increasing substring of `searchWord`) and P is length of products array P.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
