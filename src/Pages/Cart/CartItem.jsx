import React, {useContext} from "react";
import {ShopContext} from "../../Context/shop-context.jsx";

export const CartItem = (props) => {
    const {id, productName, price, productImage } = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemAmount} = useContext(ShopContext);

    // const handleInputBlur = () => {
    //     checkInputValue();
    // };
    // const checkInputValue = () => {
    //     if (updateCartItemAmount === '0') {
    //         // Stop rendering the component or perform any desired action
    //         console.log('Component stopped rendering');
    //     }
    // };

    return(
        <div className="cartItem">
            {" "}
            <img src={productImage} alt={productName}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]}
                           onChange={(e) => {updateCartItemAmount(Number(e.target.value), id)}}
                           // onBlur={handleInputBlur}
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>

        </div>
    )
}