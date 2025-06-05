import { useState } from "react";
import { useNavigate } from "react-router-dom";
import homepage from "./../assets/images/homepage.png";
import not_allowed from "./../assets/icons/not_allowed.svg";
import { HiOutlineArrowUpRight, HiOutlineArrowRight } from "react-icons/hi2";
import { GiWheat } from "react-icons/gi";
import { GiPowder } from "react-icons/gi";
import { HiBeaker } from "react-icons/hi2";

export default function Hero() {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <header
        id="home"
        className="w-full flex items-center justify-center min-h-screen bg-warmBeige-tint text-primary max-md:pb-15 max-sm:min-h-0"
      >
        <div className="w-full grid items-center grid-cols-5 gap-20 max-container px-5">
          <div className="flex justify-center flex-col items-start h-full col-span-3 gap-6 max-lg:col-span-5 max-md:pt-28">
            <h1 className="text-[42px] leading-13 text-black font-semibold max-sm:text-[36px]">
              Discover Our Range of&nbsp;
              <span className="text-yellow-shade font-semibold">
                Handcrafted
              </span>
              &nbsp; Health Mixes and&nbsp;
              <span className="text-yellow-shade font-semibold">
                Traditional Essentials
              </span>
            </h1>
            <p className="text-[18px] leading-7 tracking-wide max-sm:text-base">
              At Senthooran, we believe that health begins with what we eat —
              that’s why every product we offer is crafted using traditional
              methods, natural ingredients, and no shortcuts.
            </p>
            <div className="pb-10">
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => navigate("/#products")}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="py-2.5 px-5 bg-yellow-shade font-semibold rounded-4xl hover:bg-yellow-500 transition-colors duration-300">
                  Order Now
                </p>
                <span className="bg-yellow-shade flex justify-center items-center h-9  w-9 rounded-full hover:bg-yellow-500 transition-colors duration-300">
                  {isHovered ? (
                    <HiOutlineArrowRight sixe="16px" />
                  ) : (
                    <HiOutlineArrowUpRight size="16px" />
                  )}
                </span>
              </div>
            </div>
            <div className="flex gap-3 max-md:flex-col max-md:self-center max-md:gap-5">
              <div className="bg-deepGreen-shade flex justify-center items-center rounded-2xl pl-1 pr-2 py-1 gap-1">
                <span className="bg-secondary text-deepGreen-tint flex justify-center items-center rounded-4xl h-6 w-6">
                  <GiWheat size="20px" />
                </span>
                <span className="text-secondary font-semibold text-[18px]">
                  Made with natural ingredients
                </span>
              </div>
              <div className="bg-deepGreen-shade flex justify-center items-center rounded-2xl pl-1 pr-2 py-1 gap-1 relative max-md:self-start">
                <span className="text-secondary flex justify-center items-center rounded-4xl h-6 w-6">
                  <GiPowder size="22px" />
                </span>
                <span className="flex justify-center items-center rounded-4xl h-6 w-6 absolute top-[5.5px] left-[4px]">
                  <img src={not_allowed} alt="not_allowed" className="w" />
                </span>
                <span className="text-secondary font-semibold text-[18px]">
                  No Sugar
                </span>
              </div>
              <div className="bg-deepGreen-shade flex justify-center items-center rounded-2xl pl-1 pr-2 py-1 gap-1 relative max-md:self-start">
                <span className="text-secondary flex justify-center items-center rounded-4xl h-6 w-6">
                  <HiBeaker size="18px" />
                </span>
                <span className="flex justify-center items-center rounded-4xl h-6 w-6 absolute top-[5.5px] left-[4px]">
                  <img src={not_allowed} alt="not_allowed" className="w" />
                </span>
                <span className="text-secondary font-semibold text-[18px]">
                  Preservative free
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center col-span-2 max-lg:hidden">
            <img src={homepage} alt="healthmix" className="w-[500px]" />
          </div>
        </div>
      </header>
    </>
  );
}
