import React, { useState } from 'react';
import './LoginUser.css';
import email_icon from '../Files/email_icon.png'
import password_icon from '../Files/password_icon.png'
import people_icon from '../Files/people_icon.png'

const LoginUser = () => {
    const[text, setText]= useState("Register");

  return (
  <div className='parent_login'>
    <div className='container'>
        <div className='header'>
            <div className='text'>{text}</div>
            <div className='underline'></div>
        </div>
      <div className='inputs'>
        <div className='input'>
            <img className="icon" src={people_icon} alt='user name'/>
            <input type='text' placeholder='Name'/>
        </div>
        <div className='input'>
            <img className="icon" src={email_icon} alt='email user'/>
            <input type='email' placeholder='Email'/>
        </div>
        <div className='input'>
            <img className="icon" src={password_icon} alt='user password'/>
            <input type='password' placeholder='Password'/>
        </div>
      </div>
      <div className='forgotPassword'>Forgot Password?<span>click here</span></div>
      <div className='submitContainer'>
        <div className={text==="Login User"?"submit gray":"submit"} onClick={()=>{setText("Register")}}>Register</div>
        <div className={text==="Register"?"submit gray":"submit"} onClick={()=>{setText("Login User")}}>Login</div>
      </div>
    </div>
  </div>
  )
}

export default LoginUser;
