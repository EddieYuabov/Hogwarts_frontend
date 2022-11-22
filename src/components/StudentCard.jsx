import React from 'react'

const StudentCard = ({name, house}) => {

let image

switch (house) {
  case 'Gryffindor':
    image = <img src='https://i.imgur.com/bRS19Ph.png' alt='house-icon'/>    
    break;
  case 'Slytherin':
    image = <img src="https://i.imgur.com/smDpCz3.png" alt='house-icon'/>
    break;
  case 'Hufflepuff':
    image = <img src="https://i.imgur.com/DEjIZf9.png" alt='house-icon'/>
    break;
  case 'Ravenclaw':
    image = <img src="https://i.imgur.com/3LOX43O.png" alt='house-icon'/>
    break;
  default:
    break;
}



  return (
    <div className="cardDiv">
        <h5 className="studentCardName">{name}</h5>
        <h5 className="studentCardHouse">{house}</h5>    
        {image}
    </div>
  )
}

export default StudentCard