// https://jsonbin.io/
// login with gmail account

export default function Demo2() {

	const remoteDataURLGood = "https://api.jsonbin.io/v3/b/6070a88dceba85732671d94c/3"
	const remoteDataURLBad1 = "https://api.jsonbin.io/v3/b/6070a88dceba85732671d94c"
	const remoteDataURLBad2 = "https://api.jsonbin.io/v3/b/6070a88d"

	const outputList = document.querySelector('#output')

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

	const app = async (URL) => {
		try{
			console.log(`app try begin with URL ${URL}`)
			const data = await getData(URL)
			renderData(data)
			console.log(`app try end with URL ${URL}`)
		}
		catch(error){
			console.log(`app catch begin with URL ${URL}`)
			console.error(error)
			outputList.replaceChildren()
			console.log(`app catch end with URL ${URL}`)
		}
	}

	const renderData = (data) => {
		outputList.replaceChildren()
		let output = ''
		data.items.forEach((item) => {
			output += 
			`
				<div class="mb-3">
					<p>Id: ${item.id}</p>
					<p>Bone Type: ${item.boneType}</p>
				</div>
			`
		})
		outputList.insertAdjacentHTML('beforeend', output)
	}

	let count = 0
	document.querySelector('#button-next').addEventListener("click", (e) => {
		count ++
		console.clear()
		if(count == 1){
			app(remoteDataURLGood)
		} else if (count == 2){
			app(remoteDataURLBad1)
		} else if (count == 3){
			app(remoteDataURLBad2)
		} else {
			console.log(`Press the CLEAR button to start over`)
		}
	})

	document.querySelector('#button-clear').addEventListener("click", (e) => {
		count = 0
		console.clear()
		console.log(`Demos are reset and ready to run again by pressing the NEXT button`)
	})

}