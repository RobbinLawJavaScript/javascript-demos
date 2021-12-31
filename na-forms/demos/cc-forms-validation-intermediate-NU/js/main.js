function validField(field) {
    let valid = true; // initialize to good field

    // run through the classes on the field to see if 
    // there are any validate rules. If there are any
    // validate rules, then the field is bad (validField = false)
    field.classList.forEach(function (classValue) {
        switch(classValue) {
            case 'validate-not-empty':
                if (field.value.trim().length == 0) {
                    valid = false;
                }
                break;
            case 'validate-password':
                if (field.value.trim().length < 6) {
                    valid = false;
                }
                break;
        }
        
        // if (classValue == 'validate-not-empty') {
        //     if (field.value.trim().length == 0) {
        //         valid = false;
        //     }
        // } else if (classValue == 'validate-password') {
        //     if (field.value.trim().length < 6) {
        //         valid = false;
        //     }
        // }
    });

    return valid;
}

document.querySelector('.frm-login')
    .addEventListener('submit', function (evt) {
        let validForm = true;
        let username = evt.target.elements.username;
        let pass = evt.target.elements.password;
        let errMsg = '';

        // perform validation
        if (!validField(username)) {
            errMsg = '<p>Username cannot be empty</p>';
            username.classList.add('error');
            validForm = false;
        } else {
            username.classList.remove('error');
        }

        if (!validField(pass)) {
            errMsg = errMsg + '<p>Password must be 6 or more chars</p>';
            pass.classList.add('error');
            validForm = false;
        } else {
            pass.classList.remove('error');
        }

        if (evt.target.elements.keep.checked) {
            if (!confirm('Do you want to stay signed in?')) {
                evt.preventDefault();
            }
        }

        if (!validForm) {
            evt.preventDefault(); // don't submit
        }

        document.querySelector('div.error').innerHTML = errMsg;
        
});