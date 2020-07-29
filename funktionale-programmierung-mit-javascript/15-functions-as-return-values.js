'use strict';

// const add2 = function (left) {
//   return left + 2;
// };

// const add3 = function (left) {
//   return left + 3;
// };

const getAdder = function (right) {
  // Inner function is a so-called closure.
  return function (left) {
    return left + right;
  };
};

const add2 = getAdder(2);
const add3 = getAdder(3);

console.log(add2(23));
console.log(add3(23));
