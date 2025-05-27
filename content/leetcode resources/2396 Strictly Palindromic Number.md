---
title: 2396 Strictly Palindromic Number
date: 2025-05-27
tags:
  - medium
---

Fairly, straight-forward problem. Iterate from 2 to `n-2` and check if the strings are palindromic. If any one of them is not, return `false`, else `true`.

# Code

### Python3

```c++
class Solution {
public:
    bool isStrictlyPalindromic(int n) {
        for (int base = 2; base < n - 1; base++) {
            std::string b = std::bitset<32>(base).to_string();
            if (!isPalin(b)) {
                return false;
            }
        }
        return true;
    }

    bool isPalin(const std::string& s) {
        if (s.empty()) {
            return true; // An empty string is often considered a palindrome
        }

        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            if (s[left] != s[right]) {
                return false; // Characters don't match, not a palindrome
            }
            left++;  // Move left pointer forward
            right--; // Move right pointer backward
        }
        return true; // All characters matched
    }
};
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since how many checks we do is directly dependent on the input `n`.

- **Memory**

  The memory usage is $O(1)$ since we do not use any extra data structure apart from some in-memory operations.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
