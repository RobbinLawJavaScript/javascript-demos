function Demo1(){

function getPromise() {
  console.log('create and return a promise state is pending');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('timer has timed out');
      resolve(['Success:', 'We got an array of strings', 'hi there']);
      reject('Error: Something went wrong');
      resolve({Name: 'Robbin', Age: 62});
      reject('Error: one more time');
    }, 3000);
  });
}

getPromise()
.then(data => {
  console.log('then is running')
  console.log(data);
})
.catch(err => {
  console.log('catch is running')
  console.log(err);
});

}

export default Demo1;