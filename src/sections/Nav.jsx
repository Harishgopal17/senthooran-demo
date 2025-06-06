import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { navLinks } from "./../constants";
import { BsFillHandbagFill } from "react-icons/bs";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

import logo1 from "./../assets/images/logo1.png";
import logo2 from "./../assets/images/logo2.png";
import logo3 from "./../assets/images/logo3.jpg";
export default function Nav({ cartItems }) {
  const [mblMenu, setMblMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (hash) => {
    if (location.pathname === "/") {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/" + hash);
    }
  };

  const toggleMenu = () => setMblMenu(!mblMenu);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`w-full py-3 px-3 fixed z-10 text-black bg-transparent transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md border-b-[0.5px]" : "border-none"
        } max-xl:px-5`}
      >
        <nav className="flex justify-between items-center max-container">
          <div className="cursor-pointer">
            <a href="/" className="flex items-center justify-center gap-2">
              <img src={logo1} alt="" className="w-12 h-12 rounded-3xl" />
              <h1 className="text-2xl font-medium font-rubic">
                Senthooran <br />
                Organic Foods
              </h1>
            </a>
          </div>
          <ul className="flex justify-center items-center gap-8 max-md:hidden">
            {navLinks.map(({ href, label }) => (
              <li
                className="cursor-pointer relative group text-base"
                key={label}
              >
                <p
                  onClick={() => handleNavClick(href)}
                  className="hover-underline-text group-hover:text-black"
                >
                  <span className="hover-underline-line group-hover:w-full"></span>
                  {label}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-8">
            <div className="flex justify-center items-center gap-2 relative">
              <Link to="/cart">
                <BsFillHandbagFill
                  size={24}
                  className="cursor-pointer transition-all duration-300"
                />
                <span
                  className={`${
                    cartItems.length < 1 && "hidden"
                  } absolute bg-white px-[6px] text-sm rounded-2xl top-[-7px] left-[16px]`}
                >
                  {cartItems.length}
                </span>
              </Link>
            </div>
            <div
              className="hidden max-md:block z-30 cursor-pointer transition-all ease duration-[600ms]"
              onClick={toggleMenu}
            >
              {!mblMenu ? (
                <VscMenu size={25} />
              ) : (
                <AiOutlineClose size={25} color="black" />
              )}
            </div>
            <div
              className={
                mblMenu
                  ? "fixed top-0 left-0 right-0 w-full h-[50%] z-20 ease duration-[600ms] hidden max-md:block"
                  : "fixed top-[-500%] left-0 right-0 w-full h-[auto] z-20 ease duration-[300ms]"
              }
            >
              <ul className="flex flex-col justify-center items-center pt-5 font-[400] text-[18px] text-black bg-warmBeige-tint">
                {navLinks.map(({ href, label }) => (
                  <li
                    className="px-10 py-3 border-b border-slate-gray w-full"
                    key={label}
                  >
                    <p
                      onClick={() => {
                        toggleMenu(), handleNavClick(href);
                      }}
                    >
                      {label}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
