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
// This is the preferred way to access data in an object.
val = person.firstName;
// This is an another way to access data but not used often.
val = person['lastName'];
val = person.age;
// This is the preferred way to access data in
// an array that is buried in an object.
val = person.hobbies[1];
// This is the preferred way to access data in 
// an object that is buried in an object.
val = person.address.province;
// This is an another way to access data but not used often.
val = person.address['city'];

console.log(val);

}