export function demo() {

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  }
}

let val1 = person;
// Get specific value
let val2 = person.firstName;
let val3 = person['lastName'];
let val4 = person.age;
let val5 = person.hobbies[1];
let val6 = person.address.state;
let val7 = person.address['city'];

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);

}