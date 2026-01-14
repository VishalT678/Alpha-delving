import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Placements from './pages/Placements'
import MyAccount from './pages/MyAccount'
import IntroProgramming from './components/courses/IntroProgramming'
import FrontendDev from './components/courses/FrontendDev'
import UiUxDesign from './components/courses/UiUxDesign'
import SqlProgramming from './components/courses/SqlProgramming'
import BigDataAnalytics from './components/courses/BigDataAnalytics'
import FullStackDevelopment from './components/courses/FullStackDevelopment'
import DigitalMarketing from './components/courses/DigitalMarketing'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/courses/introduction-to-programming" element={<IntroProgramming />} />
          <Route path="/courses/frontend-development" element={<FrontendDev />} />
          <Route path="/courses/ui-ux-designing" element={<UiUxDesign />} />
          <Route path="/courses/sql-programming" element={<SqlProgramming />} />
          <Route path="/courses/big-data-analytics" element={<BigDataAnalytics />} />
          <Route path="/courses/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/courses/digital-marketing" element={<DigitalMarketing />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
