export function demo(){
  let form = document.querySelector("#form");
  let listOne = document.querySelector("#list-one");
  let listOneItems = document.querySelectorAll("#list-one li");

  form.addEventListener("submit", (event)=> {
      event.preventDefault();
      let formDropdownValue = event.target.elements['form-dropdown'].value;
      filter(formDropdownValue);
  });

  const filter = (formDropdownValue) => {
    listOneItems.forEach((element) => {
      if (element.innerText.includes(formDropdownValue)) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  }
}
