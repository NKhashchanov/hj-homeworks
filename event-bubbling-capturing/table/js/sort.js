'use strict';

function handleTableClick(event) {
    let target = event.target;
    const table = event.currentTarget;

    if (target.tagName !== 'TH') {
        return;
    }
    if (target.dataset.dir === '1') {
        target.dataset.dir = '-1'
    } else {
        target.dataset.dir = '1'
    }
    table.dataset.sortBy = target.dataset.propName;
    sortTable(target.dataset.propName, Number(target.dataset.dir));
}


const table = document.querySelector('table');
table.addEventListener('click', handleTableClick);