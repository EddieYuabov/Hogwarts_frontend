import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Client, { BASE_URL } from '../services/api'
import StudentCard from '../components/StudentCard'

const Students = () => {
  const [students, setStudents] = useState([])

  useEffect(() => {
    const getStudents = async () => {
      let response = await Client.get('/students')
      setStudents(response?.data)
    }
    getStudents()
  })

  return (
    <div>
      {students.map((student) => (
        <Link to={`/${student.id}`} key={student.id}>
          <StudentCard name={student.name} house={student.house} />
        </Link>
      ))}
    </div>
  )
}

export default Students
