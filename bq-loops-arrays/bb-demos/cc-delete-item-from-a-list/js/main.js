export function demo(){
  let listOne = document.querySelector("#list-one");
  let listOneItems = document.querySelectorAll("#list-one li");
  let myArray = [];

  listOneItems.forEach((element) => {
    myArray.push(element.innerText);
  });

  listOne.addEventListener("click", (event) => {
    let listOneItem = event.target.innerText
    removeFromList(listOneItem);
  })
  
  const removeFromList = (listOneItem) => {
    let index = myArray.indexOf(listOneItem)
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
