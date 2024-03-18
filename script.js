const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function showTab(tabName) {
    // Hide all tabs
    document.getElementById('feedTab').style.display = 'none';
    document.getElementById('bestFitsTab').style.display = 'none';
    document.getElementById('followingFeedTab').style.display = 'none';

    // Show the selected tab
    document.getElementById(tabName + 'Tab').style.display = 'block';

    // Update active state in tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector('.tab.' + tabName).classList.add('active');

    // If switching to the Following Feed tab, fetch and display posts from followed users
    if (tabName === 'followingFeed') {
        // Implement logic to fetch and display posts from followed users
    }
}

// Function to toggle the visibility of the notifications dropdown
function toggleNotifications() {
    const dropdown = document.getElementById('notificationsDropdown');
    dropdown.classList.toggle('active');
}