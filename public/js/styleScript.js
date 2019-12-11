'use strict';

const bigCard = (post) => {

    post.style.minHeight = ('var(--card-open-size)');
    console.log('post card: ', post);

    /*
        childNodes: NodeList(15)
        ​​
        0: #text ""​​
        1: <img class="postImg" src="uploads/85576b3fa9d9a2494688518ad1a92170" alt="">​​
        2: #text ""​​

        3: <p class="postTitle">​​
        4: #text ""​​

        5: <a class="postUsername" href="html/userpage.html">​​
        6: #text ""​​

        7: <p class="mainText">​​
        8: #text ""​​

        9: <input id="btn9" class="cardArrow" type="button">​​
        10: #text ""​​

        11: <a class="postComments" href="html/comments.html">​​
        12: #text ""​​

        13: <p class="postVotes">​​
        14: #text ""

    */

    const title = post.querySelector(".postTitle").style;
    const img = post.querySelector(".postImg").style;
    const user = post.querySelector(".postUsername").style;
    const desc = post.querySelector(".mainText").style;
    const button = post.querySelector(".cardArrow").style;
    const comment = post.querySelector(".postComments").style;
    const votes = post.querySelector(".postVotes").style;
    console.log(post.querySelector(".postTitle"));
    /*const img = post.firstElementChild.style;
    const title = post.childNodes[3].style;
    const user = post.childNodes[5].style;
    const desc = post.childNodes[7].style;
    const button = post.childNodes[9].style;
    const comment = post.childNodes[11].style;
    const votes = post.childNodes[13].style;*/

    const imgStyle = (el) => {
        el.position = ('relative');
        el.maxWidth = ('100%');
        el.minWidth = ('100%');
        el.minHeight = ('20ch');
        el.marginBottom = ('0');
    };

    const userStyle = (el) => {
        el.position = ('relative');
        el.display = ('block');
        el.left = ('0');
        el.top=('0');
        el.right = ('');
    };

    const titleStyle = (el) => {
        el.position = ('relative');
        el.display = ('block');
        el.left = ('0');
        el.top=('');
        el.right = ('');
        //el.backgroundColor=('white');
    };

    const descStyle = (el) => {
        el.position=('relative');
        el.visibility = ('visible');
    };

    const btnStyle = (el) => {
        el.transform = ('rotate(180deg)');
    };

    userStyle(user);
    descStyle(desc);
    imgStyle(img);
    titleStyle(title);
    btnStyle(button);

};

const smallCard = (post) => {
    post.style.minHeight = ('var(--card-main-size)');

    const title = post.querySelector(".postTitle").style;
    const img = post.querySelector(".postImg").style;
    const user = post.querySelector(".postUsername").style;
    const desc = post.querySelector(".mainText").style;
    const button = post.querySelector(".cardArrow").style;
    const comment = post.querySelector(".postComments").style;
    const votes = post.querySelector(".postVotes").style;

    const imgStyle = (el) => {
        el.maxWidth = ('20%');
        el.minWidth = ('');
        el.minHeight = ('100%');
        el.marginBottom = ('0');
    };

    const userStyle = (el) => {
        el.position = ('absolute');
        el.top=('4ch');
        el.right = ('10ch');
        el.left = ('');
    };

    const titleStyle = (el) => {
        el.position = ('absolute');
        el.left = ('20%');
    };

    const descStyle = (el) => {
        el.visibility = ('hidden');
    };

    const btnStyle = (el) => {
        el.transform = ('rotate(0deg)');
    };

    userStyle(user);
    descStyle(desc);
    titleStyle(title);
    imgStyle(img);
    btnStyle(button);

};

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