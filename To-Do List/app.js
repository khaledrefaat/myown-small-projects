const formInput_input = document.querySelector('input');
const todoList_div = document.querySelector('.todo-list')
const todo_div = document.querySelectorAll('.todo')
const addButton_button = document.querySelector('.btn-add');
const deleteButton_button = document.querySelector('.btn-delete');
const clearButton_button = document.querySelector('.btn-clear');
const completeButton_button = document.querySelector('.btn-complete');


// event Listeners
addButton_button.addEventListener('click', addTodo)
todoList_div.addEventListener('click', todoBtns);
clearButton_button.addEventListener('click', () => todoList_div.innerHTML = '');

// functions

function addTodo(e) {
    e.preventDefault();
    if (formInput_input.value !== '') {
        todoList_div.insertAdjacentHTML('beforeend', `<div class="todo"><p>${formInput_input.value}</p><button class="btn btn-delete">X</button> <button class="btn btn-complete">✔</button></div>`)
        formInput_input.value = '';
    }
}

function todoBtns(e) {
    if (e.target.innerHTML === 'X') e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    else if (e.target.innerHTML === '✔') e.target.parentNode.childNodes[0].classList.add('complete')
}

