import React from 'react'
import './Login.css'

const Login = () => {
  return (
        <>
    <div className='form-container'>
    <div className='form-wrapper'>
    <span className='logo'>My Chat</span> 
    <span className='title'>Login</span> 
    <form>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        {/* <input type='File'  id='file'/> */}
        <button className='btn'>Login</button>
    </form>
    <p>You don't have an account? Register</p>
    </div>
    </div>
    </>
  )
}

export default Login
