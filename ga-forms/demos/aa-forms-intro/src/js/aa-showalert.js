export function demo(){

const form = document.querySelector("#frm")

form.addEventListener("submit", e => {
    e.preventDefault();
    let {text, select} = getUserValues(e);
    let {message, isNotValid} = validateUserValues(text, select);
    if(isNotValid){
        showAlert(message, 'error');
    } else {
        AddItemToList(text, select);
        showAlert('Item Added to List!', 'success')
    }
});

function getUserValues(e){
    let text = e.target.elements["firstName"].value;
    let select = e.target.elements["dropDown"].value;
    return {text, select}
}

function validateUserValues(text, select){
    let message = '';
    let isNotValid = true;
    if(text == '')
        message += `| Text |`;
    if(select == '')
        message += `| Select |`;
    if(message != '')
        message = `Invalid Data: ` + message;
    else isNotValid = false;
    return {message, isNotValid};
}

function showAlert(message, className) {
    if(message != ''){
        const parentDiv = document.querySelector('.alert');
        const alertElement = 
        `
        <div class='${className} form-control'>
            ${message}
        </div>
        `
        parentDiv.innerHTML = alertElement;
    }
}

function AddItemToList(text, select) {
    let list = document.querySelector(".item-list")
    let newItem = 
    `
    <div class="mb-3">
        <p>Hey ${text}, your reason is: ${select}</p>
    </div>
    `
    list.innerHTML =  newItem + list.innerHTML;
}

function clearUserValues(e) {
    e.target.elements["firstName"].value = '';
    e.target.elements["dropDown"].value = '';
}

}