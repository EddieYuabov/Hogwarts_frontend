import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div className="header">
        <nav className="navBar">
        <div className="homeLinks">
        <Link to = '/' className="homeLink">Home</Link>
        </div>
        <div className="navLinks">
        <Link to = '/students' className="homeLink">Students</Link>
        <Link to = '/courses' className="homeLink">Courses</Link>
        </div>
        </nav>
    </div>
  )
}

export default Nav