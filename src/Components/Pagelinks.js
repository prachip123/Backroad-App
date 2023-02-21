import React from 'react'
import { PageLinks } from '../Data'
import Pagelink from './Pagelink'
const Pagelinks = ({parentclass,itemclass}) => {
  return (
    <ul className={parentclass}>
    {PageLinks.map((link)=>(
        <Pagelink key={link.id} link={link} itemclass={itemclass}></Pagelink>
        ))}
    </ul>
  )
}

export default Pagelinks
