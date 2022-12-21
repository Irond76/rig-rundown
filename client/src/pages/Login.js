import React, {useState} from 'react';
import '../styles/Login.css';
import LoginButton from '../components/LoginButton';

const Login = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  
  return (
    <>
    {userLoggedIn ?
    <form action="/login" method="POST" className='login-form'>
      <label htmlFor="userName">User Name: </label>
      <input type="text" name="userName" id='userName'className='input'/>
      <label htmlFor="userPassword">Password: </label>
      <input type="text" name='userPassword' id='userPassword'className='input'/>
      <button type='button'className='submit-btn'>Submit</button>
    </form>
    : 
    <LoginButton onClick={() => setUserLoggedIn(!userLoggedIn) }/>
  }
    </>
  )
}

export default Login;