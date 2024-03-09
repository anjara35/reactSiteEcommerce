import React, {createContext, useState, useEffect} from "react";

export const CartContext = createContext()
const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const addToCart = (product, id) => {
        const newItem = {...product, amount: 1};
        const cartItem = cart.find((item) => {
            return item.id === id;
        })
        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return {...item, amount: cartItem.amount + 1};
                } else {
                    return item;
                }
            });
            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }

    };

    const RemoveToCart = (id) => {
        const cartItemIndex = cart.findIndex((item) => item.id === id);

        if (cartItemIndex !== -1) {
            const updatedCart = [...cart];
            if (updatedCart[cartItemIndex].amount > 1) {
                updatedCart[cartItemIndex].amount -= 1;
            } else {
                updatedCart.splice(cartItemIndex, 1);
            }
            setCart(updatedCart);
        }
    }

    return <CartContext.Provider value={ {cart, addToCart, RemoveToCart } }>
        {children}
    </CartContext.Provider>
};

export default CartProvider