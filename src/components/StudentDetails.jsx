import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
import CourseCard from './CourseCard'

const StudentDetails = () => {
  const [student, setStudent] = useState([])

  const [courses, setCourses] = useState([])

  const [gpa, setGpa] = useState(null)

  const [gradeLetter, setLetter] = useState('')

  const { studentId } = useParams()

  useEffect(() => {
    const getStudent = async () => {
      let response = await Client.get(`/students/${studentId}`)
      setStudent(response.data)
      setCourses(response.data.courses)
    }
    getStudent()
  }, [])

  const gpaCalc = async (courses) => {
    const grades = await courses.map((element) => element.Student_Courses.grade)
    const average = grades.reduce((a, b) => a + b, 0) / grades.length
    setGpa(average.toFixed(2))
  }

  useEffect(() => {
    gpaCalc(courses)
  }, [courses])

  let image

  switch (student.house) {
    case 'Gryffindor':
      image = (
        <img
          src="https://i.imgur.com/bRS19Ph.png"
          alt="house-icon"
          className="studentDetailImage"
        />
      )
      break
    case 'Slytherin':
      image = (
        <img
          src="https://i.imgur.com/smDpCz3.png"
          alt="house-icon"
          className="studentDetailImage"
        />
      )
      break
    case 'Hufflepuff':
      image = (
        <img
          src="https://i.imgur.com/DEjIZf9.png"
          alt="house-icon"
          className="studentDetailImage"
        />
      )
      break
    case 'Ravenclaw':
      image = (
        <img
          src="https://i.imgur.com/3LOX43O.png"
          alt="house-icon"
          className="studentDetailImage"
        />
      )
      break
    default:
      break
  }

  let className
  switch (student.house) {
    case 'Gryffindor':
      className = 'gryffindor'
      break
    case 'Slytherin':
      className = 'slytherin'
      break
    case 'Hufflepuff':
      className = 'hufflepuff'
      break
    case 'Ravenclaw':
      className = 'ravenclaw'
      break
    default:
      break
  }

  return (
    <main className={className}>
      <div className="studentContainer">
        <div className="studentContainer2">
        <div>
          <div className="studentName">{student.name}</div>
          <div>{image}</div>
          <div className="studentHouse">{student.house}</div>
          <div className="studentEmail">{student.email}</div>
        </div>
      </div>
      </div>
      <div className="courseContainer">
        <h1 className="coursesTitle">Courses</h1>
        <div>
          {courses.map((course) => (
            <CourseCard
              name={course.name}
              professor={course.professor}
              grade={course.Student_Courses.grade}
              key={course.id}
            />
          ))}
        </div>
        <div className="gpaDiv">
          <div className="gpa">{student.name}'s overall GPA:</div>
          <div className="gpaLetter">{gpa ? <p>{gpa}</p> : null}</div>
        </div>

        <Link to={`/students`} className="createLink">
          <div className="createButton">BACK</div>
        </Link>
      </div>
    </main>
  )
}

export default StudentDetails
