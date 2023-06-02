import {createContext, useEffect, useState} from "react";
import {PRODUCTS} from "../product.js";

export const ShopContext = createContext(null);  //ctx created

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = ({children}) => {                             //provider function created
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [totalCartItemAmount, setTotalCartItemAmount] = useState(0); // Add totalCartItemAmount state
    const [selectedSizes, setSelectedSizes] = useState({});
    const setSelectedSize = (productId, size) => {
        setSelectedSizes((prevSizes) => ({ ...prevSizes, [productId]: size }));
    };


    const getSelectedSize = (productId) => {
        return selectedSizes[productId] || "";
    };
    const addToCart = (itemsId) => {
        setCartItems((prev) => (
            {...prev, [itemsId]: prev[itemsId] + 1}
        ));
    }

    const removeFromCart = (itemsId) => {
        setCartItems((prev) => (
            {...prev, [itemsId]: prev[itemsId] - 1}
        ));
    }
    const updateCartItemAmount = (newAmount, itemsId) => {
        if (newAmount > 0)
            setCartItems((prev) => (
                {...prev, [itemsId]: newAmount}
            ));
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let  itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }

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

    };

    return(
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}