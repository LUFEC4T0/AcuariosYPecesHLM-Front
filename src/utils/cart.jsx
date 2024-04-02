import React, { createContext, useState, useEffect, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('cartCount');
    return storedCount ? parseInt(storedCount) : 0;
  });

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCount(prevCount => prevCount + 1);
    localStorage.setItem('cartCount', count + 1);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCount(prevCount => prevCount - 1);
    localStorage.setItem('cartCount', count - 1);
  };

  const getTotalItems = () => {
    return count;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};