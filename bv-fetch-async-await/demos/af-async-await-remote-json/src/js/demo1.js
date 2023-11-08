// https://jsonbin.io/
// login with gmail account robbinlaw@gmail.com

export function Demo() {

	const ui = document.querySelector('#ui-output-data')

	const remoteDataURLGood = "https://api.jsonbin.io/v3/b/6543d77654105e766fca83ff"
	const remoteDataURLBad = "https://api.jsonbin.io/v3/b/6543d77654105e7"

	let allDataArray = []
	let filteredDataArray = []

	const getData = async (URL) => {
		console.log(`getData begin with URL: ${URL}`)
		const res = await fetch(URL, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
			},
		})
		console.log(`resolved response with URL: ${URL}`)
		console.log(res)
		if (res.ok == false) {
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
			data.forEach((item) => {
				output += 
				`
				<tr>
					<td>${item.id}</td>
					<td>${item.name}</td>
					<td>${item.category}</td>
					<td>${item.rating}</td>
				</tr>
				`
			})
		}
		ui.insertAdjacentHTML('beforeend', output)
	}

	const app = async (URL, ui) => {
		try{
			console.log(`app try begin with URL ${URL}`)
			const data = await getData(URL)
			console.log(`data: ${JSON.stringify(data)}`)
			// VERY IMPORTANT: We want the array value
			// from the key called "record".
			allDataArray = data.record
			renderData(allDataArray, ui)
		}
		catch(error){
			console.log(`app catch begin with URL ${URL}`)
			console.error(`The error is: ${error}`)
			renderData(null, ui)
		}
	}

	app(remoteDataURLGood, ui)
	//app(remoteDataURLBad, ui)

	let form = document.querySelector("#form")
	form.addEventListener('submit', (e)=> {
		e.preventDefault()
		let name = e.target.elements["name"].value.trim()
		let rating = e.target.elements["rating"].value
		console.log(`submit event; name: ${name}; rating: ${rating}`)
		filteredDataArray = allDataArray
		if (name) {
			filteredDataArray = filterOnName(name, filteredDataArray)
		}
		if (rating) {
			filteredDataArray = filterOnRating(rating, filteredDataArray)
		}
		renderData(filteredDataArray, ui)
	})

	const filterOnName = (criteria, data)=> {
		let filteredDataArray = data.filter((item)=> {
			// VERY IMPORTANT: We want a match for only
			// the "name" key in each item of the data array.
			return (item.name.toLowerCase().includes(criteria.toLowerCase()))
		})
		return filteredDataArray
	}
	
	const filterOnRating = (criteria, data) => {
		let filteredDataArray = data.filter((item)=> {
			// VERY IMPORTANT: We want a match for only
			// the "rating" key in each item of the data array.
			return (parseFloat(item.rating) >= parseFloat(criteria))
		})
		return filteredDataArray
	}
	
}