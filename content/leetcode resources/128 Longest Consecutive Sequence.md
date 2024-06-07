---
title: 128 Longest Consecutive Sequence
tags:
    - medium
---



The problem requires us to find the longest consecutive sequence from a given array. But we need to come up with a $O(N)$ solution: that means sorting the array is out of question since it takes $O(n * logN)$ time.

The approach in the code below, contains a set with all elements from input. Then once we iterate over the input, we check if any number is the starting point of a consecutive sequence by checking if $set.contains(current - 1)$. Since this element is the starting point, we don’t need to worry about the consecutive elements greater than this - there won’t be any. 

Once we find this element, maintain a variable to count until we don’t find $(current - 1)$ in the set. Also, ensure to update current by $current = current - 1$.

> Note: Ensure to remove a element that you once visited from the set, as it would cause revisits and the overall complexity will bump to $O (N * K)$ where K is consecutive elements for each element in input array.
> 

# Code:

### Java

```java
class Solution {
    public int longestConsecutive(int[] nums) {
       Set<Integer> check = new HashSet<>(); 
       for (int a : nums) {
           check.add(a);
       }

       int max = 0;
       for (Integer a : nums) {
           if (!check.contains(a-1)) {
               int cur = a + 1;

               while (check.contains(cur)) {
                   check.remove(cur);
                   cur += 1;
               }
               max = Math.max(max,cur - a);
           }
       }

       return max;

    }
}
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(N)$
    
- Memory
    
    The memory usage is $O (N)$ since we use a set of input size N.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)