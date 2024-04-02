import React, {useState} from "react"
import AllProvider from "../componentsSystem/AllProvider";
import AddNewProvider from "../componentsSystem/AddNewProvider";



function ViewAllProvider() {
    const [visual1, setVisual1] = useState(false);
    const [visual2, setVisual2] = useState(true);

    function handleclick(e) {
        setVisual1(!visual1)
        setVisual2(!visual2)
    }

    return(
        <main className="m-5">
                <h1 className="font-bold text-white text-xl underline text-center">Proveedores</h1>
                <div className="flex justify-center gap-3">
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[30rem] bg-gray-300">Proveedores</button>
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[30rem] bg-gray-300">+ Nuevo Proveedor</button>
                </div>
                
                {visual1 && <AllProvider/>}
                {visual2 && <AddNewProvider/>}
        </main>
    )
}

export default ViewAllProvider;