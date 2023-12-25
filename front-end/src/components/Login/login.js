import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const[text, setText]= useState("Register");

  return (
  <div className='parent_login2'>
    <div className='container_login2'>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
      <div className='inputs'>
        {/* <div className='input'>
            <img className="icon" src="/people_icon.png" alt='user name'/>
            <input type='text' placeholder='Name'/>
        </div> */}
        <div className='input'>
            <img className="icon" src="/email_icon.png" alt='email user'/>
            <input type='email' placeholder='Email'/>
        </div>
        <div className='input'>
            <img className="icon" src="/password_icon.png" alt='user password'/>
            <input type='password' placeholder='Password'/>
        </div>
      </div>
      <div className='forgotPassword'>Forgot Password?<span>click here</span></div>
      <div className='submitContainer'>
        <div className={text==="Login User"?"submit gray":"submit"} onClick={()=>{setText("Register")}}>Login</div>
        {/* <div className={text==="Register"?"submit gray":"submit"} onClick={()=>{setText("Login User")}}>Login</div> */}
      </div>
    </div>
  </div>
  )
}

export default Login;





