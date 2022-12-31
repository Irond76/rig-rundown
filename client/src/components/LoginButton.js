import React from 'react';
import '../styles/LoginButton.css';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to="/login">
      <button className='login-btn'>Login</button>
    </Link>
  )
}

export default LoginButton;
