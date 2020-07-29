'use strict';

const alice = {
  name: 'Alice',

  bark: function () {
    // this is alice
    const that = this;

    // 2. Function invocation: this is undefined
    setTimeout(function () {
      // this here is another this, set by setTimeout,
      // obviously something internal
      console.log(`Woof woof, ${that.name}!`);
    }, 1000);
  }
};

// 1. Method invocation: this is alice
alice.bark();
