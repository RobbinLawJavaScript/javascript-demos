export function demo() {

const formRef = document.querySelector('.frm');
formRef.addEventListener('submit', FormSubmitHandler);
function FormSubmitHandler(evt) {

// the target of the submit event is the 'form'
// element itself (you can submit the form by
// either pressing <enter> or clicking the submit
// button).
// e.g. evt.target will give access to the form

let output = document.querySelector('div.output');

// access the input inputname
// the elements property of a form element gives access
// to the form control elements in the form (e.g. input and button)
// You can use either .validName access to the name (if it's a valid name)
// or ['invalid-name'] for names that do not 
// adhere to JavaScript naming conventions. In JavaScript an invalid name
//would have a - in it.

// display the value in the output
output.innerHTML = evt.target.elements.inputname.value;
//output.innerHTML = evt.target.elements.inputid.value;
//output.innerHTML = evt.target.elements.silly.value;
//output.innerHTML = evt.target.elements['input-name'].value;

evt.preventDefault(); 
}

}