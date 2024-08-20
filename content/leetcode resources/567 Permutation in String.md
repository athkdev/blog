---
title: 567 Permutation in String
tags:
  - medium
  - sliding window
---

The problem asks us to determine if any permutation of string $S_1$ exists in string $S_2$. There are several possible intuitions for solving this problem: one is to check if every substring in $S_2$ is an anagram of string $S_1$. We can achieve this by checking if $sorted(S_1)$ equals $sorted(S_2)$. But checking it for every substring would mean a runtime of $O(n^2 *log (n))$ - coding this solution gives us a Leetcode TLE (Time limit exceeded error)

To optimize our approach, we use a sliding window. We maintain a window of $S_1.length$ over string $S_2$ and move it till the end. We also maintain a frequency map populated by characters of $S_1$ and their frequencies.

When we slide our window over $S_2$, we update the frequencies in the map with characters of our current window.

A) reduce the frequency of a character at the right pointer by one

B) increase the frequency of a character at the left pointer by one as it leaves the window

When all the frequencies in the array hit zero, that means we have found our anagram/permutation.

# Code:

### Python (using `Counter` object)

```python
def checkInclusion(self, s1: str, s2: str) -> bool:

    count1 = Counter(s1)

    left = 0
    for right in range(len(s2)):
        if right >= len(s1)-1:

            if count1 == Counter(s2[left:right+1]): return True

            left += 1

    return False
```

### Java

```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[] count = new int[26];

				// store frequency of s1 string
        for (Character c: s1.toCharArray()) {
            count[c - 'a']++;
        }

        int left = 0;

        boolean allZeros = Arrays.stream(count).allMatch(a -> a == 0);
        if (allZeros) {
            return true;
        }

        for (int right = 0; right < n; ++right) {
            count[s2.charAt(right) - 'a']--;

						// maintain a window of right - left + 1 (+1 for inclusive)
            if (right - left + 1 > m) {
                count[s2.charAt(left++) - 'a']++;
            }

            allZeros = Arrays.stream(count).allMatch(a -> a == 0);
            if (allZeros) {
                return true;
            }
        }

        return false;
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(n * 26) \; where \; n=s2.length$, since for each character of string s2 we would iterate over frequency array of length 26 once.

- Memory
  The memory usage is $O(1)$. Although we are using an array, its always going to be of length 26.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
