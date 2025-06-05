import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import blackRiceMain from "./../assets/images/blackRiceMain.jpg";

export default function CheckOut({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleQuantityChange = (id, action) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQty =
          action === "inc" ? item.quantity + 1 : Math.max(item.quantity - 1, 1);
        return { ...item, quantity: newQty };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleRemove = (id) => {
    const filteredItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredItems);
    localStorage.setItem("cart", JSON.stringify(filteredItems));
  };

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const doorNo = document.getElementById("doorNo").value.trim();
    const street = document.getElementById("street").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const pincode = document.getElementById("pincode").value.trim();

    if (!name || !phone || !doorNo || !street || !city || !state || !pincode) {
      alert("Please fill in all required fields.");
      return;
    }

    const address = `${doorNo}, ${street}, ${city}, ${state} - ${pincode}`;

    let message = `🛒 *New Order from Senthooran Website*\n`;
    message += `------------------------------\n`;
    cartItems.forEach((item, i) => {
      message += `${i + 1}. ${item.itemName} - ${item.quantity} x ₹${
        item.price
      } [Weight: ${item.weight}]\n`;
    });
    message += `------------------------------\n`;
    message += `👤 *Customer Details*\n`;
    message += `Name: ${name}\n`;
    message += `Phone: ${phone}\n`;
    message += `Address: ${address}\n`;
    message += `------------------------------\n`;
    message += `💰 Total Amount (incl. delivery): ₹${getTotalPrice() + 40}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/919381066715?text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center gap-6 px-4 bg-warmBeige-tint text-primary">
        <h2 className="text-2xl md:text-3xl font-semibold flex item justify-center gap-3">
          <span>Your cart is empty</span> <TiShoppingCart size="40px" />
        </h2>
        <p className="text-base text-gray-600">
          Looks like you haven't added anything yet.
        </p>
        <button
          onClick={() => navigate("/#products")}
          className="px-6 py-2 bg-deepGreen-shade text-white rounded-md hover:bg-green-700 transition"
        >
          Continue Shopping
        </button>
      </section>
    );
  }

  return (
    <div className="w-full flex justify-center pt-20 bg-warmBeige-tint text-primary max-sm:pt-24">
      <div className="w-full flex flex-col max-container gap-10 px-20 pb-20 max-lg:px-10 max-sm:px-5">
        <div className="text-[20px] text-primary-shade">
          <span className="text-3xl font-bold text-primary">Your Cart</span> (
          {cartItems.length} items)
        </div>
        <div className="grid items-center justify-between grid-cols-3 gap-20 max-lg:gap-14 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-start max-md:w-full">
          <div className="col-span-2">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 items-center bg-secondary py-2 rounded-xs"
              >
                <div className="flex flex-col items-center max-sm:w-[30%]">
                  <img src={blackRiceMain} className="w-[120px]" />
                  <div className="flex items-center border-[1px] border-[#999] rounded-xl bg-secondary">
                    <button
                      className="px-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-s-xl"
                      onClick={() => handleQuantityChange(item.id, "dec")}
                    >
                      -
                    </button>
                    <span className="px-2 w-12 text-center">
                      {item.quantity}
                    </span>
                    <button
                      className="px-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-e-xl"
                      onClick={() => handleQuantityChange(item.id, "inc")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pr-5">
                  <div className="text-lg font-medium max-md:text-base">
                    {item.itemName}
                  </div>
                  <div className="flex items-center justify-between gap-20 max-sm:flex-col max-sm:items-start max-sm:gap-3">
                    <span className="flex gap-2 text-lg max-md:text-base">
                      <span className="font-medium">&#8377;{item.price}</span>
                      <span>[{item.weight}]</span>
                    </span>
                    <span className="flex gap-2 text-base">
                      <span>Subtotal:</span>
                      <span className="font-medium">
                        &#8377;{item.price * item.quantity}
                      </span>
                    </span>
                  </div>
                  <div
                    className="cursor-pointer w-max rounded-xl font-medium text-red-500 px-2 py-1 transition-all duration-300 hover:bg-[#eee]"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3 items-start justify-center w-[300px] self-start bg-secondary px-3 py-2 rounded-xs max-sm:w-full">
            <div className="text-lg font-medium uppercase">Price details</div>
            <div className="w-full flex items-center justify-between">
              <span>Price ({cartItems.length} items)</span>
              <span>&#8377;{getTotalPrice()}</span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Delivery Charges</span>
              <span>&#8377;40</span>
            </div>
            <div className="w-full flex items-center justify-between text-lg font-medium border-t-2 border-dashed border-[#999] pt-2">
              <span>Total Amount</span>
              <span>&#8377;{getTotalPrice() + 40}</span>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-3 w-[80%] max-sm:w-full">
            <div className="text-xl font-medium uppercase">
              Shipping Details
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="relative w-full">
                <input
                  id="name"
                  type="text"
                  className={`peer w-full border-b-2 pt-8 pb-2 text-lg focus:outline-none focus:border-black transition-all`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className={`absolute left-0 top-2 text-sm  text-primary transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-focus:top-2 peer-focus:text-sm peer-focus:text-black`}
                >
                  Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  id="phone"
                  type="number"
                  className={`peer w-full border-b-2 pt-8 pb-2 text-lg focus:outline-none focus:border-black transition-all`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="phone"
                  className={`absolute left-0 top-2 text-sm  text-primary transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-focus:top-2 peer-focus:text-sm peer-focus:text-black`}
                >
                  Phone Number
                </label>
              </div>
              <div className="relative w-full">
                <input
                  id="doorNo"
                  type="text"
                  className={`peer w-full border-b-2 pt-8 pb-2 text-lg focus:outline-none focus:border-black transition-all`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="doorNo"
                  className={`absolute left-0 top-2 text-sm  text-primary transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-focus:top-2 peer-focus:text-sm peer-focus:text-black`}
                >
                  Flat no / Building Name
                </label>
              </div>
              <div className="relative w-full">
                <input
                  id="street"
                  type="text"
                  className={`peer w-full border-b-2 pt-8 pb-2 text-lg focus:outline-none focus:border-black transition-all`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="street"
                  className={`absolute left-0 top-2 text-sm  text-primary transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-focus:top-2 peer-focus:text-sm peer-focus:text-black`}
                >
                  Locality / Area / Street
                </label>
              </div>
              <div className="relative w-full">
                <input
                  id="city"
                  type="text"
                  className={`peer w-full border-b-2 pt-8 pb-2 text-lg focus:outline-none focus:border-black transition-all`}
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="city"
                  className={`absolute left-0 top-2 text-sm  text-primary transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-focus:top-2 peer-focus:text-sm peer-focus:text-black`}
                >
                  City
                </label>
              </div>
              <div className="flex gap-10">
                <div className="relative w-full">
                  <input
                    id="state"
                    type="text"
                    className={`peer w-full border-b-2 pt-8 pb-2 text-lg focus:outline-none focus:border-black transition-all`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="state"
                    className={`absolute left-0 top-2 text-sm  text-primary transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-focus:top-2 peer-focus:text-sm peer-focus:text-black`}
                  >
                    State
                  </label>
                </div>
                <div className="relative w-full">
                  <input
                    id="pincode"
                    type="number"
                    className={`peer w-full border-b-2 pt-8 pb-2 text-lg focus:outline-none focus:border-black transition-all`}
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="pincode"
                    className={`absolute left-0 top-2 text-sm  text-primary transition-all peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-primary peer-focus:top-2 peer-focus:text-sm peer-focus:text-black`}
                  >
                    Pincode
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-deepGreen-shade text-secondary font-medium text-[18px] px-8 py-2 cursor-pointer rounded-lg mt-5"
              >
                <IoLogoWhatsapp size="24px" /> <span>Order via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
