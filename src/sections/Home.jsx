import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Senthooran Organic foods</title>
        <meta
          name="description"
          content="Get traditional, nutritious health mixes and organic foods delivered across Tamilnadu."
        />
        <meta
          name="keywords"
          content="organic, health mix, multigrain, kanji, herbal, millet, tamilnadu"
        />
        <meta name="robots" content="index, follow" />
        <meta name="og:locale" content="en_US" />
        <meta
          property="og:title"
          content="Senthooran Organic foods – Buy Online"
        />
        <meta
          property="og:description"
          content="Healthy & natural mixes to boost energy and immunity."
        />
        <meta property="og:url" content="https://senthooran.netlify.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Senthooran" />
        <link rel="canonical" href="https://senthooran.netlify.app" />
      </Helmet>
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
