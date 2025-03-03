---
title: 54 Spiral Matrix
date: 2024-09-11
tags:
  - medium
  - matrix
---

This problem really tests our knowledge on implementation - specifically simulation. So, since we need a spiral behaviour in the result, we can maintain 4 pointers - `top, bottom, left, right`. Think of these as bounds. Whenever while iterating, once we completed a row or a column, we can "shrink" our boundary on the respective side.

# Code

### Python3

```python
  def spiralOrder(self, A: List[List[int]]) -> List[int]:
      m, n = len(A), len(A[0])
      top, bottom, left, right = 0, m-1, 0, n-1

      direction = 0

      res = []

      while top <= bottom and left <= right:
          if direction == 0:
              '''
              going right - implies we are always on the top row
              '''
              for i in range(left, right+1):
                  res.append(A[top][i])
              top += 1
          elif direction == 1:
              '''
              going down - implies we are always on the right column
              '''
              for i in range(top, bottom+1):
                  res.append(A[i][right])

              right -= 1

          elif direction == 2:
              '''
              going left - implies we are always on the bottom row
              '''
              for i in range(right, left-1, -1):
                  res.append(A[bottom][i])

              bottom -= 1

          else:
              '''
              going up - implies we are always on the left most row
              '''

              for i in range(bottom, top-1, -1):
                  res.append(A[i][left])

              left += 1


          '''
          since 4 directions
          '''
          direction = (direction + 1) % 4


      return res
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ since we would be visiting all elements in the 2D matrix.

- **Memory**

  The memory usage is $O(N)$ since we return the result in a list.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
