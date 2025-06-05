import ProductCard from "../components/ProductCard.jsx";
import { products } from "./../constants/index.js";

export default function Products({
  quantity,
  setQuantity,
  cartItems,
  setCartItems,
  setModalContent,
}) {
  return (
    <section
      className="bg-warmBeige-tint text-primary pb-20 scroll-mt-[100px]"
      id="products"
    >
      <div className="w-full flex flex-col justify-center items-center bg-warmBeige-tint text-primary max-container px-5">
        <div className="text-[32px] font-semibold pb-10">Products</div>
        <div className="flex flex-wrap justify-center gap-5">
          {products.map((item, index) => (
            <ProductCard
              key={item.name}
              img={item.img}
              name={item.name}
              price={item.price}
              weight={item.weight}
              param={item.param}
              cartItems={cartItems}
              setCartItems={setCartItems}
              quantity={quantity}
              setQuantity={setQuantity}
              setModalContent={setModalContent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
