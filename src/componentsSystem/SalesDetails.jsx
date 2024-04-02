import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardSales from "./CardSales";

function SalesDetails({sale}) {
    const {id} = useParams()
    const [employee, setEmployee] = useState({})
    const token = localStorage.getItem('token')

    useEffect(() => {
        axios.get("/api/employees/", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setEmployee(res.data.find(employee => employee.employeeID == id))
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <main className="flex flex-col m-5 gap-2">
            <h1 className="font-bold text-white text-2xl underline text-center">VENTAS</h1>
            <div className="flex flex-wrap justify-center gap-5 m-11">
                {Object.keys(employee).length > 0 ? employee.sales.map(sale => <CardSales key={sale.id} sale={sale}></CardSales>) : <h1 className="text-white font-bol">No hay venta registradas</h1>}
            </div>
        </main>
    )
}

export default SalesDetails;