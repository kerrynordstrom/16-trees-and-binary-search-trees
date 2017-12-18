'use strict';

const Queue = require('./lib/queue');

const KaryTree = function(value) {
  this.value = value;
  this._children = [];
};

KaryTree.prototype.appendChild = function(tree) {
  if(!(tree instanceof KaryTree))
    throw new TypeError('Argument must be a type of kary tree');

  this._children.push(tree);
};

KaryTree.prototype.find = function(value) {
  let queue = new Queue();
  queue.enqueue(this);

  let current = null;

  while(queue.getLength() > 0) {
    current = queue.dequeue();

    if (current.value === value) {
      console.log(current);
      console.log(current.value);
      return current;
    }
    for (let child of current._children) {
      queue.enqueue(child);
    }
  }
};


module.exports = KaryTree;