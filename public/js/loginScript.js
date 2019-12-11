'use strict';

const url = 'http://localhost:3000';

const usernameForm = document.getElementById('username');
const submitbtn = document.getElementById('loginButton');

let username;

submitbtn.onclick = () => {
    username = usernameForm.value;
    localStorage.setItem('bigfish_username', username);
    console.log(username);
};