function Demo1(){

function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
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