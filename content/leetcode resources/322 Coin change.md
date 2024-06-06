---
title: 322 Coin change
tags:
    - medium
---


# 322. Coin change

We are required to find the fewest number of coins that we can pick from an array `coins[]` where they can be summed to exactly `amount` . Important note: we CAN repeat any coin we’d like. For eg. `coins = [1, 2, 5], amount = 11`  here we can use 5 twice and then 1 once to achieve the desired sum.

Now, since essentially this is a counting problem, we can use dynamic programming i.e. memoisation or tabulation. We’ll explore both ways here.

Fundamental catch: The basics of the problem is to calculate the amount of coins required for all amounts from 0 upto `amount` . DP is an algorithmic pattern used whenever there is a **recurring subproblem,** here the subproblem being calculating fewest number of coins for all numbers upto `amount` , and if there’s no combination of coins, just keep it at -1 (or some other notable value).

Tabulation solution (bottom-up approach)

```java
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount+1];
    Arrays.fill(dp,amount+1);
    dp[0] = 0;

    int i=0;
    for (i=1;i<amount+1;i++) {
        for (int coin: coins) {
            if (i > coin) {
                dp[i] = Math.min(dp[i-coin]+1, dp[i]);
            }
        }
    }
		
		// dp[amount] > amount means no valid combination was found for amount.
    return dp[amount] > amount ? -1 : dp[amount];        
}

```

Here, as discussed previously we are just calculating the fewest number of coins required at each number between 0 and `amount` , so to store all the values we use an array `int[] dp` of length `amount+1`. This is crucial, `dp[0]` would be 0, as 0 coins would be required to assemble an amount of 0. This is why the array length is one-up than `amount` .

`dp[i] = Math.min(dp[i-coin]+1, dp[i]);` This is the heart of the solution - `dp[i-coin]` finds if we have calculated a subproblem before, if we have return its value.