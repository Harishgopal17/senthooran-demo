import { useState } from "react";
import { BsSuitDiamond, BsSuitDiamondFill } from "react-icons/bs";
import { faqContent } from "./../constants/index.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-warmBeige-tint text-primary pb-20 scroll-mt-[100px]"
      id="faq"
    >
      <div className="w-full flex flex-col justify-center items-center bg-warmBeige-tint text-primary max-container px-5">
        <div className="text-[32px] font-semibold pb-10">
          Frequently Asked Questions (FAQ)
        </div>
        <div className="">
          {faqContent.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="w-[700px] bg-[#f4ebcf] mb-2 rounded-2xl overflow-hidden max-sm:w-full">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center p-4 text-left text-lg font-medium transition-all duration-300 hover:bg-warmBeige-shade rounded-2xl cursor-pointer"
    >
      {title}
      <span>{isOpen ? <BsSuitDiamondFill /> : <BsSuitDiamond />}</span>
    </button>
    {/* {isOpen && (
      <div className="p-4 text-primary-shade transition-all duration-300 overflow-hidden">
        {content}
      </div>
    )} */}
    <div
      className={`px-4 text-primary-shade transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-40 py-4" : "max-h-0 py-0"
      }`}
    >
      {content}
    </div>
  </div>
);
