import React from 'react'
import Logo from '../assets/image/Travel.png'
import '../styles/header.css'

function Header() {
  return (
    <div className='header'>
        <div className="logo">
            <img src={Logo} alt="Logo" />
        </div>
        <div className='nav'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#discover">Discover</a></li>
                <li><a href="#place">Place</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header