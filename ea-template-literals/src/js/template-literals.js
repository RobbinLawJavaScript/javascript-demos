export function demo() {

const firstName = 'Robbin';
const age = 29;
const job = 'IOT Developer';
const city = 'Edmonton';
let html1;
let html2;

// Without template literal strings (es5)
html1 = '<ul>' +
       '<li>Name: ' + firstName + '</li>' +
       '<li>Age: ' + age + '</li>' +
       '<li>Job: ' + job + '</li>' +
       '<li>City: ' + city + '</li>' +
       '</ul>';
//document.body.innerHTML = html1;


function hello(){
  return 'hello world';
}

// With template literal strings (es6)
html2 = 
  `
  <ul>
    <li>Name: ${firstName}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
  </ul>
  `
;

document.body.innerHTML = html2;

}