// import {useContext} from "react";
// import {ShopContext} from "../Context/shop-context.jsx";
// import '../Pages/Cart/cart.css'
//
// const NewCartItems = ({ data }) => {
//     const { id, productName, price, productImage, } = data;
//     const { cartItems, addToCart, removeFromCart, selectedSize} = useContext(ShopContext); //selectedSize,
//     const cartItemAmount = cartItems[id];
//     const subtotal = cartItemAmount * price;
//     return(
//         <div className="flex flex-row mt-8 cart-item-div">
//             <div className="basis-1/4 p-[10px] w-[25%]">
//                 <img className="w-[92%]" src={productImage} alt={productName} />
//             </div>
//             <div className="basis-1/4 p-[10px]">
//                 <p>
//                     <b>{productName}</b>
//                 </p>
//                 <p>Size: {selectedSize(id)}</p>
//             </div>
//             <div className="basis-[16.666%] p-[10px]">
//                 <p>${price}</p>
//             </div>
//             <div className="basis-[16.666%] pl-8 p-[10px]">
//                 <div>{cartItemAmount}</div>
//                 <div>
//                     <button onClick={() => removeFromCart(id)}> - </button>
//                     <button onClick={() => addToCart(id)}> + </button>
//                 </div>
//             </div>
//             <div className="basis-[16.666%] pl-6 p-[10px]">
//                 <p>${subtotal}</p>
//             </div>
//
//         </div>
//     )
// }
//
// export default NewCartItems;



import { useContext } from "react";
import { ShopContext } from "../Context/shop-context.jsx";
import "../Pages/Cart/cart.css";

const NewCartItems = ({ data }) => {
    const { id, title, price, image } = data;
    const { cartItems, addToCart, removeFromCart, selectedSize } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    const subtotal = cartItemAmount * price;

    return (
        <div className="flex flex-row mt-8 cart-item-div">
            <div className="basis-1/4 p-[10px] w-[25%] pt-0 pb-0">
                <img className="w-[100%] sm:w-[92%]" src={image} alt={title} />
            </div>
            <div className="basis-1/4 sm:p-[10px]">
                <p>
                    <b>{title}</b>
                </p>
                <p className="text-sm sm:text-md">Size: {selectedSize(id)}</p>
            </div>
            <div className="basis-[16.666%] sm:p-[10px]">
                <p className="text-sm sm:text-md">${price}</p>
            </div>
            <div className="basis-[16.666%] sm:pl-8 pl-2 sm:p-[10px]">
                <div className="text-sm sm:text-md">{cartItemAmount}</div>
                <div>
                    <button className="mr-1  sm:mr-3" onClick={() => removeFromCart(id)}> - </button>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
            <div className="basis-[16.666%] pl-2 sm:pl-6 sm:p-[10px]">
                <p className="text-sm sm:text-md">${subtotal}</p>
            </div>
        </div>
    );
};

export default NewCartItems;
