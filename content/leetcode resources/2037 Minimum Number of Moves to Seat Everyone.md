---
title: 2037 Minimum Number of Moves to Seat Everyone
date: 2024-06-12
tags:
  - easy
  - relative sorting
  - zip
---

The description of this problem is very confusing and not written properly. So, you have to look into the given test cases and find a pattern.

From deducing the pattern it looks like we are required to find a seat for every `student` in a sorted manner with respect to the `seats` and add the distance/cost required to switch seats to a result and return that.

```python
# number of moves to move a student to a seat
abs(seat[i] - student[j])
```

# Code:

### Python3

```python
def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
    return sum(abs(a - b) for a, b in zip(sorted(seats), sorted(students)))
```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(N * log (N))$ since we are sorting both the `seats` and `students` which each have a length `N`.

- Memory

  The memory usage is $O(N)$ since we are using list comprehension to first generate a list and then sum it.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
