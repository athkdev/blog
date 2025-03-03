---
title: 409 Longest Palindrome
tags:
  - medium
---

Well, think how would one go about building a palindrome. Any palindrome must be mirror identical from the middle i.e. something like `abccba`, OR `racecar` . But there’s an edge case, any palindrome can be of even or odd length. When it’s an even length - in the center there are two alphabets present but in the case of an odd length - in the center there is a single character present.

So while building, count all occurences of characters in a string. All the even ones can and will contribute to making the largest string. Now just check if theres a single character present, because you are asked to make just a palindrome, so why not make it an odd length one (which will be one character larger than the even length one)

# Code:

### Java

```java
class Solution {
    public int longestPalindrome(String s) {
        Map<Character,Integer> count = new HashMap<>();

        for (Character c : s.toCharArray()) {
            count.put(c,count.getOrDefault(c,0)+1);
        }

        int max = 0, ones = 0;
        for (var entry: count.entrySet()) {
            var c = entry.getKey();
            var n = entry.getValue();

            if (n==1) {
                ones++;
            }

            if (n%2==0) {
                max += n;
            }
            else {
                max += (n-1);
                ones++;
            }
        }
        max += ones>0 ? 1 : 0;
        return max;
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N)` .
- Memory
  The memory usage is `O(N)` where N is the hashmap size.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
