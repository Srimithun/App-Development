import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // Implement your login logic here
    // You can send the form data to the server for authentication
    // Redirect to the dashboard if login is successful
    // You may also want to handle login errors
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
