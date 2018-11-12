'use strict';
const ws = new WebSocket('wss://neto-api.herokuapp.com/comet/websocket');
ws.addEventListener('message', event => {
    number('websocket', event.data);
});