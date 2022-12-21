import React, {useState} from 'react';
import '../styles/Login.css';
import LoginButton from '../components/LoginButton';
import Home from './Home';
const Login = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    userName: '',
    userPassword: ''
  });

const {userName, userPassword} = loggedInUser;
const onChange = (e) => {
  e.preventDefault();
  setLoggedInUser({...loggedInUser, [e.target.name]: e.target.value})
}

  return (
    <>
    {isUserLoggedIn ?
    <form action="/login" method="POST" className='login-form' >
      <label htmlFor="userName">User Name: </label>
      <input 
      type="text" 
      name="userName" 
      value={userName} 
      id='userName'
      className='input' 
      required 
      onChange={(e) => onChange(e)}/>
      <label htmlFor="userPassword">Password: </label>
      <input 
      type="password" 
      name='userPassword' 
      value={userPassword} 
      id='userPassword'className='input' 
      required onChange={(e) => onChange(e)}/>
      <button type='submit'className='submit-btn'>Submit</button>
    </form>
    : 
    <LoginButton onClick={() => setIsUserLoggedIn(!isUserLoggedIn) }/>
  } 
    </>
  )
}

export default Login;