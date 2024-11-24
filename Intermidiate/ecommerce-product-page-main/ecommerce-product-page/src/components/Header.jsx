import avater from "../images/image-avatar.png";
import logo from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import { Card } from "./Card";
import { menuItem } from "../utilties";
import { useState, useContext, useEffect } from "react";
import { countContext } from "../Context";
import { ItemTab } from "./ItemTab";
import { Cart } from "./Cart";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const { count } = useContext(countContext);

  const menuHandle = () => {
    setMenu((prev) => !prev);
  };

  const cartHandler = () => setShowCart((prev) => !prev);

  // const cartRemove = () => setShowCart(false);

  const contentValidator = (occurance) => {
    return occurance === 0 || occurance === null ? null : (
      <Card count={occurance} />
    );
  };
  const actualContent = contentValidator(count);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width > 1024) {
      setMenu(false);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <header className="flex items-center justify-between pb-4 w-full relative  ">
        <div className="flex items-center text-center gap-4  cursor-pointer lg:mr-10">
          <img
            src={logo}
            alt="logo"
            onClick={menuHandle}
            className="lg:hidden"
          />
          <h2 className="text-2xl md:text-3xl font-kumbh font-bold text-verydarkblue pb-1 px-2">
            sneakers
          </h2>
        </div>
        {menu ? (
          <div className="absolute top-0 left-0 w-2/3 h-screen space-y-7 pt-5 pl-3 bg-lightgrayishblue duration-300  z-30">
            {menu && (
              <span className="" onClick={menuHandle}>
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                    fill="#69707D"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
            )}
            <div className="space-y-5">
              {menuItem.map((item, index) => (
                <ItemTab key={index} tab={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className=" hidden lg:flex items-start gap-x-5 mr-auto text-lightgrayishblue font-normal duration-300  ">
            {menuItem.map((item, index) => (
              <div className=" pt-2 " key={index}>
                <ItemTab tab={item} />
              </div>
            ))}
          </div>
        )}
        <div className="space-x-4 lg:space-x-8">
          <span
            onClick={cartHandler}
            className="relative duration-300"
            tabIndex={0}
          >
            {count && (
              <span className="w-3 h-3 text-[.6rem] rounded-full bg-orangebg text-lightgrayishblue flex items-center justify-center absolute -right-2 -top-1  ">
                {count}
              </span>
            )}
            <img src={cart} alt="cart" width={15} className="inline" />
            {showCart && <Cart content={actualContent} />}
          </span>
          <span>
            <img
              src={avater}
              alt="avater"
              width={25}
              className="inline border rounded-full border-orangebg"
            />
          </span>
        </div>
      </header>
    </>
  );
};
