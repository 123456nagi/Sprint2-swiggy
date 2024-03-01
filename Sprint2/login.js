document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'All fields are required';
        return;
    }

    // Add your own validation logic here if needed

    // Redirect to home page
    window.location.href = 'swiggy.html';
    alert('Login succusseful')
});