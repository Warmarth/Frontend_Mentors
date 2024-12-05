const socials = document.getElementById("social");

Array.from(socials.children).forEach((social) => {
  social.classList.add("social__link");
  social.addEventListener("click", () => {
    if (social.classList.contains("social__link")) {
      social.classList.add("social__link-active");
      social.classList.remove("social__link");
    } else {
      social.classList.add("social__link");
      social.classList.remove("social__link-active");
    }
    Array.from(socials.children).forEach((s) => {
      if (s !== social) {
        s.classList.add("social__link");
        s.classList.remove("social__link-active");
      }
    });
  });
});
