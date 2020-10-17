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

// play button
const playButton = document.querySelector(".playButton");
const videoBanner = document.querySelector(".video-banner");
const videoFooter = document.querySelector(".video-footer");

const addClick = (fullscreen) => {
   playButton.classList.add("playButton-spinner");
   videoBanner.style.background = "black";
   videoFooter.style.display = "none";
   switch (fullscreen) {
      case fullscreen:
         setTimeout(() => {
            document.querySelector(".popup").classList.add("popup-block");
         }, 3000);
         break;
      case !fullscreen:
         setTimeout(() => {
            playButton.style.transition = "0s all";
            playButton.classList.remove("playButton-spinner");
            document.querySelector(".popup").classList.add("popup-block");
         }, 3000);
         break;
      default:
         break;
   }
};

playButton.classList.add("playButton-spinner");
videoBanner.style.background = "black";
videoFooter.style.display = "none";

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
         playButton.addEventListener("click", () => addClick(true));
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

playButton.addEventListener("click", () => addClick());

// onload

function onload() {
   playButton.style.transition = "0s all";
   playButton.classList.remove("playButton-spinner");
   document.querySelector(
      ".video-banner"
   ).style.backgroundImage = `url(../images/banner.jpg)`;
   videoBanner.style.backgroundRepeat = "no-repeat";
   videoBanner.style.backgroundSize = "cover";
   videoFooter.style.display = "flex";
}
