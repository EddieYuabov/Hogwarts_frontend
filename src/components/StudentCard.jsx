import React from 'react'

const StudentCard = ({name, house}) => {
  return (
    <div className="cardDiv">
        <h5 className="studentCardName">{name}</h5>
        <h5 className="studentCardHouse">{house}</h5>    
    </div>
  )
}

export default StudentCard