import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import TeamCard from '../components/about/TeamCard'
import Timeline from '../components/about/Timeline'
import { FaStar, FaUsers, FaGraduationCap, FaHandshake, FaLaptop, FaCertificate, FaCheckCircle, FaRocket } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const [stats, setStats] = useState({ students: 0, placement: 0, partners: 0 })

  // Team members data
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Data Science Expert',
      expertise: '10+ Years | Ex-Google',
      avatar: '👨‍🔬'
    },
    {
      name: 'Priya S.',
      role: 'Full Stack Developer',
      expertise: '8+ Years | MERN Specialist',
      avatar: '👩‍💻'
    },
    {
      name: 'Amit G.',
      role: 'Placement Mentor',
      expertise: '12+ Years | 1000+ Placements',
      avatar: '👨‍💼'
    },
    {
      name: 'Neha R.',
      role: 'UI/UX Designer',
      expertise: '7+ Years | Design Lead',
      avatar: '👩‍🎨'
    },
    {
      name: 'Vikram S.',
      role: 'Partnerships Head',
      expertise: '9+ Years | Industry Relations',
      avatar: '🤝'
    }
  ]

  // Timeline milestones
  const milestones = [
    {
      year: '2024',
      title: 'Founded in Ghaziabad, UP',
      description: 'Alpha Delving was born with a vision to transform tech education in India.'
    },
    {
      year: '2025',
      title: '5K Students Milestone',
      description: 'Reached our first major milestone with 5,000+ students trained.'
    },
    {
      year: '2026',
      title: '95% Placement Record',
      description: 'Achieved industry-leading 95% placement rate across all courses.'
    },
    {
      year: 'Future',
      title: 'National Expansion',
      description: 'Expanding to 50+ cities across India, empowering millions.'
    }
  ]

  // Testimonials
  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Placed at TCS',
      quote: 'Alpha Delving transformed my career! The mentorship and placement support was exceptional.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Priya Patel',
      role: 'Placed at Infosys',
      quote: 'Best decision I ever made. Got placed within 3 months with a great package!',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Amit Kumar',
      role: 'Placed at Wipro',
      quote: 'From zero coding knowledge to a software engineer. Thank you Alpha Delving!',
      rating: 5,
      avatar: '👨‍🔧'
    },
    {
      name: 'Sneha Reddy',
      role: 'Placed at HCLTech',
      quote: 'The curriculum is industry-relevant and the instructors are world-class.',
      rating: 5,
      avatar: '👩‍🎓'
    }
  ]

  // Features
  const features = [
    {
      icon: FaHandshake,
      title: 'Job Guarantee',
      description: '95% placement rate with top companies'
    },
    {
      icon: FaLaptop,
      title: 'Live Classes',
      description: 'Interactive sessions with industry experts'
    },
    {
      icon: FaCertificate,
      title: 'Real Projects',
      description: 'Build portfolio with real-world projects'
    },
    {
      icon: FaRocket,
      title: 'Lifetime Access',
      description: 'Access course materials forever'
    }
  ]

  // Animate hero section
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    gsap.fromTo(
      hero.querySelector('.hero-title'),
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )

    gsap.fromTo(
      hero.querySelector('.hero-subtitle'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
    )

    gsap.fromTo(
      hero.querySelectorAll('.stat-item'),
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, delay: 0.6, stagger: 0.1, ease: 'back.out(1.7)' }
    )
  }, [])

  // Animate stats counter
  useEffect(() => {
    const statsElement = statsRef.current
    if (!statsElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate counters
            gsap.to({}, {
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                const progress = this.progress()
                setStats({
                  students: Math.floor(10000 * progress),
                  placement: Math.floor(95 * progress),
                  partners: Math.floor(50 * progress)
                })
              }
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(statsElement)

    return () => observer.disconnect()
  }, [])

  // Animate sections on scroll
  useEffect(() => {
    gsap.utils.toArray('.animate-on-scroll').forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <>
      <div className="bg-[#E3F2FD] min-h-screen">
        <Nav />

        {/* Hero Section - Full-width light blue bg */}
        <section ref={heroRef} className="bg-[#E3F2FD] w-full py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            {/* Header with blue underline */}
            <div className="text-center mb-12">
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E40AF] mb-4">
                About Alpha Delving
              </h1>
              <div className="w-32 h-1 bg-[#1E40AF] mx-auto rounded-full mb-8"></div>
              <h2 className="hero-subtitle text-xl md:text-2xl text-gray-700 font-medium">
                Empowering Careers Through Cutting-Edge Skill Development
              </h2>
            </div>

            {/* Stats Row */}
            <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="stat-item bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-2">
                  {stats.students.toLocaleString()}+
                </div>
                <div className="text-lg text-gray-700 font-semibold">Students Trained</div>
              </div>
              <div className="stat-item bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-2">
                  {stats.placement}%
                </div>
                <div className="text-lg text-gray-700 font-semibold">Placement Rate</div>
              </div>
              <div className="stat-item bg-white rounded-xl shadow-lg p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#1E40AF] mb-2">
                  {stats.partners}+
                </div>
                <div className="text-lg text-gray-700 font-semibold">Industry Partners</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="bg-white py-16 md:py-20 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] text-center mb-12">
              Our Journey
            </h2>
            <Timeline milestones={milestones} />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-[#E3F2FD] py-16 md:py-20 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaRocket className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1E40AF] mb-4">Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Skill India Movement - Empowering every individual with industry-relevant skills
                  to build successful careers in technology.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#FF6B9D] to-[#FF0B80] rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaGraduationCap className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1E40AF] mb-4">Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  India's #1 Edutech Platform - Becoming the most trusted and effective
                  technology education provider in India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Experts */}
        <section className="bg-white py-16 md:py-20 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] text-center mb-4">
              Meet Our Experts
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Learn from industry veterans with years of experience at top tech companies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Student Success Stories Carousel */}
        <section className="bg-[#E3F2FD] py-16 md:py-20 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] text-center mb-12">
              Student Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] flex items-center justify-center text-3xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-sm text-[#1E40AF]">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-white py-16 md:py-20 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E40AF] text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-[#E3F2FD] rounded-xl p-6 text-center hover:bg-[#BBDEFB] transition-colors"
                  >
                    <div className="w-16 h-16 bg-[#1E40AF] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-[#E3F2FD] py-12 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-white rounded-lg px-6 py-4 shadow-md flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <span className="font-semibold text-gray-800">Certified Platform</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-4 shadow-md flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-2xl" />
                <span className="font-semibold text-gray-800">95% Success Rate</span>
              </div>
              <div className="bg-white rounded-lg px-6 py-4 shadow-md flex items-center gap-3">
                <FaUsers className="text-[#1E40AF] text-2xl" />
                <span className="font-semibold text-gray-800">10K+ Students</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#FF6B9D] to-[#FF0B80] py-16 md:py-20 animate-on-scroll">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Learning Today
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are transforming their careers with Alpha Delving
            </p>
            <Link
              to="/courses"
              className="inline-block bg-white text-[#FF6B9D] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Courses
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default About
