---
title: 2287 Rearrange Characters to Make Target String
tags:
    - medium
---



The problem asks us to find which how many times can the target string be formed from the source string. This is clearly a frequency problem. We keep track of frequency of all characters in a map for both strings. Then the minimum number of characters of string $target$ present in string $source$ is the answer. This is because if any character falls short, we can’t make a complete target string: thus won’t be considered for a valid answer.

# Code:

### Java

```java
class Solution {
    public int rearrangeCharacters(String s, String target) {
        int[] freq = new int[26];
        int[] freq2 = new int[26];

        Arrays.fill(freq,0);
        Arrays.fill(freq2,0);

        for (Character c: s.toCharArray()) {
            freq[c-'a']++;
        }

        for (Character c: target.toCharArray()) {
            freq2[c-'a']++;
        }

        int res = Integer.MAX_VALUE;
        for (Character c: target.toCharArray()) {
            res = Math.min(res, freq[c-'a']/freq2[c-'a']);
        }

        return res == Integer.MAX_VALUE ? 0 : res;

    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N)` as there are no nested loops and we have visited the characters of source and target strings once in a loop.
    
- Memory
    
    The memory usage is `O(26)` since we have arrays of size 26: so, constant space!
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)