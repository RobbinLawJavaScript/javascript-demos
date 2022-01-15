/*

	Create varialbles to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/

var disclosing;
var receiving;
var date;

disclosing = prompt('Enter disclosing party name:');
receiving = prompt('Enter receiving party name:');
date = prompt('Enter the date [month, day, year]:');

// update the disclosing party areas
document.querySelector('.parties .disclosing-party').innerHTML = disclosing;
document.querySelector('.disclosing-signature .disclosing-party').innerHTML = disclosing;

// update the receiving party areas
document.querySelector('.parties .receiving-party').innerHTML = receiving;
document.querySelector('.receiving-signature .receiving-party').innerHTML = receiving;

// update the date
document.querySelector('.date').innerHTML = date;