let randomNumber = parseInt(Math.random() * 100 + 1);
let inputValue = document.querySelector("input");
let display = document.querySelectorAll("h2");
let counter = document.querySelectorAll("p");
let button = document.querySelectorAll("button");
//let body = document.getElementsByTagName("body");
//console.log(button);
// console.log(randomNumber);
let count = 100;
let highScore = 0;
function checkNumber() {
  //console.log(inputValue.value);
  if (randomNumber > inputValue.value) {
    display[1].innerHTML = `Your Guess is Low`;
    count--;
    document.body.style.backgroundColor = "#d14444";
    counter[0].innerHTML = `💯Chances: ${count}`;
  } else if (randomNumber < inputValue.value) {
    display[1].innerHTML = `Your Guess is High`;
    count--;
    document.body.style.backgroundColor = "#d14444";
    counter[0].innerHTML = `💯Chances: ${count}`;
  } else {
    display[1].innerHTML = `Your Guess is Right`;
    display[0].innerHTML = `${randomNumber}`;
    count--;
    counter[0].innerHTML = `💯Chances: ${count}`;
    counter[1].innerHTML = `🥇Highscore: ${count}`;
    highScore = count;
    document.body.style.backgroundColor = "green";
    button[1].style.display = "none";
    console.log(highScore);
  }
}
function gameReset() {
  window.location.reload();
}
