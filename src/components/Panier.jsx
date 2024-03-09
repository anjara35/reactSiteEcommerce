import React, {useContext, useState} from 'react';
import { CartContext } from "../context/CartContext.jsx";

const Panier = () => {

    const { cart, addToCart, RemoveToCart } = useContext(CartContext)

    const total = cart.reduce((acc, item) => {
        return acc + item.amount * item.price;
    }, 0);

    return (
        <div className=" h-screen flex justify-center my-4">
            <div className="flex flex-col w-[80%]">
                <div className="w-[100%] text-center my-2">
                    <p className="">Panier</p>
                    <hr/>
                </div>
                {cart.map(item => {
                    return <div className="container mx-auto grid grid-cols-4 gap-4 max-w-max my-4" key={item.id}>
                        <div className="col-span-1 flex justify-center items-center">
                            <img src={item.image} alt={item.title} className="w-3/6"/>
                        </div>
                        <div className="col-span-3 flex flex-col justify-between my-8">
                            <div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-lg mb-2">{item.title} - {item.price}€</h3>
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            </div>
                            <div className="flex flex-1 gap-4">
                                <div className="flex gap-2">
                                    <div className="flex-1">
                                        <button onClick={() => RemoveToCart(item.id)}>-</button>
                                    </div>
                                    <div>{item.amount}</div>
                                    <div className="flex-1">
                                        <button onClick={() => addToCart(item, item.id)}>+</button>
                                    </div>
                                </div>
                                <div>
                                    <p>{item.amount * item.price}€</p>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
                <div className="my-8">
                    <div className="flex items-center gap-4">
                        <button
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Acheter
                        </button>
                        <p>Prix : {total}€</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Panier;