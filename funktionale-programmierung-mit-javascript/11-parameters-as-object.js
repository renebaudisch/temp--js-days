'use strict';

const add = function ({ left, right, ...rest }) {
  let sum = 0;

  for (const number of Object.values(rest)) {
    sum += number;
  }

  return sum;
};

const sum = add({ left: 23, right: 42, x: 2, y: 3 });

console.log(sum);
