'use strict';

function time() {
    let time = (new Date()).toLocaleTimeString().slice(0, 5);
    if (time.charAt(1) === ':') {
        time = time.slice(0, -1);
        time = '0' + time;
    }
    return time;
}

const chat = document.querySelector('.chat');
const chatStatus = chat.querySelector('.chat-status');
const messageSubmit = chat.querySelector('.message-submit');
const messageStatus = chat.querySelector('.message-status');
const messagesContent = chat.querySelector('.messages-content');
const messageBox = chat.querySelector('.message-box');
const messageInput = chat.querySelector('.message-input');
const message = chat.querySelector('.messages-templates').querySelectorAll('.message')[1];
const messagePersonal = chat.querySelector('.message-personal');
const loading = chat.querySelector('.loading');
const socket = new WebSocket('wss://neto-api.herokuapp.com/chat');

socket.addEventListener('open', () => {
    chatStatus.textContent = chatStatus.dataset.online;
    messageSubmit.disabled = false;
    const msg = messageStatus.cloneNode(true);
    msg.querySelector('.message-text').textContent = 'Пользователь появился в сети';
    messagesContent.appendChild(msg);
});


socket.addEventListener('message', event => {
    const msgText = event.data;
    showMsg(msgText);
});

function showMsg(msgText) {
    if (messagesContent.lastElementChild.classList.contains('loading')) {
        messagesContent.removeChild(messagesContent.lastElementChild);
    }
    let msg;
    if (msgText === '...') {
        msg = loading.cloneNode(true);
    } else {
        msg = message.cloneNode(true);
        msg.querySelector('.message-text').textContent = msgText;
        msg.querySelector('.timestamp').textContent = time();
    }
    messagesContent.appendChild(msg);
}

messageBox.addEventListener('submit', event => {
    event.preventDefault();
    socket.send(messageInput.value);
    const msg = messagePersonal.cloneNode(true);
    msg.querySelector('.message-text').textContent = messageInput.value;
    msg.querySelector('.timestamp').textContent = time();
    messagesContent.appendChild(msg);
    messageInput.value = '';
});

socket.addEventListener('close', event => {
    chatStatus.textContent = chatStatus.dataset.offline;
    messageSubmit.disabled = true;
    const msg = messageStatus.cloneNode(true);
    msg.querySelector('.message-text').textContent = 'Пользователь не в сети';
    messagesContent.appendChild(msg);
});
