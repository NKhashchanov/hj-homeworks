'use strict';
document.querySelector('.items-list').addEventListener('click', addToCartButton);

function addToCartButton(event) {
    if (!event.target.classList.contains('add-to-cart')) {
        return;
    }
    event.preventDefault();
    const title = event.target.dataset.title;
    const price = event.target.dataset.price;
    const item = items
        .filter(item => ( (item.title === title) && (item.price === +price) )).pop();
    addToCart(item, title, price);
}