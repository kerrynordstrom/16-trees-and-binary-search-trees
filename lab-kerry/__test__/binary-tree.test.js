'use strict';

const BinarySearchTree = require('../binary-tree');

let bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(8);
bst.insert(11);
bst.insert(12);
bst.insert(13);
bst.insert(15);
bst.insert(4);
bst.insert(16);
bst.find(8);
console.log(util.inspect(bst, { showHidden: true, depth: null }));
bst.remove(5);
console.log('after removal of 5', util.inspect(bst, { showHidden: true, depth: null }));
