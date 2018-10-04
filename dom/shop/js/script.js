const count = document.getElementById('cart-count'),
    total = document.getElementById('cart-total-price'),
    boxs = document.getElementsByClassName('box');

function add() {
    let cost = parseInt(this.dataset.price),
        prevCount = parseInt(count.innerHTML),
        prevTotal = parseInt(total.innerHTML.replace(' ', '')),
        resultValue = prevTotal + cost;
    count.innerHTML = ++prevCount;
    total.innerHTML = getPriceFormatted(resultValue);
}

for (let box of boxs) {
    let button = box.querySelector('button.add');
    button.addEventListener('click', add);
}