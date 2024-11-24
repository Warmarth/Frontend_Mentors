import { productTiles } from "../utilties";
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";
import { useState,useEffect } from "react";

export const ImageDisplay = () => {
  const [showCase, setShowCase] = useState(0);

  const slideRight = () => {
    setShowCase((index) => (index === 0 ? productTiles.length - 1 : index - 1));
  };
  const slideLeft = () => {
    setShowCase((index) => (index === productTiles.length - 1 ? 0 : index + 1));
  };

  const thumbDisplay = (id) => {
    const newId = productTiles.find((item) => item.productId === id);
    setShowCase(newId.productId - 1);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowCase((index) =>
  //       index === productTiles.length - 1 ? 0 : index + 1
  //     );
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [showCase]);

  return (
    <>
      <div className=" relative z-0">
        <button
          className="bg-lightgrayishblue absolute w-6 h-6 inline-flex items-center rounded-full top-1/2 right-3 lg:hidden "
          onClick={slideLeft}
        >
          <img src={next} alt="next" className="m-auto" width={8} />
        </button>
        <div className="flex flex-col gap-3 lg:max-w-[26rem] lg:py-3 duration-300">
          <div>
            <img
              key={productTiles[showCase].productId}
              src={productTiles[showCase].image}
              alt={productTiles[showCase].altname}
              className="lg:rounded-lg  duration-500 ease-in-out"
            />
          </div>
          <div className="lg:flex items-center justify-around gap-2 hidden duration-300">
            {productTiles.map((productImage) => (
              <div
                key={productImage.productId}
                className={`${
                  productImage.productId === showCase + 1 && "border-2 rounded-lg border-orangebg opacity-100" 
                }`}
              >
                <img
                  src={productImage.thumbnail}
                  alt={productImage.altname}
                  className="rounded-lg"
                  onClick={() => thumbDisplay(productImage.productId)}
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className="bg-lightgrayishblue absolute w-6 h-6 inline-flex items-center rounded-full left-3 top-1/2 lg:hidden"
          onClick={slideRight}
        >
          <img src={previous} alt="previous" className="m-auto" width={8} />
        </button>
      </div>
    </>
  );
};
