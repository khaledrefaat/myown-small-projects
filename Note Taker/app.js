const noteInput_textarea = document.querySelector('.note-input');
const btnAdd_btn = document.querySelector('.btn-add');
const btnDetails_div = document.querySelector('.btn-details');
const noteContainer_div = document.querySelector('.note-container');
let i = 1;

btnAdd_btn.addEventListener('click', e => {
    e.preventDefault();
    if (noteInput_textarea.value !== '') {
        if (!noteContainer_div.innerHTML.includes('<div class="note">')) noteContainer_div.innerHTML = '';
        noteContainer_div.insertAdjacentHTML('beforeend', `
        <div class="note">
            <h3>note ${i}</h3>
            <p>${noteInput_textarea.value}</p>
            <div class="btn btn-details">view details</div>
        </div>
        `)
        i++;
    }
})
