import React, { useState, useEffect } from 'react';

const Catalogue = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
                const uniqueCategories = ['all', ...new Set(data.map(product => product.category))];
                setCategories(uniqueCategories);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === selectedCategory);
            setFilteredProducts(filtered);
        }
    }, [selectedCategory, products]);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className="catalogue">
            <h2 className="text-xl font-bold mb-4">Catalogue</h2>
            <div className="mb-4">
                <span className="mr-2">Filter by Category:</span>
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="px-2 py-1 border rounded"
                >
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                    <div className="product border rounded-xl overflow-hidden flex mb-4 mx-auto" key={product.id}>
                        <div className="flex-1">
                            <img className="w-32 h-auto object-cover mx-auto p-5 " src={product.image} alt={product.title} />
                            <p className="text-gray-800 font-bold mt-8 text-center text-xl">${product.price}</p>
                        </div>
                        <div className="flex-1 p-4">
                            <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                            <p className="text-gray-700 mb-2">{product.description}</p>
                            <button className="px-4 py-2 bg-blue-[#A490EB] text-white rounded">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogue;