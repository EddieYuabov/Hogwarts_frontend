import React from 'react'

const CourseCard = ({name, professor}) => {
  return (
    <div>
        <h5>{name}</h5>
        <h5>{professor}</h5>  
    </div>
  )
}

export default CourseCard