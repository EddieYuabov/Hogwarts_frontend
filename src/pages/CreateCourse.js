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
        <div className="formDiv">
          <label htmlFor="name" className="formHeading">
            COURSE NAME
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            value={formState.name}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="professor" className="formHeading">
            PROFESSOR
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="professor"
            value={formState.professor}
          />
        </div>
      </form>
      <button className="submitButton" type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  )
}

export default CreateCourse
