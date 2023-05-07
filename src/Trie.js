class TrieNode {
  constructor(character) {
    this.character = character; // character stored in this node.
    this.isComplete = false; // is a complete word.
    this.children = new Map(); // hashmap <Character, TrideNode>
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  addWord(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!current.children.has(char)) {
        let tmp = new TrieNode(char);
        current.children.set(char, tmp);
        current = tmp;
      } else {
        current = current.children.get(char);
      }
    }
    current.isComplete = true;
  }

  /**
   * Searches for a word in the Trie.
   * @param {string} word
   * @returns {boolean} exists
   */
  searchWord(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (current.children.has(char)) {
        current = current.children.get(char);
      }
    }
    return current.isComplete;
  }
}

module.exports = Trie;
