"use strict";
const email = document.getElementById("email");
const form_button = document.getElementById("formButton");
const form = document.getElementById("form");
const success = document.querySelector("#success");
const img_container = document.querySelector("#image_container");
const user = document.getElementById("user");
const error_msg = document.querySelector("#form span");
const section = document.querySelector("section");
const main_content = document.querySelector(".main_content");
const dismiss = document.querySelector("#dismiss");
let timeOut;
const handleForm = (e) => {
    e.preventDefault();
    let email_value = email.value;
    if (timeOut) {
        clearTimeout(timeOut);
    }
    if (email_value === "" ||
        !email_value.includes("@") ||
        !email_value.endsWith(".com")) {
        error_msg.textContent = "valid email required";
        form.classList.add("error_msg");
    }
    else {
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
const handleDismiss = {
    handleClick: () => {
        img_container.classList.remove("dont");
        section.classList.remove("dont");
        window.location.reload();
    },
};
dismiss.addEventListener("click", handleDismiss.handleClick);
