const socials = <HTMLUListElement>document.getElementById("social");
const socialLinks = Array.from(socials.children);

socialLinks.forEach((social) => {
  social.classList.add("social__link");
  social.addEventListener("click", () => {
    socialLinks.forEach((child) => {
      child.classList.remove("social__link-active");
      child.classList.add("social__link");
    });
    social.classList.add("social__link-active");
    social.classList.remove("social__link");
  });
});
