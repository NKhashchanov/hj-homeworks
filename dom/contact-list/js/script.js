let contact = document.getElementsByClassName('contacts-list')[0];
let arr = JSON.parse(loadContacts());
let newLi = '';
for (let i = 0; i < arr.length; i++) {
    newLi += '<li data-email="'+arr[i].email+'" data-phone="'+arr[i].phone+'"><strong>'+arr[i].name+'</strong></li>'
}
contact.innerHTML = newLi;