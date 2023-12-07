

/*
. Crea un semplice form di registrazione con un input field in cui l'utente possa inserire il proprio nome.
A fianco di questo input field crea due pulsanti: uno salvera il valore in localStorage, uno rimuoverà il valore
precedentemente salvato (se presente).
Mostra sopra l'input field il valore precedentemente salvato, se presente.*/

let prevName = localStorage.getItem("name");

if (prevName) {
    document.querySelector("#prevName").textContent = prevName;
}

document.querySelector("#saveBtn").addEventListener("click", function () {
    let name = document.querySelector("#name").value;
    if (name) {
        localStorage.setItem("name", name);
        document.querySelector("#prevName").textContent = name;
    }
});

document.querySelector("#removeBtn").addEventListener("click", function () {
    localStorage.removeItem("name");
    document.querySelector("#prevName").textContent = "";
});
console. log(window);



//teacher redo

/*
es1

let btnAdd = document. querySelector('.es1 button.btn-dark') ;
let btnReset = document.querySelector('.es1 button.btn-danger');

document.querySelector(".es1 fieldset").innerText = localStorage.getItem('utente') || '';

btnAdd.addEventListener('click', () => {
    let input = document.querySelector(".es1 input").value.trim();
    localStorage.setItem("name", input);
    document.querySelector(".es1 input").value = "";
    document.querySelector(".es1 fieldset").innerText = input;
})

btnReset.addEventListener('click', () => {
    localStorage.removeItem("name");
    document.querySelector(".es1 fieldset") . innerText = '';
})

es2

*/ 







/*
. Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il
valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad
o ogni secondo.*/

let contatore = sessionStorage.getItem("start")
contatore ? console.log(contatore) : sessionStorage.setItem("start", 0);
function updateTime() {
    let start = Number(sessionStorage.getItem("start"));
    sessionStorage.setItem("start", start + 1);
    document.querySelector('#timer').innerHTML = `${start}`;
}
    setInterval(updateTime, 1000);
    // console.log(window);



/*. Testare Postaman con le API di JSONPlaceholder*/



/*. Creare una ToDoList con LocalStorage */


localStorage.removeItem('tasks');
function loadTasks() {
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = '';


    try {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.innerHTML = `
                <span>${task}</span>
                <button type="button" class="close" aria-label="Close" data-index="${index}">
                    <span aria-hidden="true">&times;</span>
                </button>
            `;
            taskList.appendChild(li);
        });
    } catch (error) {
        console.error('Error parsing JSON:', error);
        
    }
}

function addTask() {
    const taskInput = document.querySelector('#taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = '';
        loadTasks();
    }
}

function removeTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.splice(index, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

document.querySelector('#addButton').addEventListener('click', addTask);

document.querySelector('#taskList').addEventListener('click', function (event) {
    if (event.target.classList.contains('close')) {
        const index = event.target.getAttribute('data-index');
        removeTask(index);
    }
});

loadTasks();


