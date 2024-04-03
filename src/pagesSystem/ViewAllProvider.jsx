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
        <main className="m-5 flex flex-col">
                <h1 className="text-white text-2xl text-center">Proveedores</h1>
                
                <div className="flex justify-center gap-3">
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[24rem] bg-gray-300">Proveedores</button>
                    <button onClick={handleclick} className="border font-bold text-center mt-11 mx-2 h-11 w-full text-black max-w-[24rem] bg-gray-300">+ Nuevo Proveedor</button>
                </div>
                <div className="border-t border-2 border-white w-[50rem] self-center mt-5"></div>
                
                {visual1 && <AllProvider/>}
                {visual2 && <AddNewProvider/>}
        </main>
    )
}

export default ViewAllProvider;