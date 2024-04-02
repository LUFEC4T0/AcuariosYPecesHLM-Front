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
    <div style={{ display: 'flex' }}>
      <div style={{ marginRight: '20px' }}>
        <h2>Shopping Cart</h2>
        <div>
        <ul>
  {cart.map((item, index) => (
    <li key={index}>
      {"Producto: " + item.name} - 
      {"  Precio: " +item.finalPrice} - 
      {"  Descuento:"+ -item.finalPrice * (item.promos/100)} -
      Cantidad <input 
            type="number" 
            step="1" 
            min="1" 
            max={item.stock} 
            value={quantities[index]} 
            onChange={(event) => handleQuantityChange(index, event)}
          />
       {"Total: "+ item.finalPrice * (1-item.promos/100) * quantities[index]} 

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
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Pay Now</button>
      </div>
    </div>
  );
}

export default Cart;
