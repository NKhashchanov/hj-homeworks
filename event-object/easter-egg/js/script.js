const nav = document.getElementsByTagName('nav')[0];

function open(event) {
    if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
        nav.classList.toggle('visible');
    }
}

document.addEventListener('keydown', open);

let input = [],
code = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
const secret = document.getElementsByClassName('secret')[0];
function show(event) {
    input.push(event.code);
    if (input.length > 9) {
        input.shift();
    }
    if (input.length === 9 && input.join() === code.join()) {
        secret.classList.add('visible');
    }
    console.log(input);
}

document.addEventListener('keydown', show);