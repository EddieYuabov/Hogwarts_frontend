import React from 'react'
import Client from '../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCourse = () => {
  const initialState = {
    name: '',
    professor: ''
  }

  const [formState, setFormState] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post(`/courses/create`, formState)
    setFormState(initialState)
    navigate('/courses')
  }

  return (
    <div className="form">
      <div className="formTitle">Create Course</div>
      <form className="studentForm">
        <label htmlFor="name">Course Name</label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          value={formState.name}
        />
        <label htmlFor="email">Course Professor</label>
        <input
          onChange={handleChange}
          type="text"
          id="email"
          value={formState.professor}
        />
      </form>
      <button className="submitButton" type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  )
}

export default CreateCourse
