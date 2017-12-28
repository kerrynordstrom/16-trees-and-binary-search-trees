'use strict';

const util = require('util');

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //Refactored insert method in order to use separate node class
  insert(value) {

    let node = new TreeNode(value);

    if (typeof value !== 'number')
      throw new TypeError('Value must be a number');

    if (value === null)
      throw new TypeError('Value must be a number');

    if (!this.root) {
      // console.log(this.root);
      this.root = node;
    } else {
      let currentNode = this.root;

      while (currentNode) {
        if (node.value < currentNode.value) {
          if (!currentNode.left) {
            return currentNode.left = node;
            
          }
          currentNode = currentNode.left;

        } else if (node.value > currentNode.value) {
          if (!currentNode.right) {
            return currentNode.right = node;
            
          }
          currentNode = currentNode.right;

        } else {
          return null;
        }
      }
    }
  }

  
  find(value) {
    
    if (value === '')
      throw new TypeError('Must input value');

    if (typeof value !== 'number')
      throw new TypeError('Value must be a number');

    while (this.root) {
      
      if (value === this.root.value) {
        return true;
      }
      if (value < this.root.value) {
        this.root = this.root.left;
      } else {
        this.root = this.root.right;
      }
    }
    return false;
  }
  
  //Remove method that calls helper function given a value and establishes a root at that value for which to execute its functionality.
  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  //----------------------------
  //Helper functions
  //----------------------------

  //Finds smallest value on right side of BST.
  _findMinNodeValue(node) {
    if (!node) {
      node = this.root;
    }
    while (node.left) {
      node = node.left;
    }
    return node.value;
  }

  //Heavy lifting of comparing input value with node values on tree to determine where it lives on the tree and where the value needs to be reassigned in order to safely delete just one node.
  _removeNode(node, value) {
    if (!node) {
      return null;
    }
    if (value === node.value) {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      //Assign temporary node value when there are 2 children.
      let tempValue = this._findMinNodeValue(node.right);
      node.value = tempValue;
      
      node.right = this._removeNode(node.right, tempValue);
      return node;

    } else if (value < node.value) {
      node.left = this._removeNode(node.left, value);
      return node;

    } else {
      node.right = this._removeNode(node.right, value);
      return node;
    }
  }
}

module.exports = BinarySearchTree;
