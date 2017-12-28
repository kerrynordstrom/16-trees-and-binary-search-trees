'use strict';

const BinarySearchTree = require('../binary-search-tree');

let binaryst = new BinarySearchTree();
binaryst.insert(5);
binaryst.insert(2);
binaryst.insert(1);
binaryst.insert(3);
binaryst.insert(7);
binaryst.insert(8);
binaryst.insert(11);
binaryst.insert(10);
binaryst.insert(9);
binaryst.insert(12);
binaryst.insert(16);
binaryst.insert(13);
binaryst.insert(17);
binaryst.insert(4);

console.log(JSON.stringify(binaryst, null, 2));


describe('Testing binary search tree for find, insert, and delete functionality', () => {

  describe('Testing binary search tree for insert functionality', () => {
    test('Insert should add new node following binary search tree architecture, which places smaller values to the left and larger values to the right of any given node.', () => {
      expect(binaryst.root.left.value).toEqual(2);
      expect(binaryst.root.left.left.value).toEqual(1);
    });
    test('Insert should throw type error if argument not integer.', () => {
      expect(() => {
        binaryst.insert('x');
      }).toThrow();
    });
    test('Insert should throw type error if argument is empty.', () => {
      expect(() => {
        binaryst.insert();
      }).toThrow();
    });
  });

  describe('Testing find method', () => {
    test('Find should locate and return individual node\'s value.', () => {
      expect(binaryst.find(8)).toEqual(true);
    });
    test('Find should throw type error if argument left empty/is null.', () => {
      expect( () => {
        binaryst.find(null);
      }).toThrow();
    });
    test('Find should throw type error if argument not integer.', () => {
      expect(() => {
        binaryst.find('x');
      }).toThrow();
    });
  });
	
  describe('Testing remove method', () => {
    test('Remove should locate and remove individual node\'s value.', () => {
      expect( () => {
        binaryst.remove(5);
      }).toBeTruthy();
    });
    test('Remove should be undefined if no value passed to method.', () => {
      expect(binaryst.remove()).toBe(undefined);
    });
    test('Remove should be undefined if empty string passed to method.', () => {
      expect(binaryst.remove('')).toBe(undefined);
    });
    test('Remove should locate and remove node\'s value, even if it has two children and will preserve nodes that are within sub-trees of this node.', () => {
      binaryst.remove(11);
      expect(binaryst.root.right.left.value).toEqual(10);
      expect(binaryst.root.right.right.value).toEqual(16);
    });
  });
});
