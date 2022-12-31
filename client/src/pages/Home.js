import React from 'react'
import '../styles/Home.css'
import LoginButton from '../components/LoginButton';
import DarkModeButton from '../components/DarkModeButton';

const Home = () => {
  return (
    <>
    <div className=' home-container'>
      <LoginButton />
      <DarkModeButton />
    </div>
    </>
  )
}

export default Home;