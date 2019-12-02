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

const smallCard = (i) => {
    return `<div class="postCard" id='post${i}'>
                <p class="littleTitle">These are some fine cards mmHmmHHmmm</p>
                <a href="html/userpage.html" class="littleUsername">username</a>
                <a href="html/comments.html" class="littleComments">comments</a>
                <p class="littleVotes">1248 likes</p>
            </div>`;
};

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

// In bigPost() replace 0 with e when cardList is ready

const bigPost = (e) => {

    //if-else statement meant to check what kind of content is there on cardList and load specific type of HTML depending on that

    if(true){
    return`<div class="bigCard" id=${e.target.id}>
        <div class="pictureContainer" style='background-image: url("img/placeholder.png")'>
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
    }else{
        return`<div class="bigCard" id=${e.target.id}> 
                            <div id="postMeat">
                                <p class="postTitle">${cardList[0].title}</p>
                                <img class="postImageThumb" src=${cardList[0].picture}>
                                <p class="mainText">${cardList[0].maintext}</p>
                            </div>
                            <p class="username">${cardList[0].username}</p>
                            <div class="votes">${cardList[0].likes}</div>
                            <a class="commentsLink" href=${cardList[0].comment_link}>comments</a>
                            </div>`;
    }
};

//smallPost is what's created when a bigCard is clicked into a small one again. e.target.id is the same as when they're made in the for loop below
//don't touch pls
const smallPost = (e) => {
    return `<div class="postCard" id=${e.target.id}>
                <p class="littleTitle">These are some fine cards mmHmmHHmmm</p>
                <a href="../html/userpage.html" class="littleUsername">username</a>
                <a href="../html/comments.html" class="littleComments">comments</a>
                <p class="littleVotes">1248 likes</p>
            </div>`;
};

for(let i = 0; i<25; i++) {
    //cardView.innerHTML += `<div class="postCard" id='post${i}'>These are some fine cards mmHmmHHmmm</div>`
    cardView.innerHTML += smallCard(i);
}

console.log(cardView);
console.log(card);

cardView.onclick = (e) => {
    openFunction(e)
};

//.addClass