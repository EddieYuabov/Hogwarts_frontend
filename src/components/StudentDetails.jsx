import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
import CourseCard from './CourseCard'

const StudentDetails = () => {
    const [student, setStudent] = useState([])
    const [courses, setCourses] = useState([])
    const {studentId} = useParams()
    useEffect(() => {
      const getStudent = async () => {
        let response = await Client.get(`/students/${studentId}`)
        setStudent(response.data)
        setCourses(response.data.courses)
        console.log(response.data.courses)
        console.log(response.data)
      }
      getStudent()
    }, [])

  return (
    
    <div>
      <h1>
        {student.name}
        {courses.map((course) => (
          <CourseCard name = {course.name} professor = {course.professor} key={course.id}/>
        ))}
      </h1>
    </div>
  )
}

export default StudentDetails