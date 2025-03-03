---
title: 2194 Cells in a Range on an Excel Sheet
date: 2024-08-01
tags:
  - easy
---

# Intuition

From the given input string, we get information of the starting cell and the ending cell. We need to find all the cells that come in between this range.

From the starting cell: we get information of the starting column.
From the ending cell: we get information about the last column.

To find the number of rows, just calculate the max of row number in both the cells.

> Also, to find the ranges between columns - we use the `ord()` function - because the columns are identified by uppercase characters unlike the rows, which are identified by numbers.

# Code

### Python3

```python
def cellsInRange(self, s: str) -> List[str]:
    start, end = s.split(':')

    maxRows = max(int(start[1]), int(end[1]))
    minRows = min(int(start[1]), int(end[1]))
    cols = ord(end[0]) - ord(start[0]) + 1

    cells = []

    for c in [chr(i)  for i in range(ord(start[0]), ord(end[0])+1)]:
        for r in range(minRows, maxRows+1):
            cells.append(f'{c}{r}')

    return cells
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ where N is the number of cells between `starting_cell` and `ending_cell`.

- **Memory**

  The memory usage is $O(N)$ since we store the cells in a list and return it. It depends because some people consider the result list as a linear memory and some people ignore the result list while measuring memory.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
