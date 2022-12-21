import React, {useState} from 'react';
import '../styles/Login.css';
import LoginButton from '../components/LoginButton';
import Home from './Home';
const Login = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(true);
  return (
    <>
    {isUserLoggedIn ?
    <form action="/login" method="POST" className='login-form'>
      <label htmlFor="userName">User Name: </label>
      <input type="text" name="userName" id='userName'className='input' required/>
      <label htmlFor="userPassword">Password: </label>
      <input type="password" name='userPassword' id='userPassword'className='input' required/>
      <button type='button'className='submit-btn'>Submit</button>
    </form>
    : 
    <LoginButton onClick={() => setIsUserLoggedIn(!isUserLoggedIn) }/>
  } 
    </>
  )
}

export default Login;