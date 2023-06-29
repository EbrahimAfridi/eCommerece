import { useContext } from "react";
import { ShopContext } from "../../Context/shop-context.jsx";
import { PRODUCTS } from "../../product.js";
import "./Wishlist.css";
export const Wishlist = () => {
    const { wishlistItems, removeFromWishlist, selectedSize } = useContext(
        ShopContext
    );

    const handleRemoveFromWishlist = (productId) => {
        removeFromWishlist(productId);
    };

    return (
        <>
            <h1 className='heading'>Wishlist</h1>
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
                                    <p className="remove"
                                        onClick={() => handleRemoveFromWishlist(product.id)}
                                    >
                                        Remove
                                    </p>
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


