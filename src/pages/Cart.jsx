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
          <div className=' '>
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
             className='text-right '
                type="number" 
                step="1" 
                min="1" 
                max={item.stock} 
                value={quantities[index]} 
                onChange={(event) => handleQuantityChange(index, event)}
              />
          </div>
          </div>
        <button className='px-5 bg-red-500 text-white rounded-lg hover:text-blue-600' onClick={() => removeFromCart(index)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
          Remove</button>
          <div className='flex gap-5 justify-between'>
            <p className='font-bold'>
            Total: 
            </p>
            {item.finalPrice * (1-item.promos/100) * quantities[index]} 
          </div>
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
