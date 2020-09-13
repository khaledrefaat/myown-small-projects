const formInput_input = document.querySelector('input');
const addButton_button = document.querySelector('.btn-add');
const deleteButton_button = document.querySelector('.btn-delete');
const todoList_div = document.querySelector('.todo-list')
const todo_div = document.querySelectorAll('.todo')


// event Listeners
addButton_button.addEventListener('click', addTodo)
todoList_div.addEventListener('click', deleteTodo);

// functions

function addTodo(e) {
    e.preventDefault();
    if (formInput_input.value !== '') {
        todoList_div.insertAdjacentHTML('beforeend', `<div class="todo">${formInput_input.value}<button class="btn btn-delete">X</button></div>`)
        formInput_input.value = '';
    }
}

function deleteTodo(e) {
    if (e.target.innerHTML === 'X') {
        let todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);
    }
}