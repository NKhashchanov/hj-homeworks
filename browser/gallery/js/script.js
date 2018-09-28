const currentPhoto = document.getElementById('currentPhoto');
const imgs = ['i/breuer-building.jpg','i/guggenheim-museum.jpg','i/headquarters.jpg','i/IAC.jpg','i/new-museum.jpg'];
currentPhoto.src = imgs[0];
let i = 0;
function next() {
    i ++;
    currentPhoto.src = imgs[i];
    if (i == imgs.length - 1) {
        i = - 1;
    }
}

function prev() {
    i --;
    if (i < 0) {
        i = imgs.length - 1;
    }
    currentPhoto.src = imgs[i];
}

const prevPhoto = document.getElementById('prevPhoto');
prevPhoto.onclick = prev;

const nextPhoto = document.getElementById('nextPhoto');
nextPhoto.onclick = next;
