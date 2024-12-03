type Handler = (event: Event) => void;
type Validator = (key: string, value: string | boolean) => boolean;

const success_message = document.getElementById("success_message");
const first = document.querySelector("#first") as HTMLInputElement;
const last = document.querySelector("#last") as HTMLInputElement;
const email = document.querySelector("#email") as HTMLInputElement;
const msg = document.querySelector("#msg") as HTMLInputElement;
const form = document.querySelector("form") as HTMLFormElement;
const radio = document.querySelectorAll(
  `input[type="radio"]`
) as NodeListOf<HTMLInputElement>;
const queryTypeFieldset = document.getElementById(
  "query_type"
) as HTMLFieldSetElement;
const query_type_span = queryTypeFieldset.querySelector(
  ".dont"
) as HTMLSpanElement;
const consent = document.querySelector(`#consent`) as HTMLInputElement;
const consent_span = document.querySelector(
  `.consent .dont`
) as HTMLSpanElement;
const button = document.querySelector("button") as HTMLButtonElement;

const validate: Validator = (key, value) => {
  if (["first", "last", "message"].includes(key) && !value) return false;
  if (
    key === "email" &&
    typeof value === "string" &&
    (!value || !value.includes("@") || !value.endsWith(".com"))
  ) {
    return false;
  }
  return true;
};

const validateRadio = (radios: NodeListOf<HTMLInputElement>): boolean =>
  Array.from(radios).some((radio) => radio.checked);

function validInput(input: HTMLInputElement): void {
  if (input) {
    input.addEventListener("blur", () => {
      const { name, value } = input;
      const isValid = validate(name, value);
      const span = input.nextElementSibling as HTMLSpanElement;

      if (!isValid) {
        span?.classList.add("err_msg");
        input.style.borderColor = "red";
      } else {
        span?.classList.remove("err_msg");
        input.style.borderColor = "";
      }
    });
  }
}

[first, last, email, msg].forEach(validInput);

const ClickHandler: Handler = (e) => {
  e.preventDefault();

  let allValid = true;
  [first, last, email, msg].forEach((input) => {
    const { name, value } = input;
    const isValid = validate(name, value);
    const span = input.nextElementSibling as HTMLSpanElement;

    if (!isValid) {
      span.classList.add("err_msg");
      input.style.borderColor = "red";
      allValid = false;
    } else {
      span.classList.remove("err_msg");
      input.style.borderColor = "";
    }
    return isValid;
  });

  const radioValid = validateRadio(radio);
  if (!radioValid) {
    query_type_span.classList.add("err_msg");
    allValid = false;
  } else {
    query_type_span.classList.remove("err_msg");
  }

  if (!consent.checked) {
    consent_span.classList.add("err_msg");
    allValid = false;
  } else {
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
