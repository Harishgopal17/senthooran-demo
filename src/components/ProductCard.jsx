import { useState } from "react";
import { HiOutlineArrowUpRight, HiOutlineArrowRight } from "react-icons/hi2";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { productsListContent } from "./../constants/index.js";

export default function ProductCard({
  img,
  name,
  price,
  weight,
  param,
  cartItems,
  setCartItems,
  quantity,
  setQuantity,
  setModalContent,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const productData = productsListContent[param];

  function addToCart() {
    const existingItemIndex = cartItems.findIndex((item) => item.id === param);

    let updatedCart;

    if (existingItemIndex !== -1) {
      updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      const newItem = {
        ...productData,
        quantity,
        id: param,
      };
      updatedCart = [...cartItems, newItem];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return (
    <div
      className="w-[300px] bg-secondary border-[1px] border-[#999] rounded-2xl relative pb-3 mb-10 hover:scale-[1.01] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${param}`}>
        <div className="w-full flex items-center justify-center bg-white rounded-2xl">
          <img src={img} alt={name} className="h-[300px] rounded-2xl" />
        </div>
        <div className="flex items-center justify-between p-5">
          <div className="">
            <div className="text-[18px] font-medium">{name}</div>
            <div className="flex items-center gap-5">
              <span>&#8377;{price}</span>
              {weight && <span>[{weight}]</span>}
            </div>
          </div>
          <div className="self-start">
            <span className="bg-yellow-shade flex justify-center items-center h-10 w-10 rounded-full cursor-pointer">
              {isHovered ? (
                <HiOutlineArrowRight sixe="16px" />
              ) : (
                <HiOutlineArrowUpRight size="16px" />
              )}
            </span>
          </div>
        </div>
      </Link>
      <div
        onClick={() => {
          addToCart();
          setTimeout(() => {
            setModalContent("addCart");
          }, 500);
        }}
        className="w-max flex justify-center items-center gap-2 bg-[#eee] px-2 py-1 border-[1px] border-[#999] rounded-2xl absolute bottom-[-14px] left-[25%] cursor-pointer hover:bg-yellow-shade transition-colors duration-300"
      >
        <span>
          <CiCirclePlus size="20px" />
        </span>
        <span className="font-medium">Add to Cart</span>
      </div>
    </div>
  );
}
