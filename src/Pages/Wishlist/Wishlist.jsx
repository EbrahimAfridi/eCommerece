import { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/shop-context.jsx";
import { PRODUCTS } from "../../product.js";
import "./Wishlist.css";

export const Wishlist = () => {
    const {
        wishlistItems,
        updateTotalCartItemAmount,
        cartItems,
        removeFromWishlist,
        selectedSize,
        addToCart,
    } = useContext(ShopContext);

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
    };

    const handleAddToCart = (itemId) => {
        addToCart(itemId); // Pass the itemId to the addToCart function
    };

    useEffect(() => {
        updateTotalCartItemAmount(); // Update totalCartItemAmount whenever cartItems change
    }, [cartItems, updateTotalCartItemAmount]);

    return (
        <>
            <h1 className="heading">Wishlist</h1>
            <div className="wishlist">
                <div className="wishlistItems">
                    {PRODUCTS.map((product) => {
                        const quantity = wishlistItems[product.id] || 0;
                        if (quantity > 0) {
                            return (
                                <div key={product.id} className="wishlistItem">
                                    <img src={product.productImage} alt={product.productName} />
                                    <div className="wishlistItemDetails">
                                        <p>{product.productName}</p>
                                        <p>{selectedSize(product.id)}</p>
                                        <p>${product.price}</p>
                                        <div className="addRemoveBtn">
                                            <p
                                                className="add inline-block mr-4"
                                                onClick={() => {
                                                    handleAddToCart(product.id);
                                                    handleRemoveFromWishlist(product.id);
                                                }} // Pass the product.id as the argument
                                            >
                                                Add
                                            </p>
                                            <p
                                                className="remove inline-block"
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
        </>
    );
};

export default Wishlist;
