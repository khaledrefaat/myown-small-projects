document.addEventListener('DOMContentLoaded', () => {
    let randomNum;
    let random1 = [];
    let random2 = [];
    let choices = [];
    let score = 0;

    // compare 2 pictures
    document.querySelectorAll('.grid__item').forEach(cur => {
        cur.addEventListener('click', checkCorrect)
    })
    document.querySelector('button').addEventListener('click', startGame);


    // generate random number and clear random array
    function generateRandom() {
        // there is 2 loops here to have random numbers from 1 to 12 twice 
        random1 = [];
        random2 = [];
        while (random1.length < 12) {
            randomNum = Math.floor(Math.random() * 12) + 1;
            if (!random1.includes(randomNum)) random1.push(randomNum);
        }

        while (random2.length < 12) {
            randomNum = Math.floor(Math.random() * 12) + 1;
            if (!random2.includes(randomNum)) random2.push(randomNum);
        }
    }


    function checkCorrect() {
        choices.push(this);
        // if there is already 2 cards fliped dont flip the third one
        if (choices.length < 3) {
            this.children[0].classList.add('rotate-img');
            this.children[1].classList.add('roate-block');
            this.classList.add('remove-click');
        }
        // check if the 2 cards match
        if (choices.length === 2 && choices[0].children[0].src === choices[1].children[0].src) {
            choices = [];
            score++;
            document.querySelector('.heading-2').innerText = `score: ${score}`;
        }
        // check if the 2 cards dosent match
        else if (choices.length === 2 && choices[0].children[0].src !== choices[1].children[0].src) {
            setTimeout(() => {
                choices[0].classList.remove('remove-click');
                choices[1].classList.remove('remove-click');
                choices[0].children[0].classList.remove('rotate-img');
                choices[0].children[1].classList.remove('roate-block');
                choices[1].children[0].classList.remove('rotate-img');
                choices[1].children[1].classList.remove('roate-block');
                choices = [];
            }, 500)
        }
        if (score === 12) alert('You Won!') // end the game
    }

    function showCard() {
        document.querySelectorAll('.grid__item').forEach(cur => {
            cur.children[0].classList.add('rotate-img');
            cur.children[1].classList.add('roate-block');
            cur.classList.add('remove-click');
        });
    }

    function hideCard() {
        document.querySelectorAll('.grid__item').forEach(cur => {
            cur.children[0].classList.remove('rotate-img');
            cur.children[1].classList.remove('roate-block');
            cur.classList.remove('remove-click');
        });
    }

    function startGame() {
        choices = [];
        generateRandom();
        document.querySelector('.grid').innerHTML = '';
        // create the grid element
        for (let i = 0; i < random1.length; i++) {
            document.querySelector('.grid').insertAdjacentHTML('beforeend', `
        <div class="grid__item"><img src="images/${random1[i]}.jpg" class="grid__item--img"><div class="grid__item--block"></div></div>
        <div class="grid__item"><img src="images/${random2[i]}.jpg" class="grid__item--img"><div class="grid__item--block"></div></div>
        `)
        }
        showCard();
        setTimeout(hideCard, 1000);
        score = 0;
        document.querySelector('.heading-2').innerText = `score: ${score}`;
        document.querySelectorAll('.grid__item').forEach(cur => {
            cur.addEventListener('click', checkCorrect);
        });
    }
    startGame()
})