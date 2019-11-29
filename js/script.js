'use strict';

const searchBar = document.getElementById('menuButton');
const checkBox1 = document.getElementById('toggle-1');

searchBar.onClick=()=>{
    checkBox1.checked = !checkBox1.checked;
};

//.addClass