---
title: 424 Longest Repeating Character Replacement
tags:
    - medium
---



The problem asks to find the longest substring with repeating characters that contains $k$ characters that could be replaced with the current maximum frequency character.

We use a sliding window where we increase our window until the number of characters to be replaced exceeds $k$.

We use a count array to keep frequencies of characters in the current window. We keep track of the current maximum frequency in our window. With this we calculate the number of elements that can be replaced. If this number exceeds k, we shrink our window from the left and decrease its frequency in the count array.

$$
windowMaxFreq = max(windowMaxFreq, count[c - 'A']+1)
\\
window Size = right - left + 1 \; 
\\
toReplace = windowSize - windowMaxFreq
$$

> Note 1: using a character array to store frequencies is a good way as iterating over it is constant time (there are only 26 alphabets)
> 

> Note 2: `count[c - 'A']`  maps our character to its corresponding alphabetical order
For eg. if c = ‘B’ → `count['B' - 'A']` → `count[66 - 65]` → `count[1]`
Similarly, if I wanted to map lowercase english alphabets, I can use `c - 'a'`
> 

# Code:

### Java

```java
class Solution {
    public int characterReplacement(String s, int k) {
        int[] count = new int[26];

        int left = 0, res = Integer.MIN_VALUE; 
        int windowMaxFreq = 0;

        for (int right = 0; right<s.length(); ++right) {
            char c = s.charAt(right);

            windowMaxFreq = Math.max(windowMaxFreq, ++count[c- 'A']);

            int windowSize = right - left + 1;
            int toReplace = windowSize - windowMaxFreq;

            if (toReplace > k) {
                count[s.charAt(left) - 'A']--;
                ++left;
            }
            else {
                res = Math.max(res, windowSize);
            }
        }

        return res;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(n) \; where \; n=s.length$.
    
- Memory
    
    The memory usage is $O(1)$. Although we are using an array count, its always going to be of length 26, constant space!.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)