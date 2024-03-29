export function demo() {

const firstName = 'Robbin';
const age = 19;
const job = 'IOT Developer';
const city = 'Edmonton';
let html1;
let html2;

// Without template literal strings (es5) 2009
html1 = '<ul>' +
       '<li>Name: ' + firstName + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';
document.body.innerHTML += html1;


function hello(){
  return 'hello world';
}
// With template literal strings (es6) 2015.
// ${} is called string interpolation in javaScript.
// The last <li> is an example of using a ternary operator
// (if-else shorthand).
html2 = 
  `
  <ul>
    <li>Name: ${firstName}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
  </ul>
  `
;

document.body.innerHTML += html2;

}