'use strict';
const url = 'http://localhost:3000';

const postField = document.getElementById('mainPost');
const commentList = document.getElementById('commentList');

const comment = (i) => {
    return `<div class="commentCard" id="comment${i}">
        <a href="userpage.html" class="commentUsername"></a>
        <p class="commentText">comment ${i}</p>
        <p class="commentVotes">${i} likes</p>
        </div>`;
};

const mainPost1 = (id, title,  mainText, image, username, likes, dislikes) => {
    return `<div class="postCard" id=${id}>
            <img src="../uploads/${image}" alt="placeholder" class="postImg">
                <h2 class="postTitle">${title}</h2>
                <p class="mainText">${mainText}</p> 
                <p class="postVotes">${likes-dislikes}</p>
                 <a href="userpage.html" class="postUsername">${username}</a>
            </div>`;
};

const createElement=(id, title, desc, filename, username, likes, dislikes)=> {
    //let's keep this for commentCards
    return {
        'id': id,
        'title': title,
        'desc': desc,
        'filename': filename,
        'likes': likes,
        'dislikes': dislikes,
        'username': username,
    };
};

const makePostById = async (id) => {
    try {
        const response = await fetch(url + '/post/' + id);
        const postID = await response.json();

        console.log(postID);
        postField.innerHTML=(mainPost1(postID.post_id, postID.post_name, postID.post_description, postID.post_filename, postID.post_creator, postID.post_likes, postID.post_dislikes));


        }catch (e){
        console.log(e.message);
    }
    //return createElement(postID.post_id, postID.post_name, postID.post_description, postID.post_filename, postID.post_creator, postID.post_likes, postID.post_dislikes);
    //console.log(postList);
};

const createComments = (length)=> {
    for (let i = 0; i < length; i++) {
        //cardView.innerHTML += `<div class="postCard" id='post${i}'>These are some fine cards mmHmmHHmmm</div>`
        commentList.innerHTML += comment(i);
    }
};

/*
const createComments = (length) => {
for (let i = 0; i<length; i++){
    //commentList.innerHTML+=card(i)}
    commentList.innerHTML+=`<div class="commentCard" id="comment${i}">
                                 <a href="userpage.html" class="commentUsername">user ${i}</a>
                                 <p class="commentText">comment ${i}</p>
                                 <p class="commentVotes">${i} likes</p>
                             </div>`}
};*/

createComments(25);

makePostById(11);