'use strict';

const primes =[ 2, 3, 5, 7, 11, 101 ];

// const forEach = function (array, handle) {
//   for (const item of array) {
//     handle(item);
//   }
// };
//
// forEach(primes, prime => {
//   console.log(prime.toString().padStart(3));
// });

primes.forEach(prime => {
  console.log(prime.toString().padStart(3));
});
