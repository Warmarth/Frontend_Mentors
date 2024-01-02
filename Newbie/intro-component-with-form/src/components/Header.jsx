const Header = (props) => {
  return (
    <>
      <header className={props.headingStyle}>{props.headingText}</header>
    </>
  );
};

export default Header;
