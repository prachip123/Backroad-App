import React from 'react'
import Pagelinks from './Pagelinks'
import Sociallinks from './Sociallinks'
const Footer = () => {
  return (
    <footer className="section footer">
    <Pagelinks parentclass='footer-links' itemclass='footer-link'></Pagelinks>
    <Sociallinks parentclass='footer-icons' itemclass='footer-icon'></Sociallinks>
    {/* <ul className="footer-icons">
        {SocialLinks.map((link)=>{
            return(
                <li key={link.id}>
                <a href={link.href} target="_blank" className="footer-icon" rel='noreferrer'>
                <i className={link.icon}></i>
                </a>
                </li>
            )
        })}
      
    </ul> */}
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer
