import React from 'react'
import logo from '../images/logo.svg'
import Pagelinks from './Pagelinks'
import Sociallinks from './Sociallinks'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <Pagelinks parentclass='nav-links' itemclass='nav-link'></Pagelinks>
      <Sociallinks parentclass='nav-icons' itemclass='nav-icon'></Sociallinks>
      {/* <ul className="nav-icons">
        {SocialLinks.map((link)=>(
        <li key={link.id}>
        <a href={link.href} rel="noreferrer" target="_blank" className="nav-icon"
          ><i className={link.icon}></i>
        </a>
        </li>
        ))}       
      </ul> */}
    </div>
  </nav>
  )
}

export default Navbar
