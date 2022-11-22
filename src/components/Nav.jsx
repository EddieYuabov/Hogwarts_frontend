import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className="header">
        <nav className="navBar">
        <div className="homeLinks">
        <Link to = '/' className="navLink"><img src="https://i.imgur.com/eCng6Ha.png" className="navIcon"></img></Link>
        </div>
        <div className="navLinks">
        <Link to = '/students' className="navLink">Students</Link>
        <Link to = '/courses' className="navLink">Courses</Link>
        </div>
        </nav>
    </div>
  )
}

export default Nav