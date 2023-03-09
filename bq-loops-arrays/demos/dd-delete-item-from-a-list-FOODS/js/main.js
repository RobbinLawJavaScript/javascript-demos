// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// https://developer.mozilla.org/en-US/docs/Web/API/Element/replaceChildren

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

export default function Demo(){
  let listOne = document.querySelector("#list-one");
  let listOneItems = document.querySelectorAll("#list-one li");
  let myArray = [];

  listOneItems.forEach((element) => {
    // Add the element to the end of the array.
    myArray.push(element);
  });

  listOne.addEventListener("click", (event) => {
    let listOneItem = event.target
    removeFromList(listOneItem);
  })
  
  const removeFromList = (listOneItem) => {
    // Find the first occurrence of the 
    // item (in this case a html li element)
    // in the array and return its index location in the array.
    let index = myArray.indexOf(listOneItem);
    console.log(index);
    // Remove 1 element from the array at index location called "index".
    myArray.splice(index, 1);
    renderList();
  }
  
  const renderList = () => {
    listOne.replaceChildren()
    myArray.forEach((element)=> {
      listOne.appendChild(element)
    });
  }
}
