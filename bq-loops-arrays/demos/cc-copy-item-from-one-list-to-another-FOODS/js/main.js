// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

export default function Demo(){
  let listOne = document.querySelector("#list-one")
  let listTwo = document.querySelector("#list-two")
  let myArray = [];

  console.log(`typeof myArray:`, typeof(myArray))
  listOne.addEventListener("click", (event) => {
    let item = event.target
    addToArrayAndThenRenderToListTwo(item)    
  });

  const addToArrayAndThenRenderToListTwo = (item) => {
    myArray.push(item)
    console.log(`myArray elements: ${myArray}`)
    renderListTwo()
  }
  
  const renderListTwo = () => {
    // Delete all the children of the list-two div.
    listTwo.replaceChildren()
    myArray.forEach((element) => {
      console.log(`typeof element:`, typeof(element))
      console.log(`html li element contents:, ${element.innerText}`)
      // Append element to the end of the list-two div.
      // The element is an html object.
      listTwo.appendChild(element)
    })
  }
}
