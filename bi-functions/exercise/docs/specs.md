# Working with Functions

Functions are (at their simplest form) collections of statements that may be run as a group at a later time. These can be useful as they allow developers to reuse code and break larger problems down into simpler ones.

As an example, we could create a function that could update the innerHTML of an element reference. This can be done by declaring a function that accepts two **parameters**, which represent incoming values that the function needs to operate properly. These two parameters will represent the reference to the element to update and the new innerHTML value to use.

The sample function declaration below will be used to explore this concept further:

```js
function updateInnerHTML(elementReference, newValue) {
    elementReference.innerHTML = newValue;
}
```
### Function Declaration Breakdown

#### Function Signature

The first line in the example above is known as the **function signature**; it informs us of how to use the function. The reserved word `function` is used to indicate that we are declaring a new function. Following the reserved word we see `updateInnerHTML`, which is the name of the function. The name of the function is important as it's used to **invoke** or **call** the function at a later time. Following the name we find the **parameter list** enclosed within parentheses. You can specify as many parameters as are necessary (including none) for the function to operate correctly. These parameters represent the actual passed in **argument** values upon being properly called.

#### Function Body

Note that the body (enclosed within braces) is not executed at the time the browser sees the declaration. The body of the function is what's known as a **block-statement**, which is simply any group of statements that are enclosed within braces. This block of code is effectively executed as a whole. In this case, the body is only made up of a single statement, which simply attempts to assign a new value to an existing element's innerHTML property.

### Calling a Function

To actually use the function, it must be called or invoked. This is simply done by referencing the name of the function followed by any required arguments (the parentheses are necessary, even if there are no arguments). For example, using the function above to update the innerHTML of the first h1 on a page would look like the following:

```js
const elementRef = document.querySelector('h1');
updateInnerHTML(elementRef, 'updated text');
```

The first argument (`elementRef`) represents the reference for the element we wish to update, and the second
argument (`'updated text'`) represents the new value for the innerHTML. These values are passed in
order to the corresponding parameters in the function declaration. These
actual values are then subbed-in for the parameters where they appear in the function body.

### Returning a Value

One of the most common reasons to declare a function is to
have it perform some calculation or return some result. This can be done by including a **return
statement** in your function body. The return statement is simply a statement that begins with the
reserved word `return` followed by an expression or a value. 

The following function will simply return a string that is enclosed within strong tags.

```js
function strong(value) {
  return `<strong>${value}</strong>`;
}
```
(**Note**: *A function may only return a single value*).

### Exercise Steps

1. To follow along with this exercise, you will need to open the [src/index.html](../src/index.html).
1. Declare the `strong` function mentioned above in the `main.js` file under the TODO. Notice that the `updateInnerHTML` function is already given to you.
1. Include the following code below the `strong` function declaration and then run the code in `live server`.
 
   ```js
    let spanRef = document.querySelector('span.note');
    let textToBold = spanRef.innerHTML;
    let textBolded = strong(textToBold);
    updateInnerHTML(spanRef, textBolded);
  ```