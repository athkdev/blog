---
title: 2192 All Ancestors of a Node in a Directed Acyclic Graph
date: 2024-07-21
tags:
  - medium
  - graph
  - dag
---

# Intuition

An ancestor in a graph is a node that can be used to traverse further to some other distinct node. It depends on the problem, whether they mention it if a node can be an ancestor for itself.

So, since graphs are recursive structures, you may find some sub-problem that would solve our purpose.

Such as, the number of ancestors a node `u` has, is the number of ancestors all of it's past ancestors has. For this one would require to know the parents of a child node. Luckily, we have a DAG and are given an edge list - we can just store the graph in a reverse order.

But you can imagine, when we calculate an ancestor list `anc_list_u` for a node `u` and when `u` will be used as an ancestor for some other node `v`. The ancestor list `anc_list_v` for node `v` would consist duplicates of all ancestors in `anc_list_u` and `anc_list_v`.

So to tackle that, our sub-problem computes ancestors in a set to avoid duplicates. The problem also asks use that every thing is sorted, so we throw in a `sorted()` there too.


# Code

### Python3

```python
def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:

    revAdj = collections.defaultdict(list)
    children = set()

    for u, v in edges:
        revAdj[v].append(u)
        children.add(u)
        children.add(v)
    '''
    store the graph in a reverse order, meaning, every child is pointing to it's parent
    '''

    rootNodes = set(revAdj.keys()) - children
    '''
    rootNodes are the nodes with in-degree == 0
    '''
    
    def helper(g, n: int, m) -> List[int]:
        '''
        recursively compute all the ancestors of a node in a reversed DAG

        returns: list of all ancestors
        '''
        if n in m: return m[n]
        if n not in g: return []

        anc = set()

        for parent in g[n]:
            if parent not in rootNodes:
                anc |= set(helper(g, parent, m))
                # or use the in-built set function set.update() -> it also accepts a list
                # anc.update(helper(g, parent, m))
                anc.add(parent)

        m[n] = sorted(list(anc))

        return m[n]

    memo = collections.defaultdict(int)

    for val in range(n):
        ancestors = helper(revAdj, val, memo)
        if len(ancestors) == 0:
            memo[val] = ancestors
        

    '''
    subproblem:
    return a list with all ancestors

    A - arrive on a node
    B - ancestors = ar.extend(ancestors_of_neighbor1).extend(ancestors_of_neighbor2).extend(so_on)

    base_case: traverse till you find a starting node

    what's a starting node?
    starting_nodes = set(children) - set(revAdj.keys())


    '''

    return [anc for node, anc in sorted(memo.items(), key=lambda x: x[0])]
```

### Big O Analysis

- **Runtime**

  The runtime complexity here is $O(N * KlogK)$ where K is the number of ancestors for every node and N is the number of vertices.

- **Memory**

  The memory usage is $O(V + E)$ since we store an adjacency list that is based on a edge list.

— A

[GitHub](https://github.com/AtharvaKamble) | [Twitter](https://twitter.com/AtharvaKamble07)
