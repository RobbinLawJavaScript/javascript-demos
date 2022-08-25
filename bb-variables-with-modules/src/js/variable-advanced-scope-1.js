export function demo() {

// Previous to ES6, var was the only way to 
// declare a variable. Variables declared with var
// are in the global scope and therefore are 
// added to the global object (window in the browser).
// All vars in any block 
// (as shown in the if statement below) 
// are hoisted to the top of the block.
var x = 1;
if (x === 1) {
  var x = 2;
  console.log(x);
  // expected output: 2
}
console.log(x);
// expected output: 1
// but it has changed to 2

// In ES6 let was introduced to give
// the same behavior as other languages.
let y = 1;
if (y === 1) {
  let y = 2;
  console.log(y);
  // expected output: 2
}
console.log(y);
// expected output: 1

}
