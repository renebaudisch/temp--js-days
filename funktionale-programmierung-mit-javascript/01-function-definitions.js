'use strict';

// 1. Function expression
const add = function (left, right) {
  return left + right;
};

// 2. Function statement
function subtract (left, right) {
  return left - right;
}

// 3. Fat-arrow function (oder: Lambda expression)
const multiple = (left, right) => left * right;

// 4. Function constructor, nicht verwenden!
const divide = new Function('left', 'right', 'return left / right;');
