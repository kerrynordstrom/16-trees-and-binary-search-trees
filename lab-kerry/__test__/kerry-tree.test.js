'use strict';

const KerryTree = require('../kerry-tree');

let eleven = new KerryTree(11);
let twelve = new KerryTree(12);
let thirteen = new KerryTree(13);
let fourteen = new KerryTree(14);
let fifteen = new KerryTree(15);
let sixteen = new KerryTree(16);
let seventeen = new KerryTree(17);
let eighteen = new KerryTree(18);

eleven.appendChild(twelve);
eleven.appendChild(thirteen);
eleven.appendChild(fourteen);

thirteen.appendChild(fifteen);
thirteen.appendChild(sixteen);
thirteen.appendChild(seventeen);

sixteen.appendChild(eighteen);

seventeen.appendChild(eighteen);

describe('Testing k-ary tree for find and to string functionality', () => {

  describe('Testing find method', () => {
    test('Find should locate and return individual node\'s value.', () => {
      expect(eleven.find(15).value).toEqual(15);
      expect(eleven.find(17).value).toEqual(17);
    });
    test('Find method should traverse tree and return the first iteration of the node even if there is another iteration elsewhere in the tree', () => {
      expect(eleven.find(18).value).toEqual(18);
    });
    test('Find method should throw an error if value passed is not an integer', () => {
      expect(() => {
        eleven.find('');
      }).toThrow();
    });
    expect(() => {
      eleven.find(null);
    }).toThrow();
  });
});
