'use strict';

let add = function (left, right) {
  return left + right;
};

let subtract = function (left, right) {
  return left - right;
};

const withLogging = function (fn) {
  return function (...args) {
    console.log(`${fn.name} was called with: ${args}`);
    // const result = fn.apply(null, args);
    const result = fn(...args);
    console.log(`${fn.name} returned: ${result}`);
    return result;
  };
};

add = withLogging(add);
subtract = withLogging(subtract);

console.log(add(23, 42));
console.log(subtract(23, 42));
