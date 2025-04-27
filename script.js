// Handle Search Bar
const searchInput = document.querySelector('.nav-right input');
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        alert(`You searched for: ${searchInput.value}`);
    }
});

// Handle Login Button
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', function() {
    alert('Redirecting to login page...');
    // You can later replace this with: window.location.href = '/login.html';
});

// Handle Join Button
const joinBtn = document.querySelector('.join-btn');
joinBtn.addEventListener('click', function() {
    alert('Redirecting to signup page...');
    // You can later replace this with: window.location.href = '/signup.html';
});

// Highlight Cards on Hover
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.1)';
    });
});

// Change Hero Text after 5 seconds
const heroHeading = document.querySelector('.hero-content h1');

setTimeout(() => {
    heroHeading.textContent = "Shape your future with Coursera";
}, 5000);
