import axios from "axios";
import React, { useEffect, useState }  from "react";
import { useStore } from "react-redux";



const Sales = () => {

    //Para ventas

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


    const [newSale, setNewSale] = useState({
        details: '',
        finalAmount: 0.0,
        paidMethod: [],
        taxes: [],
        employeeId: 1,
        cartId: 0,
        })

    const handleSubmit = async  (e) => {
        e.preventDeafult()


        axios.post("api/sales/", newSale, {
            headers: {
                Authorization: `Bearer ${token}`
              }
        }).then((res)=> {
            console.log(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }

    const handleInput = async (e) => {
        setNewSale({ ...newSale, [e.target.name]: e.target.value });
        console.log(newSale)
      };



      //Para carrito

      //RecordCartDetailStoreDTO
      const [newCartDetail, setNewCartDetail] = useState({
        quantity: 0,
        amount: 0,
        productId: 0,
        rut: ''
      })



      const listaDetalles = []

      //Cuando llame a cartController llame a salesController


      //Traer listado de clientes

      const [clientsList, setClientsList] = useStore([])

      axios.get('api/clients/clientStore' ,{
        headers: {
            Authorization: `Bearer ${token}`,
          }
      }).then((res) => {
        setClientsList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

      

    return(
        <>
            {sales.map((sale)=> {
                <div key={sale.id}>
                    <p>{sale.finalAmount}</p>
                </div>
            })}

            <form action={handleSubmit}>
                <h3>Registrar Venta</h3>
                <input type="text" onChange={handleInput}/>
                <input type="text" onChange={handleInput}/>
                <input type="text" onChange={handleInput}/>
                <input type="text" onChange={handleInput}/>
                <input type="text" />
                <input type="text" />
            </form>

        </>
    )

}

export default Sales;