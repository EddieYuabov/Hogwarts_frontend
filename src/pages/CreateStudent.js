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
        <div className="formDiv">
          <label htmlFor="name" className="formHeading">
            STUDENT NAME
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="name"
            value={formState.name}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="email" className="formHeading">
            EMAIL ADDRESS
          </label>
          <input
            onChange={handleChange}
            type="text"
            id="email"
            value={formState.email}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="house" className="formHeading">
            HOUSE
          </label>
          <select
            onChange={handleChange}
            type="text"
            id="house"
            value={formState.house}
          >
            <option value="-select your house-">-select your house-</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Slytherin">Slytherin</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </div>
      </form>
      <button className="submitButton" type="submit" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  )
}

export default CreateStudent
