import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardsCart from "./CardsCart";

function CartsDetails() {
    const {id, tipo} = useParams()
    const token = localStorage.getItem('token')
    const [carts, setCarts] = useState([])
    

    useEffect(() => {
        if (tipo == "store") {
            console.log("Entró Store")
            axios.get(`/api/clients/clientStore/${id}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(
                res => setCarts(res.data.carts)
            )
            .catch(err => console.log(err))
    
        } else if (tipo == "online") {
            console.log("Entró online")
            axios.get(`/api/clients/clientOnline/${id}`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(
                res => setCarts(res.data.carts)
            )
            .catch(err => console.log(err))
        }
    }, [id, tipo, token])

    return(
        <main className="flex flex-col m-5 gap-2">
            <h1 className="font-bold text-white text-xl underline text-center">Lista de compras realizadas:</h1>
            <div className="">
                {Object.keys(carts).length > 0 ? carts.map(cart => cart.cartDetails.map(cartDetails => <CardsCart key={cartDetails.cartDetailsID} cartDetails={cartDetails}></CardsCart>)) : <h1 className="font-bold text-red-900 text-xl underline text-center m-11 text-red-900">Este cliente no posee compras realizadas</h1>}
            </div>
        </main>
    )
}

export default CartsDetails;