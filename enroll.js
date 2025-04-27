document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.transition = 'width 2s ease-in-out';
      bar.style.width = width;
    }, 100);
  });

  // Add click event listeners to all "Start Learning" buttons
  const startLearningButtons = Array.from(document.querySelectorAll('.course-card .buttons button'))
    .filter(button => button.textContent.trim() === 'Start Learning');

  startLearningButtons.forEach(button => {
    button.addEventListener('click', () => {
      window.location.href = 'next.html';
    });
  });
});

// Progress bar functions
function fillProgress() {
  setProgress('htmlProgress', 80);
  setProgress('jsProgress', 60);
  setProgress('backendProgress', 30);
}

function setProgress(id, percent) {
  const bar = document.getElementById(id);
  bar.style.width = percent + '%';
  bar.textContent = percent + '%';
}

// Feedback form submission handling
document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Basic validation (HTML5 required attributes handle most)
      const fullName = this.fullName.value.trim();
      const email = this.email.value.trim();
      const phone = this.phone.value.trim();
      const college = this.college.value.trim();
      const message = this.message.value.trim();

      if (!fullName || !email || !phone || !college || !message) {
        alert('Please fill in all fields.');
        return;
      }

      // Here you can add code to send form data to a server or API
      // For now, just show a success message and reset the form
      alert('Thank you for your feedback, ' + fullName + '!');
      this.reset();
    });
  }
});
