# Class Code Snippets

## Module Default Exports
The export statement is used when creating JavaScript modules to export objects, functions, variables from the module so they can be used by other programs with the help of the import statements. ... Exports are useful to export multiple items from a module such as an object, function or variable.
 
### __1. Creating A Module With Multiple Items__
A module is any piece of valid javascript. Modules can export more than a single item of code.  
```javascript

    //fetcher.js

    function getRequest () {
        return "GET METHOD"
    }


    function postRequest () {
        return "POST METHOD"
    }

```
<br><br><br>

### __2. Exporting Multiple Items from a Module__  
Module exports are wrapped in curly braces and items are seperated by comma's
```javascript

    //fetcher.js

    function getRequest () {
        return "GET METHOD"
    }


    function postRequest () {
        return "POST METHOD"
    }

    export {getRequest, postRequest}

```
 
<br><br><br>

### __3. Alternate Syntax for Exporting Multiple Items__  
You could export the functions by adding the export to the function expression.
```javascript

    //fetcher.js

    export const getRequest = function () {
        return "GET METHOD"
    }

    export const postMethod = function () {
        return "POST METHOD"
    }

```

or

```javascript

    //fetcher.js

    export function getRequest () {
        return "GET METHOD"
    }

    export function postRequest () {
        return "POST METHOD"
    }

```
 
<br><br><br>


### __4. Importing Module Exports__  
You import module exports using curley braces. Each item must be seperated by a comma.
```javascript

    //index.js

    import {getRequest, postRequest}from "./utils/fetcher.js";

    console.log(getRequest())
    console.log(postRequest())

```
 
 <br><br><br>

### __5. Importing and Renaming Module Exports__  
Rename module exports when importing using the as keyword.
```javascript

    //index.js

    import {getRequest as getData, postRequest as sendData}from "./utils/fetcher.js";

    console.log(getData())
    console.log(sendData())

```
 