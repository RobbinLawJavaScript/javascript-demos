function Demo1(){

function getPromise() {
  console.log('inside getPromise: create and return a promise');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Success:', 'array of strings', 'hi there']);
      reject('Error: Something went wrong');
      resolve({Name: 'Robbin', Age: 62});
      reject('Error: one more time');
    }, 3000);
  });
}

console.log('begin of program');
getPromise()
.then(data => {
  console.log('then is running')
  console.log(data);
})
.catch(err => {
  console.log('catch is running')
  console.log(err);
});
console.log('promise returned to caller with state pending');
}

export default Demo1;