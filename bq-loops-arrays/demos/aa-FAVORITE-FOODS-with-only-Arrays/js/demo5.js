// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event

export default function Demo5(data){

  const form = document.querySelector("#form")
  form.elements["form-text"].focus();
  const listOne = document.querySelector("#list-one")
  const listTwo = document.querySelector("#list-two")
  const myArray = []

  document.querySelector("#text-box-2")
  .addEventListener("input", (event) => {
    let filterValue = event.target.value
    console.log(`filterValue: ${filterValue}`)
    filter(data, filterValue, listOne)
  })

  document.querySelector("#dropdown-2")
  .addEventListener("click", (event) => {
    let filterValue = event.target.innerText
    console.log(`filterValue: ${filterValue}`)
    if(filterValue == "All")
      filterValue = ""
    filter(data, filterValue, listOne)
  })

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    let filterValue
    const activeElement = document.activeElement;
    if(activeElement.type === 'submit') {
      console.log(`filter type: ${activeElement.value}`)
      if(activeElement.value == "text-filter"){
        filterValue = event.target.elements['form-text'].value
        console.log(`filter value: ${filterValue}`)
        filter(data, filterValue, listOne)
      } else if (activeElement.value == "drop-down-filter"){
        filterValue = event.target.elements['form-dropdown'].value
        console.log(`filter value: ${filterValue}`)
        filter(data, filterValue, listOne)
      }
    }
  })


  const filter = (array, filterValue, list) => {
    let filteredData = array.filter((item) => {
      return item.toLowerCase().includes(filterValue.toLowerCase())
    })
    console.log(`filteredData: ${filteredData}`)
    renderList(list, filteredData)
  }

  listOne.addEventListener("click", (event) => {
    const item = event.target.innerText
    addItemToArrayAndRenderList(item, myArray, listTwo)    
  })

  const addItemToArrayAndRenderList = (item, array, list) => {
    array.push(item)
    renderList(list, array)
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
    renderList(list, array)
  }
  
  const renderList = (list, array) => {
    list.replaceChildren()
    array.forEach((element) => {
      const listItem = `<li class="list-group-item">${element}</li>`
      list.insertAdjacentHTML('beforeend', listItem)
    })
  }

  renderList(listOne, data)
  
}
