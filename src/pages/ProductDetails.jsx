import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useCart } from "../utils/cart";
import numberFormatter from "../utils/currencyformatter";

const ProductDetails = () => {
    const { id } = useParams(); 
    const [productState, setProductsState] = useState([])
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const { addToCart } = useCart();

    useEffect (() => {
        axios.get('/api/products/all')
        .then(res => {
            setProductsState(res.data.find(product => product.productoDTOID == id))
            console.log(productState)
        })
        .catch(
            err => console.log(err)
        )
    }, [])

    const handleAddToCart = () => {
        addToCart(productState);
        console.log(addToCart)
      };

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img src={productState.image} className="w-full h-48 object-cover mb-4 rounded-lg" />
                <img src={productState.image} className="w-full h-48 object-cover mb-4 rounded-lg" />
            </div>

            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">{productState.category}</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        {productState.name}
                    </h1>
                </div>
                <div className="border-b border-gray-200 pb-6">
                    {productState.promos !== 0 && (<>
                     <h2 className="lg:text-base text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2 line-through	">{numberFormatter.format(productState.finalPrice)}</h2>
                     <section className="flex flex-row">
                         <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">{numberFormatter.format(productState.finalPrice*(1-productState.promos/100))}</h1>
                         <h1 className="lg:text-1xl text-xl lg:leading-6 leading-7 text-green-800 mt-2 ml-4">{productState.promos}% OFF</h1>
                     </section>                       
                     </>
                    )}
                    {productState.promos === 0 && (<>
                     <h2 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">{numberFormatter.format(productState.finalPrice)}</h2>          
                     </>
                    )}                    
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                    <p className="text-base leading-4 text-gray-800">Marca</p>
                    <div className="flex items-center justify-center">
                        <p className="text-sm leading-none text-gray-600 px-5">{productState.brand}</p>
                        <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Detalles</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600 px-5">{productState.details}</p>
                            <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                        <p className="text-base leading-4 text-gray-800">Stock</p>
                        <div className="flex items-center justify-center">
                            <p className="text-sm leading-none text-gray-600 px-5">{productState.stock}</p>
                            <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                </div>
                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
                        rounded-lg
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
                        transform active:scale-95 transition-transform
					"
                    onClick={handleAddToCart}
                >
                <img src="" alt="" />
                    Agregar al Carrito
                </button>

                <div>
                    <div className="border-t border-b py-4 mt-7 border-gray-200">
                        <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Términos de garantía</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                            Aca van terminos y Condiciones de la compra
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
