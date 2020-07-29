'use strict';

const alice = {
  name: 'Alice',

  bark: function () {
    setTimeout(() => {
      console.log(`Woof woof, ${this.name}!`);
    }, 1000);
  }
};

alice.bark();
