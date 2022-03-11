function Demo1(){

function getPromise() {
  console.log(2);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['Success:', 'array of strings', 'hi there']);
      reject('Error: Something went wrong');
      resolve({Name: 'Robbin', Age: 62});
      reject('Error: one more time');
    }, 3000);
  });
}

console.log(1);
getPromise()
.then(data => {
  console.log('then is running')
  console.log(data);
})
.catch(err => {
  console.log('catch is running')
  console.log(err);
});
console.log(3);

}

export default Demo1;