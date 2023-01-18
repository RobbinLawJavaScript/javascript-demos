export function demo() {

const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@gmail.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Edmonton',
    province: 'AB'
  }
}

let val;

val = person;
// Get specific value
//val = person.firstName;
//val = person['lastName'];
//val = person.age;
//val = person.hobbies[1];
//val = person.address.province;
//val = person.address['city'];

console.log(val);

}