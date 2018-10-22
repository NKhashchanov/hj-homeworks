'use strict';
const counter = document.getElementById('counter');
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');

function updateCounter() {
    if (!localStorage.counter) {
        localStorage.counter = 0;
    }
    counter.textContent = localStorage.counter;
}

increment.addEventListener('click', () => {
++localStorage.counter;
updateCounter();
});

decrement.addEventListener('click', () => {
--localStorage.counter;
updateCounter();
});

reset.addEventListener('click', () => {
    localStorage.counter = 0;
updateCounter();
})

document.addEventListener('DOMContentLoaded', updateCounter);
