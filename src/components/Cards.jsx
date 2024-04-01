import React, { useState, useEffect } from 'react';
import axios from "axios";
import imgProduct from '../assets/pecera.jpg'


const Cards = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/products/all")
            .then(response => {
                console.log(response.data)
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                    <img src={imgProduct} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="mt-4">
                        <span className="text-gray-800 font-bold">{product.finalPrice.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}</span>
                        <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
