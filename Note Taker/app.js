const noteInput_textarea = document.querySelector('.note-input');
const btnAdd_btn = document.querySelector('.btn-add');
const btnDetails_div = document.querySelector('.btn-details');
const noteContainer_div = document.querySelector('.note-container');
const popup_div = document.querySelector('.popup');
let count = 1;
let noteValue;


// event Listeners

btnAdd_btn.addEventListener('click', addNote);
noteContainer_div.addEventListener('click', noteController);
popup_div.addEventListener('click', hidePopup);


// functions


function addNote(e) {
    e.preventDefault();
    noteValue = noteInput_textarea.value; // to save the note for the popup window
    // console.log(noteValue);
    if (noteContainer_div.children.length === 0) count = 1;
    if (noteInput_textarea.value !== '') {
        if (!noteContainer_div.innerHTML.includes('<div class="note">')) noteContainer_div.innerHTML = '';
        // if the note length more than 15 chars then replace the rest with ...
        let note = noteValue.length > 60 ? noteValue.slice(0, 60) + '...' : noteValue;
        noteContainer_div.insertAdjacentHTML('beforeend', `
        <div class="note">
            <button class="btn btn-delete">X</button>
            <h3>note ${count}</h3>
            <p>${note}</p>
            <button class="btn btn-details">view details</button>
        </div>
        `)
        noteInput_textarea.value = '';
        count++;
    }
    console.log(noteValue);

}


function noteController(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-details')) { // if viewdetails button pressed show popup note
        popup_div.innerHTML = `<p>${noteValue}<button class="btn btn-exit">x</button></p>`
        popup_div.classList.add('popup-visible');
    }
    else if (e.target.classList.contains('btn-delete')) { // if delete button pressed delete the note
        e.target.parentNode.classList.add('note-delete');
        setTimeout(() => e.target.parentNode.remove(), 300)
    }
}

function hidePopup(e) {
    if (e.target.classList.contains('btn-exit')) {
        e.target.parentNode.parentNode.classList.remove('popup-visible');
    }
}

