const buttons = document.querySelectorAll('input[type="checkbox"]');
const done = document.querySelector('.done');
const undone = document.querySelector('.undone');

function check () {
    if (event.currentTarget.checked) {
        done.appendChild(event.currentTarget.parentElement)
    } else {
        undone.appendChild(event.currentTarget.parentElement)
    }
}

for (let button of buttons) {
    button.addEventListener('click', check)
}
