import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'

const CourseDetails = ({ name, professor }) => {
const [course, setCourse] = useState([])
const {courseId} = useParams()

useEffect(()=> {
  const getCourse = async() => {
    let response = await Client.get(`/courses/${courseId}`)
    setCourse(response.data)
  }
  getCourse()
}, [])



  return (
    <div>
      <h1>{course.name}</h1>
      <h2>{course.professor}</h2>
    </div>
  )
}

export default CourseDetails