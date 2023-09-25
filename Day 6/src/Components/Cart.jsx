import React, { useEffect, useState } from 'react';
import '../Asserts/Css/Cart.css';

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pancake', price: 100, quantity: 2, image: 'https://shorturl.at/CKQS2' },
    { id: 2, name: 'Biriyani', price: 220, quantity: 1, image: 'https://shorturl.at/aADM8' },
    { id: 3, name: 'Pizza', price: 350, quantity: 3, image: 'https://shorturl.at/jowCV' },
  ]);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleAddQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleSubtractQuantity = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const [items, setItems] = useState([]);

  useEffect(()=>{
    const item = localStorage.getItem('items');
    setItems(items);
  })

  return (
    <div className="cart-page">
        <a href="/menu" className="nav-link">
            <h3>Back</h3>
          </a>
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: INR.{item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleSubtractQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddQuantity(item.id)}>+</button>
              </div>
            </div>
            <p>Total: INR.{item.price * item.quantity}</p>
            <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="total-amount">
        <p>Total Amount: INR.{totalAmount}</p>
        <button className="payment-button">Make Payment</button>
      </div>
    </div>
  );
};

export default AddToCartPage;