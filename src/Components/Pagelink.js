import React from 'react'

const Pagelink = ({link,itemclass}) => {
  return (
    <li>
        <a href={link.href} className={itemclass} rel="noreferrer"> {link.text} </a>
    </li>
  )
}

export default Pagelink
