import axios from "axios";
import React, { useEffect, useState }  from "react";



const Sales = () => {

    const [sales, setSales] = useState([])

    const token = localStorage.getItem('token')

    useEffect(()=>{
        axios.get("api/sales/all",{
            headers: {
              Authorization: `Bearer ${token}`
            },
          }).then((res)=> {
                console.log(res.data)
                setSales(res.data)
          })
          .catch((err)=> {
            console.log(err)
          })

    })

    return(
        <>
            {sales.map((sale)=> {
                <div key={sale.id}>
                    <p>{sale.finalAmount}</p>
                </div>
            })}

        </>
    )

}

export default Sales;