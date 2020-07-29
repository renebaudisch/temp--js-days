'use strict';

const Dog = function ({ name }) {
  this.name = name;
  this.bark = function () {
    console.log(`Woof woof, ${this.name}!`);
  };
};

// 5. Constructor invocation
//    - this is a new object
const alice = new Dog({ name: 'Alice' });

alice.bark();
