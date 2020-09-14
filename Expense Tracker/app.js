const inputName_input = document.querySelector('.input-name');
const inputDate_input = document.querySelector('.input-date');
const inputAmount_input = document.querySelector('.input-amount');
const btnAdd_btn = document.querySelector('.btn-add');
const expenseContainer = document.querySelector('.expense-container');


// event Listeners
btnAdd_btn.addEventListener('click', addExpense);
expenseContainer.addEventListener('click', removeExpense);

// functions

function addExpense(e) {
    e.preventDefault();
    if (inputName_input.value !== '' && inputDate_input.value !== '' && inputAmount_input.value !== '') {
        expenseContainer.insertAdjacentHTML('beforeend', `
                <div class="expense-details">
                    <div>${inputName_input.value}</div>
                    <div>${inputDate_input.value}</div>
                    <div>${inputAmount_input.value}$</div>
                    <button class="btn btn-delete">X</button>
                </div>
        `)
        inputName_input.value = '';
        inputDate_input.value = '';
        inputAmount_input.value = '';
    }
}

function removeExpense(e) {
    if (e.target.value = 'X') {
        e.preventDefault();
        let expense = e.target.parentNode;
        expense.classList.add('delete');
        setTimeout(() => expense.remove(), 500);
    }
}
