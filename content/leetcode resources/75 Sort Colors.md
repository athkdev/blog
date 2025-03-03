---
title: 75 Sort Colors
date: 2024-06-12
tags:
  - medium
  - dutch national flag
---

This problem is the famous reiteration of the `Dutch National Flag problem` put forth by renouned computer scientist Edsger Dijkstra (yes the one with the shortest path finding algorith).

The algorithm, generally speaking, is not used for all purpose sorting such as quicksort or mergesort (because we need to know the low value and high value beforehand). Rather, it's an algorithm to separate low outliers, and high outliers in a dataset.
So, it sorts all low values to the left, all high values to the right, and all other value that are neither low nor high are placed somewhere in the middle.

For a thorough understanding of the DNF algorith, please refer to [[/notes/Dutch National Flag algorithm]]

# Code:

### Python3

```python
def sortColors(self, nums: List[int]) -> None:
    '''
    @desc Sort list of integers with only elements being 0, 1 and 2

    @param nums: list of integers
    @returns None
    '''

    low, mid, high = 0, 0, len(nums)-1

    while mid <= high:
        if nums[mid] == 0:  # low or red
            nums[mid], nums[low] = nums[low], nums[mid]   # swap mid with low
            mid += 1
            low += 1

        elif nums[mid] == 2:  # high or blue
            nums[mid], nums[high] = nums[high], nums[mid]  # swap mid with high
            high -= 1

        else:
            mid += 1

    return nums

```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N)$ since we are visiting all elements in the array only once.

- Memory
  The memory usage is $O(n)$ shttps://www.youtube.com/@codesmart760ince we use the `collections.defaultdict` object to store multiple and modulos.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
