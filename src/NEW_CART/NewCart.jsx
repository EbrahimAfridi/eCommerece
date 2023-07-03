import {PRODUCTS} from "../product.js";
import NewCartItems from "./NewCartItems.jsx";
import {useContext} from "react";
import {ShopContext} from "../Context/shop-context.jsx";
import {useNavigate} from "react-router-dom";


const NewCart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();

    return(
        <>
            {totalAmount > 0 ? (
                    <div className="main-container py-10 mx-48 ">
                        <p className="pl-0 font-bold ">SHOPPING CART</p>
                        <div className="cart-heading flex flex-row">
                            <p className="inline-block basis-1/4 p-[10px] pr-[9px] pl-0 ">PRODUCT</p>
                            <p className="inline-block basis-1/4 p-[10px]">DESCRIPTION</p>
                            <p className="inline-block basis-[16.666%] p-[10px]">PRICE</p>
                            <p className="inline-block basis-[16.666%] p-[10px]">QUANTITY</p>
                            <p className="inline-block basis-[16.666%] p-[10px]">SUBTOTAL</p>
                        </div>
                        <hr className="mt-[10px] border-gray-500 > * + * "/>
                        <div className="cartItems">
                            {PRODUCTS.map((product) => {
                                if ( cartItems[product.id] !== 0 ){       // checks if that product has been added using addToCart coz that sets cartItems and if that product is already present only then render product in cartItems if not then that product has not been added by user hence no need to add to cart*!/*/}
                                    return <NewCartItems key={product.id} data={product} test={1}/>;
                                }
                            })}
                        </div>
                        <div className="checkout flex items-center gap-6 py-10">
                            <button className="p-2 basis-1/3 text-lg bg-black  text-white"
                                    onClick={() => navigate("/")}>Continue Shopping</button>
                            <button
                                className="p-2 text-lg basis-1/3 bg-black text-white "
                            >
                                Checkout
                            </button>
                            <p className="text-lg basis-1/3 flex justify-end pr-10 font-bold bg-slate-200 p-2">GRAND TOTAL: ${totalAmount}</p>
                        </div>
                    </div>
            ) : (
                <div>
                    <h1>Your cart is empty</h1>
                </div>
            )}
        </>
    )
}

export default NewCart;