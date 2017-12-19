'use strict';

const Queue = require('./lib/queue');
const util = require('util');

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

eleven.appendChild(twelve);
eleven.appendChild(thirteen);
eleven.appendChild(fourteen);

thirteen.appendChild(fifteen);
thirteen.appendChild(sixteen);
thirteen.appendChild(seventeen);

sixteen.appendChild(eighteen);

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
      str += current.value.toString();
    }

    for(let i = 0; i < current._children.length; i++) {
      str += '\n' + current._children[i].value.toString();
    
      for(let j = 0; j < current._children[i]._children.length; j++) {
        str += '\n' + current._children[i]._children[j].value.toString();
      }
    }

    for (let child of current._children) {
      console.log(stringQueue.enqueue(child));
    }
    return str;
  }
};

module.exports = KerryTree;