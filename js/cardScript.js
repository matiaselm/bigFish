'use strict';
const url = 'http://localhost:3000';
console.log('cardScript loaded');

//Getting references to all elements inside posts

const postImg = document.getElementsByClassName('postImg');
const postTitle = document.getElementsByClassName('postTitle');
const userName = document.getElementsByClassName('username');

const postCard = document.getElementsByClassName('postCard');
const cardView = document.getElementById('postCards');
const cardOpener = document.getElementsByClassName('cardArrow');

const card = (i) => {
    //console.log('filename: ' + postList[i].filename);
    return `<div class="postCard" id=${postList[i].id}>
                <img src="uploads/${postList[i].filename}" alt="" class="postImg">
                <p class="postTitle">${postList[i].name}</p>
                <a href="html/userpage.html" class="postUsername">${postList[i].creator}</a>
                <p class="mainText">${postList[i].desc}</p>
                <input type="button" class="cardArrow" id="btn${postList[i].id}">
                <a href="html/comments.html" class="postComments">comments</a>
                <p class="postVotes">${postList[i].id}</p>
            </div>`;
};

let cardsOpen = false;
let cardId;
let btnId;
let postList= [];

const createElement=(id, name, desc, filename, creator, likes, dislikes)=> {
    const imagePost = {
        'id': id,
        'name': name,
        'desc': desc,
        'filename': filename,
        'likes': likes,
        'dislikes': dislikes,
        'creator': creator,
    };
    return imagePost;
};

const getPost = async () => {
    const response = await fetch(url + '/post');
    const posts = await response.json();
    for (let i of posts) {
        const post = createElement(i.post_id, i.post_name, i.post_description, i.post_filename, i.post_creator, i.post_likes, i.post_dislikes);

        postList.push(post);
    }
    createCards(postList.length);
    //console.log(postList);
};

const createCards = (length)=> {
    for (let i = 0; i < length; i++) {
        //cardView.innerHTML += `<div class="postCard" id='post${i}'>These are some fine cards mmHmmHHmmm</div>`
        cardView.innerHTML += card(i);
    }
};



// openFuntion is called when a card is pressed,
// it makes it bigger and calls loadPost(), showing the whole post

//e is only a child-element of the card,
// whose id we get for clickedParent and give that to bagCard()
const openFunction = (e) => {
    const clickedId = e.target.id;
    const clickedParent = e.target.parentNode.id;
    const clickedClass = e.target.className;
    console.log('clickedCardId: ',clickedParent);

    // If areCardsOpen === false, open card
    //   - mark in areCardsOpen, that card has been opened
    //   - areCardsOpen = true
    //   - areCardsOpen can only be made false again by closing the opened card

    if(!cardsOpen && clickedClass === 'cardArrow'){
        cardId = clickedParent;
        btnId = clickedId;
        //const post = document.getElementById(`${findPost(cardId, testlist).id}`);
        const post = document.getElementById(cardId);
        console.log(`card ${e.target.id} clicked`);

        //console.log(post);

        bigCard(post);
        cardsOpen = true;

    }else if(cardsOpen && clickedClass==='cardArrow'){
        //const post = document.getElementById(`${findPost(cardId, testlist).id}`);
        const post = document.getElementById(cardId);
        console.log(`card ${e.target.id} clicked`);
        cardsOpen=false;
        smallCard(post);
    }
};

cardView.onclick = (e) => {
    openFunction(e)
};

console.log('cardOpener', cardOpener);

cardOpener.onClick = (e) => {
    console.log('Button clicked: ', e.target.id);
    console.log('Button clicked');
};

getPost().then(r => {
    console.log('then: ',r);
});

console.log(postList);

//console.log('findpost: '+ findPost(9, testlist));
//.addClass