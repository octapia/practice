const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
const message = document.querySelector(".message");

let inPlay = false;
let startTime;
let endTime;
const words = [
  "There is a rose which is waiting to be turned into red",
  "A fox was trying to steal a hen as he was hungry for 2 days",
  "A cow was looking for her child to go for dinner",
];
button.addEventListener("click", start);
window.addEventListener("load", init);
function init() {
  textarea.disabled = true;
  button.innerText = "Play";
}
function start(e) {
  if (e.target.innerText === "Play") {
    inPlay = true;
    e.target.innerText = "Finish";
    textarea.disabled = false;
    message.innerText = generateWord(words);
    startTime = new Date().getTime();
  } else {
    e.target.innerText = "Play";
    textarea.disabled = true;
    const duration = caculateTime();
    const totalWords = wordCount();
    const wordsPerMinute = Nath.floor((totalWords / duration) * 60);
    message.innerText = `You have typed ${wordsPerMinute} words per minute`;
  }
}
function generateWord(words) {
  const randomNumber = Math.floor(Math.random() * words.length);
  return words[randomNumber];
}

function caculateTime() {
  endTime = new Date().getTime();
  return (duration = (endTime - startTime) / 1000);
}
function wordCount() {
  return textarea.value.split(" ").length;
}
