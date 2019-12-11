'use strict';
const url = 'http://localhost:3000';

const postView = document.getElementById('mainPost');
const commentView = document.getElementById('commentList');

const comment_creator = document.getElementById('comment_creator');
const comment_post_id = document.getElementById('comment_post');

comment_creator.innerText=localStorage.getItem('bigfish_userid');
comment_post_id.innerText= localStorage.getItem('bigfish_post_id');

let id = localStorage.getItem('bigfish_post_id');
console.log('localstorage: ',id);
console.log('localstorage: ',localStorage.getItem('meme'));
id = parseInt(id);

let commentList = [];

const comment = (i) => {
    return `<div class="commentCard" id="${commentList[i].id}">
                <a href="userpage.html" class="commentUsername">${commentList[i].username}</a>
                <p class="commentText">${commentList[i].desc}</p>
                <p class="commentVotes">${commentList[i].likes-commentList[i].dislikes}</p>
            </div>`;
};

const createPost = (id, title, mainText, image, username, likes, dislikes) => {
    return `<div class="postCard" id=${id}>
            <img src="../uploads/${image}" alt="placeholder" class="postImg">
                <h2 class="postTitle">${title}</h2>
                <p class="mainText">${mainText}</p> 
                <p class="postVotes">${likes-dislikes}</p>
                 <a href="userpage.html" class="postUsername">${username}</a>
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

        console.log(postID);
        postView.innerHTML=(createPost(postID.post_id, postID.post_name, postID.post_description, postID.post_filename, postID.post_creator, postID.post_likes, postID.post_dislikes));

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
            const comment = await createComment(i.comment_id, i.comment_text, i.comment_creator, i.comment_likes, i.comment_dislikes);

            commentList.push(comment);
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
try {
    getPostById(id);
    getComments(id);
}catch (e) {
    console.log('site not loaded', e);
}