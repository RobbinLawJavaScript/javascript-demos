export function Run(){

const localDataURLGood = './data/top_albums.json'
const ui = document.querySelector("#ui-output-data")
let allData = []
let filteredData = []

const getData = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
  })
  if (!res.ok) {
    throw new Error('Bad URL or Server is Down')
   }
  const data = await res.json()
  console.log(`resolved data with URL: ${url}`)
  console.log(data)
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
        <td>${item.album}</td>
        <td>${item.releaseDate}</td>
        <td>${item.artistName}</td>
        <td>${item.genres}</td>
        <td>${item.averageRating}</td>
        <td>${item.numberReviews}</td>
			</tr>
      `
    })
  }
  ui.insertAdjacentHTML('beforeend', output)
}

const app = async (url, ui) => {
  try{
    const allData = await getData(url)
    renderData(allData, ui)
  }
  catch(error){
    console.error(`app error= ${error}`)
  }
}

app(localDataURLGood, ui)

let form = document.querySelector("#form")
form.addEventListener('submit', (e)=> {
  e.preventDefault()
  let albumName = e.target.elements["album-name"].value.trim()
  let minRating = e.target.elements["min-rating"].value
  filteredData = allData
  if (albumName) {
    filteredData = filterOnAlbumName(albumName, filteredData)
  }
  if (minRating) {
    filteredData = filterOnRating(minRating, filteredData)
  }
  renderData(filteredData, ui)
})

const filterOnAlbumName = (criteria, data)=> {
  criteria = criteria.toLowerCase()
  let filteredData = data.filter((item)=> {
    return (item.album.toLowerCase().includes(criteria))
  })
  return filteredData
}

const filterOnRating = (criteria, data) => {
  criteria = parseFloat(criteria)
  let filteredData = data.filter((item)=> {
    if (criteria > item.averageRating){
        return false
    }
    return true
  })
  return filteredData
}

}