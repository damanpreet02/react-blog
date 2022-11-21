import React from 'react'
import "./Navbar.css"
import {NavLink} from 'react-router-dom';
export default function Navbar() {
  return (
    <div className='nav'>
        <NavLink className='link' to="/">Home</NavLink>
        <NavLink className='link' to="/cars">Cars</NavLink>
        <NavLink className='link' to="/food">Food</NavLink>
    </div>
  )
}
