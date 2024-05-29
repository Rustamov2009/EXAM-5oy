
const loginBtn = document.getElementById('login-btn');
const addQuestionBtn = document.getElementById('add-question-btn');
const loginContainer = document.getElementById('login-container');
const questionContainer = document.getElementById('question-container');
const questionInput = document.getElementById('question-input');
const questionList = document.getElementById('question-list');

const validUsername = 'mmm';
const validPassword = 'mmm123';

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        alert('Siz ro\'yxatdan o\'tdingiz!');
        loginContainer.style.display = 'none';
        questionContainer.style.display = 'block';
    } else {
        alert('Username va parol xato!');
    }
});

addQuestionBtn.addEventListener('click', () => {
    const question = questionInput.value;
    if (question) {
        const li = document.createElement('li');
        li.textContent = question;
        questionList.appendChild(li);
        questionInput.value = '';
    }
});
