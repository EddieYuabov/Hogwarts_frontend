import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
import CourseCard from './CourseCard'

const StudentDetails = () => {
    const [student, setStudent] = useState([])
    const {studentId} = useParams()
    useEffect(() => {
      const getStudent = async () => {
        let response = await Client.get(`/students/${studentId}`)
        setStudent(response.data)
        console.log(response.data)
      }
      getStudent()
    }, [])

  return (
    
    <div>
      <h1>
        {student.name}
        {student?(student.courses.map((course) => (
          <CourseCard name = {course.name} professor = {course.professor}/>
        ))): null}
      </h1>
    </div>
  )
}

export default StudentDetails