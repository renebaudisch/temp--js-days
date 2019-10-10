'use strict';

const externalBark = function (isLoud = false) {
  if (isLoud) {
    console.log(`Woof woof, ${this.name}!`.toUpperCase());
    return;
  }

  console.log(`Woof woof, ${this.name}!`);
};

const alice = {
  name: 'Alice',
  bark: externalBark
};

const malin = {
  name: 'Malin',
  bark: externalBark
};

const muffin = {
  name: 'Muffin'
};

// 1. Function invocation
//    - Strict mode: this is undefined
//    - Non-strict mode: Global context (e.g. window)
// externalBark();

// 2. Method invocation
//    - this is the object the function is called upon
alice.bark(true);
malin.bark();

// 3. Apply invocation
//    - this is the first parameter
externalBark.apply(muffin, [ true ]);

// 4. Call invocation
//    - this is the first parameter
externalBark.call(muffin, true);
