import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'

const CourseDetails = ({ name, professor }) => {
const [course, setCourse] = useState([])
const {courseId} = useParams()

let image

switch (course.name) {
  case 'Transfiguration':
    image = <img src='https://i.imgur.com/ELI3uU6.png' alt='course-icon' className="courseDetailImage"/>    
    break;
  case 'Just Dark Arts':
    image = <img src="https://i.imgur.com/iGD4wMQ.png" alt='course-icon'className="courseCardImage"/>
    break;
  case 'History Of Magic':
    image = <img src="https://i.imgur.com/jsNQs3f.png" alt='house-icon'className="courseCardImage"/>
    break;
  case 'Astronomy':
    image = <img src="https://i.imgur.com/apcflWj.png" alt='course-icon'className="courseCardImage"/>
    break;
  case 'Herbology':
    image = <img src="https://i.imgur.com/E6KxV00.png" alt='course-icon'className="courseCardImage"/>
    break;
  case 'Flying Lessons':
    image = <img src="hhttps://i.imgur.com/feprQnR.png" alt='course-icon'className="courseCardImage"/>
    break;
  default:
    break;
}

useEffect(()=> {
  const getCourse = async() => {
    let response = await Client.get(`/courses/${courseId}`)
    setCourse(response.data)
  }
  getCourse()
}, [])



  return (
    <div>
      <h1 className="courseDetailName">{course.name}</h1>
      <div>{image}</div>
      <h2 className="courseDetailProf">Professor: {course.professor}</h2>
      <Link to={`/courses`} className="createLink">
          <div className="createButton">BACK</div>
      </Link>
    </div>
  )
}

export default CourseDetails