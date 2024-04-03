import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";


const Product = () => {


    const [products, setProducts] = useState([])
    useEffect (() => {
        axios.get("api/products/all")
        .then((response )=> {
            console.log(response.data)
            setProducts(response.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[])
     
    console.log(products)

    return (
        <>
        
        <main className="flex flex-col justify-center items-center m-5 gap-6 ">
            <h1 className=" text-white text-2xl  text-center mb-5">Lista de Productos</h1>
            <div className="border-t border-2 border-white w-[50rem] self-center mb-5"></div>
            <div className="flex gap-2 text-white border-2 border-solid border-white w-[500px] p-4">
                <p className="w-44 text-center">Artículo</p>
                <p className="w-32 text-right">Detalle</p>
                <p className="w-32 text-right">Stock</p>
                <p className="w-32 text-right">Proveedor</p>
            </div>
            <div className="flex flex-col ">
                {products.map(product => (
                    <div key={product.id} className="text-white flex gap-6 w-[400px] mb-4 border-b-2 border-solid border-white">
                        <p className="w-48 text-left">{product.name}</p>
                        <p className="w-48 text-right">{product.details}</p>
                        <p className="w-48 text-right">{product.stock}</p>
                        <p className="w-48 text-right">{product.provider}</p>
                    </div>
                ))}
            </div>
        </main>
        
        
        </>
    )
}
    


export default Product;