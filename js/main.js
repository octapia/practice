const setting = document.querySelector(".fa-cog");

setting.addEventListener("click", () => {
   document.querySelector(".ql").classList.toggle("active-ql");
});

var header = document.getElementById("setting");
var btns = header.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function (e) {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
   });
}

// full screen

const screenButton = document.querySelector(".fa-expand-arrows-alt");

if (
   document.fullscreenEnabled ||
   document.webkitFullscreenEnabled ||
   document.mozFullScreenEnabled ||
   document.msFullscreenEnabled
) {
   fullscreenAvailable = true;
}

screenButton.addEventListener(
   "click",
   function () {
      if (fullscreenAvailable) {
         launchFullscreen(document.getElementsByClassName("video"));
      } else {
         alert("Sorry, fullscreen not available...");
      }
   },
   false
);

function launchFullscreen(element) {
   if (element[0].requestFullscreen) {
      element[0].requestFullscreen();
   } else if (element[0].mozRequestFullScreen) {
      element[0].mozRequestFullScreen();
   } else if (element[0].webkitRequestFullscreen) {
      element[0].webkitRequestFullscreen();
   } else if (element[0].msRequestFullscreen) {
      element[0].msRequestFullscreen();
   }
}

// play button
const playButton = document.querySelector(".playButton");

playButton.addEventListener("click", () => {
   playButton.classList.add("playButton-spinner");
});
