export function demo(){
  let form = document.querySelector("#form")
  let listOne = document.querySelector("#list-one")
  let listOneItems = document.querySelectorAll("#list-one li")
  let listTwo = document.querySelector("#list-two")
  let myArray = []

  form.addEventListener("submit", (event)=> {
      event.preventDefault();
      let formDropdownValue = event.target.elements['form-dropdown'].value;
      filter(formDropdownValue);
  })

  const filter = (formDropdownValue) => {
    listOneItems.forEach((element) => {
      if (element.innerText.includes(formDropdownValue)) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  }

  listOne.addEventListener("click", (event)=> {
    let item = event.target.innerText;
    addToListTwo(item);    
  });

  const addToListTwo = (item) => {
    myArray.push(item);
    renderListTwo();
  }
  
  listTwo.addEventListener("click", (event)=> {
    let listTwoItem = event.target.innerText
    removeFromListTwo(listTwoItem)    
  })
  
  const removeFromListTwo = (istTwoItem) => {
    let index = myArray.indexOf(istTwoItem)
    myArray.splice(index, 1)
    renderListTwo()
  }
  
  const renderListTwo = ()=> {
    listTwo.innerHTML = "";
    myArray.forEach((element)=> {
      listTwo.innerHTML += `<li class="list-group-item">${element}</li>`
    });
  }
}
