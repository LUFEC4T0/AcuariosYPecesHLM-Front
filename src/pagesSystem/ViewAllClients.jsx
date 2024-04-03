import React, { useState } from "react";
import AllClientsOnline from "../componentsSystem/AllClientsOnline";
import AllClientsStore from "../componentsSystem/AllClientsStore";

function ViewAllClients() {
    const [visual1, setVisual1] = useState(false);
    const [visual2, setVisual2] = useState(true);

    function handleclick(e) {
        setVisual1(!visual1)
        setVisual2(!visual2)
    }
    

    return (
            <main className="flex flex-col mt-5">
                <h1 className="text-white text-2xl text-center">Clientes</h1>
                <div className="flex justify-center gap-3">
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[24rem] bg-gray-300">Clientes Online</button>
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[24rem] bg-gray-300">Clientes Store</button>
                </div>
                <div className="border-t border-2 border-white w-[50rem] self-center mt-5"></div>
                
                {visual1 && <AllClientsOnline/>}
                {visual2 && <AllClientsStore/>}

            </main>
        
    )
}

export default ViewAllClients;