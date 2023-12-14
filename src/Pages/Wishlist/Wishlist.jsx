import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/shop-context.jsx";
import { useNavigate } from "react-router-dom";
import './Wishlist.css';
import {useFirebase} from "../../auth/FirebaseContext.jsx";
import Navbar from "../../components/navbar.jsx";

export const Wishlist = () => {
    const {user} = useFirebase();
    const navigate = useNavigate();

    const {
        wishlistItems,
        updateTotalCartItemAmount,
        cartItems,
        removeFromWishlist,
        selectedSize,  //to understand read export vars of context
        addToCart,
        products,
    } = useContext(ShopContext);
    
    const handleProductClick = (productId) => {
        navigate(`/productPage/${productId}`);
    };
      
      
    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
    };

    const handleAddToCart = (productId) => {
        addToCart(productId);
    };

    useEffect(() => {
        updateTotalCartItemAmount();
    }, [cartItems, updateTotalCartItemAmount]);

    return (
        <div>
            <Navbar/>
            <div className="px-8 wishlist">
            <h1 className="heading-h1 text-2xl text-center">Wishlist</h1>
                <div className=" wishlistItems">
                    {products.map((product) => {
                        const quantity = wishlistItems[product.id] || 0;
                        if (quantity > 0) {
                            return (
                                <div key={product.id} className="wishlistItem">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        onClick={() => handleProductClick(product.id)}
                                    />
                                    <div className="wishlistItemDetails">
                                        <p>{product.title}</p>
                                        <p>{selectedSize(product.id)}</p>
                                        <p>${product.price}</p>
                                        <div className="addRemoveBtn">
                                            <p
                                                className="inline-block mr-4 add"
                                                onClick={() => {
                                                    handleAddToCart(product.id);
                                                    handleRemoveFromWishlist(product.id);
                                                }}
                                            >
                                                Add
                                            </p>
                                            <p
                                                className="inline-block remove"
                                                onClick={() => handleRemoveFromWishlist(product.id)}
                                            >
                                                Remove
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
            <div className="w-64 m-auto">
                <button className="p-2 md:ml-10 text-lg text-white bg-black rounded-md"
                        onClick={() => navigate("/shop")}
                >
                    Continue Shopping
                </button>
            </div>
            
        </div>
    );
};

export default Wishlist;
