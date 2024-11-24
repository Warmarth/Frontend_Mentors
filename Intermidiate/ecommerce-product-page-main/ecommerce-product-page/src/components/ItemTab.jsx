export const ItemTab = ({ tab, click }) => {
  return (
    <div
      className="hover:border-orangebg border-b-transparent border-b-2 w-fit duration-200  h-full"
      onClick={click}
    >
      <p className="font-bold text-base text-darkgrayishblue capitalize cursor-pointer">
        {tab}
      </p>
    </div>
  );
};
