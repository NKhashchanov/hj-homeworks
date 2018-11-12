'use strict';
longRequest();

function longRequest() {
    fetch('https://neto-api.herokuapp.com/comet/long-pooling')
        .then(res => res.json())
        .then(number => {
            number('long-pooling', number);
            longRequest();
        })
        .catch(err => console.log(err));
}

function number(linkType, num) {
    const numberTreated = Math.round(+num) % 11;
    Array.from(document.getElementsByClassName(linkType)[0].children)
        .forEach(elem => elem.classList.remove('flip-it'));
    document.getElementsByClassName(linkType)[0].children[numberTreated].classList.add('flip-it');
}