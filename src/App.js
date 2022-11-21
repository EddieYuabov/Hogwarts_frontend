import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Students from './pages/Students'
import Courses from './components/Courses'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route element={<Nav />} />
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
