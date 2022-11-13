const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelectorAll('username-login').values.trim();
    const password = document.querySelectorAll('password-login').values.trim();

    if (username && password) {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify( { username, password }),
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
           