document.querySelector('#btn_sendMessage').addEventListener('click', function(event) {
    const btn_sendMessage = document.getElementById("btn_sendMessage");
    btn_sendMessage.style.backgroundColor = "#f5f5f5";
    btn_sendMessage.style.color = "#000000";
    btn_sendMessage.innerHTML = "Sending...";
    btn_sendMessage.disabled = true;
    btn_sendMessage.style.border = "1px solid #f5f5f5";
    btn_sendMessage.style.cursor = "not-allowed";
    // Prevent the form from submitting the usual way

    event.preventDefault();
    // alert('Your message is being sent. Please wait...');
    let formData = {
        con_fname: document.getElementById('fname').value,
        con_lname: document.getElementById('lname').value,
        con_email: document.getElementById('email').value,
        con_phone: document.getElementById('phone').value,
        con_message: document.getElementById('message').value,
        service_name: 'danhanacare'  // 서비스 이름 추가
    };

    fetch('https://ec2.fusesolve.com/fuseSolve/python/send_email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then((response)=>{
        
        // console.log("btn_sendMessage")
        
        
        
        
        
        return response;
    })
    // .then(response => response.text())  // Change this line
    .then(response => response.json())  // Convert response to JSON
    .then(data => {
        console.log(data);
        if (data.message === 'Email sent successfully') {
            alert('Your message has been sent!');
                btn_sendMessage.style.backgroundColor = "#000000";
                btn_sendMessage.style.color = "#ffffff";
                btn_sendMessage.innerHTML = "Message Sent!";
                btn_sendMessage.disabled = true;
                btn_sendMessage.style.cursor = "pointer";
                btn_sendMessage.style.border = "1px solid #000000";
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

