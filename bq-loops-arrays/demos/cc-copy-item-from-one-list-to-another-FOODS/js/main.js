// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren

// https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode

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
    // Delete all the children of the list-two ul.
    listTwo.replaceChildren()
    myArray.forEach((element) => {
      console.log(`typeof element:`, typeof(element))
      console.log(`html li element contents:, ${element.innerText}`)
      // Here we are creating a new cloned
      // element that is orphaned from list-one ul.
      // True means grab all children of element as well.
      let clonedElement = element.cloneNode(true)
      // Append the orphaned cloned element to the 
      // end of the list-two ul.
      // The element is an html object.
      // Because we are appending the cloned element
      // and not the original element, we do NOT delete
      // it from list-one.
      listTwo.appendChild(clonedElement)
    })
  }
}
