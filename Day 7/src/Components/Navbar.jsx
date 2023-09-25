import React from 'react';
import '../Asserts/Css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/menu" className="nav-link">
            Menu
          </a>
        </li>
        <li className="nav-item">
          <a href="/login" className="nav-link">
            Logout
          </a>
        </li>
        <li className="nav-item">
          <a href="/cart" className="nav-link">
            My Cart
          </a>
        </li>
        <li className="nav-item">
            <i className='bx bx-cart'></i>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
