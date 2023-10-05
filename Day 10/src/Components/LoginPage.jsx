import React, { useState } from 'react';
import '../Asserts/Css/LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Redux/UserSlice';

const LoginPage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all required fields.');
    } else {
      dispatch(
        login({
          name: email,
          loggedIn: true,
        })
      );
      nav('/menu');
    }
  };

  return (
    <div className='body'>
      <br/><br/><br/><br/><br/>
      <div className="login-container">
        <div className="container">
          <div className="login">
            <form>
              <h1>Login</h1>
              <hr />
              <p>A Taste of Excellence</p>
              <label>Username</label>
              <input
                type="text"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error-message">{error}</p>}
              <br/><br/>
              <button onClick={handleLogin}><span>Login</span></button>
              <button onClick={() => nav('/register')}><span>Create New Account</span></button>
              <Link to={"/admin-login"}>
              <button>Admin Login</button>
              </Link>
              <closeform></closeform>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
