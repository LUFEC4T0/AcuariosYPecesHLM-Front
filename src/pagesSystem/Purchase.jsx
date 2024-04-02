import React, { useEffect, useState } from "react";
import axios from "axios";

const Purchases = () => {
    const token = localStorage.getItem('token')

    

    const [purchases, setPurchases] = useState([]);
    const [newPurchase, setNewPurchase] = useState({
        quantity: 0,
        details: "",
        date: '',
        unitCost: 0.00,
        providerID: 0,
        productID: 0,
    })

    const handleInput = async (e) => {
        
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        useEffect(() => {
            axios.post("api/purchase/newPurchase", {
                quantity: newPurchase.quantity,
                details: newPurchase.details,
                date: newPurchase.date,
                unitCost: newPurchase.unitCost,
                providerID: newPurchase.providerID,
                productID: newPurchase.productID,
            }, {
                heades: {
                    Authorization: `Bearer ${token}`
                }
            } ).then((response) => {
                console.log(response)
            })
            .catch((err)=>{
                console.log(err)
            })
        },[])
    
    }
    console.log(token)

    useEffect(()=> {
        axios.get("api/purchase/all", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res)=> {
            console.log(res.data)
            setPurchases(res.data)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[])

    

    console.log(purchases)

    const [visual1, setVisual1] = useState(true);
    const [visual2, setVisual2] = useState(false);

    function handleclick() {
        setVisual1(!visual1)
        setVisual2(!visual2)
    }

    const [productList, setProduct] = useState([])
    useEffect(()=>{
        axios.get("api/products/all")
        .then((res)=> {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <>
            <div className="flex justify-center items-center gap-10 p-10 ">
                <button onClick={handleclick} className="font-bold text-center mt-11 mx-2 bg-gray-300 h-11 border-2 w-40 max-w-[30rem]">Ver Compras</button>
                <button onClick={handleclick} className="font-bold text-center mt-11 mx-2 bg-gray-300 h-11 border-2 w-40 max-w-[30rem]">Nueva Compra</button>
            </div>

            {visual1 && <div>
                <div className="text-white flex flex-col justify-center items-center mt-8">
                    {Object.keys(purchases).length > 0 ? purchases.map(purchase => {
                        <div className="flex flex-col border-b-2 border-white">
                        <p>{purchase.details}</p>
                        <p>{purchase.date}</p>
                        <p>{purchase.totalCost}</p>
                        </div>
                    }) : <p className="border-b-2 border-white text-2xl">No hay compras registradas</p>}
                </div>
            </div>}
            {visual2 && <div>
                <div>
                quantity: newPurchase.quantity,
                details: newPurchase.details,
                date: newPurchase.date,
                unitCost: newPurchase.unitCost,
                providerID: newPurchase.providerID,
                productID: newPurchase.productID,
                    <form onSubmit={handleSubmit}>
                        <h4>Nueva Compra</h4>
                        <div>
                            <input type="number" placeholder="Cantidad"/>
                            <input type="text" placeholder="Detalle"/>
                            <input type="datetime-local" placeholder="Fecha"/>
                            <input type="number" placeholder="Costo Unitario"/>
                            <select name="" id="">
                                <option value="#" selected disabled>Seleccione un proveedor</option>
                            </select>
                            <select name="" id="" >
                                <option value="#" selected disabled>Seleccione un producto</option>
                                {productList.map(product => 
                                    <option key={product.id} value={product.id}>{product.name}</option>
                                    )}
                            </select>
                        </div>
                    </form>
                </div>
            </div>}
        </>
    )
}

export default Purchases