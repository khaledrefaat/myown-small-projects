const input_input = document.querySelector('input');
const btn_btn = document.querySelector('.btn');
let inputValue;

btn_btn.addEventListener('click', vowelCheck);

function vowelCheck() {
    inputValue = input_input.value;
    let string = inputValue.split('');
    let vowelsValue = 0;
    let vowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    if (inputValue !== '') {
        for (let i in string) {
            let current = string[i];
            if (current in vowels) {
                vowelsValue++;
            }
        }
    }
    if (document.querySelector('.heading-2')) document.querySelector('.heading-2').remove();
    btn_btn.insertAdjacentHTML('afterend', `<h2 class="heading-2">There Are <span>${vowelsValue}</span> Vowels</h2>`)
}
