import {useContext} from "react";
import {ShopContext} from "../../Context/shop-context.jsx";
// import drop from "phosphor-react/src/icons/Drop.js";

export const CartItem = ({data}) => {
    const {id, productName, price, productImage} = data;
    const {cartItems, addToCart, removeFromCart, updateCartItemAmount} = useContext(ShopContext);

    return(
        <div className="cartItem">
            {" "}
            <img src={productImage} alt={productName}/>
            <div className="description">
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>
                    {/*<input*/}
                    {/*    type={"dropdown"}*/}
                    {/*    value={cartItems[id]}*/}
                    {/*    // onChange={(e) => {updateCartItemAmount(Number(e.target.value), id)}}*/}
                    {/*/>*/}
                    {/*<label htmlFor="dropdown">Select an option:</label>*/}
                    {/*<select id="dropdown">*/}
                    {/*    <option value="">-- Select --</option>*/}
                    {/*    <option value="option1">+ 1</option>*/}
                    {/*    <option value="option2">Option 2</option>*/}
                    {/*    <option value="option3">Option 3</option>*/}
                    {/*</select>*/}
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    )
}