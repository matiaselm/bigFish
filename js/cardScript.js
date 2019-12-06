'use strict';
const url = 'http://localhost:3000';
console.log('cardScript loaded');

//Getting references to all elements inside posts

const postImg = document.getElementsByClassName('postImg');
const postTitle = document.getElementsByClassName('postTitle');
const userName = document.getElementsByClassName('username');

let cardsOpen = false;
let cardId;
let testlist= [];

<<<<<<< HEAD
const createElement=(id, name, desc, filename, creator, likes, dislikes)=>{
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
=======
const createElement=(id, name, desc, filename, creator)=>{
    let post = {
        'id': id,
        'name': name,
        'desc': desc,
        'filename': filename,
        // 'likes': likes,
        // 'dislikes': dislikes,
        'creator': creator
    };
    return post;
>>>>>>> d8c6c086f87ce0970da99b6361e888fba30562a5
};

const findPost = (id, list) => {
    for (let i=0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i];
        }
    }
};

const getPost = async () => {
    const response = await fetch(url + '/post');
    const posts = await response.json();
    for (let i of posts) {
<<<<<<< HEAD
        const post = createElement(i.post_id, i.post_name, i.post_description, i.post_filename, i.post_creator, i.post_likes, i.post_dislikes);
=======
        const post = createElement(i.post_id, i.post_name, i.post_description, i.post_filename, i.post_creator, i.post);
>>>>>>> d8c6c086f87ce0970da99b6361e888fba30562a5

        testlist.push(post);
    }
    createCards(testlist.length);
    console.log(testlist);
};

console.log(testlist.length);


/*const cardList = [
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
]; */

const smallCard = (i) => {
    console.log('filename: ' + testlist[i].filename);
    return `<div class="postCard" id=${testlist[i].id}>
                <img src="uploads/${testlist[i].filename}" alt="" class="postImg">
                <p class="postTitle">${testlist[i].name}</p>
                <a href="html/userpage.html" class="postUsername">${testlist[i].creator}</a>
                <p class="mainText">${testlist[i].desc}</p>
                <a href="html/comments.html" class="postComments">comments</a>
                <p class="postVotes">${testlist[i].id}</p>
            </div>`;
};

//console.log(cardList);

const card = document.getElementsByClassName('postCard');
const cardView = document.getElementById('postCards');

const enhanceStyle = (post) => {

    post.style.height=('var(--card-open-size)');
    console.log('post card: ', post);

    /*
    childNodes: NodeList(11)
​​
    0: #text "
                    "​​
    1: <img class="postImg" src="uploads/f9c1e3c798fa37ce56869f230a230187" alt="" style="width: 100%; max-width: 100%;">​​
    2: #text "
                    "​​
    3: <p class="postTitle" style="background-color: white;">​​
    4: #text "
                    "​​
    5: <a class="postUsername" href="html/userpage.html">​​
    6: #text "
                    "​​
    7: <a class="postComments" href="html/comments.html">​​
    8: #text "
                    "​​
    9: <p class="postVotes">​​
    10: #text

    */

    const imgChild = post.firstElementChild.style;
    const titleChild = post.childNodes[3].style;
    const userChild = post.childNodes[5].style;
    const descChild = post.childNodes[7].style;
    const commentChild = post.childNodes[9].style;
    const votesChild = post.childNodes[12].style;

    //console.log('titleChild: ', titleChild);

    imgChild.width=('100%');
    imgChild.top=('0');
    imgChild.height=('20%');
    imgChild.overflow=('hidden');
    imgChild.display=('block');
    imgChild.left=('0');
    imgChild.maxWidth=('100%');

    titleChild.backgroundColor=('white');
};

// openFuntion is called when a card is pressed, it makes it bigger and calls loadPost(), showing the whole post
const openFunction = (e) => {
    const clickedId = e.target.id;

    // If areCardsOpen === false, open card
    //   - mark in areCardsOpen, that card has been opened
    //   - areCardsOpen = true
    //   - areCardsOpen can only be made false again by closing the opened card

    if(!cardsOpen && clickedId!=='postCards'){
        cardId = e.target.id;
        //const post = document.getElementById(`${findPost(cardId, testlist).id}`);
        const post = document.getElementById(cardId);
        console.log(`card ${e.target.id} clicked`);

        enhanceStyle(post);
        cardsOpen = true;

    }else if(cardsOpen && clickedId===cardId){
        //const post = document.getElementById(`${findPost(cardId, testlist).id}`);
        const post = document.getElementById(`${cardId}`);
        console.log(`card ${e.target.id} clicked`);
        document.getElementById(`${e.target.id}`).style.height=('var(--card-main-size)');
        post.style.height=('var(--card-main-size)');
        cardsOpen=false;
    }
};

