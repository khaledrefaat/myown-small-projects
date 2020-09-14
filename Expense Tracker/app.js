const inputName_input = document.querySelector('.input-name');
const inputDate_input = document.querySelector('.input-date');
const inputAmound_input = document.querySelector('.input-amount');
const btnAdd_btn = document.querySelector('.btn-add');
const btnDelete_btn = document.querySelector('.btn-delete');
const expenseContainer = document.querySelector('.expense-container');


// event Listeners
btnAdd_btn.addEventListener('click', addExpense);

// functions

function addExpense(e) {
    e.preventDefault();
    if (inputName_input.value !== '' && inputDate_input.value !== '' && inputAmound_input.value !== '') {
        expenseContainer.insertAdjacentHTML('beforeend', `
                <div class="expense-details">
                    <div>${inputName_input.value}'s</div>
                    <div>${inputDate_input.value}</div>
                    <div>${inputAmound_input.value}$</div>
                    <button class="btn btn-delete">X</button>
                </div>
        `)
    }
}