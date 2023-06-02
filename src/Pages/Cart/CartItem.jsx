import {useContext} from "react";
import {ShopContext} from "../../Context/shop-context.jsx";

export const CartItem = ({ data }) => {
    const { id, productName, price, productImage, } = data;
    const { cartItems, addToCart, removeFromCart, selectedSize } = useContext(ShopContext); //selectedSize
    const cartItemAmount = cartItems[id];

    return (
        <div className="cartItem">
            <img src={productImage} alt={productName} />
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>${price}</p>
                <div className="countHandler">
                    <div>
                        <button onClick={() => removeFromCart(id)}> - </button>
                        <button onClick={() => addToCart(id)}> + </button>
                    </div>
                    <p>QTY: {cartItemAmount}</p>
                    <p>Size: {selectedSize(id)}</p>
                </div>
            </div>
        </div>
    );
};




