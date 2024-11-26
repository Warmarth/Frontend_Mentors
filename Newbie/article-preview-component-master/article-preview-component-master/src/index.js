"use strict";
const social = document.querySelector("#social");
const button = document.querySelector("button");
// const anchors = document.querySelectorAll("a");
const share = document.querySelector("#share_btn");
let width = window.matchMedia("(min-width: 1025px)").matches;
let mediaQuery = window.matchMedia("(min-width: 1025px)");
// anchors.forEach((anchor) => {
//   if (anchor.textContent === "Your Name Here") {
//     anchor.setAttribute("href", "https://www.github.com/warmarth");
//     anchor.textContent = "Warmarth";
//   }
// });
const handelClickSmall = (determiner) => {
    if (!determiner) {
        social.classList.toggle("sm_share");
        button.classList.toggle("btn_new");
    }
};
const handelClickBig = (determiner) => {
    if (determiner) {
        social.classList.toggle("bg_share");
        button.classList.toggle("btn_new");
    }
};
button.addEventListener("click", () => {
    handelClickSmall(width);
    handelClickBig(width);
});
mediaQuery.addEventListener("change", (e) => {
    if (e.matches) {
        window.location.reload();
    }
    else {
        window.location.reload();
    }
});
