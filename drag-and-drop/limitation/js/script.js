'use strict'

const textarea = document.querySelector('.textarea');
const block = document.querySelector('.block');
const message = document.querySelector('.message');

function debounce(callback, delay) {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            callback();
        }, delay);
    };
}

textarea.addEventListener('focus',() => {
    block.classList.add('active');
});

textarea.addEventListener('click',() => {
    block.classList.add('active');
    message.classList.remove('view');
});

textarea.addEventListener('input',() => {
    block.classList.add('active');
    message.classList.remove('view');
});

textarea.addEventListener('keydown', debounce(() => {
    block.classList.remove('active');
    message.classList.add('view');
}, 2000));
