import React, { useState } from 'react';
import { useCart } from '../utils/cart';
import axios from 'axios';

function Cart() {
  const shippingPrice = 100; 
  const { cart, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(Array(cart.length).fill(1));
  const [cartDetail, setCartDetail] = useState()
  const [purchaseData,setPurchaseData] = useState({details:'',finalAmount:'',paidMethod:'',taxes:'',cartId:''})


  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item, index) => {
      totalPrice += item.finalPrice * (1-item.promos/100) * quantities[index];
    });
    return totalPrice;
  };

  const handleQuantityChange = (index, event) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(event.target.value, 10); 
    setQuantities(newQuantities);
    const cartarray = [];
  
      cart.forEach((product, index) => {
        cartarray.push({
          productoId: product.productoDTOID,
          amount: product.finalPrice * (1 - product.promos / 100),
          quantity: quantities[index]
        });
      });
    /*const cartarray = cart.map(product => {
      return {
        productoID: product.productoDTOID,
        amount: product.finalPrice * (1-product.promos/100),
        quantity: quantities[index]
      }
    })*/
    setCartDetail(cartarray)
    console.log(cartarray)
  };

  const handleOnPay =async (e)=>{
    const token = localStorage.getItem("token")
    e.preventDefault()
    axios.post("/api/carts/cartOnline",cartDetail, {
      headers: {
        Authorization: `Bearer ${token}`
    }
    }) .then((res) => {
      swal({
        text: "¡Muchas gracias por su compra!",
        icon: "success",
        button: "accept",
        timer: "2000"
    })
  }).catch((err) => {
    swal({
      text: "Hubo un error con su compra.",
      icon: "error",
      button: "accept",
      timer: "2000"

  })
    });
    }


  return (
    <div className=''>
      <div className='flex justify-around items-center'>
        <div className='flex flex-col items-center p-10 gap-10'>
        <h2>Shopping Cart</h2>
        <div className=''>
        <ul className=''>
        {cart.map((item, index) => (
        <li key={index} className='flex justify-between items-center gap-10 border-r p-5 border-black'>
          <div>
            <img className="w-36" src={item.image} alt="" />
          </div>
          <div className='flex gap-5 justify-between'>
            <p className='font-bold'>
              Producto: 
            </p>
            {item.name}
          </div>
          <div className='flex gap-5 justify-between'>
            <p className='font-bold'>
              Precio:
            </p>
            {item.finalPrice}
          </div>
          <div className='flex gap-5 justify-between'>
            <p className='font-bold'>Descuento:</p>
            {item.finalPrice * (item.promos/100)}
          </div>
          <div className='flex gap-5 justify-between'>
            <p className='font-bold'>Cantidad:</p>
            <input 
            type="number" 
            step="1" 
            min="1" 
            max={item.stock} 
            value={quantities[index]} 
            onChange={(event) => handleQuantityChange(index, event)}
          />
          </div>
          <p>
            {"Total: "+ item.finalPrice * (1-item.promos/100) * quantities[index]} 
          </p>

      <button onClick={() => removeFromCart(index)}>Remove</button>
    </li>
  ))}
</ul>
        </div>
        <div>
          <strong>Subtotal:</strong> {calculateTotalPrice()}
          <br />
          <strong>Shipping Price:</strong> ${shippingPrice}
          <br />
          <strong>Taxes:</strong> ${calculateTotalPrice()* 0.21} 
          <br />
          <strong>Total:</strong> ${calculateTotalPrice()* 0.21+ calculateTotalPrice()+shippingPrice}
        </div>
      </div>
      <div>
        <button onClick={handleOnPay} style={{ padding: '10px 20px', fontSize: '16px' }}>Pay Now</button>
        <label>Payment Method: </label>
        <select>
          <option value="DEBIT" selected>DEBIT</option>
          <option value= "CREDIT">CREDIT</option>
        </select>
    
      </div>
        <div className='flex flex-col justify-center items-start gap-5'>
          <div className='flex gap-5'>
            <p className='font-bold'>Subtotal:</p> 
            {calculateTotalPrice()}
          </div>
          <div className='flex gap-5'>
            <p className='font-bold'>Shipping Price:</p> 
            ${shippingPrice}
          </div>
          <div className='flex gap-5'>
            <p className='font-bold'>Taxes:</p>
            ${calculateTotalPrice()* 0.21} 
          </div>
          <div className='flex gap-5'>
            <p className='font-bold'>Total:</p>
            ${calculateTotalPrice()* 0.21+ calculateTotalPrice()+shippingPrice}
          </div>
          <div>
           <button onClick={handleOnPay} style={{ padding: '10px 20px', fontSize: '16px' }}>Pay Now</button>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Cart;
