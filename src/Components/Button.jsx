import { NavLink } from "react-router-dom";

function Button({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  to,
}) {
  return (
    <NavLink to={to}>
      <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
          fullWidth && "w-full"
        } ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red "
        }`}
      >
        {label}
        {iconUrl && (
          <img
            src={iconUrl}
            alt="icon"
            className="ml-2 rounded-fulld w-5 h-5"
          />
        )}
      </button>
    </NavLink>
  );
}

export default Button;
