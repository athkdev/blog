---
title: 1598 Crawler Log Folder
date: 2024-07-10
tags:
  - easy
---

# Intuition

In a way, we are just required to keep the track the maximum depth of the file structure.

Minimum number of operations to go back after folder changes = Maximum depth of file tree

This way, there's no need to keep track of current folder we are in, just need what's our depth after all operations are done.

# Code

### Python3

```python
def minOperations(self, logs: List[str]) -> int:
    depth = 0
    for l in logs:
        if l == '../':
            depth = max(depth-1, 0)
        elif l == './':
            pass
        else:
            depth += 1

    return depth
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we iterating over all operations.

- **Memory**

  The memory usage is $O(1)$ since we are not using any extra data structure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
