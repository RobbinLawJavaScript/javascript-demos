import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/cover.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { 
  searchAllData,
  saveFavoriteItem,
  getFavoriteItems,
  deleteFavoriteItem,
} from './network.js'
import { renderData, showAlert } from './ui.js'

let tabNavigator = document.querySelector("#tab-navigation")
let searchedTab = document.querySelector("#searched-tab")
let favoritesTab = document.querySelector("#favorites-tab")

let form = document.querySelector("#form")
let searchedList = document.querySelector("#searched-list")
let favoritesList = document.querySelector("#favorites-list")
let addAlert = document.querySelector("#add-alert")
let deleteAlert = document.querySelector("#delete-alert")

let searchedArray = []
let favoritesArray = []

// part 1: tab navigation
tabNavigator.addEventListener("click", async (e)=> {
  let tabName = e.target.textContent
  let searched = tabNavigator.children[0].firstElementChild
  let favorites = tabNavigator.children[1].firstElementChild
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
  renderData('searched', searchedArray, searchedList)
})

// part 3: add item to favorites
searchedList.addEventListener("click", async (e)=> {
  if (e.target.classList.contains("add-button")) {
    let listItem = e.target.parentNode
    let selectedIndex = Array.from(searchedList.children).indexOf(listItem)
    let selectedItem = searchedArray[selectedIndex]
    let data = await saveFavoriteItem(selectedItem)
    showAlert(addAlert, 1000)
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
    let data = await deleteFavoriteItem(selectedItem.id)
    showAlert(deleteAlert, 1000)
    favoritesArray = await getFavoriteItems()
    renderData('favorites', favoritesArray, favoritesList)
  }
})