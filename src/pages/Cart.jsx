import React, { useState } from 'react';
import { useCart } from '../utils/cart';

function Cart() {
  const shippingPrice = 100; 
  const { cart, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(Array(cart.length).fill(1));


  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item, index) => {
      totalPrice += item.finalPrice * quantities[index];
    });
    return totalPrice;
  };

  const handleQuantityChange = (index, event) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(event.target.value, 10); 
    setQuantities(newQuantities);
  };


  return (
    <div className=''>
      <div className='flex justify-around'>
        <div className='flex flex-col'>
        <h2>Shopping Cart</h2>
        <div className=''>
        <ul className=''>
        {cart.map((item, index) => (
        <li key={index} className='flex flex-col justify-center items-start gap-5'>
          <div className='flex gap-5'>
            <p className='font-bold'>
              Producto: 
            </p>
            {item.name}
          </div>
          <div className='flex gap-5'>
            <p className='font-bold'>
              Precio:
            </p>
            {item.finalPrice}
          </div>
          <div className='flex gap-5'>
            <p className='font-bold'>Descuento:</p>
            {item.finalPrice * (item.promos/100)}
          </div>
          <div className='flex gap-5'>
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
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Pay Now</button>
          </div>
        </div>
        </div>
    </div>
  );
}

export default Cart;
