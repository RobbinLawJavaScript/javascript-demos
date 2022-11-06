function Demo1() {

const localDataURL = './data/bones.json';
//const localDataURL = './data/bones2.json';
//const localDataURL = './data/bad-bones.json';

let allData = [];
let currentData = [];

const getData = () => {
	fetch(localDataURL)
	.then((res)=> {
		if (!res.ok) {
			throw new Error('OOPS');
		}
		return res.json();
	})
	.then((data)=> {
		console.log('fetch.then resolved', data);
		allData = data;
		currentData = allData;
		renderData(allData);
	})
	.catch((err) => {
		console.log('fetch.catch error: ', err);
	});
}

const renderData = (list) => {
	let rows = document.querySelector("#rows");
	rows.innerHTML = "";
	list.forEach((item)=> {
		rows.innerHTML += `
		<tr>
			<td>${item.id}</td>
			<td>${item.boneType}</td>
		</tr>`
	});
}

getData()

let form = document.querySelector("#form")

const filterData = (searchString, list)=> {
	searchString = searchString.toLowerCase()
	let filteredData = list.filter((item)=> {
		return item.boneType.toLowerCase().includes(searchString)
	})
	return filteredData
}

form.addEventListener("submit", (event)=> {
	event.preventDefault();
	let searchString = event.target.elements["partial-search-string"].value;
	let talkSubset = allData;
	if (searchString!==""){
		talkSubset = filterData(searchString, talkSubset);
	}
	currentData = talkSubset;
	renderData(talkSubset);
});

}

export default Demo1;