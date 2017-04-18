package Trie;

import java.util.Map;

public class Trie {
  TrieNode mRoot;

  Trie() {
    mRoot = new TrieNode();
  }

  public void insert(String toInsert) {
    TrieNode currentNode = mRoot;
    for (char c: toInsert.toCharArray()) {
      TrieNode child = currentNode.getChildrenMap().get(c);
      if (child == null) {
        child = new TrieNode();
        currentNode.getChildrenMap().put(c, child);
      }
      currentNode = child;
    }
    currentNode.setWord();
  }
}
