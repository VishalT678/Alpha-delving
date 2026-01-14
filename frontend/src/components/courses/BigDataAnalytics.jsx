import { Link } from 'react-router-dom'
import { useState } from 'react'
import Nav from "../common/Nav";
import Footer from "../common/Footer";
import { FaCheck, FaStar, FaChevronDown, FaChevronUp, FaUser, FaClock, FaCertificate, FaLaptop, FaUsers, FaChartLine } from 'react-icons/fa'

function BigDataAnalytics() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do I need prior coding experience?",
      answer: "No prior coding experience is required. This course is designed for beginners and covers all fundamentals from scratch."
    },
    {
      question: "What is the duration of the course?",
      answer: "The course is a 6-month part-time program with flexible online classes that fit your schedule."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, you'll receive a certificate upon successful completion of the course and all projects."
    },
    {
      question: "Is there job placement assistance?",
      answer: "Yes, we provide free job assistance and placement training to help you land your dream job in big data analytics."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "Yes, you get lifetime access to all course materials, including updated content and resources."
    }
  ];

  const modules = [
    { name: "Introduction to Big Data", progress: 100 },
    { name: "Data Engineering Fundamentals", progress: 100 },
    { name: "Hadoop Ecosystem", progress: 85 },
    { name: "Apache Spark & Real-time Processing", progress: 70 },
    { name: "Data Ingestion with Kafka", progress: 60 },
    { name: "SQL for Big Data", progress: 50 },
    { name: "Data Visualization with Tableau", progress: 40 },
    { name: "Real-world Projects", progress: 30 },
    { name: "Advanced Analytics Techniques", progress: 20 },
    { name: "Distributed Computing", progress: 15 },
    { name: "Data Pipeline Architecture", progress: 10 },
    { name: "Capstone Project", progress: 0 }
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      role: "Data Analyst at TCS",
      rating: 5,
      text: "This course transformed my career! The hands-on projects and expert guidance helped me land my dream job. Highly recommended!"
    },
    {
      name: "Rahul Patel",
      role: "Big Data Engineer",
      rating: 5,
      text: "Excellent curriculum covering all modern big data tools. The instructors are industry experts and very supportive."
    },
    {
      name: "Anjali Mehta",
      role: "Data Scientist",
      rating: 5,
      text: "Best investment in my career. The course content is up-to-date and the doubt resolution sessions are very helpful."
    },
    {
      name: "Vikram Singh",
      role: "Senior Data Analyst",
      rating: 5,
      text: "The one-on-one classes and personalized attention made all the difference. Great learning experience!"
    }
  ];

  return (
    <>
      <div className="bg-white min-h-screen">
        <Nav />

        {/* Hero Section - Blue Gradient */}
        <section className="bg-gradient-to-r from-[#0063A4] to-[#0084C7] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="text-sm font-semibold">🔥 70% OFF - Limited Time</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Big Data Analytics Mastery
                  <span className="block text-3xl md:text-4xl mt-2">From Beginner to Pro</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-white/90">
                  Master cutting-edge big data technologies and launch your career in data analytics
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaClock className="text-lg" />
                    <span>6 Months</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaUser className="text-lg" />
                    <span>Intermediate</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <FaStar className="text-lg text-yellow-300" />
                    <span>4.8 Rating</span>
                  </div>
                </div>
                <Link 
                  to="/contact" 
                  className="inline-block bg-[#FF0B80] hover:bg-[#E00A70] text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  ENROLL NOW
                </Link>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src="/programming 1.png"
                    alt="Big Data Analytics"
                    className="w-full max-w-md rounded-xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white text-gray-800 px-6 py-3 rounded-lg shadow-lg">
                    <div className="text-2xl font-bold">500+</div>
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
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaChartLine className="text-[#0063A4]" />
                  What You'll Learn
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>Master Hadoop ecosystem, Apache Spark, and Kafka</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>Learn distributed computing and real-time data processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>Handle petabyte-scale datasets with industry-standard tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>Build end-to-end data pipelines and analytics solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>Gain practical experience with real-world projects</span>
                  </li>
                </ul>
              </div>

              {/* Key Features */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaUsers className="text-[#0063A4]" />
                  Key Features
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>One-on-one Classes and Doubt Resolution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>6 months part-time program with online classes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>Revised curriculum for post Chat-GPT era</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>No prior coding experience required</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="text-[#0063A4] mt-1 shrink-0" />
                    <span>Suitable for final years, graduates and early professionals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Course Description</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Unlock the power of big data with our Big Data Analytics course. Learn to analyze, process, and visualize large datasets using tools like Hadoop, Spark, and SQL. This course will equip you with the knowledge to handle complex data challenges and derive actionable insights, preparing you for a thriving career in big data analytics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Master cutting-edge big data technologies including Hadoop ecosystem, Apache Spark, and Kafka. Learn distributed computing, real-time data processing, and advanced analytics techniques to handle petabyte-scale datasets. Gain practical experience in data ingestion, processing, and analysis using industry-standard tools.
              </p>
            </div>

            {/* Eligibility */}
            <div className="mt-8 bg-blue-50 border-l-4 border-[#0063A4] rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Eligibility</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0063A4] font-bold">•</span>
                  <span>Basic programming knowledge (preferably in Java or Python)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0063A4] font-bold">•</span>
                  <span>Understanding of databases and SQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0063A4] font-bold">•</span>
                  <span>Interest in data processing and analysis</span>
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
                      className="bg-gradient-to-r from-[#0063A4] to-[#0084C7] h-3 rounded-full transition-all duration-500"
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
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#0063A4] to-[#0084C7] rounded-full flex items-center justify-center text-white text-4xl font-bold">
                      RK
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                      Dr. Rajesh Kumar
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      10+ Years Ex-Google Data Scientist
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Dr. Rajesh Kumar is a seasoned data scientist with over 10 years of experience at Google, where he led multiple big data projects. He has trained thousands of students and professionals in big data technologies, helping them build successful careers in data analytics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-gradient-to-r from-[#0063A4] to-[#0084C7] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Special Launch Price
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="mb-6">
                <span className="text-gray-500 line-through text-2xl">₹15,999</span>
                <span className="ml-4 text-4xl md:text-5xl font-bold text-[#0063A4]">₹4,999</span>
                <div className="mt-2">
                  <span className="inline-block bg-red-100 text-red-700 px-4 py-1 rounded-full text-sm font-semibold">
                    70% OFF
                  </span>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="inline-block bg-[#FF0B80] hover:bg-[#E00A70] text-white font-bold px-12 py-4 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg mb-8"
              >
                ENROLL NOW
              </Link>
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3">
                    <FaCertificate className="text-[#0063A4]" />
                    <span>Industry-Recognized Certificate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaLaptop className="text-[#0063A4]" />
                    <span>Lifetime Access to Materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUser className="text-[#0063A4]" />
                    <span>One-on-One Mentorship</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUsers className="text-[#0063A4]" />
                    <span>Job Placement Assistance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-[#0063A4]" />
                    <span>12 Real-World Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheck className="text-[#0063A4]" />
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
                      <FaChevronUp className="text-[#0063A4] shrink-0" />
                    ) : (
                      <FaChevronDown className="text-[#0063A4] shrink-0" />
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
        <section className="bg-gradient-to-r from-[#FF0B80] to-[#FF6B9D] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Big Data Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join 500+ students who have transformed their careers with our Big Data Analytics course
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white hover:bg-gray-100 text-[#FF0B80] font-bold px-12 py-4 rounded-lg text-xl transition-all transform hover:scale-105 shadow-lg"
            >
              ENROLL NOW - ₹4,999 Only
            </Link>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/90">
              <FaCheck className="text-green-300" />
              <span>Job Guarantee Badge</span>
              <span className="mx-2">•</span>
              <FaCheck className="text-green-300" />
              <span>500+ Enrolled</span>
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

export default BigDataAnalytics;
