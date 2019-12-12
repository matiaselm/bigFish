'use strict';



console.log('script loaded');

const searchButton = document.getElementById('searchButton');
const arrowButton = document.getElementById('searchFieldExpander');
const userButton = document.getElementById('userIcon');
const userMenu = document.getElementById('dropDownMenu');
const checkBox1 = document.getElementById('toggle-1');
const checkBox2 = document.getElementById('toggle-2');
const logo = document.getElementById('mainTitle');
const searchField = document.getElementById('searchField');
const headerLeft = document.getElementById('headerLeft');
const headerRight = document.getElementById('headerRight');

let bool = false;

const gohome = () => {
  window.location.href='../index.html';
};

/* Commented out these, as they were related to search-things

arrowButton.onclick=()=>{
    console.log(checkIfTrue(checkBox1.checked));
    checkBox1.checked = !checkBox1.checked;

    if(checkBox1.checked){
        //logo.style.fontSize=('0');

        searchField.style.visibility=('initial');
        searchField.style.righ=('15ch');
        searchField.style.width=('35ch');

        //headerLeft.style.width=('10ch');
        headerRight.style.width=('48ch');

        arrowButton.style.left=('0');
        arrowButton.style.transform='rotate(180deg)';
    }else{
        logo.style.fontSize=('var(--text-title1-size)');
        searchField.style.width=('0');

        //headerLeft.style.width=('25ch');
        headerRight.style.width=('20ch');

        arrowButton.style.right=('18ch');
        arrowButton.style.transform=('');
    }
};
*/

/*
searchButton.onclick=()=>{
    const searchParams = searchField.value;
    console.log(searchParams);
    searchField.value=('');
};
*/

userButton.onclick=()=>{
    if (bool) {
        userMenu.style.width =('0');
        setTimeout(()=> {userMenu.style.visibility = ('hidden')}, 200);
        bool = false;
    } else {
        userMenu.style.width = ('25ch');
        userMenu.style.visibility = ('visible');

        bool = true;
    }
};

headerLeft.onclick=()=>{
    gohome();
};

//.addClass