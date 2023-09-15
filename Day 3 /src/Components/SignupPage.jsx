import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Asserts/Css/SignUpPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    userId: '',
    username: '',
    password: '',
  });

  const history = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = () => {
    // Implement your signup logic here
    // You can send the form data to the server or perform client-side validation
    // Redirect to login page if signup is successful
    history('/login');
  };

  return (
    <div className="signup-container">
      <h1>Signup</h1>
      <form>
        <div className="form-group">
          <label htmlFor="userId">User ID</label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="button" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
