'use strict';

const pupil = document.querySelector('.big-book__pupil'),
    eye = document.querySelector('.big-book__eye'),
    eyeX = (eye.getBoundingClientRect().left + eye.getBoundingClientRect().right) / 2 + pageXOffset,
    eyeY = (eye.getBoundingClientRect().top + eye.getBoundingClientRect().bottom) / 2 + pageYOffset,
    leftFromEye = eyeX,
    upFromEye = eyeY,
    rightFromEye = document.body.scrollWidth - eyeX,
    downFromEye = document.body.scrollHeight - eyeY;
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', event => {
    mouseX = event.pageX;
    mouseY = event.pageY;
});

function tick() {
    const pupilX = mouseX < eyeX ? 30 * (mouseX - eyeX) / leftFromEye : 30 * (mouseX - eyeX) / rightFromEye,
        pupilY = mouseY < eyeY ? 30 * (mouseY - eyeY) / upFromEye : 30 * (mouseY - eyeY) / downFromEye,
        maxDelta = Math.max(Math.abs(pupilX), Math.abs(pupilY)),
        pupilSize = 3 - (maxDelta / 15);
    pupil.style.setProperty('--pupil-x', `${pupilX}px`);
    pupil.style.setProperty('--pupil-y', `${pupilY}px`);
    pupil.style.setProperty('--pupil-size', pupilSize);
    window.requestAnimationFrame(tick);
}

tick();