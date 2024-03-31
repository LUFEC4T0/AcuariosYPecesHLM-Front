import React from "react";

function Menu() {
    return (
        <>
            <div className="max-w-96">
                <div className="flex flex-col items-center p-5 bg-gray-500 m-5 min-w-[20rem] gap-2 h-full">
                    <a href="/admin/viewAllClientsOnline" className="border">Clients</a>
                    <a href="/clients" className="border">Clients</a>
                    <a href="/clients" className="border">Clients</a>
                    <a href="/clients" className="border">Clients</a>
                    <a href="/clients" className="border">Clients</a>
                    <a href="/clients" className="border">Clients</a>
                    <div className="flex flex-row">
                        <a className="border">Logout</a>
                        <a className="no sé"></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu; 