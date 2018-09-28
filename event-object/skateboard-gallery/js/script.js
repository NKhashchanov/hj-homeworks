const a = document.getElementsByTagName('a');
const view = document.getElementById('view');

function select(event) {
    event.preventDefault();
    document.getElementsByClassName('gallery-current')[0].classList.remove('gallery-current');
    this.classList.add('gallery-current');
    view.src = this.href;
}

for (const el of a) {
    el.addEventListener('click', select);
}
