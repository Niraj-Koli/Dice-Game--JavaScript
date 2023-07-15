let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

let img1 = document.querySelector(".img1");

img1.setAttribute("src", randomDiceImage1);

let img2 = document.querySelector(".img2");

img2.setAttribute("src", randomDiceImage2);

let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins";
} else {
    heading.innerHTML = "!!! Draw !!!";
}
