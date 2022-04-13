# Spread Operator 

## Understanding The Spread Operator.
The spread syntax takes your array and expands it into elements. Imagine your array is like those Russian Dolls. When you call the spread syntax on it, it will take the nested individual doll out and lay it out in its own individual pieces.

```javascript

        [
        ...[1, 2, 3] // 👈 The dots erases the brackets
        ]

        /*  Becoming this: */
        [
        1, 2, 3 // 👈 "Erased"
        ]

```

<br><br><br><br><br>

### __1. Merge Arrays__

```javascript

        
        // syntax [...array1, ...array2]

        const array1 = [1, 2, 3];

        const array2 = [4, 5, 6];

        const mergedArray = [...array1, ...array];

        // Output [ [1, 2, 3],  [4, 5, 6] ] 👈 😱
        console.log(mergedArray);


```

 <br><br><br><br><br>

### __2. Clone An Array__

```javascript

        
       // make a copy of an array [...array]

        const original = ['zero', 'one'];
        const newArray = [...original];

        newArray[0] = 0

        // Output   [0, 'one']   ['zero', 'one']   👈 😱
        console.log(newArray, original);


```

<br><br><br><br><br>

### __3. String To An Array__

```javascript

        // Convert string to array of charachters [...'string']

        const original = [ ...'zero'];
            
        

        // Output ['z', 'e', 'r', 'o']   👈 😱
        console.log(original);


        // Create unique elements from array using Set
        [...new Set([1,2,3])]

        // Convert a node list to an array
        [...nodeList]

        // Create an array from arguments
        [...arguments]


```

### __4. String To An Array__

```javascript

        // Create unique elements from array using Set [...new Set([1,2,3])]

        const original = [1,2,3,4,3,2,1,2,1,5,4,3,1,3,4];
                    

        const unique = [...new Set(original)]

        // Output [1,2,3,4,5]   👈 😱
        console.log(unique);

  

        // Convert a node list to an array
        [...nodeList]

        // Create an array from arguments
        [...arguments]


```

### __5. Array from Node List__

```html

        <!--  example markup  -->

        <ul class="items">
            <li>products</li>
            <li>services</li>
            <li>contracts</li>
            <li>repairs</li>
        </ul>

```

```javascript

        // Convert a node list to an array [...nodeList]
        
 
        // query all returns node list.
        const li = [...document.querySelectorAll('.items li') ]


        // Output [li,li,li,li]   👈 😱
        console.log(li);

  

    

    // Create an array from arguments
    [...arguments]


```

<br><br><br><br><br>


### __6. Arguments To Arry__
MDN: arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

```javascript

        // Create an array from arguments [...arguments]
        function names() {
        const argumentsArray = [...arguments];

        argumentsArray.map(name => `hi ${name}`);
        // ✅ ['hi samantha', 'hi sam']
        }

        names('samantha', 'sam');
  

```

<br><br><br><br><br>

 
### Cheat Sheet
<img src="images/spread.jpeg"/>



