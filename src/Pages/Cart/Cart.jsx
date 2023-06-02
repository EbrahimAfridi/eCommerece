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


// import { PRODUCTS } from "../../product.js";
// import { useContext } from "react";
// import { ShopContext } from "../../Context/shop-context.jsx";
// import { CartItem } from "./CartItem.jsx";
// import "./cart.css";
// import { useNavigate } from "react-router-dom";
//
// export default function Cart() {
//     const { cartItems, selectedSizes, getTotalCartAmount } = useContext(ShopContext);
//     const totalAmount = getTotalCartAmount();
//     const navigate = useNavigate();
//
//     // Create an array to store cart items with separate sizes
//     const cartItemsWithSizes = [];
//
//     // Loop through each product in the cart
//     for (const productId in cartItems) {
//         const quantity = cartItems[productId];
//         const product = PRODUCTS.find((p) => p.id === productId);
//
//         if (product) {
//             const sizes = selectedSizes[productId] || [];
//
//             // If there are no sizes or only one size, add the cart item as it is
//             if (sizes.length === 0 || sizes.length === 1) {
//                 cartItemsWithSizes.push({ product, quantity, size: sizes[0] });
//             } else {
//                 // If there are multiple sizes, add separate cart items for each size
//                 sizes.forEach((size) => {
//                     cartItemsWithSizes.push({ product, quantity, size });
//                 });
//             }
//         }
//     }
//
//     return (
//         <div className="cart">
//             <div>
//                 <h1>Your cart items</h1>
//             </div>
//             <div className="cartItems">
//                 {cartItemsWithSizes.map(({ product, quantity, size }) => (
//                     <CartItem key={`${product.id}-${size}`} data={product} quantity={quantity} size={size} />
//                 ))}
//             </div>
//             {totalAmount > 0 ? (
//                 <div className="checkout">
//                     <p>Subtotal: ${totalAmount}</p>
//                     <button onClick={() => navigate("/")}>Continue Shopping</button>
//                     <button>Checkout</button>
//                 </div>
//             ) : (
//                 <h1>Your cart is empty</h1>
//             )}
//         </div>
//     );
// }
