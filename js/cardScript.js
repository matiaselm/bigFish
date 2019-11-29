'use strict';

console.log('cardScript loaded');

let cardsOpen = false;
let cardId;

let cardList = [
    {
        title: 'some title here',
        picture: 'picture maybe?',
        likes: 'likes here',
        dislikes: 'dislikes here',
        post_id: 'post-id here',
        username: 'username here'
    }
];

const card = document.getElementsByClassName('postCard');
const cardView = document.getElementById('postCards');

// openFuntion is called when a card is pressed, it makes it bigger and calls loadPost(), showing the whole post
const openFunction = (e) => {
    const clickedId = e.target.id;

    // If areCardsOpen === false, open card
    //   - mark in areCardsOpen, that card has been opened
    //   - areCardsOpen = true
    //   - areCardsOpen can only be made false again by closing the opened card

    if(!cardsOpen){
        cardId = e.target.id;
        const post = document.getElementById(`${cardId}`);

        console.log(`card ${e.target.id} clicked`);

        post.style.height=('var(--card-open-size)');
        post.innerHTML = bigPost(e);
        cardsOpen = true;
    }else if(cardsOpen && clickedId===cardId){
        const post = document.getElementById(`${cardId}`);
        console.log(`card ${e.target.id} clicked`);
        document.getElementById(`${e.target.id}`).style.height=('var(--card-main-size)');
        post.innerHTML = smallPost(e);
        cardsOpen=false;
    }
};

const bigPost = (e) => {
    return `<a class="bigCard" id=${e.target.id}> 
                            <p>title here</p>
                            <img id="postImage" src="img/placeholder.png">
                            <p>I got a big fish today! Wow!</p>
                            <p class="username">username here</p>
                            <div class="votes">likes here</div>
                            <a href="html/comments.html">comments</a>
</div>`;
};

const smallPost = (e) => {
    return `<div id=${e.target.id}>These are some fine cards mmHmmHHmmm</div>`;
};

for(let i = 0; i<25; i++) {
    cardView.innerHTML += `<div class="postCard" id='post${i}'>These are some fine cards mmHmmHHmmm</div>`
}

console.log(cardView);
console.log(card);

cardView.onclick = (e) => {
    openFunction(e)
};

//.addClass