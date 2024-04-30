// Selecionando elementos necessários.
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

// Função para adicionar tarefa.
function addTask(e) {
    e.preventDefault(); // Prevenindo o comportamento padrão do form.

    if (taskInput.value.trim()) {
        // Se há algo escrito no input.
        // Criação do elemento li.
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        // Adicionando a tarefa na lista.
        taskList.appendChild(li);

        // Limpando o input.
        taskInput.value = "";
    } else {
        alert('Por favor, digite uma tarefa.');
    }
}

// Adicionando o evento de submit ao form.
form.addEventListener('submit', addTask);