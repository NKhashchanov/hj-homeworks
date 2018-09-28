const sounds = {
    higher: ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'],
    lower: ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3'],
    middle: ['first.mp3', 'second.mp3', 'third.mp3', 'fourth.mp3', 'fifth.mp3']
};

const piano = document.getElementsByClassName('set'),
audio = document.getElementsByTagName('audio'),
keys = document.getElementsByTagName('li');

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function () {
        audio[i].currentTime = 0;
        audio[i].play();
    });
}

function keydown(event) {
    if (event.repeat) {
        return;
    }
    if (event.shiftKey) {
        piano[0].classList.add('lower');
        piano[0].classList.remove('middle');
        for (let i = 0; i < audio.length; i++) {
            audio[i].src = './sounds/lower/' + sounds.lower[i];
        }
    }
    if (event.altKey) {
        piano[0].classList.add('higher');
        piano[0].classList.remove('middle');
        for (let j = 0; j < audio.length; j++) {
            audio[j].src = './sounds/higher/' + sounds.higher[j]
        }
    }
}

function keyup(event) {
    if (!event.shiftKey && !event.altKey) {
        piano[0].classList.remove('lower');
        piano[0].classList.remove('higher');
        piano[0].classList.add('middle');
        for (let u = 0; u < audio.length; u++) {
            audio[u].src = './sounds/middle/' + sounds.middle[u]
        }
    }
}

document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);


