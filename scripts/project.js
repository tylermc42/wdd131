// stay in touch
const signupForm = document.getElementById('signupForm');
const signupMessage = document.getElementById('signupMessage');

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (firstName && email) {
        const user = { firstName, email };
        localStorage.setItem('newsletterUser', JSON.stringify(user));
        signupMessage.textContent = `Thank you, ${firstName}! You have signed up for our newsletter.`;
    } else {
        signupMessage.textContent = 'Please fill in all fields.';
    }
});

//write to us
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

// document submission
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fileInput = document.getElementById('documents');
    const formData = new FormData();
    
    for (let i = 0; i < fileInput.files.length; i++) {
        formData.append('documents', fileInput.files[i]);
    }
    
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

// clear fields after submit button is pressed
document.querySelector('form').addEventListener('submit', function() {
    document.getElementById('name').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('address').value = '';
    document.getElementById("Radio-button").checked=false
});

// local storage
//  Initialize display element variable
const visitsDisplay = document.querySelector(".visits");
// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
// increment the number of visits by one.
numVisits++;
// store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
