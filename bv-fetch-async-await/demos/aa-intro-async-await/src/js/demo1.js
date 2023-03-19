// https://www.sitepoint.com/delay-sleep-pause-wait/

// async and await are part of the ES7 spec
// async functions always return a promise

export default function Demo1() {
	
	const title = document.querySelector('#demo-title')
	title.innerText = `Demo 1 with local json files`

	const localDataURLGood = './data/bones.json'
	const localDataURLBadEndPoint = './data/no-file.json'
	const localDataURLBadData = './data/bad-bones.json'


	const getData = async (URL) => {
		console.log(`getData begin with URL: ${URL}`)
		// fetch() returns a promise to res.
		// The await keyword "stalls" the JS assignment
		// until the data or error is returned (promise resolves or is rejected).
		const res = await fetch(URL, {
			method: 'GET',
			headers: {
				'Accept': 'application/json. text/plain, */*',
				"Content-Type": "application/json",
				'X-Bin-Meta': 'false'
			},
		});
		console.log(`resolved response with URL: ${URL}`)
		console.log(res)
		if (!res.ok) {
			throw new Error('Bad URL or Server is Down')
	 	}
		// res.json() also returns a promise to data.
		const data = await res.json()
		console.log(`resolved data with URL:', ${URL}`)
		console.log(data)
		console.log(`getData end with URL: ${URL}`)
		return data
	}

	const app = async (URL) => {
		try{
			console.log(`app try begin with URL ${URL}`)
			const data = await getData(URL)
			console.log(`app try end with URL ${URL}`)
		}
		catch(error){
			console.log(`app catch begin with URL ${URL}`)
			console.error(error)
			console.log(`app catch end with URL ${URL}`)
		}
	}

	let count = 0
	console.clear()
	console.log(`Scenarios are reset and ready to run by pressing the NEXT button`)

	document.querySelector('#button-next').addEventListener("click", (e) => {
		count ++
		console.clear()
		if(count == 1){
			app(localDataURLGood)
		} else if (count == 2){
			app(localDataURLBadEndPoint)
		} else if (count == 3){
			app(localDataURLBadData)
		} else {
			console.log(`Press the RESET button to start over`)
		}
	})

	document.querySelector('#button-reset').addEventListener("click", (e) => {
		count = 0
		console.clear()
		console.log(`Scenarios are reset and ready to run again by pressing the NEXT button`)
	})

}