import {createContext, useEffect, useState} from "react";
export const ShopContext = createContext(null);  //ctx created

export const ShopContextProvider = ({children}) => {                             //provider function created
    const [cartItems, setCartItems] = useState({});
    const [totalCartItemAmount, setTotalCartItemAmount] = useState(0); // Add totalCartItemAmount state
    const [selectedSizes, setSelectedSizes] = useState({});
    const [wishlistItems, setWishlistItems] = useState({});
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const setSelectedSize = (productId, size) => {
        setSelectedSizes((prevSizes) => ({ ...prevSizes, [productId]: size }));
    };

    const getSelectedSize = (productId) => {
        return selectedSizes[productId] || "";
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCartItems = { ...prev };
            if (updatedCartItems[itemId] > 0) {
                updatedCartItems[itemId] -= 1;
            }
            return updatedCartItems;
        });
    };


    const addToWishlist = (itemId) => {
        setWishlistItems((prev) => ({
            ...prev,                                        /*storing all old products */
            [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,   /*checking if product exist already if yes than inc. qty + 1 else set qty = 1*/
        }));
    };

    const removeFromWishlist = (itemId) => {
        setWishlistItems((prev) => {
            const updatedWishlistItems = { ...prev };     /* making new var. store all old*/
            delete updatedWishlistItems[itemId];          /* deleting specific product by id*/
            return updatedWishlistItems;
        });
    };

    const updateCartItemAmount = (newAmount, itemsId) => {
        if (newAmount > 0)
            setCartItems((prev) => (
                {...prev, [itemsId]: newAmount}
            ));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const product = products.find((p) => p.id === Number(item));
                totalAmount += cartItems[item] * product.price;
            }
        }
        return totalAmount;
    };

    useEffect(() => {
        updateTotalCartItemAmount(); // Update totalCartItemAmount whenever cartItems change
    }, [cartItems]);

    const updateTotalCartItemAmount = () => {    {/* Code for the cart bubble*/}
        let totalAmount = 0;
        for (const item in cartItems) {
            totalAmount += cartItems[item];
        }
        setTotalCartItemAmount(totalAmount);
    };

    useEffect(() => {
        fetch("https://ebrahimafridi.github.io/sneakersAPI/sneaker.json")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.sneakers);
                setIsLoading(false);
                // console.log(data.sneakers);
            })
            .catch((error) => {
                console.log("Error fetching products:", error);
                setIsLoading(false);
            });
    }, []);

    const contextValue = {
        getTotalCartAmount,
        updateCartItemAmount,
        cartItems,
        addToCart,
        removeFromCart,
        totalCartItemAmount,
        updateTotalCartItemAmount,
        selectedSize: getSelectedSize,
        setSelectedSize,
        removeFromWishlist,
        addToWishlist,
        wishlistItems,
        products,
        isLoading
    }
    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}