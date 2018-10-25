'use strict';
const socket = new WebSocket('wss://neto-api.herokuapp.com/counter');
socket.addEventListener('message', event => {
    try {
        const msg = JSON.parse(event.data);
        document.querySelector('.counter').textContent = msg.connections;
        document.querySelector('.errors').value = msg.errors;
    } catch (err) {
        console.log(err);
    }
    if (socket.bufferedAmount === 0) {
        console.log(`socket.bufferedAmount = 0`);
        socket.close(1000, 'just because');
    }
});
