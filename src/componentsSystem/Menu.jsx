import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Menu() {
    const className1 = "border min-w-[11rem] text-center font-bold bg-white border-black";
    const navigate = useNavigate()

    function handleClick(e) {
        localStorage.removeItem('token')
        // swal({
        //     text: "Closed Session",
        //     icon: "error",
        //     button: "accept",
        //     timer: "2000"

        // })
        navigate('/login')
    }
    return (
        <>
            <div className="max-w-96">
                <div className="flex flex-col items-center p-5 m-5 min-w-[20rem] gap-10 h-full">
                    <Link to="/admin/viewAllClients" className={className1}>Clientes</Link>
                    <Link to="/admin/viewAllProviders" className={className1}>Proveedores</Link>
                    <Link to="/admin/products" className={className1}>Productos</Link>
                    <Link to="/admin/purchases" className={className1}>Compras</Link>
                    <Link to="/admin/allEmployees" className={className1}>Empleados</Link>
                    <Link className={className1}>Ventas</Link>
                    <div className={className1 + "border-white"}></div>
                    <div className="flex flex-row gap-5">
                        <img onClick={handleClick} className="max-w-8 max-h-8 px-1 self-center" src="../../public/cerrarSesion.png" alt="Puerta abierta" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu; 