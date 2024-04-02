import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardsCart from "./CardsCart";

function CartsDetails() {
    const {id, tipo} = useParams()
    const token = localStorage.getItem('token')
    const [carts, setCarts] = useState([])

    useEffect(() => {
        if (tipo === "store") {
            axios.get('api/clients/clientStore/', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(
                res => {
                    console.log("resdata store: " + res.data.carts);
                    setCarts(res.data.find(client => client.ClientStoreID == id))
                    console.log("resdata store: " + res.data.carts);
            })
            .catch(err => console.log(err))
    
        } else if (tipo === "online") {
            axios.get('/api/clients/clientOnline/', {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => {
                    console.log("resdata online: " + res.data.carts);
                    setCarts(res.data.carts)
                    console.log("resdata online: " + res.data.carts);

            })
            .catch(err => console.log(err))
        }
    }, [id, tipo, token])

    return(
        <main>
            {Object.keys(carts).length > 0 ? carts.map(cart => <h1 className="text-white">LSJDNLSJDFNLSDNFL</h1>) : <h1>Este cliente no posee compras realizadas</h1>}
        </main>
    )
}

export default CartsDetails;