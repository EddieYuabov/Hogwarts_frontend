import React from 'react'
import {useState, useEffect} from 'react'

const CourseCard = ({name, professor, grade}) => {

  const [gradeLetter, setLetter] = useState('')

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

  const letterGPA =(grade) => {
    switch (grade){
      case 1:
        setLetter('D')
        break
      case 2: 
        setLetter('C')
        break
      case 3: 
        setLetter('B')
        break
      case 4: 
        setLetter('A')
        break
    }
  }
  useEffect(()=> {
    letterGPA(grade)
  },[grade])

  return (
    <div className='courseCardContainer'>
        <h5 className='courseName'>{name}</h5>
        <h5 className='courseProf'>{professor}</h5>  
        <h5 className='studentCourseGrade'>{gradeLetter}</h5>
        {image}
    </div>
  )
}

export default CourseCard