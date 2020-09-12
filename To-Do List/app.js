const formInput_input = document.querySelector('input');
const addButton_button = document.querySelector('.btn-add');
const todos_div = document.querySelector('.todos')
const todo_div = document.querySelector('.todo')

addButton_button.addEventListener('click', (e) => {
    e.preventDefault();
    if (formInput_input.value !== '') {
        todo_div.insertAdjacentHTML('beforeend', `<p class="todo">${formInput_input.value}<button class="btn btn-remove">X</button></p>`)
        formInput_input.value = '';
    }
})

