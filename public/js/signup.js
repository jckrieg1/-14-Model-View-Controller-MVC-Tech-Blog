// Form submission handled here:
const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelectorAll('form-input').value;
    const email = document.querySelectorAll('form-input').value;
    const password = document.querySelectorAll('form-input').value;


    if (name && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                password,
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/dashboard');
            alert('Account created!');
        } 
        else {
            alert(response.statusText)
        }
    }
  }


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler); 