import React from "react";

function CardsClients(props) {
    return(
            <div className="flex flex-col items-center p-5 gap-3 border rounded-xl max-w-[23rem] bg-gray-900 text-white min-w-[20rem]">
                <h1>{props.name} {props.lastName}</h1>
                <div className="flex flex-col">
                    <div>Email: {props.email}</div>
                    <div>Adress {props.adress}</div>
                    <div>Phone: {props.phone}</div>
                    <div>Balance: {`$${props.balance}`.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}</div>
                </div>
            </div>
    )
}

export default CardsClients;