document.querySelector('.contentform').querySelector('input[name="zip"]').addEventListener('keydown', zip);

function zip() {
    let key = window.event.keyCode;
    if (key == 13 || key == 46 || key == 8 || key == 37 || key == 38 || key == 39 || key == 40) {
        return;
    }
    if (event.key < '0' || event.key > '9') {
        event.preventDefault();
    }
}

const contentFormInput = document.querySelectorAll('.contentform input');
for (let i = 0; i < contentFormInput.length; i++) {
    contentFormInput[i].addEventListener('change',formIsFilled)
}
document.querySelector('.contentform textarea').addEventListener('change',formIsFilled);

function formIsFilled() {
    const contentArray = Array.from(contentFormInput)
    const foundElement = contentArray.find(function (el) { return el.value === ""; });
    if (foundElement === undefined && !document.querySelector('.contentform textarea').value === false){
        document.getElementsByClassName('button-contact')[0].disabled = false;
    }else {
        document.getElementsByClassName('button-contact')[0].disabled = true;
    }
}

function sendData(){
    event.preventDefault();
    document.getElementsByClassName('contentform')[0].classList.add('hidden');
    document.getElementById('output').classList.remove('hidden');
    for (let i = 0; i < contentFormInput.length; i++) {
        if (contentFormInput[i].name === 'email' || contentFormInput[i].name === 'phone') {
            continue;
        }
        document.getElementById(contentFormInput[i].name).value = contentFormInput[i].value ;
    }
    document.getElementById('message').value = document.querySelector('.contentform textarea').value;
}

function editData(){
    event.preventDefault();
    document.getElementsByClassName('contentform')[0].classList.remove('hidden');
    document.getElementById('output').classList.add('hidden');
}

document.getElementsByClassName('button-contact')[0].addEventListener('click', sendData);
document.getElementsByClassName('button-contact')[1].addEventListener('click', editData);