// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

export function demo(){
  let listOne = document.querySelector("#list-one");
  let listTwo = document.querySelector("#list-two");
  let myArray = [];

  listOne.addEventListener("click", (event) => {
    let item = event.target.innerText;
    addToListTwo(item);    
  });

  const addToListTwo = (item) => {
    myArray.push(item);
    renderListTwo();
  }
  
  const renderListTwo = () => {
    listTwo.innerHTML = "";
    console.log('typeof myArray', typeof(myArray));
    myArray.forEach((element) => {
      console.log('typeof element: ', typeof(element));
      listTwo.innerHTML += `<li class="list-group-item">${element}</li>`
    });
  }
}
