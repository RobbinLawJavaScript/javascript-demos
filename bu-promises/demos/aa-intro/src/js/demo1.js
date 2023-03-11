export default function Demo1(){

const getPromise = (scenario, delay) => {
  console.log(`getPromise begin scenario ${scenario}`)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.warn(`timer timed out after ${delay/1000} seconds with scenario ${scenario}`)
      if (scenario == 1){
        resolve(['Success:', 'We got an array of strings', 'hi there'])
      } else if (scenario == 2){
        reject(`Error: Something went wrong`)
      } else if (scenario == 3){
        resolve({Name: 'Robbin', Age: 62})
      } else if (scenario == 4){
        reject(`Error: Something went wrong again`)
      }
    }, delay);
    console.log(`getPromise end scenario ${scenario}: promise returned to caller with state pending`)
  })
}

const app = async (scenario, delay) => {
  try{
    console.log(`app try begin scenario ${scenario}`)
    const data = await getPromise(scenario, delay)
    console.log(data)
    console.log(`app try end scenario ${scenario}`)
  }
  catch(error){
    console.log(`app catch begin scenario ${scenario}`)
    console.error(error)
    console.log(`app catch end scenario ${scenario}`)
  }
}

console.clear()
app(1, 5000)
app(2, 10000)
app(3, 15000)
app(4, 20000)

}