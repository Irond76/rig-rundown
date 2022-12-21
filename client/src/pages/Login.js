import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <>
    <form action="/login" method="POST" className='login-form'>
      <label htmlFor="userName">User Name: </label>
      <input type="text" name="userName" id='userName'className='input'/>
      <label htmlFor="userPassword">Password: </label>
      <input type="text" name='userPassword' id='userPassword'className='input'/>
    </form>
    </>
  )
}

export default Login;