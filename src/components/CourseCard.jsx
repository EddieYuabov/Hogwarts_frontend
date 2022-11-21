import React from 'react'

const CourseCard = ({name, professor, grade}) => {
  return (
    <div className='courseCardContainer'>
        <h5 className='courseName'>{name}</h5>
        <h5 className='courseProf'>{professor}</h5>  
        <h5 className='studentCourseGrade'>{grade}</h5>
    </div>
  )
}

export default CourseCard