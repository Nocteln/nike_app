import { star } from "../assets/icons";

function ReviewCard({ imgURL, customerName, rating, feedback }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-small text-center info-text dark:text-slate-300">
        {feedback}
      </p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="star"
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl font-montserrat text-slate-gray dark:text-slate-300">
          {rating}
        </p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold dark:text-slate-50">
        {customerName}
      </h3>
    </div>
  );
}

export default ReviewCard;
