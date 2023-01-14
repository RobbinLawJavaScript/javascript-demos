// This demo looks at some of the things you can
// do with arrays/lists in javaScript,
// such as slice, splice, and sort.
// Other things like .forEach(), .map(), .filter(),
// are covered later in the course in the arrays section.
export function demo() {
  
// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbersForConcat = new Array(22,45,33,76,54);
const fruit = ['Banana', 'Pear', 'Orange', 'Apple'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
let mutatedArray, funcReturnVal;
console.log('original numbers array: ', numbers);
mutatedArray = numbers;
funcReturnVal = numbers.length;
funcReturnVal = Array.isArray(numbers);
funcReturnVal = numbers[3];
funcReturnVal = numbers[0];
funcReturnVal = numbers.indexOf(36);
funcReturnVal = numbers.indexOf(40);
funcReturnVal = numbers.concat(numbersForConcat); //returns a new array not mutating numbers.
funcReturnVal = null;
numbers[2] = 100; // mutates numbers array.
numbers[2] = 33; // mutates numbers array.
funcReturnVal = numbers.push(250); // mutates numbers array.
funcReturnVal = numbers.unshift(120); // mutates numbers array.
funcReturnVal = numbers.pop(); // mutates numbers array.
funcReturnVal = numbers.shift(); // mutates numbers array.
funcReturnVal = numbers.reverse(); // mutates numbers array reversing elements.
funcReturnVal = numbers.reverse();
funcReturnVal = numbers.slice(1,4); // returns a section, without mutating original.
funcReturnVal = numbers.splice(1,4); // removes elements of numbers array, returns deleted elements.



console.log('mutated numbers array: ', mutatedArray, 'function return value: ', funcReturnVal);

// The slice() method can be used to create a copy of an array 
// or return a portion of an array. 
// It is important to note that the slice() method does not 
// alter the original array but instead creates a shallow copy. 
// Unlike the slice() method, the splice() method will 
// change the contents of the original array, by deleting elements
// and return the deleted elements.


// SORTING ARRAYS

//stringSorted = fruit.sort();
//console.log(stringSorted);


// This does NOT work on numbers as it changes 
// the numbers to strings and then sorts.
//numbersNotSortedProperly = numbers.sort();
//console.log(numbersNotSortedProperly); 

// Use this "compare function" to sort numbers properly.
// Don't worry about the "function" here, we will learn later.

// Sorts Ascending
const numbers2 = [43,56,33,23,44,36,5];
// Note: numbers1 is mutated here.
const numbersSortedProperlyAscending = numbers2.sort(function(x, y){
	return x - y;
});
console.log('Original Sorted Ascending: ', numbersSortedProperlyAscending);

// Sorts Descending
const numbers3 = [43,56,33,23,44,36,5];
// Note: numbers2 is mutated here.
const numbersSortedProperlyDescending = numbers3.sort(function(x, y){
  return y - x;
});
console.log('Original Sorted Descending: ', numbersSortedProperlyDescending);


// https://stackoverflow.com/questions/1494713/how-does-javascripts-sort-work
// https://en.wikipedia.org/wiki/Merge_sort

console.log('Ascending Number Array Sort Example');
//showHowSortWorks([43,56,33,23,44,36,5]);
console.log('Ascending Number Array Sort Example');
//showHowSortWorks([90, 1, 20, 14, 3, 55]);


// Do NOT try to understand this code yet
//as it is only here to help show how the sort works.
function showHowSortWorks(inputNumberArray){
	let arr = inputNumberArray;
	console.log('Initial Array: ', arr);
	let sortRes = [];
	// Create duplicate array so original won't be mutated/changed.
	let copy = arr.slice();
	let inc = 0;
	copy.sort((a, b) => {
		sortRes[inc] = [ a, b, a-b ];
		inc += 1;
		return a - b;
	});
	let sortedArray = copy.slice();
	let p = 0;
	for (let i = 0; i < inc; i++) {
		copy = arr.slice();
		copy.sort((a, b) => {
			p += 1;
			if (p <= i ) {
				return a - b;
			}
			else{
				return false;
			}
		});
		p = 0;
		console.log('iteration' + i +'\t\t' + copy +' \t a: '+ sortRes[i][0] +' \tb: '+ sortRes[i][1] +'\tTotal: '+ sortRes[i][2]);
	}
	console.log('Sorted Ascending Array: ', sortedArray);
}
}