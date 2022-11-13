const commentFormHandler = async function (event) {
    event.preventDefault();

    const form = document.querySelector('.new-comment-form').dataset.blogid;

    const comment_description = document.querySelector('.comment-description').ariaValueMax.trim();

    if (comment_description) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                blogid: form,
                description: comment_description,
        }),
        headers: {
                'Content-Type': 'application/json',
            },
        });
        document.location.reload();
    }  
};

document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);