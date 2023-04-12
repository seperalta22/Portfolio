const form = document.querySelector('.contact__form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    emailError.innerHTML = 'The email must be written in lower case.';
    emailError.style.display = 'block';

    // Prevents the form from submitting
    event.preventDefault();

    // Hides the error message after 5 seconds
    setTimeout(() => {
      emailError.style.display = 'none';
    }, 5000);
  }
});
