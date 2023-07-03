import {useContext} from "react";
import {ShopContext} from "../Context/shop-context.jsx";
import '../Pages/Cart/cart.css'

const NewCartItems = ({ data }) => {
    const { id, productName, price, productImage, } = data;
    const { cartItems, addToCart, removeFromCart, selectedSize} = useContext(ShopContext); //selectedSize,
    const cartItemAmount = cartItems[id];
    const subtotal = cartItemAmount * price;
    return(
        <div className="cart-item-div flex flex-row mt-8">
            <div className="basis-1/4 p-[10px] w-[25%]">
                <img className="w-[92%]" src={productImage} alt={productName} />
            </div>
            <div className="basis-1/4 p-[10px]">
                <p>
                    <b>{productName}</b>
                </p>
                <p>Size: {selectedSize(id)}</p>
            </div>
            <div className="basis-[16.666%] p-[10px]">
                <p>${price}</p>
            </div>
            <div className="basis-[16.666%] pl-8 p-[10px]">
                <div>{cartItemAmount}</div>
                <div>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
            <div className="basis-[16.666%] pl-6 p-[10px]">
                <p>${subtotal}</p>
            </div>

        </div>
    )
}

export default NewCartItems;