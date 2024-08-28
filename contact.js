document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        console.log(data);

        fetch('http://127.0.0.1:5500/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(d => {
            console.log('Success:', data);
            document.getElementById('response-message').textContent = data;
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            document.getElementById('response-message').textContent = 'There was an error submitting your message. Please try again later.';
        });
    });
});
