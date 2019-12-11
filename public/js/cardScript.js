'use strict';
const url = 'http://localhost:3000';
console.log('cardScript loaded');

//Getting references to all elements inside posts

const postImg = document.getElementsByClassName('postImg');
const postTitle = document.getElementsByClassName('postTitle');

const userName = document.getElementsByClassName('username');
const comment = document.querySelectorAll('.postComments');

const postCard = document.getElementsByClassName('postCard');
const cardView = document.getElementById('postCards');
const cardOpener = document.getElementsByClassName('cardArrow');

const upvoteButton = document.querySelector(".upvoteButton");
const downvoteButton = document.querySelector(".downvoteButton");

const user_id = document.getElementById('user_id');

//localStorage.setItem('meme', ':DD');

console.log('localstorage',localStorage.getItem('bigfish_username'));

/*
const getComments = () => {
    const fetchOptions = {
      method: 'GET',
      headers: {
          'Authorization': 'Bearer' + sessionStorage.getItem('token'),
      },
    };
    try{
        //const response = await fetch(url + '/user/' + )
    }
};*/

/*const delButton = document.createElement('button');
delButton.innerHTML = 'Delete';
delButton.addEventListener('click', async () => {
    const fetchOptions = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        },
    };
    try {
        const response = await fetch(url + '/cat/' + cat.cat_id, fetchOptions);
        const json = await response.json();
        console.log('delete response', json);
        getCat();
    }
    catch (e) {
        console.log(e.message());
    }
});*/

const username = localStorage.getItem('bigfish_username');

const getUser = async (userName) => {
    const response = await fetch(`${url}/user/current/${userName}`, {method: 'GET'});
    const user = await response.json();

    await console.log('Got user: ', user.user_id);
    const userid = user.user_id;

    user_id.innerText=userid;
    localStorage.setItem('bigfish_userid', userid);

    //user_id.value=userid;
    //console.log('user_id: ', user_id.value);

    //user_id.value=11;

    //console.log(postList);
};

getUser(username);
//user_id.value = getUser(localStorage.getItem('bigfish_username'));

const card = (i) => {
    //console.log(postList[i].user_id);
    //console.log('filename: ' + postList[i].filename);
    //console.log('imgFilename',postList[i].filename);

    return `<div class="postCard" id=${postList[i].id}>
                <img src="uploads/${postList[i].filename}" alt="" class="postImg">
                <p class="postTitle">${postList[i].name}</p>
                <a href="/post/u/${postList[i].user_id}" class="postUsername">${postList[i].creator}</a>
                <p class="mainText">${postList[i].desc}</p>
                <br>
                
                <div class="postVoteBlock">
                    <input type="button" class="upvoteButton" id="upBtn${postList[i].id}">
                    <p class="postVotes">${postList[i].likes-postList[i].dislikes}</p>
                    <input type="button" class="downvoteButton" id="downBtn${postList[i].id}">
                </div>
                
                <a onclick="localStorage.setItem('bigfish_post_id',${postList[i].id})" href="html/comments.html" class="postComments" name="postComments">comments</a>
                <input type="button" class="cardArrow" id="btn${postList[i].id}">
            </div>`;
};

let cardsOpen = false;
let cardId;
let btnId;
let postList= [];


const createElement=(id, name, desc, filename, creator, likes, dislikes,user_id)=> {
    const imagePost = {
        'id': id,
        'name': name,
        'desc': desc,
        'filename': filename,
        'likes': likes,
        'dislikes': dislikes,
        'creator': creator,
        'user_id': user_id
    };
    return imagePost;
};

const getPost = async () => {
    const response = await fetch(url + '/post');
    const posts = await response.json();

    for (let i of posts) {
        const post = createElement(i.post_id, i.post_name, i.post_description, i.post_filename, i.user_name, i.post_likes, i.post_dislikes,i.user_id);
        postList.push(post);
        postList.reverse();
    }
    createCards(postList.length);
    //console.log(postList);
};

const upvote = async (e) => {
    console.log('upvote',e);
    await fetch(url + `/post/${e}/like`, {method:'PUT'});
};

const downvote = async (e) => {
    console.log(e);
    await fetch(url + `/post/${e}/dislike`,  {method:'PUT'});
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
// whose id we get for clickedParent and give that to bigCard()
const openFunction = (e) => {
    const clickedId = e.target.id;
    const clickedParentId = e.target.parentNode.id;
    const clickedParent = e.target.parentNode;
    const voteButtonCardParent = clickedParent.parentNode;
    const clickedClass = e.target.className;

    console.log('clicked class', clickedClass);
    console.log('clicked parent parent', voteButtonCardParent.id);
    console.log('parentnode.id: ', e.target.parentNode.id);

    if(clickedClass==='upvoteButton') {
        upvote(voteButtonCardParent.id);
    }

    if(clickedClass==='downvoteButton') {
        downvote(voteButtonCardParent.id)
    }

    console.log('clickedCardId: ',clickedParentId);

    console.log('cardPost', e.target.parentNode);

    // If areCardsOpen === false, open card
    //   - mark in areCardsOpen, that card has been opened
    //   - areCardsOpen = true
    //   - areCardsOpen can only be made false again by closing the opened card

    if(!cardsOpen && clickedClass === 'cardArrow'){
        cardId = clickedParentId;
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

upvote.onClick = (e) =>{
  const clickedID = e.target.id;
  const clickedParent = e.target.parentNode.id;

  console.log('upvoted: ', clickedParent);
};

console.log(postList);

//console.log('findpost: '+ findPost(9, testlist));
//.addClass