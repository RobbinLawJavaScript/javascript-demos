// https://jsonbin.io/
// login with gmail account robbinlaw@gmail.com

export function Demo() {

	const ui = document.querySelector('#ui-output-data')
	const remoteDataURLGood = "https://api.jsonbin.io/v3/b/6543d77654105e766fca83ff"
	const remoteDataURLGood2 = "https://api.jsonbin.io/v3/b/6543d77654105e766fca83ff/3"
	const remoteDataURLBad1 = "https://api.jsonbin.io/v3/b/6543d77654105e766fca83ff"
	const remoteDataURLBad2 = "https://api.jsonbin.io/v3/b/6543d776"

	let allData = []
	let filteredData = []

	const getData = async (URL) => {
		console.log(`getData begin with URL: ${URL}`)
		const res = await fetch(URL, {
			method: 'GET',
			headers: {
				"Content-Type": "application/json"
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
			allData = data.record
			console.log(allData)
			renderData(allData, ui)
			console.log(`app try end with URL ${URL}`)
		}
		catch(error){
			console.log(`app catch begin with URL ${URL}`)
			console.error(`The error is: ${error}`)
			renderData(null, ui)
			console.log(`app catch end with URL ${URL}`)
		}
	}

	app(remoteDataURLGood, ui)
	//app(remoteDataURLBad1, ui)
	//app(remoteDataURLBad2, ui)

	let form = document.querySelector("#form")
	form.addEventListener('submit', (e)=> {
		e.preventDefault()
		let name = e.target.elements["name"].value.trim()
		let rating = e.target.elements["rating"].value
		console.log(`name: ${name}; rating: ${rating}`)
		filteredData = allData
		if (name) {
			filteredData = filterOnName(name, filteredData)
		}
		if (rating) {
			filteredData = filterOnRating(rating, filteredData)
		}
		renderData(filteredData, ui)
	})

	const filterOnName = (criteria, data)=> {
		let filteredData = data.filter((item)=> {
			return (item.name.toLowerCase().includes(criteria.toLowerCase()))
		})
		return filteredData
	}
	
	const filterOnRating = (criteria, data) => {
		let filteredData = data.filter((item)=> {
			return (parseFloat(item.rating) >= parseFloat(criteria))
		})
		return filteredData
	}
	
}