import Button from "../Components/Button";

const Suscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 ="
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-ld font-palanquin font-bold">
        Sign Up For <span className="text-coral-red">Updates</span> & Newslatter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gpa-5 p-2.5 sm:border sm:border-slae-gray rounded-full">
        <input type="text" placeholder="suscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Suscribe;
