---
title: 599 Minimum Index Sum of Two Lists
date: 2024-08-29
tags:
  - medium
  - hashmap
---

# Intuition

We can store all the words from the first list into a hashtable along with their indices as the keys. Then iterate over the other list, and the word in `list2` is already seen in the `list1` - then calculate the current index_sum with `indices[i] + i`.

If the current `index_sum` is lower than previous than create a new result list, else if the sum is equal to current lowest, append the word to the result list.

# Code

### Python3

```python
def findRestaurant(self, list1: List[str], list2: List[str]) -> List[str]:

    indices = defaultdict(int)

    for i, word in enumerate(list1):
        indices[word] = i


    result = []
    least_sum = float('inf')

    for i, word in enumerate(list2):
        if word in indices:
            index_sum = indices[word] + i

            if index_sum < least_sum:
                result = [word]
                least_sum = index_sum
            elif index_sum == least_sum:
                result.append(word)

    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is the max of lengths of `list1` and `list2`.

- **Memory**

  The memory usage is $O(N)$ since use a hashtable to store words and their corresponding indices.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
