'use strict';

console.log('cardScript loaded');

let cardsOpen = false;
let cardId;

const card = document.getElementsByClassName('postCard');
const cardView = document.getElementById('postCards');

const openFunction = (e) => {
    const clickedId = e.target.id;

    // If areCardsOpen === false, open card
    //   - mark in areCardsOpen, that card has been opened
    //   - areCardsOpen = true
    //   - areCardsOpen can only be made false again by closing the opened card

    if(!cardsOpen){
        cardId = e.target.id;
        console.log(`card ${e.target.id} clicked`);
        document.getElementById(`${cardId}`).style.height=('var(--card-open-size)');
        cardsOpen = true;
    }else if(cardsOpen && clickedId===cardId){
        console.log(`card ${e.target.id} clicked`);
        document.getElementById(`${e.target.id}`).style.height=('var(--card-main-size)');
        cardsOpen=false;
    }
};

let cards = [
    {
        title: 'some title here',
        picture: 'picture maybe?',
        likes: 'likes here',
        dislikes: 'dislikes here',
        post_id: 'post-id here',
        username: 'username here'
    }
];

for(let i = 0; i<25; i++) {
    cardView.innerHTML += `<div class="postCard" id='post${i}'>These are some fine cards mmHmmHHmmm</div>`
}

console.log(cardView);
console.log(card);

cardView.onclick = (e) => {
    openFunction(e)
};

//.addClass