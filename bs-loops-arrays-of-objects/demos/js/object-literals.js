export function demo() {

  const myArrayOfStrings =
  [
    'Hey man',
    'how are you',
    'this is fun',
  ];

  const myArrayOfObjects =
  [
    {
        name: "Steve Something",
        email: "steve.something@fake.test.com"
    },
    {
        name: "gary else",
        email: "gary.else@fake.test.com"
    },
    {
        name: "elsa ellie",
        email: "elsa.ellie@fake.test.com"
    },
  ];


  const renderStringData = (arrayOfStrings) => {
    let stringList = document.querySelector("#strings");
    stringList.innerHTML = "";
    console.log('typeof arrayOfStrings: ', typeof(arrayOfStrings));
    // obj is a datatype "object" which we cannot use with .foreach()
    // here we must use .map()
    arrayOfStrings.forEach(element => {
      console.log('typeof element: ', typeof(element));
      stringList.innerHTML += 
      `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${element}</h5>
        </div>
        <small>${element}</small>
      </div>
      `
    });
  }

  const renderObjectData = (arrayOfObjects) => {
    let objectsList = document.querySelector("#objects");
    objectsList.innerHTML = "";
    console.log('typeof arrayOfObjects: ', typeof(arrayOfObjects));
    // obj is a datatype "object" which we cannot use with .foreach()
    // here we must use .map()
    arrayOfObjects.forEach(element => {
      console.log('typeof element: ', typeof(element));
      objectsList.innerHTML += 
      `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${element.name}</h5>
        </div>
        <small>${element.email}</small>
      </div>
      `
    });
  }

  renderStringData(myArrayOfStrings);
  renderObjectData(myArrayOfObjects);
}