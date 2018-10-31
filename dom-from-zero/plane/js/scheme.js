'use strict';

const btnSetFull = document.getElementById('btnSetFull');
const btnSetEmpty = document.getElementById('btnSetEmpty');
btnSetFull.disabled = true;
btnSetEmpty.disabled = true;

document.getElementById('btnSeatMap')
    .addEventListener('click', (event) => {
        event.preventDefault();
        loadPlaneScheme( document.getElementById('acSelect').value );
    });

function loadPlaneScheme(planeID) {
    fetch(`https://neto-api.herokuapp.com/plane/${planeID}`)
        .then(res => res.json())
        .then(planeScheme => showPlaneScheme(planeScheme))
}

function showPlaneScheme(planeScheme) {
    document.getElementById('seatMapTitle').textContent = `${planeScheme.title.toString()} (${planeScheme.passengers.toString()} пассажиров)`;

    const seatMapDiv = document.getElementById('seatMapDiv');
    Array.from(seatMapDiv.children).forEach(child => seatMapDiv.removeChild(child));

    const fragment = document.createDocumentFragment();
    planeScheme.scheme
        .forEach( (seatsAmount, rowNumber) => fragment.appendChild(createRow(seatsAmount, rowNumber)) );
    seatMapDiv.appendChild(fragment);

    updateSelectedSeatsInfo();
    btnSetFull.disabled = false;
    btnSetEmpty.disabled = false;

    btnSetFull.addEventListener('click', event => {
        event.preventDefault();
        Array.from(seatMapDiv.getElementsByClassName('seat')).forEach(seat => {
            if (event.altKey) {
                seat.classList.add('half');
            } else {
                seat.classList.add('adult');
            }
        });
    });

    btnSetEmpty.addEventListener('click', event => {
        event.preventDefault();
        Array.from(seatMapDiv.getElementsByClassName('seat')).forEach(seat => {
            seat.classList.remove('half');
            seat.classList.remove('adult');
        });
    });

    seatMapDiv.addEventListener('click', (event) => {
        if (!event.target.classList.contains('seat') && !event.target.parentElement.classList.contains('seat')) return;
        const target = event.target.classList.contains('seat') ? event.target : event.target.parentElement;
        if (event.altKey) {
            target.classList.remove('adult');
            target.classList.toggle('half');
        } else {
            target.classList.remove('half');
            target.classList.toggle('adult');
        }
        updateSelectedSeatsInfo();
    });


    function updateSelectedSeatsInfo() {
        const totalAdult = seatMapDiv.getElementsByClassName('adult').length;
        const totalHalf = seatMapDiv.getElementsByClassName('half').length;
        document.getElementById('totalPax').textContent = totalAdult + totalHalf;
        document.getElementById('totalAdult').textContent = totalAdult;
        document.getElementById('totalHalf').textContent = totalHalf;
    }

    function createRow(seatsAmount, rowNumber) {
        const seatingRowDiv = document.createElement('div');
        seatingRowDiv.setAttribute('class', 'row seating-row text-center');
        const rowNumberDiv = document.createElement('div');
        rowNumberDiv.setAttribute('class', 'col-xs-1 row-number');
        seatingRowDiv.appendChild(rowNumberDiv);
        const rowNumberH2 = document.createElement('h2');
        rowNumberH2.textContent = rowNumber + 1;
        rowNumberDiv.appendChild(rowNumberH2);

        const leftSeatRow = document.createElement('div');
        leftSeatRow.classList.add('col-xs-5');
        seatingRowDiv.appendChild(leftSeatRow);
        const rightSeatRow = document.createElement('div');
        rightSeatRow.classList.add('col-xs-5');
        seatingRowDiv.appendChild(rightSeatRow);

        for (let i = 0; i < 6; i++) {
            const seat = document.createElement('div');
            i < 3 ? leftSeatRow.appendChild(seat) : rightSeatRow.appendChild(seat);
            switch (seatsAmount) {
                case 0:
                    seat.setAttribute('class', 'col-xs-4 no-seat');
                    break;
                case 6:
                    seat.setAttribute('class', 'col-xs-4 seat');
                    const seatSpan6 = document.createElement('span');
                    seatSpan6.classList.add('seat-label');
                    seatSpan6.textContent = planeScheme.letters6[i];
                    seat.appendChild(seatSpan6);
                    break;
                case 4:
                    if (i === 0 || i === 5) {
                        seat.setAttribute('class', 'col-xs-4 no-seat');
                    } else {
                        seat.setAttribute('class', 'col-xs-4 seat');
                        const seatSpan4 = document.createElement('span');
                        seatSpan4.classList.add('seat-label');
                        seatSpan4.textContent = planeScheme.letters4[i - 1];
                        seat.appendChild(seatSpan4);
                    }
                    break;
            }
        }
        return seatingRowDiv;
    }
}