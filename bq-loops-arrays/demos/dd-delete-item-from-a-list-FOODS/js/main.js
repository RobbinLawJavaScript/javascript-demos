// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

export default function Demo(){
  let listOne = document.querySelector("#list-one")
  // listOneItems will be a NODE-LIST but acts like an array.
  let listOneItems = document.querySelectorAll("#list-one li")
  let myArray = []

  listOneItems.forEach((element) => {
    // Add the element to the end of the array.
    myArray.push(element)
    console.log(`myArray elements: ${myArray}`)
  })

  listOne.addEventListener("click", (event) => {
    let listOneItem = event.target
    removeFromList(listOneItem)
  })
  
  const removeFromList = (listOneItem) => {
    // Find the first occurrence of the 
    // item (in this case a html li elements innerText)
    // in the array and return its index location in the array.
    let index = myArray.findIndex((item) => item.innerText === listOneItem.innerText)
    //let index = myArray.indexOf(listOneItem);
    console.log(index)
    // Remove 1 element from the array at index location called "index".
    myArray.splice(index, 1)
    renderList()
  }
  
  const renderList = () => {
    listOne.replaceChildren()
    myArray.forEach((element)=> {
      console.log(`typeof element:`, typeof(element))
      console.log(`html li element contents:, ${element.innerText}`)
      listOne.appendChild(element)
    });
  }
}
