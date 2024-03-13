function Button({ label, iconUrl, backgroundColor, borderColor, textColor }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red "
      }`}
    >
      {label}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="ml-2 rounded-fulld w-5 h-5" />
      )}
    </button>
  );
}

export default Button;
