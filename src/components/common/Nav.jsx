import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation()
  const isWhiteBackground = location.pathname === '/tutorials'
  const textColor = isWhiteBackground ? 'text-gray-800' : 'text-white'
  const hoverColor = isWhiteBackground ? 'hover:text-gray-600' : 'hover:text-gray-200'

  return (
    <nav className="w-full px-8 md:px-12 lg:px-16 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo placeholder - will be added later */}
        <div className="flex items-center">
          {/* Logo space reserved */}
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link 
            to="/courses" 
            className={`${textColor} ${hoverColor} transition-colors font-medium`}
          >
            Courses
          </Link>
          <Link 
            to="/about" 
            className={`${textColor} ${hoverColor} transition-colors font-medium`}
          >
            About StackJunior
          </Link>
          <Link 
            to="/tutorials" 
            className={`${textColor} ${hoverColor} transition-colors font-medium`}
          >
            Quick Tutorials
          </Link>
          <Link 
            to="/account" 
            className={`${textColor} ${hoverColor} transition-colors font-medium`}
          >
            My Account
          </Link>
        </div>

        {/* Start Learning Button */}
        <button className="bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
          Start Learning
        </button>
      </div>
    </nav>
  )
}

export default Nav

