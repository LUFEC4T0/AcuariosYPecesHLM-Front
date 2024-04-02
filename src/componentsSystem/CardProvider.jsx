import React from "react";

function CardProvider({provider}) {

    return(
        <div className="flex flex-col gap-2 min-w-[25rem] p-5 bg-gray-200 font-bold border border-black rounded-2xl min-h-[11rem] max-w-[20rem]">
            <div className="text-center">{provider.name}</div>
            <div>{provider.phone}</div>
            <div>{provider.email}</div>
            <div>{provider.ruc}</div>
            <div>{provider.adress}</div>
        </div>
    )
}

export default CardProvider;