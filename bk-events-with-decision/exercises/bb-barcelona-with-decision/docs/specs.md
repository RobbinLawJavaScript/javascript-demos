# Decisions

## Decisions (Introduction)

> To follow along with this exercise, you will need to open the [src/index.html](../src/index.html).

Often, an interaction with the user may yield more than one result. In these cases, a decision must be made to determine which action should be executed based on the current state of the page. This can be done by associating specific conditions to desired actions.
Conditions are essentially Boolean values (true or false) that form the basis for whether a code block is executed or not. They can be built as expressions (for example using relational or equality operators) or could be based on the returned value from a function.

### Relational Operators

> Table 1. Relational operators

Operator | Description
---------|------------
`>` | Greater than – yields true if the left operand is greater than the right operand
`>=` | Greater than or equal to – yields true if the left operand is greater than or equal to the right operand
`<` | Less than – yields true if the left operand is less than the right operand
`<=` | Less than or equal to – yields true if the left operand is less than or equal to the right operand

### Equality Operators

> Table 2. Equality operators

Operator | Description
---------|------------
`==` | Equals – yields true if the left operand is similar to the right operand
`===` | Identity – yields true if the left operand is identical to the right operand
`!=` | Not equals – yields true if the left operand is not similar to the right operand
`!==` | Non-identity – yields true if the left operand is not identical to the right operand

### If Statement

To demonstrate how simple decisions can be made, we will revisit the previous exercise. Previously, your task was to add an event listener to a link on the page that when clicked would display a photo. In this exercise, you will add the functionality to hide the photo by clicking the same link.

#### Condition

The first step will be to identify what exactly the conditions are for displaying the photo or hiding it. You will need to inspect the HTML to know what states are possible.

```html
<img class="feature hidden" src"" alt="no image" />
```

Currently the img.feature element also has class hidden, which means the image is currently not visible to the user. The condition for whether the image needs to be revealed or not can then be determined by the presence of the hidden class:

```js
featureImage.classList.contains('hidden')
```

Now that we have a condition to check, we can use an if-statement to implement the check for us:

```js
if (featureImage.classList.contains('hidden')) {
  featureImage.src = e.target.href;
  featureImage.classList.remove('hidden');
}
```

### If-Else Statement

The updates we've made only handle the case to show the image if it was not currently hidden. The next task is to do the opposite: hide the image if it is currently visible. This can be done quite easily as we have already identified the condition to determine if it is visible or not.

The if-statement can be paired with an accompanying else-statement. While the if-statement defines a code block to execute when the condition is true, the else-statement defines a code block that should be executed when the condition is false. Since it is associated with an existing condition, all that is needed is the presence of the else and its code block. In this example, if the image is not hidden then we should update the src of the img.feature to an empty string and add the hidden class back again.

*[An important note, an else-statement must be associated with an if-statement and should appear immediately after one.]*

```js
if(featureImage.classList.contains('hidden')) {
    featureImage.src = e.target.href;
    featureImage.classList.remove('hidden');
} else {
    featureImage.src = '';
    featureImage.classList.add('hidden');
}
```

What we have now is a working toggle, the link will either display the image or hide it depending on its current state.

## Exercise

1. Update the example so that the text for the link changes to 'Hide Barcelona' when the image is visible and then back to 'View Barcelona' when the image is not visible.
1. With this change made, update the condition for whether to display the image or not to be based on the current text being displayed for the link (e.g. if the link currently shows 'View Barcelona', then clicking the link should display the image).