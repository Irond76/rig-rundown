import React, {useState} from 'react';
import '../styles/Login.css';
import LoginButton from '../components/LoginButton';

const Login = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  return (
    <>
    {isUserLoggedIn ?
    <form action="/login" method="POST" className='login-form'>
      <label htmlFor="userName">User Name: </label>
      <input type="text" name="userName" id='userName'className='input'/>
      <label htmlFor="userPassword">Password: </label>
      <input type="password" name='userPassword' id='userPassword'className='input'/>
      <button type='button'className='submit-btn'>Submit</button>
    </form>
    : 
    <LoginButton onClick={() => setIsUserLoggedIn(!isUserLoggedIn) }/>
  }
    </>
  )
}

export default Login;