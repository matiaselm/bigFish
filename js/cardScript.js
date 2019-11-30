'use strict';

console.log('cardScript loaded');

let cardsOpen = false;
let cardId;

const cardList = [
    {
        title: 'Title placeholder',
        picture: 'img/placeholder.png',
        maintext: 'Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit. Donec porttitor ut ipsum mollis pretium. ' +
            'Donec auctor mollis urna vitae facilisis. Sed at accumsan mauris. ' +
            'Proin molestie augue ac ipsum tempus, ac facilisis tellus sodales. ' +
            'Vivamus fermentum nulla ac scelerisque dapibus. Praesent sodales molestie nulla, ' +
            'vitae elementum diam interdum sed. Suspendisse ut magna turpis. ',
        likes: 'likes here',
        dislikes: 'dislikes here',
        post_id: 'post-id here',
        username: 'username here',
        comment_link: 'html/comments.html'
    }
];

console.log(cardList);

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

// In bigPost() replace 1 with e when cardList is ready

const bigPost = (e) => {
    return `<a class="bigCard" id=${e.target.id}> 
                            <div id="postMeat">
                                <p class="postTitle">${cardList[0].title}</p>
                                <img class="postImage" src=${cardList[0].picture}>
                                <p class="mainText">${cardList[0].maintext}</p>
                            </div>
                            <p class="username">${cardList[0].username}</p>
                            <div class="votes">${cardList[0].likes}</div>
                            <a class="commentsLink" href=${cardList[0].comment_link}>comments</a>
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