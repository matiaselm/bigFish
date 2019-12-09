'use strict';
const url = 'http://localhost:3000';

const postField = document.getElementById('mainPost');
const commentList = document.getElementById('commentList');

const card = (i) => {
    //console.log('filename: ' + postList[i].filename);
    return `<div class="cardComment" id="comment${i}">
                <a href="userpage.html" class="postUsername">user ${i}</a>
                <p class="mainText">comment ${i}</p>
                <p class="postVotes">${i} likes</p>
            </div>`;
};

const comment = (i) => {
    return `<div class="commentCard" id="comment${i}">
        <a href="userpage.html" class="commentUsername"></a>
        <p class="commentText">comment ${i}</p>
        <p class="commentVotes">${i} likes</p>
        </div>`;
};

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

const getPostById = async (id) => {
    const response = await fetch(url + '/post/' + id);
    const postID = await response.json();

    return createElement(postID.post_id, postID.post_name, postID.post_description, postID.post_filename, postID.post_creator, postID.post_likes, postID.post_dislikes);
    //console.log(postList);
};

const createComments = (length)=> {
    for (let i = 0; i < length; i++) {
        //cardView.innerHTML += `<div class="postCard" id='post${i}'>These are some fine cards mmHmmHHmmm</div>`
        commentList.innerHTML += comment(i);
    }
};

/*use this when db connection is ready
const mainPost = (i) => {
    //console.log('filename: ' + postList[i].filename);
    return `<div class="postCard" id=${postList[i].id}>
                <img src="uploads/${postList[i].filename}" alt="" class="postImg">
                <p class="postTitle">${postList[i].name}</p>
                <a href="html/userpage.html" class="postUsername">${postList[i].creator}</a>
                <p class="mainText">${postList[i].desc}</p>
                <p class="postVotes">${postList[i].id}</p>
            </div>`;
};*/

const mainPost = (i) => {
    //console.log('filename: ' + postList[i].filename);
    return `<div class="postCard" id=card>

            <img src="../img/placeholder.png" alt="placeholder" class="postImg">
            <!--<div class="imgContainer" style="background-image:url(../img/placeholder.png)"></div>-->
                <h2 class="postTitle">Title</h2>
                <p class="mainText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fringilla lacus ac arcu feugiat, fermentum maximus velit molestie. Proin iaculis eros in nulla tempor porta. Morbi varius, metus a fringilla porta, lectus tellus molestie est, in molestie libero libero id turpis. Donec rhoncus a eros id eleifend. Aenean non sapien ornare, convallis diam eu, convallis nibh. Etiam sapien nunc, aliquam ac urna sed, accumsan ultricies lacus. Phasellus in viverra nibh. Maecenas at velit urna. Nullam ut ultricies nisi.

                    Etiam tempus nisl velit, sagittis blandit sem condimentum finibus. Praesent vehicula orci lorem, quis ullamcorper ex varius ac. Suspendisse tortor diam, commodo id orci ac, egestas egestas diam. Ut eget est purus. Integer ac quam sodales, condimentum leo nec, posuere dolor. Mauris eget nisl lacus. Aliquam ut egestas est. Duis sit amet elit nunc. Duis sollicitudin leo et molestie molestie. Duis porttitor fermentum massa. Maecenas vitae odio sit amet eros malesuada volutpat. Praesent tincidunt efficitur quam, vel porttitor tortor auctor in. Vivamus pellentesque nec nisl eu lacinia. Cras dapibus et mauris eu laoreet. Cras dolor sapien, volutpat vitae eros quis, volutpat tincidunt nibh.

                    Duis tincidunt, eros ut pretium tempor, libero sapien ullamcorper felis, eget fringilla arcu metus ac ipsum. Vestibulum pretium nisi sapien. Duis at felis ut neque rutrum volutpat. Maecenas ac tempor ipsum. Vivamus neque urna, cursus nec luctus vel, blandit nec sem. Nullam lacinia ligula mollis, efficitur magna eget, scelerisque magna. Proin ac molestie ante, sit amet sagittis eros. Aliquam quis condimentum ligula, ac fermentum nulla. Suspendisse dictum sit amet libero vitae rhoncus. Vivamus pellentesque ligula lorem, et dignissim sapien bibendum eu. Nam sit amet semper massa, a dapibus ante. Pellentesque quis tellus diam. </p>
                <p class="postVotes">1248</p>
                 <a href="userpage.html" class="postUsername">username</a>
            </div>`;
};

const createComments = (length) => {
for (let i = 0; i<length; i++){
    //commentList.innerHTML+=card(i)}
    commentList.innerHTML+=`<div class="commentCard" id="comment${i}">
                                 <a href="userpage.html" class="commentUsername">user ${i}</a>
                                 <p class="commentText">comment ${i}</p>
                                 <p class="commentVotes">${i} likes</p>
                             </div>`}
};

createComments(25);
postField.innerHTML=(mainPost());