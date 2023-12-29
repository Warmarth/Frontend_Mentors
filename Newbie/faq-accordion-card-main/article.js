const demo = document.getElementById("demo");

const tagIds = ["tag0", "tag1", "tag2", "tag3", "tag4"];
tagIds.forEach((tagId) => {
  const tag = document.getElementById(tagId);
  tag.style.display = "none";
});

function handleClick(tagId, span) {
  let tag = document.getElementById(tagId);
  if (tag.style.display === "none") {
    tag.style.display = "block";
    span.classList.add("rotate");
  } else {
    tag.style.display = "none";
    span.classList.remove("rotate");
  }
}
