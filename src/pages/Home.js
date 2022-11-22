import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">Welcome to Hogwarts</div>
      <div className="explore">what would you like to explore?</div>
      <div className="homeNavIcons">
        <Link to="/students" className="homeLink">
          <div className="homeNavDiv">
            <img
              src="https://i.imgur.com/Z0XWgI0.png"
              className="homeIcon"
            ></img>
            <div className="homeNavText">students</div>
          </div>
        </Link>
        <Link to="/courses" className="homeLink">
          <div className="homeNavDiv">
            <img
              src="https://i.imgur.com/C3Xb2rg.png"
              className="homeIcon"
            ></img>
            <div className="homeNavText">courses</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
