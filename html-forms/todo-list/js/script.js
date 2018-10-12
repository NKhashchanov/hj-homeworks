const tasks = document.getElementsByClassName('list-block')[0].getElementsByTagName('input'),
    output = document.getElementsByClassName('list-block')[0].getElementsByTagName('output')[0];
let completed = 0 ;
console.log(tasks);
function showLabel() {
    if (event.target.checked) {
        completed++;
    } else {
        completed--;
    }
    if (completed == tasks.length) {
        document.getElementsByClassName('list-block')[0].classList.add('complete');
    } else{
        document.getElementsByClassName('list-block')[0].classList.remove('complete');
    }
    output.value = `${completed} из ${tasks.length}`;
}

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].checked) {
        completed++;
    }
    tasks[i].addEventListener('change', showLabel);
}

output.value = `${completed} из ${tasks.length}`;