import { useState } from "react";

const Input = (props) => {
  const [focus, setFocus] = useState(false);
  const { id, onChange, value, errorMessage, ...inputprops } = props;
  const HandleFocus = (e) => {
    setFocus(true);
  };
  return (
    <>
      <input
        {...inputprops}
        onChange={onChange}
        value={value}
        onBlur={HandleFocus}
        focused={focus.toString()}
      />
      {focus && <span className="error">{errorMessage}</span>}
    </>
  );
};

export default Input;
