---
title: 921 Minimum Add to Make Parentheses Valid
tags:
  - medium
---

Well, this is very similar to the Valid Parentheses problem, where you have to return true or false if the parentheses string is valid or not respectively. This one’s the same, just that you have to return how many parentheses change would it take to make the string valid.

Think about it, for every opening there must be a closing and vice-versa. The solution is just that. I was trying to do it without using a stack somehow, but couldn’t because it was getting tricky to store the current validity state of the string as we traverse through it.

So, we use stack, because this way when the state of the string gets messed up, we don’t `pop` from the stack. This is an important characteristic of the problem. This way we know if the string messed up at some point, and it keeps that messed-up-ness till the end of the string.

# Code:

### Python

```python
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        S = []

        for p in s:
            if S and p == ')':
                if S and S[-1] == '(':
                    S.pop()
                    continue

            S.append(p)


        return len(S)
```

### Big O Analysis

- Runtime
  The runtime complexity here is $O(N)$ since we would visit all parentheses in the string.
- Memory
  The memory usage is $O(N)$ since we use a stack to store parentheses state.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
