export function demo() {

const formRef = document.querySelector('form.frm');
formRef.addEventListener('submit', FormSubmitHandler);
function FormSubmitHandler(evt) {

// The target of the submit event is the 'form'
// element itself (you can submit the form by
// either pressing <enter> or clicking the submit
// button).
// e.g. evt.target will give access to the form

const successMessage = document.querySelector('div.success-message');
const errorMessage = document.querySelector('div.error-message');

// The elements property of a form element gives access
// to the form control elements in the form (e.g. input and button)
// You can use either .validName access to the name (if it's a valid name)
// or ['invalid-name'] for names that do not 
// adhere to JavaScript naming conventions. In JavaScript an invalid name
// would have a - in it. Don't use a - in any name but css classes.

successMessage.innerHTML = evt.target.elements.firstName.value;
//successMessage.innerHTML = evt.target.elements.firstNameId.value;
//successMessage.innerHTML = evt.target.elements.silly.value;
//successMessage.innerHTML = evt.target.elements['input-name'].value;

evt.preventDefault(); 
}

}