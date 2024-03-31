import React from "react";

function CardsClients(props) {
    return(
            <div className="flex flex-col items-center gap-3 border rounded-xl max-w-[23rem]">
                <h1>{props.name}</h1>
                <div className="flex flex-col">
                    <div>{props.lastName}</div>
                    <div>{props.email}</div>
                    <div>{props.adress}</div>
                    <div>{props.phone}</div>
                    <div>{`$${props.balance}`.toLocaleString( 'en-US', { style:'currency', currency:'USD' } )}</div>
                </div>
            </div>
    )
}

export default CardsClients;