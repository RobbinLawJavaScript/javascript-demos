# Class Code Snippets

## Module Default Exports
The export statement is used when creating JavaScript modules to export objects, functions, variables from the module so they can be used by other programs with the help of the import statements. ... Default Exports: Default exports are useful to export only a single object, function, variable.
 
### __1. Creating A  Module__
A module is any piece of valid javascript. Modules can export code. This can be shared in any application that supports ES Modules.
```javascript
//fetcher.js
function getRequest () {
    return "GET METHOD"
} 
```
<br><br><br>

### __2. Exporting As Default__  
You can only every have one default export from a module
```javascript
//fetcher.js
function getRequest () {
    return "GET METHOD"
}
export default getRequest

```
 
<br><br><br>
 

### __3. Importing Module Exports__  
Make sure to add the .js extension to all of the imports. If your using a module bundler then this is not a requirement.
```javascript
//index.js

import getRequest from "./utils/fetcher.js";

console.log(getRequest())
 
```
 
 <br><br><br>

### __4. Importing and Renaming a Modules Default Export__  
You can simply just change the name. Used mostly when the default export name is not suited to the code base your using it in.
```javascript
//index.js
import fetcher from "./utils/fetcher.js";
 console.log(fetcher())
```

<br><br><br>

 ### __5. Only Code That's Exported Can Be Accessed__  
Only the code that you marked as the default export can be imported by other modules. There is no way that you can access the defaultUrl constant variable from the index.js file where the module has been imported.
```javascript
//fetcher.js
const defaultUrl = "https://random-data-api.com/api/cannabis/random_cannabis?size=1"
function getRequest () {
    return "GET METHOD"
}

export default getRequest
```

Is there any other way you can think of to bring in the defaultUrl constant?
```javascript
//index
 import  defaultUrl from "./utils/fetcher.js";
 console.log(defaultUrl)
 
```
We could try this???

```javascript
//index
 import getRequest, defaultUrl from "./utils/fetcher.js";
 console.log(defaultUrl)
 
```

 