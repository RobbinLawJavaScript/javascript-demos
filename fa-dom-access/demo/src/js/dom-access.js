export function demo() {

//DOM Access techniques

// document.getElementsByTagName(selector) – returns a list of matched elements
let someElements = document.getElementsByTagName("p");
console.log('ElementsByTagName: ' + someElements[0].innerHTML);
console.log('ElementsByTagName: ' + someElements[1].innerHTML);
console.log('ElementsByTagName: ' + someElements[2].innerHTML);
someElements = document.getElementsByTagName("h1");
console.log('ElementsByTagName: ' + someElements[0].innerHTML);

// document.getElementById(selector) – returns a single matched element
let someElement = document.getElementById("someId");
console.log('ElementById: ' + someElement.innerHTML);

// document.getElementsByClassName(selector) – returns a list of matched elements
someElements = document.getElementsByClassName("someClass");
console.log('ElementsByClassName: ' + someElements[0].innerHTML);
console.log('ElementsByClassName: ' + someElements[1].innerHTML);

// document.querySelector(selector) – returns the first matched element
someElement = document.querySelector("p");
console.log('querySelectorByTag: ' + someElement.innerHTML);
someElement = document.querySelector("#someId1");
console.log('querySelectorById: ' + someElement.innerHTML);
someElement = document.querySelector(".someClass1");
console.log('querySelectorByClass: ' + someElement.innerHTML);


// document.querySelectorAll(selector) – returns a list of matched elements
someElements = document.querySelectorAll("p");
console.log('querySelectorAllByTag: ' + someElements[0].innerHTML);
someElements = document.querySelectorAll("#someId1");
console.log('querySelectorAllById: ' + someElements[0].innerHTML);
console.log('querySelectorAllById: ' + someElements[1].innerHTML);
someElements = document.querySelectorAll(".someClass1");
console.log('querySelectorAllByClass: ' + someElements[0].innerHTML);

}