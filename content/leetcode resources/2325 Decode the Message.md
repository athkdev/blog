---
title: 2325 Decode the Message
date: 2024-08-05
tags:
  - easy
  - hashmaps
---

# Intuition

Make sure to read the problem description properly - understand what is getting mapped to what. Then it should be easy.

Since we are mapping the first 26 occurences of alphabet in the `key` to the lowercase alphabet - we need to iterate over the message and also keep track what all regular alphabet have been mapped.

For that we use a `i` counter initialized at 'ord('a')` which is 97 and we break the loop after 26.

> Note: for Python programmers, `string.lower_case` and `string.upper_case` are constants with the alphabet in lower and upper case respectively.

# Code

### Python3

```python
def decodeMessage(self, key: str, message: str) -> str:
    cipher = defaultdict(str)

    i = ord('a')

    k = key.replace(' ', '')

    assigned = set()

    for c in k:
        if i >= ord('a') + 26: break
        if c not in cipher:
            cipher[c] = chr(i)
            i += 1

    decoded = ''

    for c in message:
        if c == ' ': cc = ' '
        else: cc = cipher[c]

        decoded += cc

    return decoded
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N + M)$ where N is length of the key and M is length of the message.

- **Memory**

  The memory usage is $O(N)$ since we are using a hashmap to store the cipher.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
