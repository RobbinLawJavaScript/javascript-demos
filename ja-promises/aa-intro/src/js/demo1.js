function Demo1(){

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      //const error = true;
      if(error === false) {
        //reject('Error: Something went wrong');
        resolve(['Success: We got some data', 'hi there']);
        //reject('Error: Something went wrong');
      } else {
        reject('Error: Something went wrong');
      }
    }, 3000);
  });
}

createPromise()
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