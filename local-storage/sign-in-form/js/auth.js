'use strict';

const xhr = new XMLHttpRequest();
const signInForm = document.getElementsByClassName('sign-in-htm')[0];
const outputIn = signInForm.getElementsByTagName('output')[0];
const button = signInForm.getElementsByClassName('button')[0];

button.addEventListener('click', () => {
    event.preventDefault();
xhr.open('POST', 'https://neto-api.herokuapp.com/signin');
xhr.setRequestHeader('Content-Type', 'application/json');
const body = {
    email: signInForm.querySelector('#email').value,
    password: signInForm.querySelector('#pass').value
};
xhr.send(JSON.stringify(body));
});

xhr.addEventListener('load', () => {
    const response = JSON.parse(xhr.response);
outputIn.innerText = response.error ? response.message : `Пользователь ${response.name} успешно авторизирован`;
});

const xhr2 = new XMLHttpRequest();
const signUpForm = document.getElementsByClassName('sign-up-htm')[0];
const outputUp = signUpForm.getElementsByTagName('output')[0];
const button2 = signUpForm.getElementsByClassName('button')[0];

button2.addEventListener('click', () => {
    event.preventDefault();
xhr2.open('POST', 'https://neto-api.herokuapp.com/signup');
xhr2.setRequestHeader('Content-Type', 'application/json');
const body = {
    email: signUpForm.querySelector('#email').value,
    password: signUpForm.querySelector('#pass').value,
    passwordcopy: signUpForm.querySelectorAll('#pass')[1].value,
    name: signUpForm.querySelectorAll('#pass')[2].value
};
xhr2.send(JSON.stringify(body));
});

xhr2.addEventListener('load', () => {
    const response = JSON.parse(xhr2.response);
outputUp.innerText = response.error ? response.message : `Пользователь ${response.name} успешно зарегистрирован`;
});