import { useContext } from "react";
import { ShopContext } from "../Context/shop-context.jsx";
import { useNavigate } from "react-router-dom";
import NewCartItems from "./NewCartItems.jsx";
import Navbar from "../components/navbar.jsx";

const NewCart = () => {
  const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {totalAmount > 0 ? (
        <div className="py-32 mx-0 sm:mx-48 main-container">
          <p className="pl-2 font-bold sm:pl-0">SHOPPING CART</p>
          <div className="flex flex-row text-xs sm:text-xl cart-heading">
            <p className="basis-1/4 p-[10px] pr-[9px] pl-2">PRODUCT</p>
            <p className="basis-1/4 p-[10px]">DESCRIPTION</p>
            <p className="basis-[16.666%] p-[10px]">PRICE</p>
            <p className="basis-[16.666%] pr-[8px] p-[10px]">QUANTITY</p>
            <p className="basis-[16.666%] px-0 py-[10px]">SUBTOTAL</p>
          </div>
          <hr className="mt-[10px] border-gray-500 > * + *" />
          <div className="cartItems">
            {Object.keys(cartItems).map((itemId) => {
              const product = products.find((p) => p.id === Number(itemId));
              const quantity = cartItems[itemId];
              if (quantity > 0 && product) {
                return (
                  <NewCartItems
                    key={itemId}
                    data={product}
                    quantity={quantity}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="flex flex-col px-3 sm:pr-0 sm:items-center gap-6 my-2 sm:flex-row checkout">
            <p className="p-2.5 px-4 text-right w-full rounded-sm text-xs font-bold sm:text-lg bg-slate-200">
              GRAND TOTAL: ${totalAmount}
            </p>
            <div className="flex justify-center items-center w-full gap-4">
              <button
                className="rounded-md text-xs sm:text-lg outline-none bg-black text-white shadow-sm border p-2 tracking-wider"
                onClick={() => navigate("/shop")}
              >
                Continue Shopping
              </button>
              <button className="rounded-md text-xs sm:text-lg outline-none bg-black text-white shadow-sm border p-2 tracking-wider">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center mt-[30vh] mr-20 font-bold text-2xl">
            YOUR CART IS EMPTY
          </h1>
        </div>
      )}
    </>
  );
};

export default NewCart;
