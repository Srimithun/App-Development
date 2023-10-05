import React, { useState } from 'react';
import '../Asserts/Css/Menu.css';
import Navbar from './Navbar';

const RestaurantMenu = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Pancake', price: 100, image: 'https://shorturl.at/CKQS2' },
    { id: 2, name: 'Biriyani', price: 220, image: 'https://shorturl.at/aADM8' },
    { id: 3, name: 'Bun', price: 30, image: 'https://shorturl.at/fxEM7' },
    { id: 4, name: 'Veg Thali', price: 80, image: 'https://shorturl.at/boB89' },
    { id: 5, name: 'Veg Sandwich', price: 60, image: 'https://shorturl.at/kxFJ8' },
    { id: 6, name: 'Pizza', price: 350, image: 'https://shorturl.at/jowCV' },
    { id: 7, name: 'Poori', price: 80, image: 'https://shorturl.at/htLOV' },
    { id: 8, name: 'Gobi chilli', price: 95, image: 'https://shorturl.at/cAIM5' },
    { id: 9, name: 'Waffle', price: 120, image: 'https://shorturl.at/gvMN2' },
    { id: 10, name: 'Fried Momos', price: 100, image: 'https://shorturl.at/pHLZ9' },



]);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (menuItem) => {
    const updatedCart = [...cart, menuItem];
    setCart(updatedCart);
    // localStorage.setItem('items',cart);
    const updatedTotalPrice = totalPrice + menuItem.price;
    setTotalPrice(updatedTotalPrice);
    // localStorage.setItem('price',totalPrice);
  };

  return (
    <>
    <Navbar/>
    <div className="menu-page">
      
      <h1 className='menuh1'>Restaurant Menu</h1>
      <div className="menu-container">
        {menuItems.map((menuItem) => (
            <div key={menuItem.id} className="menu-item">
            <img src={menuItem.image} alt={menuItem.name} />
            <h2>{menuItem.name}</h2>
            <p>Price: INR.{menuItem.price}</p>
            <button onClick={() => addToCart(menuItem)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((cartItem) => (
              <li key={cartItem.id}>{cartItem.name} - ${cartItem.price}</li>
              ))}
        </ul>
        <p>Total Price: INR.{totalPrice}</p>
      </div>
    </div>
              </>
  );
};

export default RestaurantMenu;
