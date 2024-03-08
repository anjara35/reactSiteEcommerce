import React, { useState } from 'react';

const Panier = () => {
    const [panier, setPanier] = useState([]);
    const [total, setTotal] = useState(0);

    const ajouterAuPanier = (product) => {
        setPanier([...panier, product]);
        setTotal(total + product.price);
    };

    const retirerDuPanier = (product) => {
        const newPanier = panier.filter(item => item.id !== product.id);
        setPanier(newPanier);
        setTotal(total - product.price);
    };

    return (
        <div className="panier">
            <h2 className="text-xl font-bold mb-4">Panier</h2>
            <div className="grid grid-cols-3 gap-4">
                {panier.map(product => (
                    <div className="product border rounded-xl overflow-hidden flex mb-4 mx-auto" key={product.id}>
                        <div className="flex-1">
                            <img className="w-32 h-auto object-cover mx-auto p-5" src={product.image} alt={product.title} />
                            <p className="text-gray-800 font-bold mt-8 text-center text-xl">${product.price}</p>
                        </div>
                        <div className="flex-1 p-4">
                            <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <button onClick={() => retirerDuPanier(product)} className="px-4 py-2 bg-red-500 text-white rounded">Retirer du Panier</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <h3>Total de la Commande: ${total}</h3>
            </div>
        </div>
    );
};

export default Panier;