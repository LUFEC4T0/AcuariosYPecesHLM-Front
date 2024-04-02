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
            <main className="">
                <div className="flex justify-center gap-3">
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[30rem] bg-gray-300">Clients Online</button>
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[30rem] bg-gray-300">Clients Store</button>
                </div>
                
                {visual1 && <AllClientsOnline/>}
                {visual2 && <AllClientsStore/>}

            </main>
        
    )
}

export default ViewAllClients;