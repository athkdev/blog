---
title: 648 Replace Words
tags:
  - medium
---

# Code:

### Python3

```python
class Solution:
    def replaceWords(self, dict: List[str], sentence: str) -> str:
        trie = Trie()
        for words in dict:
            trie.insert(words)
        res = ''
        for sent in sentence.split():
            if res:
                res += ' '
            res += trie.search(sent)
        return res

class TrieNode:
    def __init__(self):
        self.children = collections.defaultdict(TrieNode)
        self.isWord = False

class Trie:
    def __init__(self):
        self.root = TrieNode()

    def insert(self, word):
        node = self.root
        for w in word:
            node = node.children[w]
        node.isWord = True

    def search(self, word):
        node = self.root
        osf = ''
        for c in word:
            if c not in node.children: break
            node = node.children[c]
            osf += c
            if node.isWord: return osf
        return word

```

### Big O Analysis

- Runtime

  The runtime complexity here is $O(n * log(n))$ since we are sorting the frequency keys

- Memory
  The memory usage is $O(n)$ since we use the `collections.Counter` object to store frequencies

— A

[GitHub](https://github.com/athkdev) | [Twitter](https://twitter.com/athkdev)
