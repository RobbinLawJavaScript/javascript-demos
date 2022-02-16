export function demo() {
  
// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Banana', 'Pear', 'Orange', 'Apple'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;


val = numbers.length;
val = Array.isArray(numbers);
val = numbers[3];
val = numbers[0];
numbers[2] = 100;
val = numbers.indexOf(36);
val = numbers.indexOf(40);

numbers.push(250);
numbers.unshift(120);
numbers.pop();
numbers.shift();
//numbers.splice(1,3);
//numbers.reverse();

//val = numbers.concat(numbers2);
val = fruit.sort();
//val = numbers.sort(); //This does NOT work on numbers

// // Use the "compare function"
val = numbers.sort(function(x, y){
   return x - y;
});

// // Reverse sort
val = numbers.sort(function(x, y){
  return y - x;
});

// Find
function over50(num){
  return num > 50;
}

val = numbers.find(over50);
val = mixed;

console.log(numbers);
console.log(val);
}