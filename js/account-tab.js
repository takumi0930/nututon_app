'use strict';

const account1_next_button = document.getElementById('account1-next');
const account2_next_button = document.getElementById('account2-next');
const account3_next_button = document.getElementById('account3-next');

const account2_before_button = document.getElementById('account2-before');
const account3_before_button = document.getElementById('account3-before');

const account1_content = document.getElementById('account1-content');
const account2_content = document.getElementById('account2-content');
const account3_content = document.getElementById('account3-content');
const account4_content = document.getElementById('account4-content');


const progress_bar1 = document.getElementById('progress-bar1');
const progress_bar2 = document.getElementById('progress-bar2');
const progress_bar3 = document.getElementById('progress-bar3');
const progress_bar4 = document.getElementById('progress-bar4');



const account1_next = () =>{
    account1_content.classList.remove("show");
    account2_content.classList.add("show");
    progress_bar2.classList.add("show");
    scrollTo(0, 0);
};

const account2_next = () =>{
    account2_content.classList.remove("show");
    account3_content.classList.add("show");
    progress_bar3.classList.add("show");
    scrollTo(0, 0);
};

const account3_next = () =>{
    account3_content.classList.remove("show");
    account4_content.classList.add("show");
    progress_bar4.classList.add("show");
    scrollTo(0, 0);
};

const account2_before = () =>{
    account2_content.classList.remove("show");
    account1_content.classList.add("show");
    progress_bar2.classList.remove("show");
    scrollTo(0, 0);
};

const account3_before = () =>{
    account3_content.classList.remove("show");
    account2_content.classList.add("show");
    progress_bar3.classList.remove("show");
    scrollTo(0, 0);
};


account1_next_button.addEventListener('click', account1_next);
account2_next_button.addEventListener('click', account2_next);
account3_next_button.addEventListener('click', account3_next);
account2_before_button.addEventListener('click', account2_before);
account3_before_button.addEventListener('click', account3_before);