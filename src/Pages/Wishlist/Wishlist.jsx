import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/shop-context.jsx";
import { useNavigate } from "react-router-dom";
import './Wishlist.css';
import {useFirebase} from "../../auth/FirebaseContext.jsx";

export const Wishlist = () => {
    const {user, logout} = useFirebase();
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

    const handleLogOut = async () => {
        try {
            await logout();
            navigate("/");
        } catch (e) {
            console.error(e.message);
        }
    }

    useEffect(() => {
        updateTotalCartItemAmount();
    }, [cartItems, updateTotalCartItemAmount]);

    return (
        <div>
            <h1 className="heading text-2xl ml-12 text-left">Wishlist</h1>
            <h1 className="heading text-2xl ml-12 text-left">Hello, {user ? user.email : "unknown user"}</h1>
            <button onClick={handleLogOut}>Log out</button>
            <div className="px-8 wishlist">
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
            <div className="flex justify-center mt-20">
                <button className="p-2 text-lg text-white bg-black rounded-sm" onClick={() => navigate("/")}>
                    Continue Shopping
                </button>
            </div>
            
        </div>
    );
};

export default Wishlist;
