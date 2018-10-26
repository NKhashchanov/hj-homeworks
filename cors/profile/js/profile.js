'use strict';
function randomName() {
    return 'rn' + String( Math.random() ).slice(-6);
}

function showLoadUserData(data) {
    document.querySelector('[data-name]').textContent = data.name;
    document.querySelector('[data-pic]').src = data.pic;
    document.querySelector('[data-description]').textContent = data.description;
    document.querySelector('[data-position]').textContent = data.position;
    return data.id;
}

function showLoadUserTechData(data) {
    let dataHTML = '';
    data.forEach(tech => {
        dataHTML += `<span class="devicons devicons-${tech}"></span>`;
    });
    document.querySelector('[data-technologies]').innerHTML = dataHTML;
}

function loadData(url) {
    const callbackName = randomName();
    return new Promise((done, fail) => {
        window[callbackName] = done;
        const script = document.createElement('script');
        script.src = `${url}?callback=${callbackName}`;
        document.body.appendChild(script);
    });
}

loadData('https://neto-api.herokuapp.com/profile/me')
    .then(showLoadUserData)
    .then(id => loadData(`https://neto-api.herokuapp.com/profile/${id}/technologies`))
    .then(showLoadUserTechData)
    .then(document.querySelector('.content').style = 'display: initial; ')
    .catch(err => console.log(err));