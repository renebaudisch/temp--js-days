'use strict';

const f = function (g, h) {
  return function (x) {
    return g(h(x));
  };
};

console.log(f(x => x ** 2, x => x * 2)(23));
