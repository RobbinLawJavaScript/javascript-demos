# In Class Assessment 3 - Working with Events [2.5%]

You have been supplied HTML, CSS, and JavaScript files for this assessment. This assessment tests your ability to:

- Create JavaScript event listeners and event handler functions.

## Instructions

> All of your work is to be done in the **`main.js`** file. Do **NOT** modify the HTML file or the CSS file.

### Part 1

Notice in the HTML file that the `alt` attribute of `img.feature` element is set to `no image`.  Add one line of code to the existing **`anonymous handler function`** to copy the `title` attribute value of the `a.feature.link` event target to the `alt` attribute of the `img.feature` element. *Do **not** change the existing functionality of the function.*

### Part 2

Notice in the HTML file there is a `p.feature.title` element with no content; this is by design. Your task is to add the following event listeners to respond to mouse events for the image.

1. Add an event listener for the `mouseover` event of the `img.feature` element. The function that handles the event must set the `innerHTML` of the `p.feature.title` element to the value of the `alt` attribute of the `img.feature` event target.
1. Add an event listener that will reset the `innerHTML` of the `p.feature.title` element to an empty string when the mouse is moved away from the `img.feature` element. (You will have to research the name of the proper event when the mouse is moved away.)
## Submission

Ensure that you have saved the changes to your repository. Then commit and push those changes to GitHub.
