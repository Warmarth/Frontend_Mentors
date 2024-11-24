import deleteIcon from "../images/icon-delete.svg";
import cardImage from "../images/image-product-1-thumbnail.jpg";
import { useContext } from "react";
import { countContext } from "../Context";

export const Card = ({ count }) => {
  const { reset } = useContext(countContext);

  const sum_total = 125 * count;
  return (
    <div className=" w-full px-2 space-y-3">
      <article className="flex items-center gap-1 justify-between">
        <img src={cardImage} alt="" width={50} className="rounded-md" />
        <ul className="capitalize text-darkgrayishblue text-[.88rem]">
          <li>fall limited edition sneakers</li>
          <li>
            {`$125.00 x ${count} `}
            <span className="text-verydarkblue font-bold">
              ${sum_total.toFixed(2)}
            </span>
          </li>
        </ul>
        <img src={deleteIcon} alt=" deleteIcon" onClick={reset} />
      </article>
      <button
        className="w-full border p-3 rounded-md  bg-orangebg text-sm text-lightgrayishblue"
        type="button"
      >
        Checkout
      </button>
    </div>
  );
};
