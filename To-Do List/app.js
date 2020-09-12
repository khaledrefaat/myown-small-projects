const formInput_input = document.querySelector('input');
const addButton_button = document.querySelector('.btn-add');
const deleteButton_button = document.querySelector('.btn-delete');
const todos_div = document.querySelector('.todos')
const todo_div = document.querySelectorAll('.todo')


// event Listeners
addButton_button.addEventListener('click', addTodo)
todos_div.addEventListener('click', deleteTodo);

// functions

function addTodo(e) {
    e.preventDefault();
    if (formInput_input.value !== '') {
        todos_div.insertAdjacentHTML('beforeend', `<p class="todo">${formInput_input.value}<button class="btn btn-delete">X</button></p>`)
        formInput_input.value = '';
    }
}

function deleteTodo(e) {
    console.log('i was clicked')
    console.log(e.target);
    if (e.target.innerHTML === 'X') {
        let todo = e.target.parentNode;
        todo.parentNode.removeChild(todo);
    }
}