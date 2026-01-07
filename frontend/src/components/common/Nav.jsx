import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { useAuth } from '../../context/AuthContext'

function Nav() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated, user, logout } = useAuth()
  
  const isWhiteBackground =
    location.pathname === '/tutorials' ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/placements' ||
    location.pathname === '/account' ||
    location.pathname.startsWith('/courses')
  const textColor = isWhiteBackground ? 'text-gray-800' : 'text-white'
  const hoverColor = isWhiteBackground ? 'hover:text-gray-600' : 'hover:text-gray-200'
  const activeTextColor = isWhiteBackground ? 'text-gray-500' : 'text-gray-200'

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className=" w-full px-8 md:px-12 lg:px-16 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {/* Courses */}
          <Link
            to="/courses"
            className={`${location.pathname === '/courses' ? activeTextColor : textColor} ${hoverColor} transition-colors font-medium`}
          >
            Courses
          </Link>

          {/* About AlphaDelving */}
          <Link
            to="/about"
            className={`${location.pathname === '/about' ? activeTextColor : textColor} ${hoverColor} transition-colors font-medium`}
          >
            <span className="flex flex-col items-center">
              <span>About AlphaDelving</span>
              {location.pathname === '/about' && (
                <span className="mt-1 h-1 w-24 rounded-full bg-[#0D5FA6]" />
              )}
            </span>
          </Link>

          {/* Placements */}
          <Link
            to="/placements"
            className={`${location.pathname === '/placements' ? activeTextColor : textColor} ${hoverColor} transition-colors font-medium`}
          >
            Placements
          </Link>

          {/* My Account - Only show when logged in */}
          {isAuthenticated && (
            <Link
              to="/account"
              className={`${location.pathname === '/account' ? activeTextColor : textColor} ${hoverColor} transition-colors font-medium`}
            >
              My Account
            </Link>
          )}
        </div>

        {/* Start Learning Button or User Menu */}
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className={`${textColor} font-medium`}>
              Hi, {user?.name?.split(' ')[0] || 'User'}
            </span>
            <button
              onClick={handleLogout}
              className="bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors inline-block"
          >
            Start Learning
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Nav

