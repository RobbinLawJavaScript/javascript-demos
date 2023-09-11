// This demo looks at some of the basic things you can
// do with arrays/lists in javaScript,

// Other things such as slice, splice, sort,
// .forEach(), .map(), .filter(),
// are covered later in the course in the 
// dedicated arrays section.
export function demo() {
  
// Create some arrays
// Method 1 way to create and initialize
const numbers = [43,56,33,23,44,36,5];
console.log('original numbers array: ', numbers);
// Method 2 way to create and initialize
const numbersForConcat = new Array(22,45,33,76,54);
console.log('original numbersForConcat array: ', numbersForConcat);
const fruit = ['Banana', 'Pear', 'Orange', 'Apple'];
console.log('original fruit array: ', fruit);
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}];
console.log('original mixed array: ', mixed);
// Questions about numbers array.
let funcReturnVal;
funcReturnVal = numbers.length;
console.log('numbers array length: ', funcReturnVal);
funcReturnVal = Array.isArray(numbers);
console.log('confirmation that numbers is an array: ', funcReturnVal);
funcReturnVal = numbers[3];
console.log('element value at index 3: ', funcReturnVal);
funcReturnVal = numbers[0];
console.log('element value at index 0: ', funcReturnVal);
funcReturnVal = numbers.indexOf(36);
console.log('index of first element with value of 36: ', funcReturnVal);
funcReturnVal = numbers.indexOf(40);
console.log('index of first element with value of 40: ', funcReturnVal);

// Returns a new array not mutating numbers array.
funcReturnVal = numbers.concat(numbersForConcat);
console.log('new concatenated array: ', funcReturnVal);
funcReturnVal = null;

 // Operations that mutate the numbers array.
numbers[2] = 100;
console.log('mutated numbers array: ', numbers);
numbers[2] = 33;
console.log('mutated numbers array: ', numbers);
funcReturnVal = numbers.push(250);
console.log('mutated numbers array after push: ', numbers);
funcReturnVal = numbers.unshift(120);
console.log('mutated numbers array after unshift: ', numbers);
funcReturnVal = numbers.pop();
console.log('mutated numbers array after pop: ', numbers);
funcReturnVal = numbers.shift();
console.log('mutated numbers array after shift: ', numbers); 
funcReturnVal = numbers.reverse();
console.log('mutated numbers array after reverse: ', numbers);

}