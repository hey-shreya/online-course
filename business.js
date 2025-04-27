// Highlight Active Navigation Link
const navLinks = document.querySelectorAll('.nav-menu ul li a');
const currentLocation = window.location.href;

navLinks.forEach(link => {
  if (link.href === currentLocation) {
    link.classList.add('active');
  }
});

// Searchbox Focus Animation (Optional)
const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('focus', () => {
  searchBox.style.borderColor = '#0056b3';
});

searchBox.addEventListener('blur', () => {
  searchBox.style.borderColor = '#ccc';
});
