'use strict';

const Stack = function() {
  this._data = [];
};

Stack.prototype.push = function(value) {
  this._data.push(value);
};

Stack.prototype.pop = function() {
  return this._data.pop();
};

Stack.prototype.getLength = function() {
  return this._data.length;
};

module.exports = Stack;
