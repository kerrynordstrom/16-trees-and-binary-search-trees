'use strict';

const Queue = require('./lib/queue');
const Stack = require('./lib/stack');

const KerryTree = function (value) {
  this.value = value;
  this._children = [];
};


KerryTree.prototype.appendChild = function (tree) {
  if (!(tree instanceof KerryTree))
    throw new TypeError('Argument must be a type of kerry tree');

  this._children.push(tree);
};

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




KerryTree.prototype.find = function(value) {
  if (!value) {
    throw new TypeError('Argument must be an integer');
  }

  let findQueue = new Queue();  
  findQueue.enqueue(this);


  let current = null;

  while(findQueue.getLength() > 0) {
    current = findQueue.dequeue();
    

    if (current.value === value) {
      return current;
    }
    for (let child of current._children) {
      findQueue.enqueue(child);
      
    }
  }
};

KerryTree.prototype.concatToString = function(str = '') {

  let stringQueue = new Queue();
  stringQueue.enqueue(this);

  let current = null;

  while (stringQueue.getLength() > 0) {
    current = stringQueue.dequeue();
    
    if (str === '') {
      str += JSON.stringify(current.value);
    } else {
      str += '\n' + JSON.stringify(current.value);
    }

    for (let child of current._children) {
      stringQueue.enqueue(child);
    }
  }
  return str;
};

KerryTree.prototype.pushToArray = function (arr = []) {

  let arrayStack = new Stack();
  
  arrayStack.push(this);

  let current = null;

  while (arrayStack.getLength() > 0) {
    current = arrayStack.pop();

    arr.push(current.value);

 
    for (let child of current._children) {
      arrayStack.push(child);
    }
  }
  
  return arr;
};

module.exports = KerryTree;