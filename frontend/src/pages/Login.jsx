import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import { useAuth } from '../context/AuthContext'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('') // Clear error when user types
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    try {
      const result = await login(formData.email, formData.password)
      
      if (result.success) {
        // Redirect to home page on successful login
        navigate('/')
      } else {
        setError(result.error || 'Login failed. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>

      
      <div 
        className="min-h-screen bg-cover bg-position-[center_top] bg-no-repeat"
        style={{ backgroundImage: 'url(/auth2.png)' }}
      >

        <Nav />


        <section className=" flex flex-col items-center justify-center py-52 ">
          <div className="relative w-full max-w-4xl flex flex-col items-center">
            {/* Login Window - Light Gray Frame */}
            <div className="bg-gray-200 w-full max-w-lg h-[400px] rounded-2xl p-1 shadow-2xl mb-8">
              {/* White Content Area */}
              <div className="bg-gray-100 h-[400px]  rounded-xl p-8 md:p-10 w-full max-w-lg relative">
                {/* Window Controls - Top Left */}
                <div className="flex gap-2 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                </div>

                {/* Magnifying Glass - Upper Right Quadrant */}
                <div className="absolute top-12 right-8 w-24 h-24 z-10">
                  <img
                    src="/search1.png"
                    alt="Search"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-8 relative z-0">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                      {error}
                    </div>
                  )}

                  {/* Email Field */}
                  <div className="relative flex items-center gap-3">
                    <div className="text-gray-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 pb-2"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div className="relative flex items-center gap-3">
                    <div className="text-gray-400">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 pb-2"
                        required
                      />
                    </div>
                  </div>

                  {/* Login Button and Arrow */}
                  <div className="flex items-center justify-center gap-3 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#FF8C42] hover:bg-[#FF7A2E] text-white font-semibold px-8 py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Logging in...' : 'Login'}
                    </button>
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </form>
                            {/* Signup Link - Below Window */}
            <div className="mt-8 text-center">
              <p className="text-gray-700 text-sm">
                If you are not a member,{' '}
                <Link
                  to="/signup"
                  className="text-[#FF8C42] hover:text-[#FF7A2E] font-semibold underline"
                >
                  click here
                </Link>
              </p>
            </div>
              </div>
              
            </div>

            {/* Students Section - Semi-circle Layout */}

          </div>

        </section>
        {/* <div className="relative w-full flex items-end justify-center gap-4 md:gap-8  px-4">
              <img
                src="/girl_book-removebg.png"
                alt="Student with book"
                className="w-32 h-44 md:w-48 md:h-64 lg:w-56 lg:h-72 object-contain"
              />
              <img
                src="/man_bag-removebg.png"
                alt="Student with bag"
                className="w-32 h-44 md:w-48 md:h-64 lg:w-56 lg:h-72 object-contain"
              />
              <img
                src="/pointing-removebg.png"
                alt="Pointing student"
                className="w-32 h-44 md:w-48 md:h-64 lg:w-56 lg:h-72 object-contain"
              />
              <img
                src="/standing_girl-removebg.png"
                alt="Standing girl"
                className="w-32 h-44 md:w-48 md:h-64 lg:w-56 lg:h-72 object-contain"
              />
            </div> */}

      </div>

      <Footer />
    </>
  )
}

export default Login

