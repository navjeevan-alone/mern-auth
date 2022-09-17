import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
      <div className='header'>
          <Link to="/" >Home</Link>
          <Link to="/auth/login" >login</Link>
          <Link to="/auth/signup" >signup</Link>
    </div>
  )
}

export default Header