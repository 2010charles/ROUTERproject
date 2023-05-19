import React from 'react'
import { Link } from "react-router-dom"
import './header.css'

function Header() {
  return (
    <div className='nav-list' >
    <Link to ='/Home' >Home</Link>
    <Link to ='/About' >About</Link>
    <Link to ='/Blogs' >Blogs</Link>
    <Link to ='/Contacts' >Contacts</Link>
    
      
    </div>
  )
}

export default Header
