/*

	Below, we have a solution that makes use of document.querySelector quite a bit.
	Create a function to 'wrap' the document.querySelector functionality so that it requires
	less typing to call the function.

	The function signature should be as follows:

	function query(selector)

	The body of the function should consist of a single return statement that returns the result
	from the call to document.querySelector(selector)

	Once complete, you should be able to replace all calls to document.querySelector() with query()
*/

var disclosing;
var receiving;
var date;

function query(selector) {
	return document.querySelector(selector);
}

disclosing = prompt('Enter disclosing party name:');
receiving = prompt('Enter receiving party name:');
date = prompt('Enter the date [month, day, year]:');

// update the disclosing party areas
query('.parties .disclosing-party').innerHTML = disclosing;
query('.disclosing-signature .disclosing-party').innerHTML = disclosing;

// update the receiving party areas
query('.parties .receiving-party').innerHTML = receiving;
query('.receiving-signature .receiving-party').innerHTML = receiving;

// update the date
query('.date').innerHTML = date;