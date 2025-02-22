/**
 * Function that validates the login form
 * and displays an alert if the form fields are not filled in
 *
 * @param formSelector - selector of the form element
 */
function validateLoginForm(formSelector) {
    const form = document.querySelector(formSelector);
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        if (email === '' || password === '') {
            alert('All form fields must be filled in');
            return;
        }

        const formData = {
            email,
            password,
        };

        console.log(formData);

        form.reset();
    });
}

validateLoginForm('.login-form')
