//Selecionando elementos necessários
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

//Função para adicionar tarefa
function addTask(e) {
    e.preventDefault(); // prevenindo o comportamento padrão do form

    if (taskInput.value.trim()) {
        //se há algo escrito no input
        //criação do elemento li
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        // adicionando a tarefa na lista
        taskList.appendChild(li);

        // limpando o input
        taskInput.value = "";
    } else {
        alert('Por favor, digite uma tarefa.');
    }
}

//Adicionando o evento de submit ao form.
form.addEventListener('submit', addTask);