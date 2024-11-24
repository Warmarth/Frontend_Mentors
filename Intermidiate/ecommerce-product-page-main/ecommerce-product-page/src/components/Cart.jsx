export const Cart = ({ content, removeCart }) => {
  const cartCard = `absolute top-0 -translate-x-[14.77rem]  translate-y-[3.2rem] w-[18rem] h-[13rem] rounded bg-lightgrayishblue flex flex-col duration-400 gap-y-5 z-20 border  border-lightgrayishblue`;
  return (
    <div className={cartCard}>
      <h3 className="border-b capitalize text-xs p-4 font-bold">cart</h3>
      {!content ? (
        <p
          className="text-sm h-full flex justify-center items-center duration-300"
          onClick={removeCart}
          tabIndex={0}
        >
          Your cart is empty
        </p>
      ) : (
        <div>{content}</div>
      )}
    </div>
  );
};
