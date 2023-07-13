document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting the usual way
    event.preventDefault();
    alert('Your message is being sent. Please wait...');
    let formData = {
        con_fname: document.getElementById('fname').value,
        con_lname: document.getElementById('lname').value,
        con_email: document.getElementById('email').value,
        con_phone: document.getElementById('phone').value,
        con_message: document.getElementById('message').value
    };

    fetch('https://ec2.fusesolve.com/fuseSolve/python/send_email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    .then(response => response.text())  // Change this line
    .then(data => {
        console.log(data);
        if (data === 'Email sent successfully') {
            alert('Your message has been sent!');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});