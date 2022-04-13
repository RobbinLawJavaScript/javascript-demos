# Object Destructuring Techniques
Destructuring is a convenient way to extracting multiple or a single value from JavaScript objects. 



### __1. Assigning Variables from Object Properties The Long Way__  
❌ This is a long way to get variables from the properties of an object.  
```javascript

    //index.js

    const student = {
     firstName:"collin",
     lastName:"magenta",
     id:"200525478",
    }

    const firstName = student.firstName
    const lastName = student.lastName
    const id = student.id

    console.log(firstName, lastName, id)

```

<br><br><br><br><br>


### __2. Destructuring Object Propertie__  

✅  A better proach to this would be to use destructuring it is a lot faster to write. When createing the variable the name to hold the object property value you must use the objects property name.
<img src="images/destructure.png" width="620" style="padding: 1rem 0;"/>  

```javascript

    //index.js

    const student = {
     firstName:"collin",
     lastName:"magenta",
     id:"200525478",
    }

    const {firstName, lastName, id} = student;

    console.log(firstName, lastName, id)

```


<br><br><br><br><br>


### __3. Destructuring Function Arguments__  
❌ Below is the longer way of extracting object properties from the function parameter.
 
```javascript

    //index.js

    const cartItem = {
        cost:"2000",
        quantity:3,
        taxRate:0.05

    }

    // calculate the tax

    function calculateTax(cartItem) {
        const cost = cartItem.cost;
        const quantity = cartItem.quantity;
        const taxRate = cartItem.taxRate;

        return  cost * quantity * taxRate;
    }

    // call the function

    const cartItemTax =  calculateTax(cartItem);

```  
<br>
✅ cut down on the amount of code you need to write with destructing. 

<br>

```javascript

    //index.js

    const cartItem = {
        cost:"2000",
        quantity:3,
        taxRate:0.05

    }

    // Destructuring Makes It Easy Peasy 🍋 Squeezy

    function calculateTax({ cost, quantity, taxRate; }) {
       return  cost * quantity * taxRate;
    }

    // call the function

    const cartItemTax =  calculateTax(cartItem);

```

<br><br><br><br><br>


### __4. Variable Declaration Rule__  
❌ The keywords let and const are significant in object destructuring syntax. Consider the example below where we have omitted the let or const keyword. It will end up in the error.
 
```javascript

//index.js

    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    { name  } = user // Uncaught SyntaxError: Unexpected token '='

```  
<br>

✅  In this case, the correct syntax is to put the destructuring expression inside parenthesis .
 
```javascript

//index.js

    let name;

    ({ name  } = user);

    console.log(name); // Output, Alex

```  

<br><br><br><br><br>

### __5. Add a New Variable & Default Value__  
You can add a new variable while destructuring and add a default value to it.
 
```javascript

   // index.js

    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }

    const { name, age, salary=123455 } = user;

    // Output, Alex 43 123455

    console.log(name, age, salary); 

```  

<br><br><br><br><br>


### __6.Rename Property Assignment__  
You can give an alias name to your destructured variables. It comes in very handy if you want to reduce the chances of variable name conflicts.
```javascript

   // index.js

   const user = { 
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
    }

    const { address: permanentAddress } = user;

    // 15th Park Avenue

    console.log(permanentAddress);  

```  
<br><br><br><br><br>



### __7. Nested Object Destructuring__  
You can use destructuring to assign variables to the value of a nested object property.

```javascript

   // get the address from the object

    const user = { 
    'name': 'Alex',
    'address': '15th Park Avenue',
    'age': 43,
    'department':{
        'name': 'Sales',
        'Shift': 'Morning',
        'address': {
            'city': 'Bangalore',
            'street': '7th Residency Rd',
            'zip': 560001
        }
    }
    }

    // access the address from the user object
    const { department: { address} } = user;
    // Output: {city: 'Bangalore', street: '7th Residency Rd', zip: 560001}
    console.log(address)

    

    // Grab the city from the user object
    const { department: { address:{city}} } = user;
    // Output: {city: 'Bangalore', street: '7th Residency Rd', zip: 560001}
    console.log(city)
 

```  
<br><br><br>


### __8. Destructuring Function Return Value__  
You can use destructur the object return value from a function.
```javascript

        const getUser = () => {

            return { 
            'name': 'Alex',
            'address': '15th Park Avenue',
            'age': 43
            }

        }

        const { name, age } = getUser();

        // Output Alex 43
        console.log(name, age);  
 

```  
<br><br><br>

### __9. Destructuring For Of Loop__  
You can use object destructuring with the for-of loop.

```javascript

        const users = [
            { 
              'name': 'Alex',
              'address': '15th Park Avenue',
              'age': 43
            },
            { 
              'name': 'Bob',
              'address': 'Canada',
              'age': 53
            },
            { 
              'name': 'Carl',
              'address': 'Bangalore',
              'age': 26
            }
        ];


        for(let { name, age } of users) {
         console.log(`${name} is ${age} years old!`);
        }


```  
<br><br><br>

### __10. Console Logging With Destructuring__  
You can shorten your console logging functions by destructuring the console object.

```javascript
    const { log, warn, error } = console;

    log('I log into the browser console');
    warn('I am a warning');
    error('I am an error');

```  
<br><br><br>



 