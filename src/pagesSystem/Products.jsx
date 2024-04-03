import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";


const Product = () => {

    const [visual1, setVisual1] = useState(true);
    const [visual2, setVisual2] = useState(false);

    function handleclick1(e) {
        setVisual1(true)
        setVisual2(false)
        console.log(`visual 1: ${!visual1}`)
        console.log(`visual 2: ${visual2}`)
    }

    function handleclick2(e) {
        setVisual1(false)
        setVisual2(true)
        console.log(`visual 1: ${visual1}`)
        console.log(`visual 2: ${!visual2}`)
    }

    const [newProduct, setNewProduct] = useState({
        revenue: 0,
        name: "",
        details: "",
        brand: '',
        category: "",
        imageURL: ""
      });

      const handleInput = async (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
        console.log(newProduct)
      };


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
    const color1 = "border border-white border-double font-bold text-center mt-11 mx-2 h-11 w-full text-white max-w-[24rem] bg-gray-900"
    const color2 = "font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[24rem] bg-gray-300"

    return (
        <>
        
        <main className="flex flex-col justify-center items-center m-5">
            <h1 className=" text-white text-2xl  text-center">Lista de Productos</h1>
            <div className="flex w-full justify-center mb-5 gap-3">
                <button onClick={handleclick1} className={visual1 ? color1 : color2}>Ver Productos</button>
                <button onClick={handleclick2} className={visual2 ? color1 : color2}>Agregar Producto</button>
            </div>
            <div className="border-t border-2 border-white w-[50rem] self-center mb-5"></div>
            {visual1 && <div>
            
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
            </div>}
            {visual2 && <div>
                    <form action="">
                        <h4>Añadir nuevo producto</h4>
                        <div>
                            <input type="double" name="revenue"  value={newProduct.revenue} placeholder="Ganancia" className=""/>
                            <input type="text" name="name"  value={newProduct.name} placeholder="Nombre" className=""/>
                            <input type="text" name="brand"  value={newProduct.brand} placeholder="Marca" className=""/>
                            <select name="" id="" value={newProduct.category}>
                                <option value="#">Seleccione una categoria</option>
                                {products.map((product) => (
                    <option
                      key={product.id}
                      name={product.productoDTOID}
                      value={product.productoDTOID}
                    >
                      {product.category} 
                    </option>
                  ))}
                            </select>
                            <input type="text" name="details"  value={newProduct.details} placeholder="" className=""/>
                            <input type="text" name="imageURL"  value={newProduct.imageURL} placeholder="" className=""/>                            
                        </div>
                    </form>

                </div>}
        </main>
        
        
        </>
    )
}
    


export default Product;