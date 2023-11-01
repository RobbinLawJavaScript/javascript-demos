// https://jsonbin.io/
// login with gmail account robbinlaw@gmail.com

export function Demo() {

	const outputDiv = document.querySelector('#output-div')

	const remoteDataURLGood = "https://api.jsonbin.io/v3/b/6070a88dceba85732671d94c/3"
	const remoteDataURLBad1 = "https://api.jsonbin.io/v3/b/6070a88dceba85732671d94c"
	const remoteDataURLBad2 = "https://api.jsonbin.io/v3/b/6070a88d"

	const getData = async (URL) => {
		console.log(`getData begin with URL: ${URL}`)
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
			data.items.forEach((item) => {
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

	app(remoteDataURLGood, outputDiv)
	//app(remoteDataURLBad1, outputDiv)
	//app(remoteDataURLBad2, outputDiv)

}