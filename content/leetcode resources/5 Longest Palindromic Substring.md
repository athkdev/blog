---
title: 5 Longest Palindromic Substring
tags:
    - medium
---


# 5. Longest Palindromic Substring

We want to find the longest palindromic substring, where a substring implies that all characters have to be consecutive, and palindromic implies that the string is mirrored from the center.

Well, there are multiple ways, one is to iterate over all substrings in the string s and check if it’s a palindrome. But that’s not very good runtime, it’s $n^3$, for small inputs it’s OK but not for larger ones.

A more efficient technique is to iterate over the string $s$ one char at a time and expand from the center to check if the current window of characters is a palindrome.

# Code:

### Java

```java
class Solution {
    public String longestPalindrome(String s) {
        int left = 0, right = 0;

        for (int i = 0;i<s.length();++i) {
            int even = expandFromCenter(s,i,i);
            int odd = expandFromCenter(s,i,i+1);

            int length = Math.max(even,odd);

            if (length > right - left) {
                left = i - (length - 1)/2;
                right = i + (length/2);
            }
        }  

        return s.substring(left,right+1);
    }

    private int expandFromCenter(String s,int L, int R) {
        while (L >= 0 && R < s.length()) {
            if (s.charAt(L) != s.charAt(R)) break;
            L--;
            R++;
        }
        return R - L - 1;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O (n^2)$.
    
- Memory
    
    The memory usage is $O(1)$ since we don’t use any datastructure.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)