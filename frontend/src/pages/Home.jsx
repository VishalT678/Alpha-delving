import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaUserGraduate, FaChalkboardTeacher, FaCertificate, FaUsers, FaBrain, FaCode, FaBullhorn, FaBriefcase, FaLaptop, FaHandshake, FaGraduationCap, FaIndustry, FaServer, FaStar, FaChevronLeft, FaChevronRight, FaRocket, FaCheckCircle, FaClock, FaUser, FaUserPlus, FaBook, FaLaptopCode } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger)

// Stats Section Component with Animated Counters
function StatsSection() {
  const statsRef = useRef(null)
  const [counts, setCounts] = useState({ students: 0, instructors: 0, certifications: 0, partners: 0 })

  useEffect(() => {
    const stats = statsRef.current
    if (!stats) return

    ScrollTrigger.create({
      trigger: stats,
      start: 'top 80%',
      onEnter: () => {
        gsap.to({}, {
          duration: 2,
          ease: 'power2.out',
          onUpdate: function() {
            const progress = this.progress()
            setCounts({
              students: Math.floor(10000 * progress),
              instructors: Math.floor(50 * progress),
              certifications: Math.floor(100 * progress),
              partners: Math.floor(500 * progress)
            })
          }
        })
      }
    })
  }, [])

  return (
    <div ref={statsRef} className="bg-[#FF6B9D] w-full py-16">
      <div className="w-full px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className="shrink-0 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FaUserGraduate className="text-2xl text-white" />
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{counts.students.toLocaleString()}+</div>
              <div className="text-xl md:text-2xl font-medium">Students Trained</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div className="shrink-0 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FaChalkboardTeacher className="text-2xl text-white" />
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{counts.instructors}+</div>
              <div className="text-xl md:text-2xl font-medium">Top Instructors</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div className="shrink-0 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FaCertificate className="text-2xl text-white" />
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{counts.certifications}+</div>
              <div className="text-xl md:text-2xl font-medium">Certifications</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-white">
            <div className="shrink-0 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <FaUsers className="text-2xl text-white" />
            </div>
            <div>
              <div className="text-5xl md:text-6xl font-bold mb-2">{counts.partners}+</div>
              <div className="text-xl md:text-2xl font-medium">Placement Partners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Trust Signals Section
function TrustSignalsSection() {
  const partners = [
    { name: 'Google Cloud', logo: '☁️' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'AWS', logo: '📦' },
    { name: 'Nasscom', logo: '💼' },
    { name: 'TCS', logo: '🏢' },
    { name: 'Infosys', logo: '💻' }
  ]

  return (
    <section className="bg-white py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <p className="text-center text-gray-600 mb-8 font-semibold text-lg">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer text-center">
              <div className="text-5xl mb-2">{partner.logo}</div>
              <p className="text-sm text-gray-600 font-medium">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Featured Courses Carousel
function FeaturedCoursesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef(null)

  const courses = [
    {
      id: 1,
      title: 'Big Data Analytics',
      price: '₹4,999',
      originalPrice: '₹15,999',
      rating: 4.9,
      reviews: '1.2k',
      duration: '12 Weeks',
      level: 'Beginner',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      link: '/courses/big-data-analytics'
    },
    {
      id: 2,
      title: 'Full Stack Development',
      price: '₹6,999',
      originalPrice: '₹18,999',
      rating: 4.9,
      reviews: '1.5k',
      duration: '16 Weeks',
      level: 'Intermediate',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      link: '/courses/full-stack-development'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      price: '₹2,999',
      originalPrice: '₹9,999',
      rating: 4.8,
      reviews: '900',
      duration: '10 Weeks',
      level: 'Beginner',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      link: '/courses/digital-marketing'
    },
    {
      id: 4,
      title: 'AWS Cloud Architect',
      price: '₹8,999',
      originalPrice: '₹24,999',
      rating: 4.9,
      reviews: '800',
      duration: '14 Weeks',
      level: 'Advanced',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      link: '/contact'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-gradient-to-b from-white to-[#E6F4FF] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600">
            Hand-picked courses to accelerate your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={course.link}
              className={`${course.bgColor} rounded-xl p-6 shadow-lg border-2 ${course.borderColor} hover:shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  Limited Seats
                </span>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span className="font-bold text-gray-800">{course.rating}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <div className="flex items-center gap-3 mb-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <FaClock /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <FaUser /> {course.level}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
              </div>
              <div className="w-full bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white font-bold py-3 rounded-lg text-center transition-colors">
                Enroll Now
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#FF6B9D] w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Enhanced Testimonials Section
function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Placed at TCS',
      quote: 'Alpha Delving transformed my career! The mentorship and placement support was exceptional. Got placed within 3 months.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Priya Patel',
      role: 'Placed at Infosys',
      quote: 'Best decision I ever made. The curriculum is industry-relevant and the instructors are world-class. Highly recommend!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Amit Kumar',
      role: 'Placed at Wipro',
      quote: 'From zero coding knowledge to a software engineer. The practical projects helped me build a strong portfolio.',
      rating: 5,
      avatar: '👨‍🔧'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#E10C72] w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          What People Are Saying
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <img
              src="/features1.png"
              alt="Happy Users"
              className="w-full max-w-[300px] h-auto"
            />
          </div>

          <div className="relative h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-xl" />
                      ))}
                    </div>
                    <p className="text-lg md:text-xl leading-relaxed mb-6 text-white">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-white">{testimonial.name}</p>
                      <p className="text-white/90">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    { icon: FaUserPlus, title: 'Sign Up', desc: 'Create your account in 30 seconds', color: 'from-blue-500 to-cyan-500' },
    { icon: FaBook, title: 'Choose Course', desc: 'Browse 50+ industry-relevant courses', color: 'from-purple-500 to-pink-500' },
    { icon: FaLaptopCode, title: 'Learn & Practice', desc: 'Access live classes and real projects', color: 'from-green-500 to-emerald-500' },
    { icon: FaBriefcase, title: 'Get Placed', desc: '95% placement rate with top companies', color: 'from-orange-500 to-red-500' }
  ]

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey from learning to landing your dream job in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow relative">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="text-white text-3xl" />
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-gray-600">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl text-gray-300">
                    →
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Final CTA Banner
function CTABannerSection() {
  return (
    <section className="bg-gradient-to-r from-[#FF6B9D] to-[#FF0B80] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 text-center">
        <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span className="text-white font-semibold">🎯 95% Job Placement Guarantee</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join 10K+ students who are building successful careers with Alpha Delving
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/courses"
            className="inline-block bg-white text-[#FF6B9D] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Explore Courses
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-[#4A90E2] hover:bg-[#3B82F6] text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg"
          >
            Free Demo Class
          </Link>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <>
      {/* Navigation */}
      <div className="bg-[#4A90E2] relative">
        <Nav />

        {/* Main Content */}
        <div className="max-w-7xl px-8 mx-auto md:px-10 lg:px-16 py-25">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white z-10">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Learn on your schedule
              </h1>

              {/* Search Bar */}
              <div className="flex items-center gap-3 max-w-2xl">
                <input
                  type="text"
                  placeholder="Search for your desired courses"
                  className="flex-1 px-6 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white text-lg"
                />
                <button className="bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white p-4 rounded-lg transition-colors flex items-center justify-center min-w-[56px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Side - Image Placeholder */}
            <div className="relative z-10 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-md h-[500px] bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                <p className="text-white/70 text-lg">Image placeholder</p>
              </div>

              {/* Decorative Circles Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="w-96 h-96 rounded-full border-4 border-blue-400/30 absolute"></div>
                <div className="w-[500px] h-[500px] rounded-full border-4 border-blue-400/20 absolute"></div>
                <div className="w-[600px] h-[600px] rounded-full border-4 border-blue-400/10 absolute"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section - Pink Background with Animated Counters */}
      <StatsSection />

      {/* Why Choose Us Section - White Background */}
      <div className="bg-white w-full py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-16 md:mb-20">
            Why Choose Us?
          </h2>

          {/* Feature 1: Detailed Syllabus with Localized Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image on Left */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/1 1.png"
                alt="Detailed Syllabus"
                className="w-full max-w-lg h-auto"
              />
            </div>

            {/* Content on Right */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Detailed Syllabus with Localized Content
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                We offer a comprehensive syllabus with localized content and
                examples to help you grasp programming concepts easily, even
                without prior experience.
              </p>
            </div>
          </div>

          {/* Feature 2: An Interactive Personalized Learning Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Content on Left */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                An Interactive Personalized Learning Experience
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With AlphaDelving's flexible learning options and 1-on-1 code
                review with seasoned tutors, your learning is suited just for
                you.
              </p>
            </div>

            {/* Image on Right */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <img
                src="/1 2.png"
                alt="Interactive Learning"
                className="w-full max-w-lg h-auto"
              />
            </div>
          </div>

          {/* Feature 3: World-Class Learning with World-Class Jobs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image on Left */}
            <div className="flex justify-center lg:justify-start">
              <img
                src="/1 3.png"
                alt="World-Class Jobs"
                className="w-full max-w-lg h-auto"
              />
            </div>

            {/* Content on Right */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                World-Class Learning with World-Class Jobs
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                At AlphaDelving, we impact students with industry-standard skills
                and training. We also support them in getting jobs that are
                available from around the globe. How cool is that?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Tutorials Section */}
      {/* Top Section - Green Background */}
      <div className="bg-[#00A17F] h-[550px] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            QUICK TUTORIALS
          </h2>
          <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
            At AlphaDelving, acquire industry-relevant tech skills such as
            programming, software development, data science, cloud computing and
            more to become a <strong>world-class IT professional</strong>.
          </p>
        </div>

        {/* Middle Section - Main Illustration */}
        <div className=" w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-lg p-4 md:p-6">
                <img
                  src="/quick tutorial 1 1.png"
                  alt="Quick Tutorial Learning Environment"
                  className="w-full h-auto rounded-xl"
                />
                <div className="absolute top-45 left-105 -translate-x-1/2 -translate-y-1/2  max-w-16">
                  <img
                    src="/play button.png"
                    alt="Quick Tutorial Learning Environment"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - What our Company Provides */}
      <div className="bg-white w-full py-12 md:py-20 mt-[200px]">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          {/* Section Title with Blue Underline */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What our Company Provides
            </h2>
            <div className="w-32 h-1 bg-[#0063A4] mx-auto rounded-full"></div>
          </div>

          {/* Services Grid - 3x3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* 1. Big Data Analytics */}
            <Link 
              to="/courses/big-data-analytics"
              className="bg-[#E0F7E9] rounded-lg p-6 flex items-center gap-4 border border-[#B8E6C8] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#0063A4] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaBrain className="text-4xl text-[#0063A4]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#0063A4] transition-colors">
                Big Data Analytics
              </div>
            </Link>

            {/* 2. Full Stack Development */}
            <Link 
              to="/courses/full-stack-development"
              className="bg-[#FFE5F0] rounded-lg p-6 flex items-center gap-4 border border-[#FFB8D9] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#FF0B80] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaCode className="text-4xl text-[#FF0B80]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#FF0B80] transition-colors">
                Full Stack Development
              </div>
            </Link>

            {/* 3. Digital Marketing */}
            <Link 
              to="/courses/digital-marketing"
              className="bg-[#E0F7E9] rounded-lg p-6 flex items-center gap-4 border border-[#B8E6C8] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#0063A4] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaBullhorn className="text-4xl text-[#0063A4]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#0063A4] transition-colors">
                Digital Marketing
              </div>
            </Link>

            {/* 4. Free Job Assistance */}
            <Link 
              to="/contact"
              className="bg-[#F5E6D3] rounded-lg p-6 flex items-center gap-4 border border-[#E8D4B8] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#FFA500] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaBriefcase className="text-4xl text-[#FFA500]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#FFA500] transition-colors">
                Free Job Assistance
              </div>
            </Link>

            {/* 5. Placement Training */}
            <Link 
              to="/placements"
              className="bg-[#E8D5FF] rounded-lg p-6 flex items-center gap-4 border border-[#D4B8FF] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#8B5CF6] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaServer className="text-4xl text-[#8B5CF6]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#8B5CF6] transition-colors">
                Placement Training
              </div>
            </Link>

            {/* 6. Industrial Training */}
            <Link 
              to="/contact"
              className="bg-[#FFE5F0] rounded-lg p-6 flex items-center gap-4 border border-[#FFB8D9] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#FF0B80] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaIndustry className="text-4xl text-[#FF0B80]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#FF0B80] transition-colors">
                Industrial Training
              </div>
            </Link>

            {/* 7. Soft Skill Training */}
            <Link 
              to="/contact"
              className="bg-[#E8D5FF] rounded-lg p-6 flex items-center gap-4 border border-[#D4B8FF] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#8B5CF6] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaHandshake className="text-4xl text-[#0063A4]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#0063A4] transition-colors">
                Soft Skill Training
              </div>
            </Link>

            {/* 8. Campus Placement */}
            <Link 
              to="/placements"
              className="bg-[#F5E6D3] rounded-lg p-6 flex items-center gap-4 border border-[#E8D4B8] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#FFA500] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaLaptop className="text-4xl text-[#FFA500]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#FFA500] transition-colors">
                Campus Placement
              </div>
            </Link>

            {/* 9. Industry Ready Programs */}
            <Link 
              to="/contact"
              className="bg-[#E0F2FF] rounded-lg p-6 flex items-center gap-4 border border-[#B8E0FF] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-[#0063A4] cursor-pointer group"
            >
              <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FaGraduationCap className="text-4xl text-[#0063A4]" />
              </div>
              <div className="text-gray-800 font-semibold text-lg group-hover:text-[#0063A4] transition-colors">
                Industry Ready Programs
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Signals - Partner Logos */}
      <TrustSignalsSection />

      {/* Featured Courses Carousel */}
      <FeaturedCoursesSection />

      {/* What People Are Saying Section - Enhanced Testimonials */}
      <TestimonialsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Final CTA Banner */}
      <CTABannerSection />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
