'use strict';

console.log('script loaded');

const searchButton = document.getElementById('searchButton');
const arrowButton = document.getElementById('searchFieldExpander');
const checkBox1 = document.getElementById('toggle-1');
const logo = document.getElementById('mainTitle');
const searchField = document.getElementById('searchField');
const headerLeft = document.getElementById('headerLeft');
const headerRight = document.getElementById('headerRight');

//only a debugging function
const checkIfTrue = (checkBox) => {
    if(checkBox){
        return true
    }else{
        return false
    }
};

arrowButton.onclick=()=>{
    console.log(checkIfTrue(checkBox1.checked));
    checkBox1.checked = !checkBox1.checked;

    if(checkBox1.checked){
        logo.style.fontSize=('0');
        searchField.style.visibility=('initial');
        searchField.style.righ=('15ch');
        searchField.style.width=('35ch');
        headerLeft.style.width=('30%');
        headerRight.style.width=('70%');
        arrowButton.style.left=('0');
        arrowButton.style.transform='rotate(180deg)';
    }else{
        logo.style.fontSize=('var(--text-title1-size)');
        searchField.style.width=('0');
        headerLeft.style.width=('50%');
        headerRight.style.width=('50%');
        arrowButton.style.right=('18ch');
        arrowButton.style.left=('');
        arrowButton.style.transform='';
    }
};

searchButton.onclick=()=>{
    const searchParams = searchField.value;
    console.log(searchParams);
    searchField.value=('');
};

//.addClass