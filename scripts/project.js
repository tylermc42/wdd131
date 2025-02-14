const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;

    if (firstName && email) {
        const user = { firstName, email };
        localStorage.setItem('newsletterUser', JSON.stringify(user));
        signupMessage.textContent = `Thank you, ${firstName}! You have signed up for our newsletter.`;
    } else {
        signupMessage.textContent = 'Please fill in all fields.';
    }
});

const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;

    if (message) {
        const messages = JSON.parse(localStorage.getItem('communityMessages')) || [];
        messages.push(message);
        localStorage.setItem('communityMessages', JSON.stringify(messages));
        contactMessage.textContent = 'Your message has been sent to the community directors.';
    } else {
        contactMessage.textContent = 'Please enter a message.';
    }
});