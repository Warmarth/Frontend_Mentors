export default function Validation(value) {
  const error = {};
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
  const passwordPattern =
    /^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,20}$/;
  if (!value.FirstName) {
    error.FirstName = "Firstname cannot be empty";
  }
  if (!value.LastName) {
    error.LastName = "Lasttname cannot be empty";
  }

  if (value.EmailAddress === "") {
    error.EmailAddress = "Email Address cannot be empty";
  } else if (!emailPattern.test(value.EmailAddress)) {
    error.EmailAddress = "email is not correct";
  }

  if (value.Password === "") {
    error.Password = "Password cannot be empty";
  } else if (!passwordPattern.test(value.password)) {
    error.Password = "password is not correct";
  }
  return error;
}
