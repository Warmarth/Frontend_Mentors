export const Article = () => {
  return (
    <>
      <article className="space-y-3 ">
        <h4 className="uppercase text-orangebg font-extrabold text-[.7rem] mt-2">
          sneakes company
        </h4>
        <h6 className="text-2xl capitalize lg:text-3xl text-verydarkblue font-bold ">
          fall limited edition sneakers
        </h6>
        <p className="text-sm text-darkgrayishblue font-thin lg:text-base">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </article>
      <div className=" inline-flex w-full tracking-wider lg:flex-col  duration-300">
        <span className=" py-2 text-xl  inline-flex  items-center gap-3 font-[700] ">
          $125.00
          <span className="text-[0.7rem] leading-4 rounded bg-paleorangebg text-orangebg px-1  border">
            50%
          </span>
        </span>
        <span className=" my-auto text-grayishblue line-through text-[0.7rem] leading-4  ml-auto lg:ml-0">
          $250.00
        </span>
      </div>
    </>
  );
};
