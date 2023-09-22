import React, { useState } from 'react';
import '../Asserts/Css/LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './Redux/UserSlice';
const LoginPage=()=>{
  const nav = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin=(e)=>{
    if(!login || !password){
      e.preventDefault();
    }else{
      dispatch(login({
        name:email,
        loggedIn:true
      }))
    }
    nav('/admin/panel');
  }

  return (
    <div className='body'>

      <div className="login-container">
          <div class="container">
              <div class="login">
                 <form>
                    <h1>Login</h1>
                      <hr />
                     <p>Welcome </p>
                    <label>Email</label>
                    <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <br/><br/>
                    <button onClick={handleLogin}><span>Login</span></button>
                    <button onClick={()=>nav('/register')}><span>Create New Account</span></button>
          
         
                      <closeform></closeform></form>
                </div>
      
          </div>
            
          </div>
          </div>
  );
}

export default LoginPage;
