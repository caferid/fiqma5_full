import React from 'react'
import { NavLink } from 'react-router-dom'
import './Not_404.scss'
function Not_404() {
  return (
    <div id='not404'>
      <div className="container">
        <div className="title">
        404 Not Found
        <p>Your visited page not found. You may go home page.</p>
        </div>
      </div>
      <NavLink className='navlink'  activeClassName='active' to={'/'}>Back to home page</NavLink>
    </div>
  )
}

export default Not_404