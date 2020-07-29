'use strict';

const person = {
  firstName: 'Steve',
  lastName: 'Jobs'
};

// const personWithMiddlename = {
//   firstName: person.firstName,
//   lastName: person.lastName,
//   middleName: 'W.'
// };

const personWithMiddlename = {
  ...person,
  middleName: 'W.'
};
