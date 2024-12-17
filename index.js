document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const username = document.getElementById('name');
    const email = document.getElementById('email');
    const number = document.getElementById('number');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const formMessages = document.getElementById('form-messages');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const inputControl = element.parentElement;
        const errorDisplay = document.createElement('span');
        errorDisplay.className = 'error';
        errorDisplay.innerText = message;

     
        clearError(inputControl);

        inputControl.appendChild(errorDisplay);
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }

    const setSuccess = (element) => {
        const inputControl = element.parentElement;
        clearError(inputControl);
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
    }

    const clearError = (inputControl) => {
        const errorDisplay = inputControl.querySelector('.error');
        if (errorDisplay) {
            inputControl.removeChild(errorDisplay);
        }
    }

    const isValidEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    const validateInputs = () => {
        let formIsValid = true;
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const numberValue = number.value.trim();
        const subjectValue = subject.value.trim();
        const messageValue = message.value.trim();

      
        if (usernameValue === '') {
            setError(username, 'Full Name is required');
            formIsValid = false;
        } else {
            setSuccess(username);
        }

      
        if (emailValue === '') {
            setError(email, 'Email is required');
            formIsValid = false;
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Please enter a valid email address');
            formIsValid = false;
        } else {
            setSuccess(email);
        }

   
        if (numberValue === '') {
            setError(number, 'Mobile Number is required');
            formIsValid = false;
        } else if (numberValue.length < 10) {
            setError(number, 'Mobile Number must be at least 10 digits');
            formIsValid = false;
        } else {
            setSuccess(number);
        }

  
        if (subjectValue === '') {
            setError(subject, 'Subject is required');
            formIsValid = false;
        } else if (subjectValue.length < 10) {
            setError(subject, 'Subject must be at least 10 characters');
            formIsValid = false;
        } else {
            setSuccess(subject);
        }

        if (messageValue === '') {
            setError(message, 'Message is required');
            formIsValid = false;
        } else if (messageValue.length < 15) {
            setError(message, 'Message must be at least 100 characters');
            formIsValid = false;
        } else {
            setSuccess(message);
        }

        
        formMessages.innerText = '';
        formMessages.classList.remove('error', 'success');

        if (formIsValid) {
            formMessages.innerText = 'Form submitted successfully!';
            formMessages.classList.add('success');
            form.reset();
        } else {
            formMessages.innerText = 'Please fix the errors in the form.';
            formMessages.classList.add('error');
        }
    };
});
