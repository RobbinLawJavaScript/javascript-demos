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
    console.log('arrayOfStrings type of each data element: ', typeof(arrayOfStrings));
    // obj is a datatype "object" which we cannot use with .foreach()
    // here we must use .map()
    arrayOfStrings.foreach(str => {
      stringList.innerHTML += 
      `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${str}</h5>
        </div>
        <small>${str}</small>
      </div>
      `
    });
  }

  const renderObjectData = (arrayOfObjects) => {
    let objectsList = document.querySelector("#objects");
    objectsList.innerHTML = "";
    console.log('arrayOfObjects type of each data element: ', typeof(arrayOfObjects));
    // obj is a datatype "object" which we cannot use with .foreach()
    // here we must use .map()
    arrayOfObjects.map(obj => {
      objectsList.innerHTML += 
      `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${obj.name}</h5>
        </div>
        <small>${obj.email}</small>
      </div>
      `
    });
  }

  renderStringData(myArrayOfStrings);
  renderObjectData(myArrayOfObjects);
}