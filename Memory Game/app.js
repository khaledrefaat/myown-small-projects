const container_div = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {

    let randomNum;
    let random = [];
    while (random.length < 12) {
        randomNum = Math.floor(Math.random() * 12) + 1;
        if (!random.includes(randomNum)) random.push(randomNum);
    }

    container_div.insertAdjacentHTML('beforeend', `
        <div class="grid">
            <div><img src="images/${random[0]}.jpg"></div>
            <div><img src="images/${random[1]}.jpg"></div>
            <div><img src="images/${random[2]}.jpg"></div>
            <div><img src="images/${random[3]}.jpg"></div>
            <div><img src="images/${random[4]}.jpg"></div>
            <div><img src="images/${random[5]}.jpg"></div>
            <div><img src="images/${random[6]}.jpg"></div>
            <div><img src="images/${random[7]}.jpg"></div>
            <div><img src="images/${random[8]}.jpg"></div>
            <div><img src="images/${random[9]}.jpg"></div>
            <div><img src="images/${random[10]}.jpg"></div>
            <div><img src="images/${random[11]}.jpg"></div>
        </div>
`)

})