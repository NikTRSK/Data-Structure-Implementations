package Trie;

import java.util.HashMap;
import java.util.Map;

public class TrieNode {
  private Map<Character, TrieNode> mChildren;
  private Boolean mEndOfWord;

  TrieNode() {
    mChildren = new HashMap<Character, TrieNode>();
    mEndOfWord = false;
  }

  public Boolean isWord() {
    return mEndOfWord;
  }

  public void setWord() {
    mEndOfWord = true;
  }

  public Map<Character, TrieNode> getChildrenMap() {
    return mChildren;
  }

}
