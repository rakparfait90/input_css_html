const inputIcon = document.querySelector('.input_icon');
const inputPassword = document.querySelector('.input_field');

inputIcon.addEventListener('click', () => {
    inputIcon.classList.toggle('ri-eye-offline');
    inputIcon.classList.toggle('ri-eye-line');
    inputPassword.type = inputPassword.type === 'password' ? 'text' : 'password'
})