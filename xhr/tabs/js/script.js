const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open('GET', 'components/email-tab.html');
request.send();

const content = document.getElementById('content'),
nav = document.getElementsByTagName('nav')[0].getElementsByTagName('a'),
preloader = document.getElementById('preloader');

for (let a of nav) {
    a.addEventListener('click', event);
}

function onLoad() {
    content.innerHTML = request.responseText;
}

function onLoadStart() {
    preloader.classList.remove('hidden');
}

function onLoadEnd() {
    preloader.classList.add('hidden');
}

function event(event){
    for (let a of nav) {
        a.classList.remove('active');
    }
    this.classList.add('active');
    event.preventDefault();
    request.addEventListener('loadstart', onLoadStart);
    request.addEventListener('load', onLoad);
    request.addEventListener('loadend', onLoadEnd);
    request.open('GET', this.href);
    request.send();
}
