import React, { useState } from 'react';
import { useCart } from '../utils/cart';

function Cart() {

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const shippingPrice = 100; 
  const taxRate = 0.1; 
  const { cart, addToCart, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(Array(cart.length).fill(1));


  // Calculate subtotal of items in the cart
  const calculateSubtotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item, index) => {
      totalPrice += item.finalPrice * quantities[index];
    });
    return totalPrice;
  };

  // Función para manejar el cambio de cantidad de un ítem
  const handleQuantityChange = (index, event) => {
    const newQuantities = [...quantities];
    newQuantities[index] = parseInt(event.target.value, 10); // Almacena la nueva cantidad para el ítem en la posición 'index'
    setQuantities(newQuantities);
  };

  // Calculate total amount including tax and shipping
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * taxRate;
    const total = subtotal + tax + shippingPrice;
    return total.toFixed(2);
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
            value={quantities[index]} // Asigna la cantidad como valor del input
            onChange={(event) => handleQuantityChange(index, event)} // Actualiza la cantidad cuando cambia el input
          />
       {"Total: "+ item.finalPrice * (1-item.promos/100) * quantities[index]} {/* Multiplica finalPrice por la cantidad */}

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
