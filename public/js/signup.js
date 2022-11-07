// Form submission handled here:
async function newFormHandler(event) {
    event.preventDefault();
    const fist_name = document.querySelectorAll('#first_name').value;
    const last_name = document.querySelectorAll('#last_name').value;
    const email = document.querySelectorAll('#email').value;
    const password = document.querySelectorAll('#password').value;

    if (fist_name && last_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                fist_name,
                last_name,
                email,
                password,
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            alert('Account created!');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText)
        }
    }
  }


document.querySelectorAll('.login-form').addEventListener('submit', newFormHandler); 