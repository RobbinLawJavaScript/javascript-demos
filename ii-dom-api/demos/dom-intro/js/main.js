// access to the two parent divs
let div1 = document.querySelector('div');
let div2 = div1.nextElementSibling;

// access to two paragraphs in the document
let p3 = div1.lastElementChild;
let p4 = div2.firstElementChild;

// variables for creating a new paragraph
let p5;
let text;

// replace p3 with p4
div1.replaceChild(p4, p3);
// move p3 to div2
div2.appendChild(p3);

// remove p2
div1.removeChild(div1.children[1]);

// create a new paragraph
p5 = document.createElement('p');
text = document.createTextNode('Paragraph 5');
p5.appendChild(text);

// insert the new paragraph
div1.insertBefore(p5, p4);