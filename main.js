let btnColor = document.querySelectorAll(".color");
let header = document.querySelector("#header");
let scoreboard = document.querySelector("#scoreboard");

const display = document.querySelector("#display");
const btnReload = document.querySelector("#reload");
const btnEasy = document.querySelector("#btn-easy");
const btnHard = document.querySelector("#btn-hard");
const btnPlayAgain = document.querySelector("#btn-play-again");

let numChooseColor = 6;
let winner = false;

showColors();

btnPlayAgain.addEventListener("click", () => {
    reload();
    btnPlayAgain.style.display = "none";
})

btnReload.addEventListener("click", reload);

btnEasy.addEventListener("click", () => {
    btnEasy.classList.add("selected");
    btnHard.classList.remove("selected");
    difficulty("easy");
});

btnHard.addEventListener("click", () => {
    btnHard.classList.add("selected");
    btnEasy.classList.remove("selected");
    difficulty("hard");
});

btnColor.forEach(btnColor => {
    btnColor.addEventListener("click", function() {
        while (winner != true) {
            let btn = this;
            btn.style.display = "none";
            printPoints(-10);
            winner = verifier(btn);
            break;
        }
    })
});

function generateColors() {
    const colorRed = parseInt(Math.random() * 256);
    const colorGreen = parseInt(Math.random() * 256);
    const colorBlue = parseInt(Math.random() * 256);
    return `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
}

function chooseColor() {
    let n = parseInt(Math.random() * numChooseColor);
    return btnColor[n].style.backgroundColor;
}

function showColors() {
    for (var i = 0; i < btnColor.length; i++) {
        btnColor[i].style.backgroundColor = generateColors();
    }
    display.innerHTML = chooseColor().toUpperCase();
}

function verifier(btnColor) {
    if (btnColor.style.backgroundColor == display.innerHTML.toLowerCase()) {
        header.style.backgroundColor = btnColor.style.backgroundColor;
        btnPlayAgain.style.display = "block";
        display.innerText = "You is Winner!";
        printPoints(30);

        for (var i = 0; i < btnColor.length; i++) {
            btnColor[i].style.backgroundColor = btn.style.backgroundColor;
        }
        return true;
    }
}

function reload() {
    header.style.backgroundColor = "";
    winner = false;
    for (var i = 0; i < btnColor.length; i++) {
        btnColor[i].style.display = "flex";
    }
    showColors();
}

function printPoints(num) {
    points = parseInt(scoreboard.innerText);
    points += num;
    scoreboard.innerText = points;
}

function difficulty(difficulty) {
    if (difficulty == "easy") {
        btnColor[0].classList.remove("color");
        btnColor[2].classList.remove("color");
        btnColor[4].classList.remove("color");
        btnColor = document.querySelectorAll(".color");
        numChooseColor = 3;
        reload();
    } else {
        btnColor[0].classList.add("color");
        btnColor[2].classList.add("color");
        btnColor[4].classList.add("color");
        btnColor = document.querySelectorAll(".color");
        numChooseColor = 6;
        reload();
    }
}