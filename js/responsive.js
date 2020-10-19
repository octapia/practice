// responsive
const responsive = document.querySelector(".responsive");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
responsive.addEventListener("click", () => {
   ul.classList.toggle("active-ul");
   nav.classList.toggle("active-nav");
});
