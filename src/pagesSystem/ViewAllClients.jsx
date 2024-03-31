import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CardsClients from "../componentsSystem/CardsClients";

function ViewAllClients() {
    const [clients, SetClients] = useState([])
    const token = localStorage.getItem('token')
    useEffect(() => {
        axios.get("/api/clients/clientOnline", {
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
        <div>
            {Object.keys(clients).length > 0 ? clients
            .map(client => <CardsClients key={client.clientOnlineID} name={client.name} lastName={client.lastName} email={client.email} adress={client.adress} phone={client.phone} balance={client.balance}>
            </CardsClients>) : <h1>no hay clientes registrados</h1>}
            
        </div>
    )
}

export default ViewAllClients;