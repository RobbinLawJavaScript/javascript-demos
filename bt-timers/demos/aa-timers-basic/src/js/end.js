// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals#Active_learning_Creating_your_own_stopwatch!

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/disabled

export default function End() {

let count = 0
let interval
let playButton
const delay = 3000

const startButton = document.querySelector('#btn-start')

document.querySelector('#controls').addEventListener('click', (evt) => {
	try{
		if (evt.target.id == 'btn-start') {
			console.log(`timer started`)
			interval = setInterval(() => {
				count += 1
				console.warn(`timer timed out after ${delay/1000} seconds for the ${count} time`)
			}, delay)
			startButton.disabled = true
		} else if (evt.target.id == 'btn-stop') {
			console.log(`timer stopped`)
			clearInterval(interval)
			startButton.disabled = false
		}
	}
	catch(error){
		console.error(`catch error: ${error}`)
	}
})

}
