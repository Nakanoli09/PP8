document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const errorUsername = document.getElementById('error_username');
    const errorEmail = document.getElementById('error_email');


    let isValid = true;

    const username = usernameInput.value.trim();
    if (username.length < 3) {
        errorUsername.textContent = 'Имя должно быть не менее 3 символов';
        errorUsername.style.color = 'red';
        usernameInput.style.borderColor = 'red';
        isValid = false;
    }

    if (username === '') {
        errorUsername.textContent = 'Пожалуйста, введите имя.';
        errorUsername.style.color = 'red';
        isValid = false;
    }
    else if(username.length >= 3 && username !== ''){
        errorUsername.style.display = 'none';
        usernameInput.style.borderColor = 'black';
    }
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        errorEmail.textContent = 'Пожалуйста, введите email.';
        errorEmail.style.color = 'red';
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        errorEmail.textContent = 'Введите корректный email.';
        errorEmail.style.color = 'red';
        emailInput.style.borderColor = 'red';
        isValid = false;
    }
    else if(email !== '' && emailPattern.test(email)){
        errorEmail.style.display = 'none';
        emailInput.style.borderColor = 'black';
    }

    if (isValid) {
        alert('сообщение успешно отправлено!');
        usernameInput.value = '';
        emailInput.value = ''
        messageInput.value = '';
    }
});