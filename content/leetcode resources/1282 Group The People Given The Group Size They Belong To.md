---
title: 1282 Group The People Given The Group Size They Belong To
tags:
  - medium
---

This problem really tests our ability to understand and work with ranges. It's important to understand that to if we are asked to group elements in an array, it's necessary that we use a basic code template that's pretty popular for grouping.

To iterate over an array but with ranges, it's best to use code structure like this:

```python

for i in range(len(arr) // groupSize):
    print(arr[(i * groupSize) : (i+1) * groupSize]

```


# Code:

### Python3

```python
def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
    freq = defaultdict(int)

    for i in range(len(groupSizes)):
        if groupSizes[i] in freq:
            freq[groupSizes[i]].append(i)
        else:
            freq[groupSizes[i]] = [i]
    
    ret = []

    for k, v in freq.items():
        for i in range(len(v) // k):
            group = v[i*k: (i+1) * k]
            ret.append(group)

    return ret
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N * M)$ where `N = len(freq.items())` and `M = len(key)`

- Memory
  The memory usage is $O(n)$ since we use the `collections.defaultdict` as a frequency table.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
