import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import { HiOutlineMinus } from "react-icons/hi2";

import { productsListContent } from "./../constants/index.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function ProductsList({
  cartItems,
  setCartItems,
  quantity,
  setQuantity,
  setModalContent,
}) {
  const { product } = useParams();
  const navigate = useNavigate();

  const [itemAdded, setItemAdded] = useState(false);

  const productData = productsListContent[product];
  const { images, itemName, price, weight, description, bestFor, ingredients } =
    productData;

  function addToCart() {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product
    );

    let updatedCart;

    if (existingItemIndex !== -1) {
      updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      const newItem = {
        ...productData,
        quantity,
        id: product,
      };
      updatedCart = [...cartItems, newItem];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setItemAdded(true);
  }

  useEffect(() => {
    setItemAdded(false);
    setQuantity(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const isInCart = cartItems.some((item) => item.id === product);
    setItemAdded(isInCart);
  }, [cartItems, product]);

  return (
    <>
      <header className="w-full flex items-center justify-center min-h-screen bg-warmBeige-tint text-primary max-lg:py-20 max-lg:px-10 max-sm:py-10 max-sm:px-5">
        <div className="w-full grid items-center grid-cols-2 gap-10 max-container px-5 pt-10 max-lg:grid-cols-1">
          <div className="flex justify-center items-center h-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              loop
              className="max-w-2xl h-[500px] rounded-xl"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`${itemName} image ${i + 1}`}
                    className="w-full h-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-center flex-col items-start h-full gap-5">
            <div className="text-[36px] text-black font-semibold">
              {itemName}
            </div>
            <div className="text-[20px] leading-7 tracking-wide font-bold text-deepGreen-shade">
              &#8377;{price} {weight && `[${weight}]`}
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-[18px] font-medium">Description</div>
              <div>{description}</div>
            </div>
            <div className="flex flex-col gap-2">
              <ul className="list-disc pl-6">
                {bestFor.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              {ingredients && (
                <>
                  <div className="text-[18px] font-medium">Ingredients</div>
                  <div>
                    {ingredients.map((ingredient, index) => (
                      <span key={index}>
                        {ingredient}
                        {index < ingredients.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
            {itemAdded == true ? (
              <div className="w-full flex items-center justify-center">
                <button
                  onClick={() => {
                    navigate("/cart");
                  }}
                  className="flex justify-center items-center gap-2 px-8 py-2 text-[18px] font-medium bg-[#DCCEBE] text-black rounded-md cursor-pointer hover:bg-[#EFE6DD] transition duration-200"
                >
                  <BsFillHandbagFill />
                  View Cart
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center border-[1px] border-[#999] rounded-xl bg-secondary">
                  <button
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-s-xl max-sm:px-2"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    disabled={quantity <= 1}
                  >
                    <HiOutlineMinus size="18px" />
                  </button>
                  <input
                    type="text"
                    className="px-4 py-2 w-12 text-center outline-none max-sm:px-2"
                    min={1}
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      setQuantity(isNaN(val) || val < 1 ? 1 : val);
                    }}
                  />
                  <button
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-e-xl max-sm:px-2"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    <IoAdd size="18px" />
                  </button>
                </div>
                <button
                  className="flex justify-center items-center gap-2 bg-deepGreen-shade text-secondary font-medium text-[18px] px-8 py-2 rounded-lg max-sm:px-4 max-sm:text-base max-sm:gap-1 max-sm:py-3 "
                  onClick={() => {
                    addToCart();
                    // setModalContent("addCart");
                  }}
                >
                  <span>
                    <BsFillHandbagFill />
                  </span>
                  <span>Add to Cart</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
