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

  const nav = useNavigate();

  return (
    <div className='body'>

    <div className="signup-container">
       <div class="container">
      <div class="login">
        <form>
          <h1>Sign Up</h1>
          <hr />
          <p>Welcome </p>
          <label>Name</label>
          <input type="text" placeholder="User Name" />
          <label>Email</label>
          <input type="text" placeholder="Email" />
          <label> Set Password</label>
          <input type="password" placeholder="Set New Password" />
          <br/><br/>
          <button onClick={()=>nav('/login')}><span>Submit</span></button>
          
        <closeform></closeform></form>
      </div>
    </div>
      
    </div>
    </div>
  );
};

export default SignupPage;
