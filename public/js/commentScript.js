'use strict';
const url = '/app/';

const postView = document.getElementById('mainPost');
const commentView = document.getElementById('commentList');

const comment_creator = document.getElementById('comment_creator');
const comment_post_id = document.getElementById('comment_post');

const userNameField = document.getElementById('userNameField');

comment_creator.innerText=localStorage.getItem('bigfish_userid');
comment_post_id.innerText= localStorage.getItem('bigfish_post_id');

let id = localStorage.getItem('bigfish_post_id');
console.log('localstorage: ',id);
console.log('localstorage: ',localStorage.getItem('meme'));
id = parseInt(id);

userNameField.innerText=localStorage.getItem('bigfish_username');

let commentList = [];

const comment = (i) => {
    console.log(commentList[i]);

    return `<div class="commentCard" id="${commentList[i].username}">
                <p class="commentUsername">${commentList[i].username}</p>
                <p class="commentText">${commentList[i].desc}</p>
                <p class="commentVotes" style="visibility: hidden">${commentList[i].likes-commentList[i].dislikes}</p>
            </div>`;
};

const createPost = (id, title, mainText, image, username, likes, dislikes) => {
    return `<div class="postCard" id=${id}>
            <img src="../uploads/${image}" alt="placeholder" class="postImg">
                <h2 class="postTitle">${title}</h2>
                <p class="mainText">${mainText}</p> 
                <div class="postVoteBlock">
                    <input type="button" class="upvoteButton" id="upBtn" onclick="upvote(${id})">
                    <p class="postVotes">${likes-dislikes}</p>
                    <input type="button" class="downvoteButton" id="downBtn" onclick="downvote(${id})">
                </div>
                <p class="postUsername">${username}</p>
            </div>`;
};

const createComment=(id, desc, username, likes, dislikes)=> {
    //let's keep this for commentCards
    return {
        'id': id,
        'username': username,
        'desc': desc,
        'likes': likes,
        'dislikes': dislikes,
    };
};

const getPostById = async (id) => {
    try {
        const response = await fetch(url + '/post/' + id);
        const postID = await response.json();

        console.log('postID',postID);
        postView.innerHTML=(createPost(postID.post_id, postID.post_name, postID.post_description, postID.post_filename, postID.user_name, postID.post_likes, postID.post_dislikes));

        }catch (e){
        console.log(e.message);
    }
};

const getComments = async (id)=> {
    try{
        const response = await fetch(url + '/post/' + id + '/comments');
        const comment = await response.json();
        await console.log('comments: ', comment);
        for (let i of comment) {
            const comment = await createComment(i.comment_id, i.comment_text, i.user_name, i.comment_likes, i.comment_dislikes);

            commentList.push(comment);
            commentList.reverse();
            console.log(commentList);
        }
        createComments(commentList.length);
    }catch (e){
        console.log('error: ',e.message);
    }
};

const createComments = (length)=> {
    for (let i = 0; i < length; i++) {
        //cardView.innerHTML += `<div class="postCard" id='post${i}'>These are some fine cards mmHmmHHmmm</div>`
        commentView.innerHTML += comment(i);
    }
};

const upvote = async (e) => {
    console.log('upvote',e);
    await fetch(url + `/post/${e}/like`, {method:'PUT'});
};

const downvote = async (e) => {
    console.log('downvote',e);
    await fetch(url + `/post/${e}/dislike`,  {method:'PUT'});
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
};
*/

try {
    getPostById(id);
    getComments(id);
}catch (e) {
    console.log('site not loaded', e);
}