import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import IntroProgramming from './components/courses/IntroProgramming'
import FrontendDev from './components/courses/FrontendDev'
import UiUxDesign from './components/courses/UiUxDesign'
import SqlProgramming from './components/courses/SqlProgramming'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses/introduction-to-programming" element={<IntroProgramming />} />
        <Route path="/courses/frontend-development" element={<FrontendDev />} />
        <Route path="/courses/ui-ux-designing" element={<UiUxDesign />} />
        <Route path="/courses/sql-programming" element={<SqlProgramming />} />
      </Routes>
    </Router>
  )
}

export default App
