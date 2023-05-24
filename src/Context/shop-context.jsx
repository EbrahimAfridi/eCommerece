import React, {createContext, useState} from "react";
import {PRODUCTS} from "../product.js";

export const ShopContext = createContext(null);  //ctx created

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextProvider = (props) => {                             //provider function created
    const [cartItems, setCartItems] = useState(getDefaultCart());
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
        setCartItems((prev) => (
            {
                ...prev,
                [itemsId]: newAmount
            })
        );
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

    const contextValue = {
        getTotalCartAmount,
        updateCartItemAmount,
        cartItems,
        addToCart,
        removeFromCart
    };

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}