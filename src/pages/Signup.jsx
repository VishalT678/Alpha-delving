import { Link } from 'react-router-dom'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'

function Signup() {
  return (
    <>

      
    <div 
      className="min-h-screen bg-cover bg-position-[center_top] bg-no-repeat"
      style={{ backgroundImage: 'url(/auth2.png)' }}
    >
      <Nav />

      <section className="w-full h-230 flex items-center justify-center py-12 md:py-20">
        <div className="relative w-[500px]">
          {/* Login Window - Light Gray Frame */}
          <div className="bg-gray-200 rounded-2xl p-1 shadow-2xl">
            {/* White Content Area */}
            <div className="bg-gray-100 rounded-xl p-8 md:p-10 w-full max-w-lg relative">
              {/* Window Controls - Top Left */}
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              </div>

              {/* Magnifying Glass - Upper Right Quadrant */}
              {/* <div className="absolute top-12 right-8 w-24 h-24 z-10">
                <img
                  src="/search1.png"
                  alt="Search"
                  className="w-full h-full object-contain"
                />
              </div> */}

              {/* Signup Form */}
              <div className="space-y-8 relative z-0">
                {/* Full Name Field */}
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
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 pb-2"
                    />
                  </div>
                </div>

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
                      placeholder="Email Address"
                      className="w-full text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 pb-2"
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
                      placeholder="Password"
                      className="w-full text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 pb-2"
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
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
                      placeholder="Confirm Password"
                      className="w-full text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500 pb-2"
                    />
                  </div>
                </div>

                {/* Sign Up Button and Arrow */}
                <div className="flex items-center justify-center gap-3 pt-4">
                  <button
                    type="submit"
                    className="bg-[#FF8C42] hover:bg-[#FF7A2E] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                  >
                    Sign Up
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

                {/* Back to Login Button - Inside Card */}
                <div className="mt-6 text-center">
                  <Link
                    to="/login"
                    className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-2 rounded-lg transition-colors"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </section>
    </div>

    <Footer />
  </>
  )
}

export default Signup

