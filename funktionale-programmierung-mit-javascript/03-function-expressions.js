'use strict';

// Helper function.
const add = function (left, right) {
  return left + right;
};

const sum = add(23, 42);

console.log(sum);

// In objects, only function expressions work.
const person = {
  firstName: 'Steve',
  getAge: function () {
    return 23;
  }
};
