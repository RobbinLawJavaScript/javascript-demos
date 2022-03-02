function Demo1(){

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      //const error = true;
      if(error === false) {
        resolve('Success: We got some data');
      } else {
        reject('Error: Something went wrong');
      }
    }, 3000);
  });
}

createPromise()
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
});

}

export default Demo1;