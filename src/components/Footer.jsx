import React from 'react'
import logo from "../assets/images/logo3.png"

function Footer() {
  return (
    <footer className='pad'>
        <img src={logo} alt="" />
        <p>&copy; {new Date().getFullYear()} | DevsPal, All rights reserved.</p>
    </footer>
  )
}

export default Footer