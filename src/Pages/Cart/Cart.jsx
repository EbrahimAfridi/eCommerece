import {PRODUCTS} from "../../product.js";
import {useContext} from "react";
import {ShopContext} from "../../Context/shop-context.jsx";
import {CartItem} from "./CartItem.jsx";
import './cart.css'
import {useNavigate} from "react-router-dom";

export default function Cart (){
    const {cartItems , getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return(
        <div className="cart">
            <div>
                <h1>Your cart items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) => {
                    if ( cartItems[product.id] !== 0 ){
                        return <CartItem key={product.id} data={product} test={1}/>;
                    }
                })}
            </div>
            {totalAmount > 0 ? (
                <div className="checkout">
                    <p>Subtotal: ${totalAmount}</p>
                    <button onClick={() => navigate("/")}>Continue Shopping</button>
                    <button>Checkout</button>
                </div>
                )
            :   (
                <h1>Your cart is empty</h1>
                )
            }

        </div>
    )
}