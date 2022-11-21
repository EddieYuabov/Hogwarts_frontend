import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <div>
        <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/students'>Students</Link>
        <Link to = '/courses'>Courses</Link>
        </nav>
    </div>
  )
}

export default Nav