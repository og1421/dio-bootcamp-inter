const form = document.getElementById('todo-form');
const todoList= document.getElementById('todo');

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById('todo-input');
    addTask(inputField.value);
    form.reset();
}

function addTask (text) {
    const todoContainer = document.createElement('div');
    const newTodo = document.createElement('input');
    const labelText = document.createElement('label');
    const taskDescription = document.createTextNode(text);

    newTodo.setAttribute('type', 'checkbox');
    newTodo.setAttribute('name', text);
    newTodo.setAttribute('id', text);

    labelText.setAttribute('for', text);
    labelText.appendChild(taskDescription);

    todoContainer.classList.add('todo');
    todoContainer.appendChild(newTodo);
    todoContainer.appendChild(labelText);

    todoList.appendChild(todoContainer);
}