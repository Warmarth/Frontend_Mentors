import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { projectContents } from "./data";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [setter, setSetter] = useState("nav");
  function handleClick() {
    setMenu((prev) => !prev);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setSetter("open");
      } else {
        setSetter("nav");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header>
      <img src={logo} alt="" />
      {/* {menu && (
        <dt>
          {projectContents.navbar.map((item, idx) => (
            <dl key={idx}>{item}</dl>
          ))}
          <hr className="hr" />
          <button>login</button>
        </dt>
      )} */}
      <nav className={`nav ${menu ? setter : ""}`}>
        <ul>
          {projectContents.navbar.map((item, idx) => {
            return (
              <li key={idx} className="">
                {item}
              </li>
            );
          })}
        </ul>
        <hr className="hr" />
        <button>login</button>
      </nav>
      <img src={menu ? close : hamburger} alt="icon" onClick={handleClick} />
    </header>
  );
};

export default Header;
