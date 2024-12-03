"use strict";
const success_message = document.getElementById("success_message");
const first = document.querySelector("#first");
const last = document.querySelector("#last");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const form = document.querySelector("form");
const radio = document.querySelectorAll(`input[type="radio"]`);
const queryTypeFieldset = document.getElementById("query_type");
const query_type_span = queryTypeFieldset.querySelector(".dont");
const consent = document.querySelector(`#consent`);
const consent_span = document.querySelector(`.consent .dont`);
const button = document.querySelector("button");
const validate = (key, value) => {
    if (["first", "last", "message"].includes(key) && !value)
        return false;
    if (key === "email" &&
        typeof value === "string" &&
        (!value || !value.includes("@") || !value.endsWith(".com"))) {
        return false;
    }
    return true;
};
const validateRadio = (radios) => Array.from(radios).some((radio) => radio.checked);
function validInput(input) {
    if (input) {
        input.addEventListener("blur", () => {
            const { name, value } = input;
            const isValid = validate(name, value);
            const span = input.nextElementSibling;
            if (!isValid) {
                span?.classList.add("err_msg");
                input.style.borderColor = "red";
            }
            else {
                span?.classList.remove("err_msg");
                input.style.borderColor = "";
            }
        });
    }
}
[first, last, email, msg].forEach(validInput);
const ClickHandler = (e) => {
    e.preventDefault();
    let allValid = true;
    [first, last, email, msg].forEach((input) => {
        const { name, value } = input;
        const isValid = validate(name, value);
        const span = input.nextElementSibling;
        if (!isValid) {
            span.classList.add("err_msg");
            input.style.borderColor = "red";
            allValid = false;
        }
        else {
            span.classList.remove("err_msg");
            input.style.borderColor = "";
        }
        return isValid;
    });
    const radioValid = validateRadio(radio);
    if (!radioValid) {
        query_type_span.classList.add("err_msg");
        allValid = false;
    }
    else {
        query_type_span.classList.remove("err_msg");
    }
    if (!consent.checked) {
        consent_span.classList.add("err_msg");
        allValid = false;
    }
    else {
        consent_span.classList.remove("err_msg");
    }
    if (allValid) {
        const userData = new FormData(form);
        console.log(Object.fromEntries(userData));
        success_message?.classList.add("add-msg");
        setTimeout(() => {
            success_message?.classList.remove("add-msg");
            form.reset();
        }, 1000);
    }
};
button.addEventListener("click", ClickHandler);
