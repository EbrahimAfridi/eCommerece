import { useContext } from "react";
import { ShopContext } from "../Context/shop-context.jsx";
import "../Pages/Cart/cart.css";

const NewCartItems = ({ data }) => {
    const { id, name, price, image } = data;
    const { cartItems, addToCart, removeFromCart, selectedSize } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    const subtotal = cartItemAmount * price;

    return (
        <div className="flex flex-row mt-8 cart-item-div">
            <div className="basis-1/4 p-[10px] w-[25%] pt-0 pb-0">
                <img className="w-[100%] sm:w-[92%]" src={image} alt={name} />
            </div>
            <div className="basis-1/4 sm:p-[10px] text-[8px] sm:text-sm">
                <p>
                    <b>{name.length > 20 ? `${name.slice(0, 20)}...` : name}</b>
                </p>
                <p className="text-[10px] sm:text-base">Size: {selectedSize(id)}</p>
            </div>
            <div className="basis-[16.666%] px-[10px] sm:p-[10px]">
                <p  className="text-[12px] sm:text-base">${price}</p>
            </div>
            <div className="basis-[16.666%] px-[10px] sm:pl-8 pl-2 sm:p-[10px]">
                <div className="text-[12px] sm:text-base pl-1">{cartItemAmount}</div>
                <div className="text-[12px] sm:text-lg">
                    <button className="mr-1  sm:mr-3 " onClick={() => removeFromCart(id)}> - </button>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
            <div className="basis-[16.666%] pl-2 sm:pl-6 sm:p-[10px]">
                <p className="text-[12px] sm:text-base">${subtotal}</p>
            </div>
        </div>
    );
};

export default NewCartItems;
