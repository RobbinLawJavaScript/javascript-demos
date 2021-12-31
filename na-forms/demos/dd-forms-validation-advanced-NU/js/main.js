function validField(field) {
    let valid = true; // initialize to good field
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
    });

    return valid;
}

function validateForm(form, invalid, valid) {
    validForm = true;

    if (form.tagName && form.tagName === 'FORM') {
        for (let i = 0; i < form.elements.length; i += 1) {
            let field = form.elements[i];
            for (rule in field.dataset) {
                switch(field.dataset[rule]) {
                    case 'not-empty':
                        if (field.value.trim().length == 0) {
                            validForm = false;
                            invalid(field);
                        } else {
                            valid(field);
                        }
                        break;
                    case 'length':
                        if (field.value.trim().length < 6) {
                            validForm = false;
                            invalid(field);
                        } else {
                            valid(field);
                        }
                        break;
                }
            }
        }
    }

    return validForm;
}
document.querySelector('.frm-login')
    .addEventListener('submit', function (evt) {
       
        let errMsg = '';

        function invalid(field) {
            errMsg = '<p>' + field.dataset.error + '</p>';
            field.classList.add('error');
        };
        
        function field() {
            field.classList.remove('error');
        }

        if (evt.target.elements.keep.checked) {
            if (!confirm('Do you want to stay signed in?')) {
                evt.preventDefault();
            }
        }

        if (!validateForm(evt.target, invalid, valid)) {
            evt.preventDefault();
        }

        document.querySelector('div.error').innerHTML = errMsg;
        
});