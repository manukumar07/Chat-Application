import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
  <>
    <div className='navbar'>
      <span className='logo'>My Chat</span>
      <div className='user'>
      <img src='' alt=''/>
        <span>Manu Kumar</span>
        <button>Logout</button>
      </div>
    </div>
  </>
  )
}

export default Navbar
