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
});
