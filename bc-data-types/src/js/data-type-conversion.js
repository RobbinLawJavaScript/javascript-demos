export function demo() {
// Type conversion.
let val = 5;
// Number to string
//val = String(555);
//val = 4+4;
//val = String(4+4);
// Bool to string
//val = String(true);
// Date to string
//val = String(new Date());
// Array to string
//val = String([1,2,3,4]);
// toString()
//val = (5).toString();
//val = (true).toString();
// String to number
//val = Number('5');
//val = Number(true);
//val = Number(false);
//val = Number(null);
// This will result in NaN (Not a Number)
//val = Number('hello');
//val = Number([1,2,3]);
//val = parseInt('100.30');
//val = parseInt('Hi');
//val = parseFloat('100.30');
// Output
console.log(val);
console.log(typeof val);
// This only works on strings.
console.log(val.length);
// This only works on numbers.
console.log(val.toFixed(2));


// Type coersion

let val1 = 5;
let val2 = 6;
let sum = val1 + val2;
//console.log(sum);
//console.log(typeof sum);

// Now we make the number 5 a string.
val1 = String(5);
val2 = 6;
// During the sum the number 6 is converted into a string by the engine.
sum = val1 + val2;
//console.log(sum);
//console.log(typeof sum);

// Here we convert the string addition into a number.
sum = Number(val1 + val2);
//console.log(sum);
//console.log(typeof sum);

}
