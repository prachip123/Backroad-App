import React from 'react'
import { SocialLinks } from '../Data'
import Sociallink from './Sociallink'
const Sociallinks = ({parentclass, itemclass}) => {
  return (
    <ul className={parentclass}>
        {SocialLinks.map((link)=>(
        <Sociallink key={link.id} link={link} itemclass={itemclass}></Sociallink>
        // <li key={link.id}>
        // <a href={link.href} rel="noreferrer" target="_blank" className={itemclass}
        //   ><i className={link.icon}></i>
        // </a>
        // </li>
        ))}       
    </ul>
  )
}

export default Sociallinks
