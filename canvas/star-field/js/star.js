'use strict';

const canvas = document.querySelector('canvas');
canvas.addEventListener('click', starField);
const ctx = canvas.getContext('2d');

function starField() {
    const width = canvas.width,
    height = canvas.height,
    starAmount = Math.round(randNumber(200, 400));

    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, width, height);

    for (let i = 1; i <= starAmount; i++) {
        ctx.beginPath();
        ctx.fillStyle = randColor();
        ctx.globalAlpha = randNumber(0.8, 1);
        const starRadius = randNumber(0, 1.1 / 2),
        starX = randNumber(0, width),
        starY = randNumber(0, height);
        ctx.arc(starX, starY, starRadius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function randNumber(from, to) {
    return from + ( (to - from) * Math.random() );
}

function randColor() {
    const rand = randNumber(0, 3);
    if (rand < 1) {
        return '#ffffff';
    } else if (rand < 2) {
        return '#ffe9c4';
    } else {
        return '#d4fbff';
    }
}