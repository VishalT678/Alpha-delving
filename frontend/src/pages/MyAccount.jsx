import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import { useAuth } from '../context/AuthContext'

function MyAccount() {
  const { user, isAuthenticated, loading, logout } = useAuth()
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [profilePicture, setProfilePicture] = useState(() => {
    // Load profile picture from localStorage if available
    const savedPicture = localStorage.getItem(`profilePicture_${user?.id}`)
    return savedPicture || null
  })
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login')
    }
  }, [isAuthenticated, loading, navigate])

  useEffect(() => {
    // Load profile picture when user changes
    if (user?.id) {
      const savedPicture = localStorage.getItem(`profilePicture_${user.id}`)
      setProfilePicture(savedPicture)
    }
  }, [user?.id])

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      setUploading(true)
      
      // Read file and convert to base64
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result
        setProfilePicture(base64String)
        // Save to localStorage
        if (user?.id) {
          localStorage.setItem(`profilePicture_${user.id}`, base64String)
        }
        setUploading(false)
      }
      reader.onerror = () => {
        alert('Error reading file')
        setUploading(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePicture = () => {
    setProfilePicture(null)
    if (user?.id) {
      localStorage.removeItem(`profilePicture_${user.id}`)
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  // Mock enrolled courses data (will be replaced with actual data from backend later)
  const enrolledCourses = [
    {
      id: 1,
      name: 'Introduction to Programming',
      image: '/courses2 1.png',
      progress: 45,
      enrolledDate: '2024-01-15',
      link: '/courses/introduction-to-programming'
    },
    {
      id: 2,
      name: 'Frontend Development',
      image: '/courses3 1.png',
      progress: 30,
      enrolledDate: '2024-02-01',
      link: '/courses/frontend-development'
    }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-[#E6F4FF] flex items-center justify-center">
        <div className="text-[#0063A4] text-xl">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <>
      <div className="bg-[#E6F4FF] min-h-screen">
        <Nav />

        {/* Hero Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Profile Avatar with Upload */}
                <div className="relative group">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#0063A4] shadow-lg">
                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0063A4] to-[#FF0B80] flex items-center justify-center text-white text-5xl md:text-6xl font-bold">
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}
                  </div>
                  
                  {/* Upload Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 rounded-full transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        ref={fileInputRef}
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        disabled={uploading}
                      />
                      <div className="text-white text-center">
                        {uploading ? (
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
                        ) : (
                          <div>
                            <svg
                              className="w-8 h-8 mx-auto mb-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-xs font-semibold">Change Photo</span>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                  
                  {/* Remove Picture Button */}
                  {profilePicture && (
                    <button
                      onClick={handleRemovePicture}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-colors"
                      title="Remove photo"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        Welcome back, <span className="text-[#FF0B80]">{user?.name || 'User'}</span>!
                      </h1>
                      <p className="text-gray-600 mb-4">{user?.email}</p>
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-[#0063A4] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                          Member since {new Date().getFullYear()}
                        </div>
                        <div className="bg-[#FF0B80] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                          {enrolledCourses.length} Courses Enrolled
                        </div>
                      </div>
                    </div>
                    
                    {/* Logout Button */}
                    <button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 self-start md:self-auto"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enrolled Courses Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              My <span className="text-[#FF0B80]">Enrolled Courses</span>
            </h2>

            {enrolledCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="w-full h-48 object-cover"
                      />
                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-200">
                        <div
                          className="h-full bg-gradient-to-r from-[#0063A4] to-[#FF0B80] transition-all duration-300"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{course.name}</h3>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">
                          Progress: <span className="font-semibold text-[#0063A4]">{course.progress}%</span>
                        </span>
                        <span className="text-sm text-gray-500">
                          Enrolled: {new Date(course.enrolledDate).toLocaleDateString()}
                        </span>
                      </div>
                      <a
                        href={course.link}
                        className="inline-block bg-[#FF8C42] hover:bg-[#FF7A2E] text-white font-semibold px-6 py-2 rounded-lg transition-colors text-center w-full"
                      >
                        Continue Learning
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-12 text-center">
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No Courses Enrolled Yet</h3>
                <p className="text-gray-600 mb-6">
                  Start your learning journey by enrolling in a course!
                </p>
                <a
                  href="/courses"
                  className="inline-block bg-[#0063A4] hover:bg-[#005a94] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Browse Courses
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Account Details Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Account <span className="text-[#FF0B80]">Details</span>
            </h2>

            <div className="bg-[#E6F4FF] rounded-xl shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <div className="bg-white rounded-lg px-4 py-3 text-gray-800 border-2 border-gray-200">
                    {user?.name || 'N/A'}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <div className="bg-white rounded-lg px-4 py-3 text-gray-800 border-2 border-gray-200">
                    {user?.email || 'N/A'}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">User ID</label>
                  <div className="bg-white rounded-lg px-4 py-3 text-gray-800 border-2 border-gray-200 font-mono text-sm">
                    {user?.id || 'N/A'}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Account Status</label>
                  <div className="bg-white rounded-lg px-4 py-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-gray-800 font-semibold">Active</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              Learning <span className="text-[#FF0B80]">Statistics</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#0063A4] to-[#005a94] rounded-xl shadow-lg p-6 text-white">
                <div className="text-4xl font-bold mb-2">{enrolledCourses.length}</div>
                <div className="text-lg opacity-90">Courses Enrolled</div>
              </div>
              <div className="bg-gradient-to-br from-[#FF0B80] to-[#e00a6e] rounded-xl shadow-lg p-6 text-white">
                <div className="text-4xl font-bold mb-2">
                  {Math.round(enrolledCourses.reduce((acc, course) => acc + course.progress, 0) / enrolledCourses.length) || 0}%
                </div>
                <div className="text-lg opacity-90">Average Progress</div>
              </div>
              <div className="bg-gradient-to-br from-[#FF8C42] to-[#FF7A2E] rounded-xl shadow-lg p-6 text-white">
                <div className="text-4xl font-bold mb-2">
                  {enrolledCourses.filter(c => c.progress === 100).length}
                </div>
                <div className="text-lg opacity-90">Completed Courses</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default MyAccount

