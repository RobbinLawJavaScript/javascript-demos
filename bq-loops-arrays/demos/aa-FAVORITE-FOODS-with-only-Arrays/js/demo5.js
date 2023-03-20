export default function Demo5(data){

  let form = document.querySelector("#form")
  form.elements["form-text"].focus();
  let listOne = document.querySelector("#list-one")
  // listOneItems will be a NODE-LIST of li elements but acts like an array.
  let listOneItems = document.querySelectorAll("#list-one li")
  let listTwo = document.querySelector("#list-two")
  let myArray = []

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    let filterValue
    const activeElement = document.activeElement;
    if(activeElement.type === 'submit') {
      console.log(`filter type: ${activeElement.value}`)
      if(activeElement.value == "text-filter"){
        filterValue = event.target.elements['form-text'].value
        console.log(`filter value: ${filterValue}`)
        filter(data, filterValue)
      } else if (activeElement.value == "drop-down-filter"){
        filterValue = event.target.elements['form-dropdown'].value
        console.log(`filter value: ${filterValue}`)
        filter(data, filterValue)
      }
    }
  })


  const filter = (array, filterValue) => {
    let filteredData = array.filter((item) => {
      return item.toLowerCase().includes(filterValue.toLowerCase())
    })
    renderList(listOne, filteredData)
  }

  listOne.addEventListener("click", (event) => {
    const item = event.target.innerText
    addItemToArrayAndRenderList(item, listTwo)    
  })

  const addItemToArrayAndRenderList = (item, list) => {
    myArray.push(item)
    renderList(list, myArray)
  }
  
  listTwo.addEventListener("click", (event) => {
    const item = event.target.innerText
    removeItemFromArrayAndRenderList(item, listTwo)    
  })
  
  const removeItemFromArrayAndRenderList = (item, list) => {
    // Find the first occurrence of the 
    // item (in this case a string)
    // in the array and return its index location in the array.
    let index = myArray.indexOf(item)
    // Remove 1 element from the array at index location called "index".
    myArray.splice(index, 1)
    renderList(list, myArray)
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
