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
                <h1 className="text-white text-2xl text-center">Empleados</h1>
                <div className="flex justify-center gap-3">
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[24rem] bg-gray-300">Ver Empleados</button>
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[24rem] bg-gray-300">+ Nuevo Empleado</button>
                </div>
                <div className="border-t border-2 border-white w-[50rem] self-center mt-5"></div>

                {visual1 && <NewEmployee/>}
                {visual2 && <AllEmployees/>}
                

            </main>
        
    )
}

export default ViewAllEmployees;