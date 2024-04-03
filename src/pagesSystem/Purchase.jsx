import React, { useEffect, useState } from "react";
import axios from "axios";


const Purchases = () => {
  const token = localStorage.getItem("token");

 

  const [purchases, setPurchases] = useState([]);


  const [newPurchase, setNewPurchase] = useState({
    quantity: 0,
    details: "",
    unitCost: 0.0,
    providerID: 0,
    productID: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(
        "api/purchase/newPurchase",
        newPurchase,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  
  console.log(token);

  useEffect(() => {
    axios
      .get("api/purchase/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setPurchases(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(purchases);

  const [visual1, setVisual1] = useState(true);
  const [visual2, setVisual2] = useState(false);

  function handleclick() {
    setVisual1(!visual1);
    setVisual2(!visual2);
  }

  const [productList, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("api/products/all")
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInput = async (e) => {
    setNewPurchase({ ...newPurchase, [e.target.name]: e.target.value });
  };

  console.log(newPurchase)

  return (
    <div>
      <div className="flex justify-center items-center gap-10 p-10 ">
        <button
          onClick={handleclick}
          className="font-bold text-center mt-11 mx-2 bg-gray-300 h-11 border-2 w-40 max-w-[30rem]"
        >
          Ver Compras
        </button>
        <button
          onClick={handleclick}
          className="font-bold text-center mt-11 mx-2 bg-gray-300 h-11 border-2 w-40 max-w-[30rem]"
        >
          Nueva Compra
        </button>
      </div>

      {visual1 && (
        <div>
          <div className="text-white flex flex-col justify-center items-center mt-8">
            {Object.keys(purchases).length > 0 ? (
              purchases.map((purchase) => {
                <div className="flex flex-col border-b-2 border-white">
                  <p>{purchase.details}</p>
                  <p>{purchase.date}</p>
                  <p>{purchase.totalCost}</p>
                </div>;
              })
            ) : (
              <p className="border-b-2 border-white text-2xl">
                No hay compras registradas
              </p>
            )}
          </div>
        </div>
      )}
      {visual2 && (
        <div>
          <div className="flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-4 bg-[rgba(255,255,255,0.4)] w-[550px] h-[280px] p-4 rounded-lg"
            >
              <h4 className="text-white text-2xl">Nueva Compra</h4>
              <div className="flex flex-col w-[450px] gap-4">
                <input
                  className="text-center h-8 rounded-lg"
                  type="number"
                  placeholder="Cantidad"
                  name="quantity"
                  value={newPurchase.quantity}
                  onChange={handleInput}
                />
                <input
                  className="text-center h-8 rounded-lg"
                  type="text"
                  placeholder="Detalle"
                  name="details"
                  value={newPurchase.details}
                  onChange={handleInput}
                />
                {/* <input className="text-center h-8 rounded-lg" type="date" value={newPurchase.date} onBlur={handleInput}/> */}
                <input
                  className="text-center h-8 rounded-lg"
                  type="number"
                  name="unitCost"
                  placeholder="Costo Unitario"
                  value={newPurchase.unitCost}
                  onChange={handleInput}
                />
                <select
                  className="text-center h-8 rounded-lg"
                  name="providerID"
                  id=""
                  value={newPurchase.providerID}
                  onChange={handleInput}
                >
                  <option value="#" selected disabled>
                    Seleccione un proveedor
                  </option>
                </select>
                <select
                  className="text-center h-8 rounded-lg"
                  name="productID"
                  id=""
                  value={newPurchase.productID}
                  onChange={handleInput}
                >
                  <option value="#" selected disabled>
                    Seleccione un producto
                  </option>
                  {productList.map((product) => (
                    <option key={product.id} name={product.productoDTOID} value={product.productoDTOID}>
                      {product.name} de: {product.provider}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Registrar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchases;
