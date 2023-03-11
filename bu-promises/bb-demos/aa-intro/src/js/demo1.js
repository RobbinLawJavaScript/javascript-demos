export default function Demo1(){

const getPromise = () => {
  console.log(`getPromise begin: create and return a promise`)
  return new Promise((resolve, reject) => {
    const delay = 5000
    setTimeout(() => {
      console.log(`timer has timed out after ${delay/1000} seconds`)
      resolve(['Success:', 'We got an array of strings', 'hi there'])
      reject(`Error: Something went wrong`)
      resolve({Name: 'Robbin', Age: 62})
      reject(`Error: Something went wrong again`)
    }, delay);
  })
}

const app = async () => {
  try{
    console.log(`app try begin`)
    const data = await getPromise()
    console.info(data)
    console.log('app try end')
  }
  catch(error){
    console.error(error)
  }
}

app()

}