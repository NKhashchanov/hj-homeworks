'use strict';
const timer = setInterval(shortRequest, 5000);

function shortRequest() {
    fetch('https://neto-api.herokuapp.com/comet/pooling')
        .then(res => res.json())
        .then(number => {
            number('pooling', number);
        })
        .catch(err => console.log(err));
}