import React from 'react'

const CourseCard = ({name, professor, grade}) => {
  return (
    <div>
        <h5>{name}</h5>
        <h5>{professor}</h5>  
        {grade}
    </div>
  )
}

export default CourseCard