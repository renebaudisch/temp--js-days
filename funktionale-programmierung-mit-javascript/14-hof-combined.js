'use strict';

const result = [ 2, 3, 5, 7, 11 ].
  filter(square => square % 2 === 1).
  map(prime => prime ** 2).
  map(square => square * 5).
  reduce((sum, square) => sum + square, 0);
  // forEach(bigNumber => console.log(bigNumber));

console.log(result);
