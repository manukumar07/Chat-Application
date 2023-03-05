import React from 'react'
import './Register.css';

const Register = () => {
  return (
    <>
    <div className='form-container'>
    <div className='form-wrapper'>
    <span className='logo'>My Chat</span> 
    <span className='title'>Register</span> 
    <form>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='File'  id='file'/>
        <button className='btn'>Register</button>
    </form>
    <p>You do have an account? Login</p>
    </div>
    </div>

    </>
  )
}

export default Register
