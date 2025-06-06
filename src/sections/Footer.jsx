import { useNavigate, useLocation, Link } from "react-router-dom";
import { contact, navLinks } from "./../constants/index";
import logo1 from "./../assets/images/logo1.png";
import logo2 from "./../assets/images/logo2.png";
import logo3 from "./../assets/images/logo3.jpg";
import logo4 from "./../assets/images/logo4.png";

export default function Footer({ setModalContent }) {
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
  return (
    <footer className="w-full bg-primary text-secondary">
      <div className="flex flex-col gap-5  max-container px-5 pt-8 pb-3 max-lg:px-10 max-md:px-5">
        {/* <div className="flex items-center justify-between"> */}
        <div className="grid grid-cols-5 gap-20 max-lg:grid-cols-3  max-lg:gap-14 max-md:gap-x-2 max-md:gap-y-9 max-sm:grid-cols-1">
          <div className="flex flex-col gap-5 col-span-2 max-lg:col-span-3 max-sm:col-span-1">
            <div className="flex items-center gap-3">
              <img src={logo4} alt="" className="w-10 h-10 rounded-3xl" />
              <span className="text-2xl font-medium font-rubic max-sm:text-xl">
                Senthooran Organic Foods
              </span>
            </div>
            <div className="text-sm leading-6 tracking-wide">
              Bringing you the goodness of traditional homemade health mixes and
              organic products. Made with natural ingredients, rooted in
              tradition, and delivered with care.
            </div>
          </div>
          <div className="flex flex-col gap-5 self-start">
            <div className="text-2xl font-medium">Explore</div>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li className=" text-sm" key={label}>
                  <p
                    onClick={() => handleNavClick(href)}
                    className="hover:text-yellow-shade transition-all duration-300 cursor-pointer"
                  >
                    {label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 self-start">
            <div className="text-2xl font-medium">Company</div>
            <div className="flex flex-col gap-3 items-start">
              <button
                onClick={() => setModalContent("pp")}
                className="cursor-pointer text-sm hover:text-yellow-shade transition-all duration-300"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModalContent("tc")}
                className="cursor-pointer text-sm hover:text-yellow-shade transition-all duration-300"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 self-start">
            <div className="text-2xl font-medium">Contact</div>
            <div className="flex flex-col gap-3">
              {contact.map((Val, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Val.img />
                  <span>{Val.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-xs">
          &copy; 2025 Senthooran | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
