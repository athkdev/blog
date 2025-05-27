---
title: 2101 Detonate the Maximum Bombs
date: 2025-05-26
tags:
  - medium
---

The core idea is to make a specialized adjacency list/clusters of bombs who would detonate other bombs in its vicinity. This would result in a directed graph of all bombs.

# Code

### Python3

```c++
class Solution {
public:
    int maximumDetonation(vector<vector<int>>& bombs) {
        
        const int n = bombs.size();
        int maxDetonated = 0;

        vector<vector<int>> adj;

        adj.resize(n);

        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (i == j) {
                    continue;
                }

                long long x1 = bombs[i][0];
                long long y1 = bombs[i][1];
                long long r1 = bombs[i][2];

                long long x2 = bombs[j][0];
                long long y2 = bombs[j][1];

                long long dx = x1 - x2;
                long long dy = y1 - y2;

                long long distSq = dx * dx + dy * dy;

                if (r1 * r1 >= distSq) {
                    adj[i].push_back(j);
                }
            }
        }

        std::function<void(int, std::set<int>&)> dfs = 
        [&](int node, std::set<int>& visited) {

            for (int child : adj[node]) {
                if (visited.find(child) == visited.end()) {   // not found : (
                    visited.insert(child);
                    dfs(child, visited);
                }
            }
        };

        for (int i = 0; i < n; ++i) {
            std::set<int> visited;
            visited.insert(i);

            dfs(i, visited);

            maxDetonated = std::max(maxDetonated, (int)visited.size());
        }

        return maxDetonated;
    }
};
```

```python
def maximumDetonation(self, B):
    n, ans, G = len(B), 0, defaultdict(list)

    for i in range(n):
        for j in range(n):
            if i == j: continue
            # if jth bomb and ith bomb coincide, then they'll set each other off
            if B[i][2]**2 >= (B[i][0] - B[j][0])**2 + (B[i][1] - B[j][1])**2:
                G[i] += [j]

    # G = contains clusters of bombs that will each go off when one of them goes off
    # G is directed

    def dfs(node, visited):
        for child in G[node]:
            if child not in visited:
                visited.add(child)
                dfs(child, visited)

    for i in range(n):
        visited = set([i])
        dfs(i, visited)
        ans = max(ans, len(visited))

    return ans
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N^2)$ since we will be visiting all combinations of the bombs.

- **Memory**

  The memory usage is $O(N)$ since we use the `collections.defaultdict` object to store the specialized adjacency list.

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
