import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Validation from "./Validation";

const Forms = () => {
  const formData = {
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Password: "",
  };

  const [signUpform, setSignUpform] = useState(formData);
  const [error, setError] = useState({});
  // const [isSubmmit, setIsSubmmit] = useState(false);
  const inputs = [
    {
      id: 1,
      name: "FirstName",
      type: "Text",
      errorMessage: "content invalid, should contain 3- 20 characters",
      placeholder: "FirstName",
      error: error.FirstName,
      pattern: "^[a-zA-Z]+(?:['-][a-zA-Z]{3,}+)*$",
      required: true,
    },
    {
      id: 2,
      name: "LastName",
      type: "Text",
      errorMessage: "content invalid, should contain 3- 20 characters",
      placeholder: "Last Name",
      // pattern: "^[a-zA-Z]+(?:['-][a-zA-Z]{3,}+)*$",
      required: true,
      error: error.LastName,
    },
    {
      id: 3,
      name: "EmailAddress",
      type: "email",
      errorMessage: "content in valid should contain valid email address ",

      placeholder: true ? "Email Address" : "example@gmail.com",

      required: true,
      pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
      error: error.EmailAddress,
    },
    {
      id: 4,
      name: "Password",
      type: "password",
      errorMessage:
        "content invalid,should contain atleast 8 characters comprising of uppercase, lowercase , number and special chaeacter",
      placeholder: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$",
      required: true,
      error: error.Password,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    return setSignUpform((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function HandleSubmit(e) {
    e.preventDefault();
    setError(Validation(signUpform));
    EmailAddress.placeholder = true;
  }

  return (
    <div className="form">
      <div className="headingText">
        <span>Try it free 7 days</span> then $20/month thereafter
      </div>
      <form>
        {inputs.map((input) => {
          return (
            <Input
              key={input.id}
              {...input}
              onChange={handleChange}
              value={signUpform[input.name]}
            />
          );
        })}
        {/* {error.Password && <span>{error.Password}</span>} */}
        <Button buttonText={`Claim your free trial`} onClick={HandleSubmit} />
        <footer>
          By clicking the button, you are agreeing to our
          <span>Terms and Services</span>
        </footer>
      </form>
    </div>
  );
};

export default Forms;
