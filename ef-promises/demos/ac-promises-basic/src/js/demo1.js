export default function Demo1(){

let interval
const getPromise = (scenario, delay) => {
  console.log(`getPromise begin with scenario ${scenario}`)
  return new Promise((resolve, reject) => {
    interval = setTimeout(() => {
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
    console.log(`getPromise end with scenario ${scenario}: promise returned to caller with state pending`)
  })
}

const app = async (scenario, delay) => {
  try{
    console.log(`app try begin with scenario ${scenario}`)
    const data = await getPromise(scenario, delay)
    console.log(data)
    console.log(`app try end with scenario ${scenario}`)
  }
  catch(error){
    console.log(`app catch begin with scenario ${scenario}`)
    console.error(error)
    console.log(`app catch end with scenario ${scenario}`)
  }
}

let count = 0
console.clear()
console.log(`Demos are reset and ready to run by pressing the NEXT button`)

	document.querySelector('#button-next').addEventListener("click", (e) => {
		count ++
		console.clear()
		if(count == 1){
			app(1, 5000)
		} else if (count == 2){
			app(2, 5000)
		} else if (count == 3){
			app(3, 5000)
		} else if (count == 4){
			app(4, 5000)
		} else {
			console.log(`Press the RESET button to start over`)
		}
	})

	document.querySelector('#button-reset').addEventListener("click", (e) => {
		count = 0
		console.clear()
    clearInterval(interval)
		console.log(`Demos are reset and ready to run by pressing the NEXT button`)
	})

}