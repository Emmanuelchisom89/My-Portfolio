//HAMBUGER MENU
const year = new Date().getFullYear();
const newYear = document.getElementById("year");
newYear.innerHTML = year;

const mainMenu = document.querySelector("#navbar");
const closeMenu = document.querySelector(".hb-menu-close");
const openMenu = document.querySelector("#hb-menu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when a link is clicked
let numOfHeadLinks = document.querySelectorAll("#head-a").length - 2;
for (let i = 0; i < numOfHeadLinks; i++) {
  const headLinks = document.querySelectorAll("#head-a")[i];
  headLinks.addEventListener("click", close);
}

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-100%";
}

//ScrollReveal

function revealFunction() {
  window.sr = ScrollReveal({
    duration: 1250,
    distance: "80px",
    easing: "ease-out",
  });

  sr.reveal("#h2", { origin: "left", reset: false });
  sr.reveal("#pee, .reveal-botton, .details", {
    origin: "bottom",
    reset: false,
  });
  sr.reveal(".reveal-left", { origin: "left", reset: false });
  sr.reveal(".reveal-right", { origin: "right", reset: false });
  sr.reveal(".reveal-top", { origin: "top", reset: false });
}

window.addEventListener("load", () => {
  revealFunction();
});

// Typed js

const typed = new Typed(".typed", {
  strings: [
    "A creative web designer,",
    "A motivator,",
    "A front-end web developer.",
  ],
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1000,
  loop: false,
});
