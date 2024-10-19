document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const formTitle = document.getElementById('form-title');

    toggleButton.addEventListener('click', function () {
        // Toggle between login and signup forms
        if (loginForm.style.display === 'block' || loginForm.style.display === '') {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
            formTitle.textContent = 'Sign Up';
            toggleButton.textContent = 'Switch to Login';
        } else {
            loginForm.style.display = 'block';
            signupForm.style.display = 'none';
            formTitle.textContent = 'Login';
            toggleButton.textContent = 'Switch to Signup';
        }
    });
});
