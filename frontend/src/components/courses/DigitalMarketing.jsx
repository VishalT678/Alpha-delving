import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import { FaCheck, FaStar, FaChevronDown, FaChevronUp, FaUser, FaClock, FaCertificate, FaLaptop, FaUsers, FaBullhorn } from 'react-icons/fa'

function DigitalMarketing() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need prior marketing experience?",
      answer: "No prior marketing experience is required. This course is designed for beginners and covers all fundamentals from scratch."
    },
    {
      question: "What is the duration of the course?",
      answer: "The course is a 6-month part-time program with flexible online classes that fit your schedule."
    },
    {
      question: "Which platforms will I learn?",
      answer: "You'll master Google Ads, Facebook Ads, SEO, Content Marketing, Email Marketing, Social Media Marketing, and Analytics."
    },
    {
      question: "Is there job placement assistance?",
      answer: "Yes, we provide free job assistance and placement training to help you land your dream job in digital marketing."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "Yes, you get lifetime access to all course materials, including updated content and resources."
    }
  ];

  const modules = [
    { name: "Introduction to Digital Marketing", progress: 100 },
    { name: "SEO Fundamentals", progress: 100 },
    { name: "Google Ads & PPC", progress: 85 },
    { name: "Social Media Marketing", progress: 70 },
    { name: "Content Marketing", progress: 60 },
    { name: "Email Marketing", progress: 50 },
    { name: "Facebook & Instagram Ads", progress: 40 },
    { name: "Analytics & Reporting", progress: 30 },
    { name: "Marketing Automation", progress: 20 },
    { name: "E-commerce Marketing", progress: 15 },
    { name: "Real-world Campaigns", progress: 10 },
    { name: "Capstone Project", progress: 0 }
  ];

  const reviews = [
    {
      name: "Neha Kapoor",
      role: "Digital Marketing Manager at Flipkart",
      rating: 5,
      text: "This course transformed my career! The comprehensive coverage of all digital marketing channels helped me land my dream job."
    },
    {
      name: "Rohit Agarwal",
      role: "SEO Specialist at Amazon",
      rating: 5,
      text: "Excellent curriculum covering all modern digital marketing tools. The hands-on projects are very practical and industry-relevant."
    },
    {
      name: "Kavita Singh",
      role: "Social Media Manager",
      rating: 5,
      text: "Best investment in my career. The course content is up-to-date and the doubt resolution sessions are very helpful."
    },
    {
      name: "Vikram Mehta",
      role: "PPC Specialist",
      rating: 5,
      text: "The one-on-one classes and personalized attention made all the difference. Great learning experience!"
    }
  ];

  return (
    <>
      <div className="bg-white min-h-screen">
        <Nav />

        {/* Hero Section - Green Gradient */}
        <section className="bg-gradient-to-r from-[#00A17F] to-[#00C896] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold">🔥 70% OFF - Limited Time</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Digital Marketing
                  <span className="block text-3xl md:text-4xl mt-2">Master All Channels</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Master SEO, Social Media, Google Ads, and Content Marketing to become a Digital Marketing Expert
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaClock className="text-lg" />
                    <span>6 Months</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaUser className="text-lg" />
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaStar className="text-lg text-yellow-300" />
                    <span>4.8 Rating</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-block bg-white hover:bg-gray-100 text-[#00A17F] font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  ENROLL NOW
                </Link>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="/programming 1.png"
                    alt="Digital Marketing"
                    className="w-full max-w-md rounded-xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold">600+</div>
                    <div className="text-sm">Students Enrolled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Course Overview
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* What You'll Learn */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaBullhorn className="text-[#00A17F]" />
                  What You'll Learn
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>Master SEO, Google Ads, and Social Media Marketing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>Create effective content marketing strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>Run successful paid advertising campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>Analyze marketing performance with analytics tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>Build and execute complete marketing campaigns</span>
                  </li>
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaUsers className="text-[#00A17F]" />
                  Key Features
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>One-on-one Classes and Doubt Resolution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>6 months part-time program with online classes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>Revised curriculum for post Chat-GPT era</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>No prior marketing experience required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#00A17F] mt-1 shrink-0" />
                    <span>Suitable for final years, graduates and early professionals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Description</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Master the art and science of digital marketing with our comprehensive course. Learn to create, execute, and optimize digital marketing campaigns across all major platforms including Google, Facebook, Instagram, and more.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From SEO and content marketing to paid advertising and analytics, this course covers everything you need to become a successful digital marketer. Through hands-on projects and real-world campaigns, you'll gain the skills to drive traffic, generate leads, and increase conversions for any business.
              </p>
            </div>

            {/* Eligibility */}
            <div className="mt-8 bg-green-50 border-l-4 border-[#00A17F] rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Eligibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#00A17F] font-bold">•</span>
                  <span>Basic computer knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00A17F] font-bold">•</span>
                  <span>Creative thinking and communication skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00A17F] font-bold">•</span>
                  <span>Interest in marketing and social media</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Curriculum
            </h2>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Module {index + 1}: {module.name}
                    </h3>
                    <span className="text-sm text-gray-600">{module.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-[#00A17F] to-[#00C896] h-3 rounded-full transition-all duration-500"
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Your Instructor
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#00A17F] to-[#00C896] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      SM
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      Sneha Mehta
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      8+ Years Ex-Google Digital Marketing Lead
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Sneha Mehta is a digital marketing expert with over 8 years of experience at Google, where she managed multi-million dollar advertising campaigns. She has trained thousands of students in digital marketing and helped them build successful careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gradient-to-r from-[#00A17F] to-[#00C896] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Special Launch Price
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="mb-6">
                <span className="text-gray-500 line-through text-2xl">₹16,999</span>
                <span className="ml-4 text-4xl md:text-5xl font-bold text-[#00A17F]">₹4,999</span>
                <div className="mt-2">
                  <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold">
                    71% OFF
                  </span>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-block bg-[#00A17F] hover:bg-[#008A6B] text-white font-bold px-12 py-4 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg mb-8"
              >
                ENROLL NOW
              </Link>
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <FaCertificate className="text-[#00A17F]" />
                    <span>Industry-Recognized Certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLaptop className="text-[#00A17F]" />
                    <span>Lifetime Access to Materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUser className="text-[#00A17F]" />
                    <span>One-on-One Mentorship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-[#00A17F]" />
                    <span>Job Placement Assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-[#00A17F]" />
                    <span>12 Real-World Campaigns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-[#00A17F]" />
                    <span>Doubt Resolution Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Reviews Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Student Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800">{faq.question}</span>
                    {openFaq === index ? (
                      <FaChevronUp className="text-[#00A17F] shrink-0" />
                    ) : (
                      <FaChevronDown className="text-[#00A17F] shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 border-t bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="bg-gradient-to-r from-[#00A17F] to-[#00C896] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Master Digital Marketing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 600+ students who have transformed their careers with our Digital Marketing course
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white hover:bg-gray-100 text-[#00A17F] font-bold px-12 py-4 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              ENROLL NOW - ₹4,999 Only
            </Link>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
              <FaCheck className="text-green-300" />
              <span>Job Guarantee Badge</span>
              <span className="mx-2">•</span>
              <FaCheck className="text-green-300" />
              <span>600+ Enrolled</span>
              <span className="mx-2">•</span>
              <FaStar className="text-yellow-300" />
              <span>4.8 Rating</span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default DigitalMarketing;
