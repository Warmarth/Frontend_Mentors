const email = document.getElementById("email") as HTMLInputElement;
const form_button = document.getElementById("formButton") as HTMLButtonElement;
const form = document.getElementById("form") as HTMLFormElement;
const success = document.querySelector("#success") as HTMLDivElement;
const img_container = document.querySelector(
  "#image_container"
) as HTMLPictureElement;
const user = document.getElementById("user") as HTMLSpanElement;
const error_msg = document.querySelector("#form span") as HTMLSpanElement;
const section = document.querySelector("section") as HTMLSelectElement;
const main_content = document.querySelector(".main_content") as HTMLBodyElement;
const dismiss = document.querySelector("#dismiss") as HTMLButtonElement;

type handleClick = (event: Event) => void;
interface clickHandler {
  handleClick: () => void;
}

let timeOut: any;

const handleForm: handleClick = (e) => {
  e.preventDefault();
  let email_value = email.value;

  if (timeOut) {
    clearTimeout(timeOut);
  }
  if (
    email_value === "" ||
    !email_value.includes("@") ||
    !email_value.endsWith(".com")
  ) {
    error_msg.textContent = "valid email required";
    form.classList.add("error_msg");
  } else {
    user.textContent = email_value;
    form.classList.remove("error_msg");
    error_msg.textContent = "";
    email_value = "";
    img_container.classList.add("dont");
    section.classList.add("dont");
    main_content.style.boxShadow = "none";
    timeOut = setTimeout(() => {
      success.classList.add("message_container");
    }, 500);

    console.log(timeOut);
  }
};

form_button.addEventListener("click", handleForm);

const handleDismiss: clickHandler = {
  handleClick: () => {
    img_container.classList.remove("dont");
    section.classList.remove("dont");
    window.location.reload();
  },
};

dismiss.addEventListener("click", handleDismiss.handleClick);
