document.addEventListener('DOMContentLoaded', () => {
    const grid_div = document.querySelector('.grid');

    let randomNum;
    let random1 = [];
    let random2 = [];
    while (random1.length < 12) {
        randomNum = Math.floor(Math.random() * 12) + 1;
        if (!random1.includes(randomNum)) random1.push(randomNum);
    }

    while (random2.length < 12) {
        randomNum = Math.floor(Math.random() * 12) + 1;
        if (!random2.includes(randomNum)) random2.push(randomNum);
    }

    // for (let i = 0; i > random1.length; i++) {
    //     grid_div.insertAdjacentHTML('beforeend', `
    //         <div class="grid__item"><img src="images/${random1[i]}.jpg"></div>
    //     `)
    // }

    // for (let i = 0; i > random2.length; i++) {
    //     grid_div.insertAdjacentHTML('beforeend', `
    //     <div class="grid__item"><img src="images/${random2[i]}.jpg"></div>
    // `)
    // }

    grid_div.insertAdjacentHTML('beforeend', `
                <div class="grid__item">
                <img src="images/${random1[0]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[1]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[2]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[3]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[4]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[5]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[6]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[7]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[8]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[9]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[10]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random1[11]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[0]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[1]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[2]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[3]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[4]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[5]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[6]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[7]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[8]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[9]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[10]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
                <div class="grid__item">
                <img src="images/${random2[11]}.jpg" class="grid__item--img">
                <div class="grid__item--block"></div>
                </div>
    `);

    let choices = [];
    let score = 0;
    // compare 2 pictures
    document.querySelectorAll('.grid__item').forEach(cur => {
        cur.addEventListener('click', checkCorrect)
    })

    function checkCorrect(e) {
        choices.push(this);
        if (choices.length < 3) {
            this.children[0].classList.add('rotate-img');
            this.children[1].classList.add('roate-block');
            this.classList.add('remove-click');
        }
        if (choices.length === 2 && choices[0].children[0].src === choices[1].children[0].src) {
            choices = [];
            score++;
            document.querySelector('h2').innerText = `score: ${score}`;
        } else if (choices.length === 2 && choices[0].children[0].src !== choices[1].children[0].src) {
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
    }


})