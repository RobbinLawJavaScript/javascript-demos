// When the 'Add Tag' submit button is clicked, the p.feature.tags element should be 
// updated with the tag that was entered by the user.  Do not overwrite any existing tags,
// simply add each additional tag onto the already existing list.  A tag cannot be empty 
// (i.e. cannot be whitespace). If the user tries to add an empty tag, remove the hidden 
// class from the p.feature.error element.  If the form is submitted correctly, then ensure
// that the p.feature.error element is hidden.

document.querySelector('.feature.frm ')
        .addEventListener('submit', function (evt) {
          let error = document.querySelector('p.feature.error');
          let textBox = evt.target.elements.tag;
          //Ensure that there is a value in the tag field before adding a tag.
          //Use the JavaScript .trim() function to get rid of spaces before
          //the first character and after the last character.
          if ( textBox.value.trim() === '') {
            //Change the error message and unhide it.
            error.innerHTML = 'Tags cannot be empty';
            error.classList.remove('hidden');
          } else {
            // insert a ' #' before the tag for aesthetics
            document.querySelector('p.feature.tags ')
            .innerHTML += ' #' + textBox.value.trim();
            textBox.value = '';
            error.classList.add('hidden');
          }
          evt.preventDefault();
        });