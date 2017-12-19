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
let duplicateEighteen = new KerryTree(18);

eleven.appendChild(twelve);
eleven.appendChild(thirteen);
eleven.appendChild(fourteen);

thirteen.appendChild(fifteen);
thirteen.appendChild(sixteen);
thirteen.appendChild(seventeen);

sixteen.appendChild(eighteen);
sixteen.appendChild(duplicateEighteen);

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

  describe('Testing string method using breadth first traversal', () => {
    test('String method should traverse tree and create a string composed of all tree values starting with the requested node, followed by its children, then the next node and its children, until it reaches the end of the', () => {
      expect(eleven.concatToString('')).toEqual('11\n12\n13\n14\n15\n16\n17\n18\n18\n18');
    });
    test('String method should traverse tree beginning at intermediate root node, then create string composed of all values with a newline break in between each value.', () => {
      expect(thirteen.concatToString('')).toEqual('13\n15\n16\n17\n18\n18\n18');
    });
    test('String method should provide empty string as argument even if nothing is passed to function initially.', () => {
      expect(eleven.concatToString()).toEqual('11\n12\n13\n14\n15\n16\n17\n18\n18\n18');
    });
  });

  describe('Testing array method using depth first traversal', () => {
    test('Array method should traverse tree and push node values to array', () => {
      expect(eleven.pushToArray([])).toEqual([11, 14, 13, 17, 18, 16, 18, 18, 15, 12]);
      expect(thirteen.pushToArray([])).toEqual([13, 17, 18, 16, 18, 18, 15]);
    });
    test('Array method should provide empty array even if no argument passed to function', () => {
      expect(eleven.pushToArray()).toEqual([11, 14, 13, 17, 18, 16, 18, 18, 15, 12]);
    });
    test('Array method should return an array with a single value if no children are present', () => {
      expect(duplicateEighteen.pushToArray()).toEqual([18]);
    });
  });
});
