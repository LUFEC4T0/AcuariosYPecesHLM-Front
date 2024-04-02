import React from "react";
import { Link } from "react-router-dom";

function Menu() {
    const className1 = "border min-w-[11rem] text-center font-bold bg-white border-black";
    const className2 = "border min-w-[5rem] text-center font-bold bg-white border-black";
    return (
        <>
            <div className="max-w-96">
                <div className="flex flex-col items-center p-5 m-5 min-w-[20rem] gap-10 h-full">
                    <Link to="/admin/viewAllClients" className={className1}>Clients</Link>
                    <Link to="/admin/viewAllProviders" className={className1}>Providers</Link>
                    <Link to="/admin/products" className={className1}>Products</Link>
                    <Link to="/#" className={className1}>Purchases</Link>
                    <Link to="/admin/allEmployees" className={className1}>Employees</Link>
                    <div className="flex flex-row gap-5">
                        <Link className={className2}>Logout</Link>
                        <Link className={className2}></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu; 