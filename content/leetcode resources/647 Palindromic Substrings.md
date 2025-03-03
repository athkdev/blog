---
title: 647 Palindromic Substrings
tags:
  - medium
---

This problem is similar to [5. Longest Palindromic Substring](5%20Longest%20Palindromic%20Substring%20efe5cf985e734acba7f8cf36798c7fd3.md)

This is a counting problem because the problem asks us to calculate the number of palindromic substrings. We can achieve that with “expandFromCenter” technique.

Here, we iterate over all characters and try to expand from the center of each character and check if the substring is a palindrome. Unlike [leetcode 5](5%20Longest%20Palindromic%20Substring%20efe5cf985e734acba7f8cf36798c7fd3.md) where we need to find the longest substring, here we need to calculate how many of them exist: hence we use the counter and count both even and odd length palindromes.

# Code:

### Java

```java
class Solution {
    public int countSubstrings(String s) {
        int res = 0;

        for (int i = 0;i<s.length();++i) {
            res += expandFromCenter(s,i,i);
            res += expandFromCenter(s,i,i+1);
        }
        return res;
    }

    private int expandFromCenter(String s, int L, int R) {
        int count = 0;
        while (L>=0 && R<s.length() && s.charAt(L) == s.charAt(R)) {
            L--;
            R++;
            count++;
        }

        return count;
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O (n^2)$ .
- Memory
  The memory usage is $O(1)$ since we aren’t using any extra datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
