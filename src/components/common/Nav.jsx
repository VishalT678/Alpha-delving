import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

function Nav() {
  const location = useLocation()
  const isWhiteBackground =
    location.pathname === '/tutorials' ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname === '/login' ||
    location.pathname === '/signup' ||
    location.pathname === '/placements' ||
    location.pathname.startsWith('/courses')
  const textColor = isWhiteBackground ? 'text-gray-800' : 'text-white'
  const hoverColor = isWhiteBackground ? 'hover:text-gray-600' : 'hover:text-gray-200'
  const activeTextColor = isWhiteBackground ? 'text-gray-500' : 'text-gray-200'

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

          {/* My Account */}
          <Link
            to="/account"
            className={`${location.pathname === '/account' ? activeTextColor : textColor} ${hoverColor} transition-colors font-medium`}
          >
            My Account
          </Link>
        </div>

        {/* Start Learning Button */}
        <Link
          to="/login"
          className="bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors inline-block"
        >
          Start Learning
        </Link>
      </div>
    </nav>
  )
}

export default Nav

