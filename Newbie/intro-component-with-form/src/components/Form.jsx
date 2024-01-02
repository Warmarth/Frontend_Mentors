import { useEffect, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import "../App.css";

const Forms = () => {
  const formData = {
    FirstName: "",
    LastName: "",
    EmailAddress: "",
    Password: "",
  };

  const [signUpform, setSignUpform] = useState(formData);
  const [error, setError] = useState({});
  const [isSubmmit, setIsSubmmit] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "FirstName",
      type: "Text",
      errorMessage: "content invalid, should contain 3- 20 characters",
      placeholder: "First Name",
      pattern: "^[a-zA-Z]+(?:['-][a-zA-Z]{3,}+)*$",
      required: true,
    },
    {
      id: 2,
      name: "LastName",
      type: "Text",
      errorMessage: "content invalid, should contain 3- 20 characters",
      placeholder: "Last Name",
      pattern: "^[a-zA-Z]+(?:['-][a-zA-Z]{3,}+)*$",
      required: true,
    },
    {
      id: 3,
      name: "EmailAddress",
      type: "email",
      errorMessage: "content in valid should contain valid email address ",
      placeholder: "Email Address",
      required: true,
      pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
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

useEffect 
  const handleClick = (e) => {
    e.preventDefault();
  };


  return (
    <>
      <div>
        <strong>Try it free 7 days</strong> then $20/mo. thereafter
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
        <Button buttonText={`Claim your free trial`} onClick={handleClick} />
      </form>
      <footer>
        By clicking the button, you are agreeing to our
        <span>Terms and Services</span>
      </footer>
    </>
  );
};

export default Forms;
