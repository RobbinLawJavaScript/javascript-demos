import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/cover.css'
import '../css/main.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { 
  searchAllData,
  searchFavoritesData,
  saveFavoriteItem,
  deleteFavoriteItem,
  getFavoriteItems,
} from './network.js'
import { renderData, showAlert } from './ui.js'

let tabNavigator = document.querySelector("#tab-navigation")
let searchedTab = document.querySelector("#searched-tab")
let favoritesTab = document.querySelector("#favorites-tab")

let form = document.querySelector("#form")
let searchedList = document.querySelector("#searched-list")
let favoritesList = document.querySelector("#favorites-list")

let searchedArray = []
let favoritesArray = []

// part 1: tab navigation
tabNavigator.addEventListener("click", async (e)=> {
  let tabName = e.target.textContent
  let searched = tabNavigator.children[0].firstElementChild
  let favorites = tabNavigator.children[1].firstElementChild
  console.log(`searched=`)
  console.log(searched)
  console.log(`favorites=`)
  console.log(favorites)
  if (tabName === "Search Foods") {
    searched.classList.add("active")
    favorites.classList.remove("active")
    searchedTab.classList.remove("d-none")
    favoritesTab.classList.add("d-none")
  } else if (tabName === "Favorite Foods") {
    searched.classList.remove("active")
    favorites.classList.add("active")
    searchedTab.classList.add("d-none")
    favoritesTab.classList.remove("d-none")
    favoritesArray = await getFavoriteItems()
    renderData('favorites', favoritesArray, favoritesList)
  }
})

// part 2: search 
form.addEventListener("submit", async (e)=> {
  e.preventDefault()
  let query = e.target.elements["query"].value
  searchedArray = await searchAllData(query)
  console.log(`returned data`)
  console.log(searchedArray)
  renderData('searched', searchedArray, searchedList)
})

// part 3: add item to favorites
searchedList.addEventListener("click", async (e) => {
  console.log('add item to favorites click event handler')
  console.log('searchedList children')
  console.log(searchedList.children)
  if (e.target.classList.contains("add-button")) {
    let listItem = e.target.parentNode
    console.log(`listItem:`)
    console.log(listItem)
    console.log(`listItem.children[1]:`)
    console.log(listItem.children[1])
    let selectedIndex = Array.from(searchedList.children).indexOf(listItem)
    console.log(`selectedIndex: ${selectedIndex}`)
    let selectedItem = searchedArray[selectedIndex]
    console.log(`selected name: ${selectedItem.name}`)
    favoritesArray = await searchFavoritesData(selectedItem.name)
    if(favoritesArray.length != 0){
      showAlert(listItem.children[1], 'error', 'already in favorites', 2000)
    }else{
      await saveFavoriteItem(selectedItem)
      showAlert(listItem.children[1], 'success', 'added to favorites', 2000)
    }
    favoritesArray = await getFavoriteItems()
    renderData('favorites', favoritesArray, favoritesList)
  }
})

// part 4: delete item from favorites
favoritesList.addEventListener("click", async (e)=> {
  if (e.target.classList.contains("delete-button")) {
    let listItem = e.target.parentNode
    let selectedIndex = Array.from(favoritesList.children).indexOf(listItem)
    let selectedItem = favoritesArray[selectedIndex]
    await deleteFavoriteItem(selectedItem.id)
    favoritesArray = await getFavoriteItems()
    renderData('favorites', favoritesArray, favoritesList)
  }
})