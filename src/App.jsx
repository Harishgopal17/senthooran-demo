import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from "./sections/Home";
import Nav from "./sections/Nav";
import Footer from "./sections/Footer";
import ProductsList from "./sections/ProductsList";
import CheckOut from "./sections/CheckOut";
import Modal from "./components/Modal";

import { termsAndCond, privacyPolicy } from "./constants/index.js";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [quantity, setQuantity] = useState(1);
  const [modalContent, setModalContent] = useState("");

  const navigate = useNavigate();

  function handleModalClose() {
    setModalContent("");
  }

  return (
    <>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cartItems={cartItems}
              setCartItems={setCartItems}
              quantity={quantity}
              setQuantity={setQuantity}
              setModalContent={setModalContent}
            />
          }
        />
        <Route
          path="/products/:product"
          element={
            <ProductsList
              cartItems={cartItems}
              setCartItems={setCartItems}
              quantity={quantity}
              setQuantity={setQuantity}
              setModalContent={setModalContent}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CheckOut cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
      </Routes>
      <Footer setModalContent={setModalContent} />
      {modalContent == "tc" && (
        <Modal>
          <div className="flex flex-col justify-center items-center gap-5">
            <h5 className="text-xl font-medium">Terms & Conditions</h5>
            <ul className=" px-5">
              {termsAndCond.map((text, index) => (
                <li key={index} className="text-sm list-disc pb-1">
                  {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleModalClose}
              className="mt-6 px-4 py-2 bg-[#588865] text-white rounded-md hover:bg-[#466c52] transition duration-200"
            >
              Ok
            </button>
          </div>
        </Modal>
      )}
      {modalContent == "pp" && (
        <Modal>
          <div className="flex flex-col justify-center items-center gap-5">
            <h5 className="text-xl font-medium">Privacy Policy</h5>
            <div className="text-sm leading-6">{privacyPolicy}</div>
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={handleModalClose}
              className="mt-6 px-4 py-2 bg-[#588865] text-white rounded-md hover:bg-[#466c52] transition duration-200"
            >
              Ok
            </button>
          </div>
        </Modal>
      )}
      {modalContent == "addCart" && (
        <Modal>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="text-base font-medium">
              Your item has been added to the cart successfully.
            </div>
            <div className="text-sm leading-6">
              You can continue shopping or proceed to checkout.
            </div>
            <div className="flex justify-center items-center gap-10">
              <button
                onClick={handleModalClose}
                className="mt-6 px-3 py-2 bg-[#2E7D32] text-white rounded-md cursor-pointer hover:bg-[#1B5E20] transition duration-200"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => {
                  navigate("/cart");
                  handleModalClose();
                }}
                className="mt-6 px-3 py-2 bg-[#DCCEBE] text-black rounded-md cursor-pointer hover:bg-[#EFE6DD] transition duration-200"
              >
                Go to Cart
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default App;
