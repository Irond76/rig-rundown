import React from 'react';
import '../styles/LoginButton.css';
const LoginButton = ({onClick}) => {
  return (
    <button className='login-btn' onClick={onClick}>Login</button>
  )
}

export default LoginButton;