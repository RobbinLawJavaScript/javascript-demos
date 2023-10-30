// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
// https://www.sitepoint.com/delay-sleep-pause-wait/

// async and await are part of the ES7 spec
// async functions always return a promise

export function Demo() {
	
	const outputDiv = document.querySelector('#output-div')

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
		})
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

	const renderData = (data, ui) => {
		ui.replaceChildren()
		let output = ''
		if(data != null){
			data.forEach((item) => {
				output += 
				`
					<div class="mb-1">
						<p>Id: ${item.id}</p>
						<p>Bone Type: ${item.boneType}</p>
					</div>
				`
			})
		}
		ui.insertAdjacentHTML('beforeend', output)
	}

	const app = async (URL, ui) => {
		try{
			console.log(`app try begin with URL ${URL}`)
			const data = await getData(URL)
			renderData(data, ui)
			console.log(`app try end with URL ${URL}`)
		}
		catch(error){
			console.log(`app catch begin with URL ${URL}`)
			console.error(`The error is: ${error}`)
			renderData(null, ui)
			console.log(`app catch end with URL ${URL}`)
		}
	}

	//app(localDataURLGood, outputDiv)
	//app(localDataURLBadEndPoint, outputDiv)
	app(localDataURLBadData, outputDiv)

}