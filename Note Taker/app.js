const noteInput_textarea = document.querySelector('.note-input');
const btnAdd_btn = document.querySelector('.btn-add');
const btnDetails_div = document.querySelector('.btn-details');
const noteContainer_div = document.querySelector('.note-container');
const popup_div = document.querySelector('.popup');
let count = 1;


// event Listeners

btnAdd_btn.addEventListener('click', addNote);
noteContainer_div.addEventListener('click', viewDetails);
popup_div.addEventListener('click', hidePopup);


// functions


function addNote(e) {
    e.preventDefault();
    if (noteInput_textarea.value !== '') {
        if (!noteContainer_div.innerHTML.includes('<div class="note">')) noteContainer_div.innerHTML = '';
        // if the note length more than 15 chars then replace the rest with ...
        let note = noteInput_textarea.value.length > 15 ? noteInput_textarea.value.slice(0, 15) + '...' : noteInput_textarea.value;
        noteContainer_div.insertAdjacentHTML('beforeend', `
        <div class="note">
            <h3>note ${count}</h3>
            <p>${note}</p>
            <button class="btn btn-details">view details</button>
        </div>
        `)
        count++;
    }
}


function viewDetails(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-details')) {
        popup_div.innerHTML = `<p>${noteInput_textarea.value}<button class="btn btn-exit">x</button></p>`
        popup_div.classList.add('popup-visible');
    }
}

function hidePopup(e) {
    if (e.target.classList.contains('btn-exit')) {
        e.target.parentNode.parentNode.classList.remove('popup-visible');
    }
}

