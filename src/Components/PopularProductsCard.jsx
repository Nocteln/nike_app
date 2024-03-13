import { NavLink } from "react-router-dom";
import { star } from "../assets/icons";
import Button from "./Button";

const PopularProductCard = ({
  imgURL,
  imgDark,
  name,
  price,
  rating,
  darkMode,
  id,
}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <NavLink to={`product/${id}`}>
        <div className="relative group">
          <button className="  px-7 py-4 font-montserrat text-lg rounded-full transition-opacity duration-1000 absolute top-[45%] left-16 bg-coral-red z-20 hidden group-hover:block">
            Buy now!
          </button>
          <img
            src={!darkMode ? imgURL : imgDark}
            alt={name}
            className="w-[282px] h-[282px]  group-hover:opacity-50"
          />
        </div>
      </NavLink>

      <div className="mt-6 flex justify-start gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300">
          {rating}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-slate-50">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
