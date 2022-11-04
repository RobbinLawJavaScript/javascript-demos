// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

export function demo(){
  let listOne = document.querySelector("#list-one");
  let listOneItems = document.querySelectorAll("#list-one li");
  let myArray = [];

  listOneItems.forEach((element) => {
    // Add the element.innerText to the end of the array.
    myArray.push(element.innerText);
  });

  listOne.addEventListener("click", (event) => {
    let listOneItem = event.target.innerText
    removeFromList(listOneItem);
  })
  
  const removeFromList = (listOneItem) => {
    // Find the first occurrence of the item (in this case a string)
    // in the array and return its index location in the array.
    let index = myArray.indexOf(listOneItem);
    console.log(index);
    // Remove 1 element from the array at index location called "index".
    myArray.splice(index, 1);
    renderList();
  }
  
  const renderList = () => {
    listOne.innerHTML = "";
    myArray.forEach((element)=> {
      listOne.innerHTML += `<li class="list-group-item">${element}</li>`
    });
  }
}
