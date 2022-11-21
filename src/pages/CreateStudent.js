import React from 'react'
import Client from '../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateStudent = () => {
  const initialState = {
    name: '',
    email: '',
    house: ''
  }

  const [formState, setFormState] = useState(initialState)

  let navigate = useNavigate()

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await Client.post(`/students/create`, formState)
    setFormState(initialState)
    navigate('/students')
  }

  return (
    <div className="form">
      <div className="formTitle">Create Student</div>
      <form className="studentForm">
        <label htmlFor="name">Student Name</label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          value={formState.name}
        />
        <label htmlFor="email">Student E-mail</label>
        <input
          onChange={handleChange}
          type="text"
          id="email"
          value={formState.email}
        />
        <label htmlFor="house">Student House</label>
        <input
          onChange={handleChange}
          type="text"
          id="house"
          value={formState.house}
        />
      </form>
      <button className="submitButton" type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  )
}

export default CreateStudent
