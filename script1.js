// Elements for the navbar and modals
const loginBtn = document.getElementById('login-btn');
const signinBtn = document.getElementById('signin-btn');
const loginModal = document.getElementById('login-modal');
const signinModal = document.getElementById('signin-modal');
const closeButtons = document.getElementsByClassName('close');

const authButtons = document.getElementById('auth-buttons');
const dashboard = document.getElementById('dashboard');
const dashboardBtn = document.getElementById('dashboard-btn');
const dropdownContent = document.getElementById('dropdown-content');

// Function to simulate user sign-in (You can replace this with actual authentication logic)
function signInUser() {
    // Hide the login/sign-in buttons
    authButtons.style.display = 'none';
    // Show the dashboard
    dashboard.style.display = 'block';
}

// Open login modal
loginBtn.onclick = function() {
    loginModal.style.display = 'block';
}

// Open signin modal
signinBtn.onclick = function() {
    signinModal.style.display = 'block';
}

// Close modals when 'x' is clicked
for (let btn of closeButtons) {
    btn.onclick = function() {
        loginModal.style.display = 'none';
        signinModal.style.display = 'none';
    }
}

// Close modals when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == signinModal) {
        signinModal.style.display = 'none';
    }
}

// Handle user sign-in form submission (for demonstration purposes)
document.querySelector('.auth-form').onsubmit = function(event) {
    event.preventDefault();
    signInUser();
    signinModal.style.display = 'none';
}

// Dashboard button click event
dashboardBtn.onclick = function() {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

// Handle user logout
document.getElementById('logout-btn').onclick = function() {
    authButtons.style.display = 'block';
    dashboard.style.display = 'none';
    dropdownContent.style.display = 'none';
}
