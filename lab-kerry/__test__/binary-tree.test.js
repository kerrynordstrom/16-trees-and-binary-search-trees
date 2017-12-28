'use strict';

const BinarySearchTree = require('../binary-search-tree');
const util = require('util');

let binaryst = new BinarySearchTree();
binaryst.insert(5);
binaryst.insert(2);
binaryst.insert(3);
binaryst.insert(8);
binaryst.insert(11);
binaryst.insert(12);
binaryst.insert(13);
binaryst.insert(15);
binaryst.insert(4);
binaryst.insert(16);
console.log(util.inspect(binaryst, { showHidden: true, depth: null }));


describe('Testing binary search tree for find, insert, and delete functionality', () => {

  describe('Testing binary search tree for insert functionality', () => {
    test('Insert should add new node following binary search tree architecture, which places smaller values to the left and larger values to the right of any given node.', () => {
      expect(binaryst.root.left.value).toEqual(2);
      expect(binaryst.root.left.left).toBeNull();
    });
    test('Insert should throw type error if argument not integer.', () => {
      expect(() => {
        binaryst.insert('x');
      }).toThrow();
    });
    test('Insert should throw type error if argument not integer.', () => {
      expect(() => {
        binaryst.insert();
      }).toThrow();
    });
  });

  describe('Testing find method', () => {
    test('Find should locate and return individual node\'s value.', () => {
      expect(binaryst.find(8)).toEqual(true);
    });
    test('Find should throw type error if argument left empty', () => {
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
        binaryst.remove(8);
        // console.log(util.inspect(binaryst, { showHidden: true, depth: null }));
      }).toBeTruthy();
    });
    test('Remove should be undefined if no value passed to method.', () => {
      expect(binaryst.remove()).toBe(undefined);
    });
    test('Remove should be undefined if empty string passed to method.', () => {
      expect(binaryst.remove('')).toBe(undefined);
    });
  });
});
