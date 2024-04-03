import React, { useState } from "react";
import AllEmployees from "./AllEmployees";
import NewEmployee from "../componentsSystem/NewEmployee";

function ViewAllEmployees() {
    const [visual1, setVisual1] = useState(false);
    const [visual2, setVisual2] = useState(true);

    function handleclick(e) {
        setVisual1(!visual1)
        setVisual2(!visual2)
    }
    

    return (
            <main className="flex flex-col mt-5">
                <h1 className="text-white text-2xl text-center mb-5">Empleados</h1>
                <div className="border-t border-2 border-white w-[50rem] self-center"></div>
                <div className="flex justify-center gap-3">
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[30rem] bg-gray-300">Ver Empleados</button>
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[30rem] bg-gray-300">+ Nuevo Empleado</button>
                </div>
                
                {visual1 && <AllEmployees/>}
                {visual2 && <NewEmployee/>}

            </main>
        
    )
}

export default ViewAllEmployees;