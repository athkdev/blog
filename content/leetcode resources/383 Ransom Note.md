---
title: 383 Ransom Note
tags:
    - medium
---


# 383. Ransom Note

We are given two strings `ransomNote` and `magazine`. We are required to calculate if the `ransomNote` can be built using the `magazine`. You may use a character only $x$ times while building `ransomNote`, if it occurs $x+n$ times where $n>=0$.

Whenever we talk about character counts in a string, the first instinct must be hashmaps. Hashmaps allow us to store how may times a character has occurred in a string. 

```markdown
1. Store all character counts in ransomNote string in a hashmap
2. Iterate over magazine and deduct count for every character in the hashmap
3. Finally, iterate over the hashmap to see if any count has reached 0.
		3.1. If yes, that implies characters in magazine where not sufficient for building ransomNote
		3.2. If no, that implies characters in magazine are sufficient for one-to-one usage in ransomNote
```

# Code:

### Java

```java
class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        Map<Character, Integer> count = new HashMap<>();

        for (Character c : ransomNote.toCharArray()) {
            count.put(c, count.getOrDefault(c,0)+1);
        }

        for (Character c : magazine.toCharArray()) {
            count.put(c, count.getOrDefault(c,0)-1);
        }

        boolean flag = true;
        for (var entry : count.entrySet()) {
            if (ransomNote.contains(Character.toString(entry.getKey())) && entry.getValue() > 0) flag = false;
        }
        return flag;
    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is `O(N*M)`  - where N is the hashmap size and M is the ransomNote string length. While iterating over the hashmap (`O(N)`), we are also check if ransomNote contains a character (`O(M)`).
    
- Memory
    
    The memory usage is `O(N)` where N is the hashmap size OR unique characters in ransomNote and magazine combined.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)