import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold capitalize lg:max-w-lg dark:text-slate-50">
          We Provide you
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-slate-300">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 info-text lg:max-w-lg dark:text-slate-300">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-container"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
