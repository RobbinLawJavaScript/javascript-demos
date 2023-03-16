// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

export default function Demo(){
  let listOne = document.querySelector("#list-one")
  // listOneItems will be a NODE-LIST of li elements but acts like an array.
  let listOneItems = document.querySelectorAll("#list-one li")
  let myArray = []

  listOneItems.forEach((element) => {
    // Add each elements innerText to the end of the array.
    myArray.push(element.innerText)
  })

  listOne.addEventListener("click", (event) => {
    let listOneItem = event.target.innerText
    removeFromList(listOneItem)
  })
  
  const removeFromList = (listOneItem) => {
    // Find the first occurrence of the 
    // item (in this case a string)
    // in the array and return its index location in the array.
    let index = myArray.indexOf(listOneItem);
    console.log(index)
    // Remove 1 element from the array at index location called "index".
    myArray.splice(index, 1)
    renderList()
  }
  
  const renderList = () => {
    listOne.replaceChildren()
    myArray.forEach((element)=> {
      const listItem = `<li class="list-group-item">${element}</li>`
      listOne.insertAdjacentHTML('beforeend', listItem);
    });
  }
}
