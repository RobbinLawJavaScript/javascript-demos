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

let val;

val = person;
// Get specific value
//val = person.firstName;
//val = person['lastName'];
//val = person.age;
//val = person.hobbies[1];
//val = person.address.state;
//val = person.address['city'];

console.log(val);

}