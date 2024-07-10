import React from 'react'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.png'
import cartIcon from '../../assets/basket_icon.png'
import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [active ,changeActive] = useState('home')
  return (
    <div className="navbar">
        <img src={logo} alt="" className='logo' />
        <div className="nav-items">
          <li onClick={()=>changeActive('home')} className={active==='home'?'active':''}>Home</li>
          <li onClick={()=>changeActive('menu')} className={active==='menu'?'active':''}>Menu</li>
          <li onClick={()=>changeActive('popular-items')} className={active==='popular-items'?'active':''}>Popular Items</li>
          <li onClick={()=>changeActive('about-us')} className={active==='about-us'?'active':''}>About Us</li>
        </div>
        <div className="nav-right">
          <img src={searchIcon} alt="" />
          <img src={cartIcon} alt="" />
          <button className='signin'>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar