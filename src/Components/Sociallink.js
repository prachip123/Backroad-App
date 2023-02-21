import React from 'react'

const Sociallink = ({link, itemclass}) => {
  return (
    <li >
    <a href={link.href} rel="noreferrer" target="_blank" className={itemclass}
      ><i className={link.icon}></i>
    </a>
    </li> 
  )
}

export default Sociallink
