import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Students from './pages/Students'
import Courses from './pages/Courses'
import StudentDetails from './components/StudentDetails'
import CourseDetails from './components/CourseDetails'
import CreateStudent from './pages/CreateStudent'
import CreateCourse from './pages/CreateCourse'

function App() {
  const BASE_URL = 'http://localhost3001/api'

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path="/:studentId" element={<StudentDetails />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="courses" element={<Courses />} />
        <Route path="/createstudent" element={<CreateStudent />} />
        <Route path="/createcourse" element={<CreateCourse />} />
      </Routes>
    </div>
  )
}

export default App
