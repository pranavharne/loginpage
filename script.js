document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        // Perform login operation (e.g., send data to a server)
        alert('Login successful!');
    } else {
        alert('Please fill in both fields.');
    }
});
