import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import User from '../pages/User';



const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  


const handleSubmit = async  (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/login', {userName: userName, userPassword: userPassword});
    const data = await res.data;
    setUserName(userName);
    setUserPassword(userPassword)
    console.log(data);
    console.log(res.status);
  } catch (error) {
    console.log(error.response.data.message)
  }
  
}

  return (
    <>
    <form  method="POST" className='login-form'>
      <label htmlFor="userName">User Name: </label>
      <input 
      type="text" 
      name="userName" 
      value={userName} 
      id='userName'
      className='input' 
      required 
      onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="userPassword">Password: </label>
      <input 
      type="password" 
      name='userPassword' 
      value={userPassword} 
      id='userPassword'className='input' 
      required 
      onChange={(e) => setUserPassword(e.target.value)}
      />
      <button 
      type='submit'
      className='submit-btn' onClick={handleSubmit}>Submit</button>
    </form> 
    </>
  )
}

export default Login;