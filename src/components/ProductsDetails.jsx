import React, {useContext, useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import { CartContext } from '../context/CartContext.jsx'


const ProductsDetails = () => {

    const { id } = useParams()

    const [products, setProducts] = useState([]);
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                console.log(data)
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const product = products.find(item => {
        return item.id == id;
    })

    if(!product) {
        return <div>Loading</div>
    }

    return (
        <section className="h-screen flex items-center">
            <div className='container mx-auto'>
                <div className="flex gap-10">
                    <div>
                        {<img src={product.image} alt={product.title} className="max-w-[200px]"/>}
                    </div>
                    <div className="flex-1 my-8">
                        <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                        <div className="font-semibold text-lg mb-2">
                            {product.price}€
                        </div>
                        <p className="mb-8">{product.description}</p>
                        <button onClick={() => {addToCart(product, product.id)}} className='focus:outline-none text-white bg-green-700 bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Ajouter au Panier</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsDetails