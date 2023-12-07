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
            <Navbar/>
            {totalAmount > 0 ? (
                <div className="py-10 mx-0 sm:mx-48 main-container">
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
                                return <NewCartItems key={itemId} data={product} quantity={quantity} />;
                            }
                            return null;
                        })}
                    </div>
                    <div className="flex flex-col items-center gap-6 py-10 mt-10 sm:flex-row checkout">
                        <button
                            className="p-2 text-xs text-white bg-black w-36 sm:text-lg basis-1/3"
                            onClick={() => navigate("/shop")}
                        >
                            Continue Shopping
                        </button>
                        <button className="p-2 text-xs text-white bg-black w-36 sm:text-lg basis-1/3">Checkout</button>
                        <p className="flex justify-end p-2 pr-10 text-xs font-bold sm:text-lg basis-1/3 bg-slate-200">
                            GRAND TOTAL: ${totalAmount}
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="text-center mr-20 font-bold mt-16 text-2xl">YOUR CART IS EMPTY</h1>
                </div>
            )}
        </>
    );
};

export default NewCart;
