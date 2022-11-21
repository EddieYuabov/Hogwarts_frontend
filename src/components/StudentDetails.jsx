import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
import CourseCard from './CourseCard'

const StudentDetails = () => {
  const [student, setStudent] = useState([])

  const [courses, setCourses] = useState([])

  const [gpa, setGpa] = useState(null)

  const {studentId} = useParams()

  useEffect(() => {
    const getStudent = async () => {
      let response = await Client.get(`/students/${studentId}`)
      setStudent(response.data)
      setCourses(response.data.courses)
    }  
    getStudent()
  }, [])

  const gpaCalc = async (courses) => {
    const grades = await courses.map((element) => (
      element.Student_Courses.grade
    ))
    const average = grades.reduce((a, b) => a + b, 0) / grades.length
    setGpa(average)
    console.log(grades)
    console.log(average)
  }

  useEffect(() => {
    gpaCalc(courses)
  }, [courses])

  return (
    
    <div>
      <h1>
        <div className="studentName">
        {student.name}
        </div>
        <div>
        {student.house}
        </div>
        <div>
          GPA: {gpa? <p>{gpa}</p>:null}
        </div>
        <div>
        {courses.map((course) => (
          <CourseCard name = {course.name} professor = {course.professor} grade = {course.Student_Courses.grade} key={course.id}/>
        ))}
        </div>
      </h1>
    </div>
  )
}

export default StudentDetails