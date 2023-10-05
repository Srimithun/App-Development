import React from 'react';
import '../Asserts/Css/Landing.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

function Landing() {
    const nav = useNavigate();
  return (
    <>
    <div className="landing-page">
      <div className="landing-content">
        <h1>Welcome to Digital Dining</h1>
        <p>Discover the finest culinary experiences.</p>
        <div className="buttons">
          <button className="login-button" onClick={()=>nav('/login')}>Login</button>
          <button className="signup-button" onClick={()=>nav('/register')}>Sign Up</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Landing;