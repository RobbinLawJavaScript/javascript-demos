export function Demo5(){

  let form = document.querySelector("#form-id")
  form.elements["form-text"].focus();
  let originalList = document.querySelector('#original-list-id')
  let originalListItems = document.querySelectorAll("#original-list-id li")
  let filteredList = document.querySelector("#filtered-list-id")
  let favoritesList = document.querySelector("#favorites-list-id")
  let arrayOfOriginalData = []
  let arrayOfFilteredData = []
  let arrayOfFavoritesData = []

  originalListItems.forEach((item) => {
    arrayOfOriginalData.push(item.innerText)
  })
  console.log(`arrayOfOriginalData: ${arrayOfOriginalData}`)

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let filterValue
    if(e.submitter.id === 'text-submit-id'){
      filterValue = e.target.elements['form-text'].value
    }
    if(e.submitter.id === 'dropdown-submit-id'){
      filterValue = e.target.elements['form-dropdown'].value
    }
    console.log(`submitter: ${e.submitter.id}; filterValue: ${filterValue}`)
    filterArrayAndRenderList(arrayOfOriginalData, filterValue)
  })

  const filterArrayAndRenderList = (array, filterValue, list) => {
    arrayOfFilteredData = array.filter((item) => {
      return item.toLowerCase().includes(filterValue.toLowerCase())
    })
    console.log(`filteredData: ${arrayOfFilteredData}`)
    renderList(arrayOfFilteredData, list)
  }

  filteredList.addEventListener("click", (e) => {
    const item = e.target.innerText
    addItemToArrayAndRenderList(item, arrayOfFavoritesData, favoritesList)    
  })

  const addItemToArrayAndRenderList = (item, array, list) => {
    array.push(item)
    renderList(array, list)
  }
  
  favoritesList.addEventListener("click", (e) => {
    const item = e.target.innerText
    removeItemFromArrayAndRenderList(item, arrayOfFavoritesData, favoritesList)    
  })
  
  const removeItemFromArrayAndRenderList = (item, array, list) => {
    // Find the first occurrence of the 
    // item (in this case a string)
    // in the array and return its index location in the array.
    let index = array.indexOf(item)
    console.log(`index clicked: ${index}`)
    // Remove 1 element from the array at index location called "index".
    array.splice(index, 1)
    renderList(array, list)
  }
  
  const renderList = (array, list) => {
    list.replaceChildren()
    array.forEach((element) => {
      const listItem = `<li class="list-group-item">${element}</li>`
      list.insertAdjacentHTML('beforeend', listItem)
    })
  }
  
}
