'use strict';

const Queue = function() {
  this._data = [];
};

Queue.prototype.enqueue = function(value) {
  this._data.push(value);
};

Queue.prototype.dequeue = function() {
  return this._data.shift();
};

Queue.prototype.getLength = function() {
  return this._data.length;
};


module.exports = Queue;