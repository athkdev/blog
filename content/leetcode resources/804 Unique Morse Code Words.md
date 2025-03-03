---
title: 804 Unique Morse Code Words
date: 2024-08-05
tags:
  - easy
---

# Intuition

If you are wondering how two messages/words produce the same morse code - it's because there's no space or delimiter while generating a code for a word.

In a real setting, due to some delimiter (most probably space) - two distinct words will have two distinct morse codes.

Use a set to store computed codes, and return the number of distinct codes.

# Code

### Python3

```python
def uniqueMorseRepresentations(self, words: List[str]) -> int:
    cipher = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
    '''
    the cipher table is provided in the problem description
    '''
    computed = set()

    for w in words:
        code = ''

        for c in w:
            code += cipher[ord(c) - ord('a')]

        if code not in computed:
            computed.add(code)

    return len(computed)
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * k)$ where N is number of words, and k is variable length of each word.

- **Memory**

  The memory usage is $O(N)$ since we are using a set to store computed cipher code.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
