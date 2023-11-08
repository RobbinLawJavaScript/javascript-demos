import {getData, postData, deleteData} from './http.js'

// how to search with json-server
// https://blog.eleven-labs.com/en/json-server/

// limit the search to 25 results
export const searchAllData = async (query) => {
  //let url = `http://localhost:5000/allFoods?q=${query}&_limit=25`
  let url = `http://localhost:5000/allFoods?name_like=${query}&_limit=25`
  const data = await getData(url)
  return data
}

export const searchFavoritesData = async (query) => {
  let url = `http://localhost:5000/favoriteFoods?name=${query}`
  const data = await getData(url)
  return data
}

export const saveFavoriteItem = async (item) => {
  let url = `http://localhost:5000/favoriteFoods`
  const data = await postData(url, item)
  return data
}

export const deleteFavoriteItem = async (itemId) => {
  let url = `http://localhost:5000/favoriteFoods`
  const data = await deleteData(url, itemId)
  return data
}

export const getFavoriteItems = async () => {
  let url = `http://localhost:5000/favoriteFoods`
  const data = await getData(url)
  return data
}