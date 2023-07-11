// import {PRODUCTS} from "../product.js";
// import NewCartItems from "./NewCartItems.jsx";
// import {useContext} from "react";
// import {ShopContext} from "../Context/shop-context.jsx";
// import {useNavigate} from "react-router-dom";
//
//
// const NewCart = () => {
//     const {cartItems, getTotalCartAmount} = useContext(ShopContext);
//     const totalAmount = getTotalCartAmount();
//     const navigate = useNavigate();
//
//     return(
//         <>
//             {totalAmount > 0 ? (
//                     <div className="py-10 mx-48 main-container ">
//                         <p className="pl-0 font-bold ">SHOPPING CART</p>
//                         <div className="flex flex-row cart-heading">
//                             <p className="inline-block basis-1/4 p-[10px] pr-[9px] pl-0 ">PRODUCT</p>
//                             <p className="inline-block basis-1/4 p-[10px]">DESCRIPTION</p>
//                             <p className="inline-block basis-[16.666%] p-[10px]">PRICE</p>
//                             <p className="inline-block basis-[16.666%] p-[10px]">QUANTITY</p>
//                             <p className="inline-block basis-[16.666%] p-[10px]">SUBTOTAL</p>
//                         </div>
//                         <hr className="mt-[10px] border-gray-500 > * + * "/>
//                         <div className="cartItems">
//                             {PRODUCTS.map((product) => {
//                                 if ( cartItems[product.id] !== 0 ){       // checks if that product has been added using addToCart coz that sets cartItems and if that product is already present only then render product in cartItems if not then that product has not been added by user hence no need to add to cart*!/*/}
//                                     return <NewCartItems key={product.id} data={product} test={1}/>;
//                                 }
//                             })}
//                         </div>
//                         <div className="flex items-center gap-6 py-10 checkout">
//                             <button className="p-2 text-lg text-white bg-black basis-1/3"
//                                     onClick={() => navigate("/")}>Continue Shopping</button>
//                             <button
//                                 className="p-2 text-lg text-white bg-black basis-1/3 "
//                             >
//                                 Checkout
//                             </button>
//                             <p className="flex justify-end p-2 pr-10 text-lg font-bold basis-1/3 bg-slate-200">GRAND TOTAL: ${totalAmount}</p>
//                         </div>
//                     </div>
//             ) : (
//                 <div>
//                     <h1>Your cart is empty</h1>
//                 </div>
//             )}
//         </>
//     )
// }
//
// export default NewCart;


//
// import { useContext } from "react";
// import { ShopContext } from "../Context/shop-context.jsx";
// import { useNavigate } from "react-router-dom";
// import NewCartItems from "./NewCartItems.jsx";
//
// const NewCart = () => {
//     const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
//     const totalAmount = getTotalCartAmount();
//     const navigate = useNavigate();
//
//     return (
//         <>
//             {totalAmount > 0 ? (
//                 <div className="py-10 mx-48 main-container">
//                     <p className="pl-0 font-bold">SHOPPING CART</p>
//                     <div className="flex flex-row cart-heading">
//                         <p className="inline-block basis-1/4 p-[10px] pr-[9px] pl-0">PRODUCT</p>
//                         <p className="inline-block basis-1/4 p-[10px]">DESCRIPTION</p>
//                         <p className="inline-block basis-[16.666%] p-[10px]">PRICE</p>
//                         <p className="inline-block basis-[16.666%] p-[10px]">QUANTITY</p>
//                         <p className="inline-block basis-[16.666%] p-[10px]">SUBTOTAL</p>
//                     </div>
//                     <hr className="mt-[10px] border-gray-500 > * + *" />
//                     <div className="cartItems">
//                         {products.map((product) => {
//                             if (cartItems[product.id] !== 0) {
//                                 return <NewCartItems key={product.id} data={product} />;
//                             }
//                             return null;
//                         })}
//                     </div>
//                     <div className="flex items-center gap-6 py-10 checkout">
//                         <button
//                             className="p-2 text-lg text-white bg-black basis-1/3"
//                             onClick={() => navigate("/")}
//                         >
//                             Continue Shopping
//                         </button>
//                         <button className="p-2 text-lg text-white bg-black basis-1/3">Checkout</button>
//                         <p className="flex justify-end p-2 pr-10 text-lg font-bold basis-1/3 bg-slate-200">
//                             GRAND TOTAL: ${totalAmount}
//                         </p>
//                     </div>
//                 </div>
//             ) : (
//                 <div>
//                     <h1>Your cart is empty</h1>
//                 </div>
//             )}
//         </>
//     );
// };
//
// export default NewCart;


import { useContext } from "react";
import { ShopContext } from "../Context/shop-context.jsx";
import { useNavigate } from "react-router-dom";
import NewCartItems from "./NewCartItems.jsx";

const NewCart = () => {
    const { cartItems, getTotalCartAmount, products } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <>
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
                            onClick={() => navigate("/")}
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
                    <h1>Your cart is empty</h1>
                </div>
            )}
        </>
    );
};

export default NewCart;
