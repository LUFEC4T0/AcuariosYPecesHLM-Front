import React from "react";
import { Link } from "react-router-dom";

function CardsClientsOnline({client}) {
    return(
            <div className="flex flex-col gap-2 min-w-[25rem] p-5 bg-gray-200 font-bold border border-black rounded-2xl min-h-[11rem] max-w-[20rem]">
                <h1 className="text-center">{client.name} {client.lastName}</h1>
                <div className="flex flex-col">
                    <div>Email: {client.email}</div>
                    <div>Adress {client.adress}</div>
                    <div>Phone: {client.phone}</div>
                    <div>Balance: {`${client.balance.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}`}</div>
                    <Link to={`/admin/viewAllClients/${client.clientOnlineID}/${"online"}`} className="self-end underline text-green-900">Ver Compras</Link>
                </div>
            </div>
    )
}

export default CardsClientsOnline;