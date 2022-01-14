export function demo() {

//DOM Access techniques

// document.getElementById(selector) – returns the first matched element
// There is NO getElementsById because each Id should be unique

// document.getElementsByTagName(selector) – returns a collection of matched elements

// document.getElementsByClassName(selector) – returns a collection of matched elements

// document.querySelector(selector) – returns the first matched element

// document.querySelectorAll(selector) – returns a NodeList of matched elements

let ref;
let val;

ref = document.getElementById("someId");
val = ref;
val = ref.innerHTML;
//val = ref.innerHTML.innerHTML;
val = ref.innerText;

ref = document.getElementsByTagName("p");
val = ref;
val = ref[0];
val = ref[0].innerHTML;
val = ref[1];
val = ref[1].innerHTML;

ref = document.getElementsByClassName("someClass");
val = ref;
val = ref[0];
val = ref[0].innerHTML;
val = ref[1];
val = ref[1].innerHTML;

ref = document.querySelector("p");
val = ref.innerHTML;

ref = document.querySelector("#someId1");
val = ref.innerHTML;

ref = document.querySelector(".someClass");
val = ref.innerHTML;

ref = document.querySelectorAll("p");
val = ref;
val = ref[0].innerHTML;
val = ref[0].innerText;

ref = document.querySelectorAll("#someId1");
val = ref[0].innerHTML;

ref = document.querySelectorAll(".someClass1");
val = ref;
val = ref[0].innerHTML;
//val = ref[1].innerHTML;

console.log(val);
}