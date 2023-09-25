export default function Demo() {

let counter = 0

const button = document.querySelector('button')
button.addEventListener('click', ButtonClickHandler)
function ButtonClickHandler(){
    counter++
    const message = document.querySelector('p#p1')
    message.innerText = `Button was clicked ${counter} times.`
}

// Event listener functions will be passed the
// event object for the event by the v8 engine. 
// This object can be used to get information 
// about the event and to 
// call methods/functions on the event as well 
// e.g. preventDefault()

const naitLink = document.querySelector('a#a1')
naitLink.addEventListener('click', LinkHandler)
function LinkHandler(e) {
    console.log(e)
    //preventDefault stops the normal operation of the href.
    e.preventDefault()   
}

// In the above example, the explicit variable and 
// function are not required as they are not referenced
// more than once. So, we can rewrite the example all in one statement
// using an anonymous arrow function.

document.querySelector('a#a2').addEventListener('click', (e) => {
    //preventDefault stops the normal operation of the href.
    e.preventDefault()
})


const refUl = document.querySelector('ul.links')
refUl.addEventListener('click', ClickHandler)
function ClickHandler(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target)
    const clickMessage = document.querySelector('p#p3')
    clickMessage.innerText = `you clicked the ${e.target.tagName}`
}

}