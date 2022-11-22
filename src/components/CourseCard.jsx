import React from 'react'

const CourseCard = ({name, professor, grade}) => {

  let image

  switch (name) {
    case 'Transfiguration':
      image = <img src='https://i.imgur.com/ELI3uU6.png' alt='course-icon' className="courseCardImage"/>    
      break;
    case 'Just Dark Arts':
      image = <img src="https://i.imgur.com/iGD4wMQ.png" alt='course-icon'className="courseCardImage"/>
      break;
    case 'History Of Magic':
      image = <img src="https://i.imgur.com/jsNQs3f.png" alt='house-icon'className="courseCardImage"/>
      break;
    case 'Astronomy':
      image = <img src="https://i.imgur.com/apcflWj.png" alt='course-icon'className="courseCardImage"/>
      break;
    case 'Herbology':
      image = <img src="https://i.imgur.com/E6KxV00.png" alt='course-icon'className="courseCardImage"/>
      break;
    case 'Flying Lessons':
      image = <img src="https://i.imgur.com/3LOX43O.png" alt='course-icon'className="courseCardImage"/>
      break;
    default:
      break;
  }

  return (
    <div className='courseCardContainer'>
        <h5 className='courseName'>{name}</h5>
        <h5 className='courseProf'>{professor}</h5>  
        <h5 className='studentCourseGrade'>{grade}</h5>
        {image}
    </div>
  )
}

export default CourseCard