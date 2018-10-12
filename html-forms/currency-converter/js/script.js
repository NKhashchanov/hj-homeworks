let xhr = new XMLHttpRequest();
let data =[];

xhr.addEventListener("load",onLoad);
xhr.addEventListener("error", onError);

xhr.open("GET", "https://neto-api.herokuapp.com/currency", true);
xhr.send();

function onLoad(){
    if (xhr.status !== 200) {
        console.log (`Ответ ${xhr.status}: ${xhr.statusText}`);
    } else {
        data = JSON.parse(xhr.responseText);
        data.forEach(function(item, i, data) {
            document.getElementById('from').innerHTML = document.getElementById('from').innerHTML + `<option value="${item.code}">${item.title}</option>`;
            document.getElementById('to').innerHTML = document.getElementById('to').innerHTML + `<option value="${item.code}">${item.title}</option>`;
        });
        document.getElementById('content').classList.remove('hidden');
        showCurrency();
    }
}

function onError() {
    console.log("Сработало событие error");
}

function showCurrency(){
    const fromCurrency = Number(data.find(function (el) { return el.code == document.getElementById('from').value; }).value);
    const toCurrency = Number(data.find(function (el) { return el.code == document.getElementById('to').value; }).value);
    document.getElementById('result').value = (Number((document.getElementById('source').value)*fromCurrency)/toCurrency).toFixed(2);
}

document.getElementById('source').addEventListener('input', showCurrency);
document.getElementById('from').addEventListener('change', showCurrency);
document.getElementById('to').addEventListener('change', showCurrency);