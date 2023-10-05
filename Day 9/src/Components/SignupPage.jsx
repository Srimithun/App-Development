import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Asserts/Css/SignUpPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showError, setShowError] = useState(false);
  const nav = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setShowError(true);
    } else {
      nav('/login');
    }
  };

  return (
    <div className='body'>
      <br/><br/><br/><br/><br/>
      <div className="signup-container">
        <div className="container">
          <div className="login">
            <form>
              <h1>Sign Up</h1>
              <hr />
              <p>A taste of Excellence</p>
              <label>Name</label>
              <input
                type="text"
                placeholder="User Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label>Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <label>Set Password</label>
              <input
                type="password"
                placeholder="Set New Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {showError && (
                <p className="error-message">Please fill in all required fields.</p>
              )}
              <br/><br/>
              <button onClick={handleSubmit}><span>Submit</span></button>
              <button onClick={() => nav('/login')}><span>Login (Already a user)</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
