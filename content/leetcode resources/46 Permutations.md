---
title: 46 Permutations
tags:
    - medium
---


# 46. Permutations

This is a very (very) crucial problem because if forms the base of many other problems. It uses the fundamental algorithm pattern called **backtracking**. Don’t let the name scare you, if you have solved any easy tree problems chances are pretty good that you’ve already used a backtracking algorithm. Yes, the DFS! Depth First Search is a backtracking algorithm as by definition it brute-forces through all possible outcomes. 

The above problem, provides us an `int` array and asks us to generate all possible permutations of it. It is important to understand the key difference between *permutations and combinations* though. While very similar, the major difference between the two is the ordering of characters in each of them. For eg. a permutation is an **ordered** set, while a combination is an **unordered** set. So, the string `"abc"` is different than `"bac"` in a permutation while in a combination they are the same thing.

For conceptual understanding, take a look at the recursive tree below. Each node represents a recursive function call, the yellow letters denote the options available at that call. Suppose our input is `str = "abc"`. As any recursive function requires a base case, the base case here is satisfied whenever the current permutation (that we are building in each function call) reaches the length of the input. 

![Untitled](46%20Permutations%2023e1aed1243f489f9c076da2671361b7/Untitled.png)

As you might have noticed by now, the algorithm needs to you make choices and then undo those choices when required. Below if a *pseudocode* of a backtracking algorithm:

 

```jsx
function backtrack(arr, s):
	if basecase is satisfied:
		// depends on what you want to do, maybe you want to add the subresult to the result
		return

	for choice in choices:
		if choice is valid:
			make choice
			backtrack(arr, s)		
			undo choice
```

We have worked with `strings` in the above example, but the are no different than working with arrays.

# Code:

### C++

```cpp
class Solution {
public:
    void generate(vector<vector<int>>& res, vector<int>& nums, vector<int>& current, vector<bool>& used) {
        if (current.size() == nums.size()) {    /// base case
            res.push_back(current);
            return;
        }

        for (int i=0;i<nums.size();i++) {
            if (!used[i]) {  // checking if choice is valid
                
								// making choices
								used[i] = true;
                current.push_back(nums[i]);

                generate(res, nums, current, used);

								// undoing choices
                used[i] = false;
                current.pop_back();
            }
        }
    }

    void populate_by_false(vector<bool>& used, int times) {
        for (int i=0;i<times;++i) {
            used.push_back(false);
        }
    }

    vector<vector<int>> permute(vector<int>& nums) {
        vector<vector<int>> result;
        vector<int> current;
        vector<bool> used;

        populate_by_false(used, nums.size());

        generate(result, nums, current, used);

        return result;
    }
};
```

We are using `vector<bool> used` which is same size of input (`vector<int> nums`). This is so that we remember if any element is a valid option to use or not (see the yellow character in the string example above). 

### Big O Analysis

The time complexity here is `O(N!)` as it would search for all possible outcomes, and the time increases exponentially with respect to the input size.

The space complexity is `O(N!)` as well, the result vector will contain N! strings/arrays for all input strings/arrays N, where `len(N) > 1`.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)