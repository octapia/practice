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
