// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
// https://www.sitepoint.com/delay-sleep-pause-wait/

// async and await are part of the ES7 spec
// async functions always return a promise

export function Demo() {
	
	const ui = document.querySelector('#ui-output-data')

	const localDataURLGood = './data/foods.json'
	const localDataURLBadEndPoint = './data/no-file.json'
	const localDataURLBadData = './data/bad-foods.json'
	let allData = []
	let filteredData = []

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
			allData = await getData(URL)
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

	app(localDataURLGood, ui)
	//app(localDataURLBadEndPoint, ui)
	//app(localDataURLBadData, ui)

	let form = document.querySelector("#form")
	form.addEventListener('submit', (e)=> {
		console.log(`submit event`)
		console.log(`resolved data with URL: ${localDataURLGood}`)
		console.log(allData)
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
		console.log(`filterOnName begin`)
		criteria = criteria.toLowerCase()
		let filteredData = data.filter((item)=> {
			return (item.name.toLowerCase().includes(criteria))
		})
		return filteredData
	}
	
	const filterOnRating = (criteria, data) => {
		console.log(`filterOnRating begin`)
		criteria = parseFloat(criteria)
		let filteredData = data.filter((item)=> {
			if (criteria > item.rating){
					return false
			}
			return true
		})
		return filteredData
	}
}