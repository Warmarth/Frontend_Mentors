const social = document.querySelector("#social") as HTMLDivElement;
const a_tag_collection = document.querySelectorAll("a");
const button = document.querySelector("button") as HTMLButtonElement;
const share = document.querySelector("#share_btn");
let width = window.matchMedia("(min-width: 1025px)").matches;
let mediaQuery = window.matchMedia("(min-width: 1025px)");

type handelClick = (a: boolean) => void;

for (let anchor of a_tag_collection) {
  if (anchor.textContent === "Your Name Here") {
    anchor.setAttribute("href", "https://www.github.com/warmarth");
    anchor.textContent = "Warmarth";
  }
}
const handelClickSmall: handelClick = (determiner) => {
  if (!determiner) {
    social.classList.toggle("sm_share");
    button.classList.toggle("btn_new");
  }
};

const handelClickBig: handelClick = (determiner) => {
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
  } else {
    window.location.reload();
  }
});
