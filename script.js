let first = document.getElementById("text");
console.log(first.innerHTML);

let second = document.getElementsByTagName("h1");
console.log(second[0]);

let third = document.getElementsByClassName("box");
console.log(third[0].innerHTML);

let changeText = document.getElementsByClassName("changeText");
changeText[0].addEventListener("click", () => {
  changeText[0].innerHTML = "Hello World";
});

function replaceText() {
  let changeLine = document.getElementsByClassName("changeLine");
  changeLine[0].innerHTML = "Welcome to Elevation Academy";
}

let heading = document.getElementById("heading");
let count = 0;
heading.addEventListener("click", () => {
  if (count % 2 === 0) {
    heading.innerHTML = "Hello World";
    heading.style.color = "red";
    count++;
  } else {
    heading.innerHTML = "Hello";
    heading.style.color = "black";
    count--;
  }
});

function changeDirection() {
  let boxes = document.getElementsByClassName("boxes");
  boxes[0].style.flexDirection = "column";
}

//clock
let display = document.querySelectorAll("h2");
console.log(display);
function startClock() {
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let AMPM = "AM";
  if (hrs > 12) {
    hrs -= 12;
    AMPM = "PM";
  }
  if (hrs === 0) {
    hrs = 12;
  }

  display[1].innerHTML = `${hrs}:${mins}:${secs} ${AMPM}`;
}
setInterval(() => {
  startClock();
}, 1000);
