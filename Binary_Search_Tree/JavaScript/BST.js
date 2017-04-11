import Node from './Node.js';

class BST {
  constructor() {
    this.mRoot = null;
  }

  /* Inserts a single element */
  add(value) { this.mRoot = this.addNode(this.mRoot, value); }

  /* Inserts a list of elements */
  addAll(values) {
    for (let i = 0; i < values.length; ++i)
      this.add(values[i]);
  }

  addNode(root, toAdd) {
    if (root == null)
      return new Node(toAdd);
    else if (root.value > toAdd)
      root.left = this.addNode(root.left, toAdd);
    else if (root.value < toAdd)
      root.right = this.addNode(root.right, toAdd);

    return root;
  }

  remove(value) {
    this.mRoot = this.removeNode(this.mRoot, value);
  }

  removeAll(values) {
    for (let i = 0; i < values.length; ++i)
      this.remove(values[i]);
  }

  removeNode(root, value) {
    // Base case
    if (root === null) return root;

    if (value < root.value)
      root.left = this.removeNode(root.left, value);
    else if (value > root.value)
      root.right = this.removeNode(root.right, value);
    else {
      if (root.left === null) {
        let temp = root.right;
        return temp;
      } else if (root.right === null) {
        let temp = root.left;
        return temp;
      }

      // Two children
      /* Get the inorder successor aka the smallest item in the right subtree */
      let temp = this.inOrderSuccessor(root.right);

      // Reassign the inorder successor
      root.value = temp.value;

      // Delete the inorder successor;
      root.right = this.removeNode(root.right, temp.value);
    }

    return root;
  }

  inOrderSuccessor(node) {
    let curr = node;
    while (curr.left !== null)
      curr = curr.left;

    return curr;
  }

  find(value) {
    return this.findNode(this.mRoot, value);
  }
  findNode(root, value) {
    if (root === null)
      return null;
    if (root.value === value)
      return root;
    else if (root.value > value)
      return this.findNode(root.left, value);
    else if (root.value < value)
      return this.findNode(root.right, value);
  };

  printTree() { this.traverse(this.mRoot); }

  traverse(node) {
    if (node == null)
      return;
    this.traverse(node.left);
    console.log(node.value);
    this.traverse(node.right);
  }

  values() {
    let values = [];
    this.getInorderValueList(this.mRoot, values);
    return values;
  }

  getInorderValueList(node, values) {
    if (node == null) return;
    this.getInorderValueList(node.left, values);
    values.push(node.value);
    this.getInorderValueList(node.right, values);
  }
}

// let bst = new BST();
// bst.addAll([5, 10, 12, 15, 20, 2, 3, 7]);
// // bst.printTree();
// console.log(bst.values());
// bst.remove(20);
// console.log(bst.values());
// bst.remove(10);
// console.log(bst.values());

export default BST;