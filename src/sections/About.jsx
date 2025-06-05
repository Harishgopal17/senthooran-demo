import { whyUs } from "./../constants/index.js";

export default function About() {
  return (
    <section
      className="bg-warmBeige-tint text-primary pb-20 scroll-mt-[100px]"
      id="about"
    >
      <div className="flex flex-col max-container px-5 max-lg:px-10">
        <div className="flex items-center justify-between gap-80 mb-10 max-lg:flex-col max-lg:gap-10 ">
          <h2 className="text-[32px] font-semibold">
            Why Choose Us <br /> For Your Healthy Food?
          </h2>
          <div className="text-[18px] w-[40%] text-primary-shade max-lg:w-full">
            At Senthooran, we don’t just sell products — we carry forward a
            tradition of wellness and care. Here’s why our customers love us
          </div>
        </div>
        <div className="flex w-full items-center justify-center flex-wrap gap-10 max-md:grid max-lg:grid-cols-2 max-sm:flex max-sm:flex-col max-sm:gap-5 ">
          {whyUs.map((val, index) => (
            <div
              key={index}
              className="bg-secondary flex flex-col w-[300px] h-[350px] p-5 gap-3 rounded-2xl shadow-c2xl hover:scale-[1.02] scale transition-all duration-300 max-sm:w-full max-sm:h-auto"
            >
              <div className="bg-deepGreen-shade w-max p-3 rounded-4xl">
                <val.img size="36px" />
              </div>
              <div className="text-[18px] font-roboto font-semibold">
                {val.heading}
              </div>
              <p className="leading-7">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
