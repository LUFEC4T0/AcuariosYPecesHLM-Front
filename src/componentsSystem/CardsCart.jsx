import React from "react";

function CardsCart({cart}) {
    return (
        <main>
            <div className="text-white">{cart.productHolder}</div>
            <div className="text-white">{cart.quantity}</div>
            <div className="text-white">{cart.amount}</div>
            <div className="text-white">{cart.cartHolder}</div>
        </main>
    )
}

export default CardsCart