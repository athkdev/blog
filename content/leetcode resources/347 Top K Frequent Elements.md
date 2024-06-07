---
title: 347 Top K Frequent Elements
tags:
    - medium
---



There are two approaches that simultaneously come to my mind, but both of them have the same time complexity. The fundamental differences between those approaches is that one uses a heap and the other uses sorting. (psst I like that heap one more ;p )

`Heap approach:` We use a heap to maintain top K elements. From looking at some of my other solutions you would come to know that heap is a pretty good idea for problems that are in the format “Top K elements …..”. Well, we do the similar thing here. First build a frequency table of the numbers in the list (this is linear time), then insert them into the heap and maintain K elements. While inserting if length of heap goes beyond K, use `heappop()` .

Note: If using Python, insert a tuple in the heap while doing `heappush()`. Python recognises the first value of the tuple as a comparator key.

`Sorting approach:` Similar to the heap approach, build a frequency table first. Then sort the dictionary with the dictionary value as the key. Depending if you reverse the sorting order or not, return the first K or last K keys.

## Code

### Python3 (heap solution)

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:

        freq = defaultdict(int)

        for n in nums:
            if n in freq.keys():
                freq[n] += 1
            else: freq[n] = 1

        elements = []
        heapify(elements)                           # O(N)

        for n in freq.keys():                       # O(N)
            key = n; val = freq[n]

            heappush(elements, (freq[key], key))    # O(log N)

            if len(elements) > k:
                heappop(elements)                   # O(log N)
            
        return [t[1] for t in elements]             # O (N)
```

### Python3 (sorting solution)

```python
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = defaultdict(int)

        for x in nums:
            if x in freq.keys():
                freq[x] += 1
            else:
                freq[x] = 1
        
        freq = dict(sorted(freq.items(), key=lambda x: x[1], reverse=True)) # O (n log n)

        tmp = list(freq.keys())

				# sort the dictionary based on the values
        ret = []
        for i in range(k):
            ret.append(tmp[i])

        
        return ret
```

### Big O Analysis

- Runtime
    
    The runtime complexity here is $O(n\;log(n))$ for both solutions.
    
- Memory
    
    The memory usage is $O(N)$ for both solutions since we use a dictionary and a heap.
    

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)