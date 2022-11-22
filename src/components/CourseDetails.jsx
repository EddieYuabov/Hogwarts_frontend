import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
import StudentCard from './StudentCard'

const CourseDetails = ({ name, professor }) => {
const [course, setCourse] = useState([])
const [students, setStudents] = useState([])
const {courseId} = useParams()

useEffect(() => {
  const getStudents = async () => {
    let response = await Client.get('/students')
    setStudents(response.data)
  }
  getStudents()
},[])

let image

switch (course.name) {
  case 'Transfiguration':
    image = <img src='https://i.imgur.com/ELI3uU6.png' alt='course-icon' className="courseDetailImage"/>    
    break;
  case 'Just Dark Arts':
    image = <img src="https://i.imgur.com/iGD4wMQ.png" alt='course-icon'className="courseDetailImage"/>
    break;
  case 'History Of Magic':
    image = <img src="https://i.imgur.com/jsNQs3f.png" alt='house-icon'className="courseDetailImage"/>
    break;
  case 'Astronomy':
    image = <img src="https://i.imgur.com/apcflWj.png" alt='course-icon'className="courseDetailImage"/>
    break;
  case 'Herbology':
    image = <img src="https://i.imgur.com/E6KxV00.png" alt='course-icon'className="courseDetailImage"/>
    break;
  case 'Flying Lessons':
    image = <img src="hhttps://i.imgur.com/feprQnR.png" alt='course-icon'className="courseDetailImage"/>
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
      <div className="enrolledStudents">Enrolled Students:</div>
      {students.map((res) => {
    for (let i = 0; i < students.length; i++) {
      for(let k = 0; k < res.courses.length; k++){
        if (res.courses[k].Student_Courses.courseId === course.id) {
          return (
            <div key={res.id}>
              <Link to={`/${res.id}`} className="cardInfoDiv">
              <StudentCard name={res.name} house={res.house} />
              </Link>
            </div>
          )
        } 
      }
      }
    }
  )}
      <Link to={`/courses`} className="createLink">
          <div className="createButton">BACK</div>
      </Link>
    </div>
  )
}

export default CourseDetails