const createCards= (length)=> {
    for (let i = 0; i < length; i++) {
        //cardView.innerHTML += `<div class="postCard" id='post${i}'>These are some fine cards mmHmmHHmmm</div>`
        cardView.innerHTML += smallCard(i);
    }
};

// In bigPost() replace 0 with e when cardList is ready
//bigPost is supposed to make a new HTML element inside opened card, disabled at least for now
/*const bigPost = (e) => {

    //if-else statement meant to check what kind of content is there on cardList and load specific type of HTML depending on that
        console.log(e.target.id);
        const targetId = e.target.id;
        return `<div class="bigCard" id=${targetId}>
        <div class="pictureContainer" style='background-image: url("img/placeholder.png")>
            <!--<img class="postImageThumb" src="../img/placeholder.png"> -->
        </div>
        <div id="postMeat">
            <a class="username" href="html/userpage.html">"username"</a>
            <p class="postTitle">Title placeholder</p>
            <p class="mainText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vivamus ultrices enim ut velit congue, ut tristique nisl fermentum.
                Vestibulum luctus auctor nisl, non aliquam tortor.
                Praesent luctus varius libero, ac pharetra massa feugiat consequat.
                Nullam malesuada fermentum quam sollicitudin rhoncus. Donec quam metus,
                mollis id sapien vel, fermentum imperdiet dolor. Etiam cursus sed augue non pharetra.
                Nulla eget laoreet justo. Donec quis massa in mauris finibus ornare ut venenatis lorem.
                Sed suscipit sodales ante quis dignissim.
                Vestibulum ligula mauris, fringilla quis risus in, interdum ullamcorper sem. Donec sed posuere mi. <br><br>

                Pellentesque vulputate faucibus mi in maximus.
                Etiam scelerisque fringilla urna, sit amet sagittis urna fringilla nec.
                Aliquam volutpat neque leo, vel sollicitudin lectus suscipit nec.
                Aenean volutpat posuere eros sed rutrum. Sed euismod justo vestibulum,
                euismod arcu eu, fringilla odio. Aliquam et sem leo. Integer ut enim non dolor
                varius bibendum et sed dolor. Pellentesque a justo ornare quam euismod molestie.
                Mauris eget neque augue. Cras faucibus sagittis vestibulum. Integer a nibh dolor.
                Nullam varius dolor eget condimentum mattis. Aenean mauris massa, varius at pretium
                nec, laoreet ac magna. Donec id aliquet nibh, eu congue massa. Morbi faucibus quam
                orci, id facilisis nibh maximus non. Vestibulum hendrerit ultrices dignissim. <br><br>

                Vestibulum a justo laoreet nunc consectetur rutrum at ut risus.
                Vestibulum mattis risus libero, eu elementum leo elementum eget.
                Maecenas hendrerit nec ante eget dictum. Mauris vel tortor blandit,
                ullamcorper ligula non, lacinia quam. In et cursus dui. Nulla facilisi.
                Maecenas facilisis iaculis accumsan. Aenean quis maximus magna, sed commodo risus. <br><br>

                Proin bibendum ornare ex sed gravida. Vivamus metus dui, pharetra tincidunt tempor ac,
                scelerisque vitae lorem. In blandit, nunc quis feugiat tempus, orci turpis porta arcu,
                vitae tempus libero felis quis eros. Duis bibendum nisl id dui finibus, dapibus lobortis
                felis rutrum. Maecenas pharetra sapien felis, vel ultrices ligula egestas sit amet.
                Suspendisse laoreet sed lectus sit amet cursus. Nam in diam consequat, gravida mauris quis,
                varius tortor. Nunc ut dui dolor. Etiam pellentesque erat arcu, nec semper tellus pretium non.
                Nam molestie volutpat risus, vel elementum nisl pretium et. Maecenas vestibulum,
                metus a mattis faucibus, elit tortor aliquam tortor, vitae vestibulum lectus metus et risus.
                In sed suscipit tellus.
            </p>
        </div>
        <div class="votes">1248 likes</div>
        <a class="commentsLink" href="html/comments.html">comments</a>
    </div>`;
};*/

/*
//smallPost is what's created when a bigCard is clicked into a small one again. e.target.id is the same as when they're made in the for loop below
//don't touch pls
const smallPost = (e) => {
    const targetId = e.target.id;
    return `<div id=${targetId}>
                <p class="littleTitle">${findPost(targetId, testlist).title}</p>
                <a href="html/userpage.html" class="littleUsername">${findPost(targetId, testlist).creator}</a>
                <a href="html/comments.html" class="littleComments">comments</a>
                <p class="littleVotes">${findPost(targetId, testlist).id}</p>
            </div>`;
};

*/



console.log(cardView);
console.log(card);

cardView.onclick = (e) => {
    openFunction(e)
};

getPost();

console.log(testlist);

console.log('findpost: '+ findPost(9, testlist));
//.addClass