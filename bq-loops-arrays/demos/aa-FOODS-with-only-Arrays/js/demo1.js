// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

export function Demo1(data){

  const listOne = document.querySelector("#list-one")
  const listTwo = document.querySelector("#list-two")
  const myArray = []

  document.querySelector("#text-box")
  .addEventListener("input", (e) => {
    let filterValue = e.target.value
    console.log(`filterValue: ${filterValue}`)
    filter(filterValue, data, listOne)
  })

  document.querySelector("#drop-down")
  .addEventListener("click", (e) => {
    let filterValue = e.target.innerText
    console.log(`filterValue: ${filterValue}`)
    if(filterValue == "All")
      filterValue = ""
    filter(filterValue, data, listOne)
  })

  const filter = (filterValue, array, list) => {
    let filteredData = array.filter((item) => {
      return item.toLowerCase().includes(filterValue.toLowerCase())
    })
    console.log(`filteredData: ${filteredData}`)
    renderList(filteredData, list)
  }

  listOne.addEventListener("click", (event) => {
    const item = event.target.innerText
    addItemToArrayAndRenderList(item, myArray, listTwo)    
  })

  const addItemToArrayAndRenderList = (item, array, list) => {
    array.push(item)
    renderList(array, list)
  }
  
  listTwo.addEventListener("click", (event) => {
    const item = event.target.innerText
    removeItemFromArrayAndRenderList(item, myArray, listTwo)    
  })
  
  const removeItemFromArrayAndRenderList = (item, array, list) => {
    // Find the first occurrence of the 
    // item (in this case a string)
    // in the array and return its index location in the array.
    let index1 = array.indexOf(item)
    // Finds the first occurrence of where
    // the predicate is true and returns that index.
    let index2 = array.findIndex((element) => element == item)
    // Remove 1 element from the array at index location.
    array.splice(index2, 1)
    renderList(array, list)
  }
  
  const renderList = (array, list) => {
    list.replaceChildren()
    array.forEach((element) => {
      const listItem = `<li class="list-group-item">${element}</li>`
      list.insertAdjacentHTML('beforeend', listItem)
    })
  }

  renderList(data, listOne)
  
}
