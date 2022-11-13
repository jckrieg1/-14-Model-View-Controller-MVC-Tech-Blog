const loginFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelectorAll('#email-login').values.trim();
    const password = document.querySelectorAll('#password-login').values.trim();

    if (email && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify( { email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
           document.location.replace('/dashboard');
        }
        else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
           