---
title: 2744 Find Maximum Number of String Pairs
tags:
  - medium
---

Brute force through out since the input size is quite small (`1 <= words.length <= 50`)

Leaving another solution approach that leetcode user [votrubac](https://leetcode.com/votrubac/) had posted in the solutions tab that I liked. It’s an optimized version of storing and searching to check if have seen a newer string earlier by using the `ord` or ASCII value of the characters, since it’s given that there would only be two characters in a string.

```python
int maximumNumberOfStringPairs(vector<string>& words) {
    int vis[676] = {}, res = 0;
    for (const auto &w : words) {
        res += vis[(w[1] - 'a') * 26 + w[0] - 'a'];
        vis[(w[0] - 'a') * 26 + w[1] - 'a'] = true;
    }
    return res;
}
```

# Code:

### Python3

```python
class Solution:
    def maximumNumberOfStringPairs(self, words: List[str]) -> int:
        ret = 0
        for i in range(len(words)):
            for j in range(i):
                if words[i] == words[j][::-1]: ret += 1

        return ret
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` where N = length of list `words`.
- Memory
  The memory usage is `O(N)` since we use a `ret` string.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
