
// Random int (1-6) Var for Left Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Rando int (1-6) Var for Right Dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Left side Dice
if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}


// Right Side Dice
if (randomNumber2 === 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}


// Declaring the Victor or Draw
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
} else {
  document.querySelector("h1").innerHTML = "IDK my bff Jill";
}
