'use strict';

console.log('script loaded');

const menuButton = document.getElementById('menuButton');
const checkBox1 = document.getElementById('toggle-1');
const logo = document.getElementById('mainTitle');
const searchField = document.getElementById('searchField');
const headerLeft = document.getElementById('headerLeft');
const headerRight = document.getElementById('headerRight');

const checkIfTrue = (checkBox) => {
    if(checkBox){
        return true
    }else{
        return false
    }
};

menuButton.onclick=()=>{
    console.log(checkIfTrue(checkBox1.checked));
    checkBox1.checked = !checkBox1.checked;

    if(checkBox1.checked){
        logo.style.fontSize=('0');
        searchField.style.visibility=('initial');
        searchField.style.width=('90%');
        headerLeft.style.width=('30%');
        headerRight.style.width=('70%');
    }else{
        logo.style.fontSize=('var(--text-title-size)');
        searchField.style.visibility=('hidden');
        headerLeft.style.width=('50%');
        headerRight.style.width=('50%');
    }
};

//.addClass