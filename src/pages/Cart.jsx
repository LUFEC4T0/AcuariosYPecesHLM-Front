import React, { useState } from 'react';
import { useCart } from '../utils/cart';

function Cart() {

  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const shippingPrice = 10; 
  const taxRate = 0.1; 
  const { cart, addToCart, removeFromCart } = useCart();

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setItemPrice(parseFloat(e.target.value));
  };

  const addItem = () => {
    if (itemName && itemPrice) {
      const newItem = {
        name: itemName,
        price: itemPrice
      };
      setItems([...items, newItem]);
      setItemName('');
      setItemPrice('');
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  // Calculate subtotal of items in the cart
  const calculateSubtotal = () => {
    let total = 0;
    items.forEach((item) => {
      total += item.price;
    });
    return total;
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
      {item.name} - {item.price}
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </li>
  ))}
</ul>

        </div>
        <div>
          <strong>Subtotal:</strong> ${calculateSubtotal()}
          <br />
          <strong>Shipping Price:</strong> ${shippingPrice}
          <br />
          <strong>Taxes:</strong> ${(calculateSubtotal() * taxRate).toFixed(2)}
          <br />
          <strong>Total:</strong> ${calculateTotal()}
        </div>
      </div>
      <div>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>Pay Now</button>
      </div>
    </div>
  );
}

export default Cart;
