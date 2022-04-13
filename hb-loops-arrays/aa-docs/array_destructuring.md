# Destructuring
Destructuring is a convenient way of extracting multiple values from and array's and objects. 



### __1. Array Destructuring__  
You can use array destructuing to create variables.
```javascript

    //index.js

     const  name = ['Nikola', 'Tesla']
     const [firstName, lastName] = name;
     console.log(firstName, lastName)

```

<br><br><br><br><br><br> 

### __2. Swapping Variables__  
You can use array destructuing to swap variable values.
```javascript

    //index.js

    let width = '200px';
    let height = '150px';
    [height, width] = [width, height];

```

<br><br><br><br><br><br> 

### __3. Destructuring Array Values from an Object__  
You can use   destructuing to access the value of an array inside an object.
```javascript

    //index.js
    const library = {
        name: "tammy solminkchii",
        genres: [
         'Mystery',
         'Horror',
         'Fantasy',
        ],
        titles: [
         'Inugami Clan',
         'Three Coffins',
         'Lost Time',

        ],
        authors: [
         'Seishi Yokomizo',
         'Philip K. Dick',
         'Sarah Waters',
        ],
    };

    // Output Inugami Clan Three Coffins
    let [firstBook, secondBook] = library.titles;


```

<br><br><br><br><br><br> 

 

### __4. Destructuring Arrays By Position__  
You can destructure arrays by extracting values by position
 
```javascript

    const departmentExpenses = [451258,986541,456932,986987,658741,854752]


    const  [humanResours,,,marketing] = departmentExpenses
      
    console.log(humanResours, marketing)

```  

<br><br><br><br><br><br> 


### __9. Nested Array Destructuring__  
You can use destructur nested arrays.
 
```javascript

    const markup = [ 

    "nav", "header",   ["h3","svg", "p"], "aside", "aside"

    ];

    const [,,[title, logo, tagline]] = markup

    // Output h3 svg p
    console.log(title, logo, tagline)


``` 
 
<br><br><br><br><br><br> 
 

### __7. Default  Values__  
You can assign default values to variables while destructuring an array.
 
```javascript
 
     const colorMix = [];

    // Assign default values of 255 to red and blue
    const [red = 156, green = 156, blue = 156] = colorMix;

    // R: 200, G: undefined, B: 255
     console.log(`R: ${red}, G: ${green}, B: ${blue}`); 



```  
<br><br><br><br><br><br> 


### __8. Multiple Return Values__  
You can use array destructuring to cleanly return multiple values from a function!
 
```javascript

    // later I can get this with
    const [longitude, latitude] = getCoordinates(someAddress);

    // Exmample from Google Maps API to get the lon/lat of an address
    function getCoordinates(address) {

      const coordinates = maps.address(address).coordinates;
      return [coordinates.lon, coordinates.lat];

    }



```  
<br><br><br><br><br><br> 


 
 