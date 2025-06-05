import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import FAQ from "./FAQ";

export default function Home({
  cartItems,
  setCartItems,
  quantity,
  setQuantity,
  setModalContent,
}) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Products
        cartItems={cartItems}
        setCartItems={setCartItems}
        quantity={quantity}
        setQuantity={setQuantity}
        setModalContent={setModalContent}
      />
      <FAQ />
    </>
  );
}
