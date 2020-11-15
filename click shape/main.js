const gameArea = document.querySelector(".gameArea");
const message = document.querySelector(".message");
const button = document.querySelector("button");
showMessage("Click start button");
let inPlay = false;
let start;
let end;
const playArea = {};

button.addEventListener("click", function () {
  if (!inPlay) {
    inPlay = true;
    button.style.display = "none";
    showMessage("Click the circle quickly as much as possible");
    showBox();
  }
});

function showBox() {
  start = new Date().getTime();
  playArea.timer = setTimeout(() => {
    myBox();
  }, random(3000));
}

function myBox() {
  const div = document.createElement("div");
  div.classList.add("box");
  div.style.backgroundColor = getColor();
  div.style.height = random(30) + 70 + "px";
  div.style.width = random(30) + 70 + "px";
  div.style.borderRadius = random(30) + "%";
  div.style.position = "absolute";
  div.style.top = random(130) + 20 + "px";
  div.style.left = random(130) + 20 + "px";
  div.addEventListener("click", hit);
  gameArea.appendChild(div);
}
function hit(e) {
  end = new Date().getTime();
  const duration = (end - start) / 1000;
  clearTimeout(playArea.timer);
  gameArea.children[0].remove();
  showMessage("it took " + duration + "s to play");
  playArea.timer = setTimeout(() => {
    myBox();
  }, random(3000));
}
function random(num) {
  return Math.floor(Math.random() * num);
}
function getColor() {
  return "#" + Math.random().toString(16).substr(-6);
}
function showMessage(msg) {
  message.innerHTML = msg;
}
