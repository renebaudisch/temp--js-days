'use strict';

const add = function (...rest) {
  let sum = 0;

  for (const number of rest) {
    sum += number;
  }

  return sum;
};

const sum = add();

console.log(sum);
