import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Students from './pages/Students'
import Courses from './pages/Courses'

function App() {
  const BASE_URL = 'http://localhost3001/api'

  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </div>
  )
}

export default App
