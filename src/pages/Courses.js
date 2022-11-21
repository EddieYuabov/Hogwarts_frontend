import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import CourseCard from '../components/CourseCard'

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getCourses = async () => {
      let response = await Client.get('/courses')
      setCourses(response?.data)
    }
    getCourses()
  })

  return (
    <div>
      {courses.map((course) => (
        <Link to={`/${course.id}`} key={course.id}>
          <CourseCard name={course.name} professor={course.professor} />
        </Link>
      ))}
    </div>
  )
}

export default Courses
