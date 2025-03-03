---
title: 2788 Split Strings by Separator
tags:
  - medium
---

This problem is just an implementation detail and does not require any algorithmic thinking whatsoever. But there’s a peculiarity in it regarding how regex works.

So, the separator that they provide is a special character and regex has special rules for special characters. If you want to match the special characters (`$, %, ^, &, #, @, !, *, period`), you have to prefix your regex string with `\\Q` and suffix it with `\\E`.

# Code:

### Java

```java
class Solution {
    public List<String> splitWordsBySeparator(List<String> words, char separator) {
        List<String> res = new ArrayList<>();

        for (String w: words) {
            String[] splitWords = w.split("\\Q"+String.valueOf(separator)+"\\E");

            for (String sw: splitWords) {
                if (sw.length()>0) res.add(sw);
            }

        }

        return res;
    }
}
```

### Big O Analysis

- Runtime
  The runtime complexity here is `O(N*K)`, where K is length of the largest word in the array.
- Memory
  The memory usage is `O(1)` since we don’t use any extra datastructure.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
