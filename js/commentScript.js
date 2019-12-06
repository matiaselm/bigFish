'use strict';

const postField = document.getElementById('mainPost');
const commentList = document.getElementById('commentList');

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
                <img src="../img/siika_xlarge.png" alt="placeholder" class="postImg">
                <h2 class="postTitle">Title</h2>
                <a href="userpage.html" class="postUsername">username</a>
                <p class="mainText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada elit eget eleifend tristique. Pellentesque eget mauris accumsan, condimentum purus ac, auctor sapien. Nunc nec placerat libero. Ut at elit augue. Mauris in neque sit amet libero ullamcorper vestibulum. Sed commodo orci sit amet urna rhoncus euismod. Sed quis magna nec lectus ultricies lobortis. Aenean in ligula quis leo hendrerit maximus ac a odio. Curabitur vitae gravida libero. </p>
                <p class="postVotes">1248</p>
            </div>`;
};

for (let i = 0; i<25; i++){
    commentList.innerHTML+=`<li id=${i} class="comment">Comment here lolol</li>`;
}

postField.innerHTML=(mainPost());