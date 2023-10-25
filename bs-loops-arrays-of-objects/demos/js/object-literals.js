export default function Demo() {

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
    let stringList = document.querySelector("#strings")
    stringList.replaceChildren()
    console.log('typeof arrayOfStrings: ', typeof(arrayOfStrings))
    arrayOfStrings.forEach( (element) => {
      console.log('typeof element: ', typeof(element))
      let htmlItem = 
      `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${element}</h5>
        </div>
        <small>${element}</small>
      </div>
      `
      stringList.insertAdjacentHTML('beforeend', htmlItem)
    });
  }

  const renderObjectData = (arrayOfObjects) => {
    let objectsList = document.querySelector("#objects");
    objectsList.replaceChildren()
    console.log('typeof arrayOfObjects: ', typeof(arrayOfObjects));
    arrayOfObjects.forEach( (element) => {
      console.log('typeof element: ', typeof(element));
      let htmlItem =  
      `
      <div class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${element.name}</h5>
        </div>
        <small>${element.email}</small>
      </div>
      `
      objectsList.insertAdjacentHTML('beforeend', htmlItem)
    });
  }

  renderStringData(myArrayOfStrings);
  renderObjectData(myArrayOfObjects);
}