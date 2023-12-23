const demo = document.querySelectorAll("article");
const span = document.querySelector("span");

function handleClick() {
  Array.from("demo").forEach((ele) => span.classList.add("tag rotete"));
}
