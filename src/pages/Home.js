import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  return (
    <div className="home">
      <div>Welcome to Hogwarts B!tch</div>
      <div className="homeNavIcons">
        <Link to="/students">
          <div className="homeNavDiv">
            <img
              src="https://i.imgur.com/Z0XWgI0.png"
              className="homeIcon"
            ></img>
            <div className="homeNavText">Students</div>
          </div>
        </Link>
        <Link to="/courses">
          <div className="homeNavDiv">
            <img
              src="https://i.imgur.com/C3Xb2rg.png"
              className="homeIcon"
            ></img>
            <div className="homeNavText">Courses</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
