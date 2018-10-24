'use strict';
const socket = new WebSocket('wss://neto-api.herokuapp.com/mouse');
showBubbles(socket);

document.querySelector('body').addEventListener('click', event => {
    const coords = {
        x: event.clientX,
        y: event.clientY
    };
    socket.send(JSON.stringify(coords));
    showBubbles(socket);
})