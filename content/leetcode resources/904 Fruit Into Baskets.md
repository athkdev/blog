---
title: 904 Fruit Into Baskets
date: 2025-03-15
tags:
  - medium
---

This is a classic sliding window problem. Lets look at another way to frame the question - "What is the largest subarray in the array that has atmost two different characters/types of elements.

This is a popular problem on Leetcode and in general. Maintain a dictionary which has the frequency of characters currently in the window. If the `len(dict)` goes over 2, when start shrinking the window. Keep record of the largest window with `right - left + 1`.

# Code

### Python3

```python
def totalFruit(self, fruits: List[int]) -> int:
    '''
    need to find the longest subarray with only two types of fruits

    invariant:
    1 - the tree position, since they are crucial to problem they cannot be changed

    algorithm:

    maintain an increasing window which only increases when it encounters fruits of type x and y.

    when encountered a fruit of type z,

    '''

    left = 0
    result = -math.inf

    fruit_count = defaultdict(int)

    for right in range(len(fruits)):
        fruit_count[fruits[right]] += 1

        while len(fruit_count) > 2:
            fruit_count[fruits[left]] -= 1

            if fruit_count[fruits[left]] == 0:
                del fruit_count[fruits[left]]

            left += 1

        result = max(result, right - left + 1)


    return result
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N)$ since we are visiting every element in the fruits array once, with some set accesses and the while loop for every element.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` store the fruit frequencies in the current window.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
