import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import CourseCard from '../components/CourseCard'

const Courses = () => {
  const [courses, setCourses] = useState([])
  const { courseId } = useParams()

  useEffect(() => {
    const getCourses = async () => {
      let response = await Client.get('/courses')
      setCourses(response?.data)
    }
    getCourses()
  }, [])

  return (
    <div>
      <div>
        <Link to={`/createcourse`}>
          <div>Create Course</div>
        </Link>
      </div>
      <div>
        {courses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <CourseCard name={course.name} professor={course.professor} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Courses
