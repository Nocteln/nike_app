import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { offer, offerDark } from "../assets/images";

const SpecialOffer = ({ darkMode }) => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={!darkMode ? offer : offerDark}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold capitalize lg:max-w-lg dark:text-slate-50">
          <span className="text-coral-red "> Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text dark:text-slate-300">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text lg:max-w-lg dark:text-slate-300">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight} />
          <Button
            label="learn more"
            backgroundColor="bg-dark-gray"
            borderColor="border-slate-50"
            textColor="text-slate-50"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
