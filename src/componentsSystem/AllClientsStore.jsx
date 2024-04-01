import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CardsClients from "./CardsClients";

function AllClientsStore() {
    const [clients, SetClients] = useState([])
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get("/api/clients/clientStore", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            SetClients(res.data)
            console.log("clients: ", clients)
        })
        .catch(err => console.log(err))
    }, [])
    return(
        <div className="flex flex-col items-center m-20 gap-5">
            <button className="self-center border p-5  text-white">+Añadir Cliente</button>

            <div className="flex flex-wrap gap-11 justify-center">
                {Object.keys(clients).length > 0 ? clients
                .map(client => <CardsClients key={client.clientStoreID} name={client.name} lastName={client.lastName} email={client.rut} adress={client.adress} phone={client.phone} balance={client.balance}>
                </CardsClients>) : <h1>Cargando...</h1>}
            </div>
        </div>
    )
}

export default AllClientsStore;