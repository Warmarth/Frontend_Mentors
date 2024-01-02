const Button = (props) => {
  return (
    <>
      <button className={props.buttonStyle} onClick={props.onClick}>
        {props.buttonText}
      </button>
    </>
  );
};

export default Button;
