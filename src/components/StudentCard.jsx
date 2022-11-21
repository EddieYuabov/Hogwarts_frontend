import React from 'react'

const StudentCard = ({name, house}) => {
  return (
    <div>
        <h5>{name}</h5>
        <h5>{house}</h5>    
    </div>
  )
}

export default StudentCard