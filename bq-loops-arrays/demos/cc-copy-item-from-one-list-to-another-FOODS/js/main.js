// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren

export default function Demo(){
  let listOne = document.querySelector("#list-one")
  let listTwo = document.querySelector("#list-two")
  let myArray = [];

  console.log(`typeof myArray:`, typeof(myArray))
  listOne.addEventListener("click", (event) => {
    let item = event.target.innerText
    addToArrayAndThenRenderToListTwo(item)    
  });

  const addToArrayAndThenRenderToListTwo = (item) => {
    myArray.push(item)
    console.log(`myArray elements: ${myArray}`)
    renderListTwo()
  }
  
  const renderListTwo = () => {
    // Delete all the children of the list-two ul.
    listTwo.replaceChildren()
    myArray.forEach((element) => {
      // Create a new li element
      const listItem = `<li class="list-group-item">${element}</li>`
      // Insert the new li into the list
      listTwo.insertAdjacentHTML('beforeend', listItem);
    })
  }
}
