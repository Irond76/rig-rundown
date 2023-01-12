import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/Login.css';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';



const Login = () => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [isLoading, setIsLoading] = useState(null);


const handleSubmit = async  (e) => {
  e.preventDefault();
  try {
    setIsLoading(true);
    const res = await axios.post('http://localhost:5000/login', {userName: userName, userPassword: userPassword});
    const data = await res.data;
    setUserName(userName);
    setUserPassword(userPassword);
    setLoggedInUser(true);
    setIsLoading(false);
  } catch (error) {
    setErrorMessage(error.response.data.message);
    setLoggedInUser(false);
    setIsLoading(false)
  }
  
}

if (isLoading) {
  return (
    <div>
      <LoadingSpinner />
    </div>
  )
}
else if (!loggedInUser && !isLoading){
  return (
    <>
    <h1>{errorMessage}</h1>
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
else if (loggedInUser && !isLoading){
  return(
    <Navigate replace to='/user'/> 
  )
}

}

export default Login;