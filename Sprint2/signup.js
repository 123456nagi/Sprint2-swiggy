document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username === '' || email === '' || password === '') {
        document.getElementById('error-message').textContent = 'All fields are required';
        return;
    }

    // Add your own validation logic here if needed

    // Redirect to login page
    window.location.href = 'login.html';
    alert('Signup successful')
});