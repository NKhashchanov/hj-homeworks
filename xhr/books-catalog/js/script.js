const request = new XMLHttpRequest();
request.addEventListener('load', onLoad);
request.open('GET', 'https://neto-api.herokuapp.com/book/');
request.send();
const content = document.getElementById('content');
content.innerHTML ='';
function onLoad() {
    if (request.status !== 200) {
        console.log(`Ответ ${request.status}: ${request.statusText}`);
    } else {
        const catalog = JSON.parse(request.responseText);
        let book, i;
        for (const item of catalog) {
            content.appendChild(document.createElement('li'));
            book = content.getElementsByTagName('li');
            i = catalog.indexOf(item);
            book[i].innerHTML =`<img src="${item.cover.small}">`;
            book[i].dataset.title = item.title;
            book[i].dataset.author = item.author.name;
            book[i].dataset.info = item.info;
            book[i].dataset.price = item.price;
        }
    }
}
