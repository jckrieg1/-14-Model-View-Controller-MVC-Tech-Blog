

const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const description = document.querySelector('#blog-description').value.trim();

    if (title && description) {
        const response = await  fetch(`api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    }
    else {
        alert('Failed to create blog post');
        }
    }
};

 const delButtonHandler = async (event) => {
    if (event.target.getAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await  fetch(`api/posts/${'id'}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert('Failed to delete blog post');
            }
    }
 };

 document.querySelector('.form-new-blog-form').addEventListener('submit', newFormHandler);
//  document.querySelector('.post-list').addEventListener('click', delButtonHandler);

    

