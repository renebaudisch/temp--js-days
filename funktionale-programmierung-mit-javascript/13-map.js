'use strict';

const primes =[ 2, 3, 5, 7, 11, 101 ];

// const map = function (array, handle) {
//   const results = [];
//
//   for (const item of array) {
//     const result = handle(item);
//
//     results.push(result);
//   }
//
//   return results;
// };
//
// const squares = map(primes, prime => prime ** 2);
//
// console.log(squares);


const squares = primes.map(prime => prime ** 2);

console.log(squares);
