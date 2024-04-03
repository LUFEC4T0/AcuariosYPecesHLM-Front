import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardSales from "./CardSales";

function SalesDetails() {
    const {id} = useParams()
    const [sales, setSales] = useState([])
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get(`/api/employees/${id}`, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => 
            setSales(res.data.sales)
        )
        .catch(err => console.log(err))
    }, [])

    return (
        <main className="flex flex-col m-5 gap-2">
            <h1 className="font-bold text-white text-2xl text-center mb-5">Ventas</h1>
            <div className="border-t border-2 border-white w-[50rem]"></div>
            <div className="flex flex-wrap justify-center gap-5 m-11">
                {Object.keys(sales).length > 0 ? sales.map(sale => <CardSales key={sale.id} sale={sale}></CardSales>) : <h1 className="font-bold text-red-900 text-xl underline">No hay ventas registradas</h1>}
            </div>
        </main>
    )
}

export default SalesDetails;