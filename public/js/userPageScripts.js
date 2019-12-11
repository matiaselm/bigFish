'use strict';
const url = '/app/';
console.log('cardScript loaded');

//Getting references to all elements inside posts

const postImg = document.getElementsByClassName('postImg');
const postTitle = document.getElementsByClassName('postTitle');
const userName = document.getElementsByClassName('username');
const comment = document.querySelectorAll('.postComments');

const postCard = document.getElementsByClassName('postCard');
const cardView = document.getElementById('postCards');
const cardOpener = document.getElementsByClassName('cardArrow');