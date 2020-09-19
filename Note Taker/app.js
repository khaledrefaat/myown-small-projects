const noteInput_textarea = document.querySelector('.note-input');
const btnAdd_btn = document.querySelector('.btn-add');
const btnDetails_div = document.querySelector('.btn-details');
const noteContainer_div = document.querySelector('.note-container');
let i = 1;


// event Listeners

btnAdd_btn.addEventListener('click', addNote);


// functions


function addNote(e) {
    e.preventDefault();
    if (noteInput_textarea.value !== '') {
        if (!noteContainer_div.innerHTML.includes('<div class="note">')) noteContainer_div.innerHTML = '';
        // if the note length more than 15 chars then replace the rest with ...
        let note = noteInput_textarea.value.length > 15 ? noteInput_textarea.value.slice(0, 15) + '...' : noteInput_textarea.value;
        noteContainer_div.insertAdjacentHTML('beforeend', `
        <div class="note">
            <h3>note ${i}</h3>
            <p>${note}</p>
            <button class="btn btn-details">view details</button>
        </div>
        `)
        i++;
    }
}
