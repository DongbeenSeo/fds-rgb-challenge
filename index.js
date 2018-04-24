function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomColorCode() {
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

const colorCodeEl = document.querySelector(".color-code");

const boxes = document.querySelectorAll('.box');
const len = boxes.length

let correctAns;
let score = 0;
let wrongText = '';
const scoreEl = document.querySelector('.score');
scoreEl.textContent = `score: ${score}`

function newStage() {
    //갱신되어야 하는 code
    const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()];
    //갱신되어야 하는 code
    boxes.forEach((el, index) => {
        el.style.backgroundColor = colorCodes[index];
    });
    //갱신되어야 하는 code
    correctAns = Math.floor(Math.random() * 3);
    colorCodeEl.textContent = colorCodes[correctAns];
}

boxes.forEach((el, index) => {
    boxes[index].addEventListener('click', () => {
        el.classList.add('large');
        if (correctAns === index) {
            score++;
            document.querySelector('.modal.right').classList.add('show');
        } else {
            document.querySelector(".modal.wrong").classList.add("show", "score");
            document.querySelector('.wrongScore').textContent = `score: ${score}`;
            score = 0;
        }
        scoreEl.textContent = `score: ${score}`
    })
})
document.querySelector(".modal.right .close").addEventListener("click", () => {
    boxes.forEach(el => {
        el.classList.remove('large');
    })
    document.querySelector(".modal.right").classList.remove("show");
    newStage();
});

document.querySelector(".modal.wrong .reset").addEventListener("click", () => {
    boxes.forEach(el => {
        el.classList.remove("large");
    });
    document.querySelector(".modal.wrong").classList.remove("show");
    newStage();
});

newStage();
// boxes.forEach(el => (el.style.backgroundColor = randomColorCode()));
// for (let i = 0; i < len; i++) {
//     boxes[i].style.backgroundColor = randomColorCode();
// }
// for (const item of boxes) {
//     item.style.backgroundColor = randomColorCode();
// }
// boxes[0].style.backgroundColor = randomColorCode();
// boxes[1].style.backgroundColor = randomColorCode();
// boxes[2].style.backgroundColor = randomColorCode();