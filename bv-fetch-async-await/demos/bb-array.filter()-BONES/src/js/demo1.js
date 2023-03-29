export default function Demo1() {

const localDataURL = './data/bones.json';
//const localDataURL = './data/bones2.json';
//const localDataURL = './data/bad-bones.json';

const outputElement = document.querySelector('#output-element')

let allData = [];

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
		allData = await getData(URL)
		console.log(`app try end with URL ${URL}`)
	}
	catch(error){
		console.log(`app catch begin with URL ${URL}`)
		console.error(error)
		console.log(`app catch end with URL ${URL}`)
	}
}

app(localDataURL)

let form = document.querySelector("#form")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	const searchString = event.target.elements["partial-search-string"].value
	const filteredData = filterData(searchString, allData)
	renderData(filteredData, outputElement)
})

const filterData = (searchString, data) => {
	let filteredData = data.filter((item) => {
		return item.boneType.toLowerCase().includes(searchString.toLowerCase())
	})
	return filteredData
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
				<td>${item.boneType}</td>
			</tr>
			`
		})
	}
	ui.insertAdjacentHTML('beforeend', output)
}

}