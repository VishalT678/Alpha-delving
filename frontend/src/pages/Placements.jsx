import { Link } from 'react-router-dom'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'
import { useState } from 'react'

function Placements() {
  const [openFaq, setOpenFaq] = useState(null)

  // Enhanced placement data
  const placements = [
    {
      name: 'Rahul Sharma',
      background: 'Mechanical Engineer',
      course: 'Frontend Development',
      company: 'Google',
      role: 'Frontend Developer',
      ctc: '₹12 LPA',
      photo: '👨‍💻',
      testimonial: 'AlphaDelving transformed my career completely!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      background: 'Graphic Designer',
      course: 'UI/UX Design',
      company: 'Microsoft',
      role: 'UX Designer',
      ctc: '₹10 LPA',
      photo: '👩‍🎨',
      testimonial: 'Best decision I ever made. Got placed in 3 months!',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      background: 'B.Com Graduate',
      course: 'SQL Programming',
      company: 'Amazon',
      role: 'Database Engineer',
      ctc: '₹13 LPA',
      photo: '👨‍💼',
      testimonial: 'From zero coding knowledge to Amazon in 6 months!',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      background: 'B.Tech CSE',
      course: 'Introduction to Programming',
      company: 'Apple',
      role: 'Software Engineer',
      ctc: '₹11 LPA',
      photo: '👩‍💻',
      testimonial: 'The mentorship program is exceptional.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      background: 'MCA',
      course: 'Frontend Development',
      company: 'Meta',
      role: 'React Developer',
      ctc: '₹9.5 LPA',
      photo: '👨‍🔧',
      testimonial: 'Mock interviews helped me crack Meta!',
      rating: 5
    },
    {
      name: 'Ananya Desai',
      background: 'Fine Arts',
      course: 'UI/UX Design',
      company: 'Netflix',
      role: 'Product Designer',
      ctc: '₹10 LPA',
      photo: '👩‍🎨',
      testimonial: 'Career switch made easy with AlphaDelving.',
      rating: 5
    }
  ]

  const companies = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Meta', logo: '📘' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Adobe', logo: '🎨' },
    { name: 'Oracle', logo: '🗄️' },
    { name: 'IBM', logo: '💻' },
    { name: 'Salesforce', logo: '☁️' }
  ]

  const roles = [
    { role: 'Frontend Developer', count: 180, percentage: 36 },
    { role: 'MERN Stack Developer', count: 150, percentage: 30 },
    { role: 'SDE-1', count: 100, percentage: 20 },
    { role: 'Data Analyst', count: 50, percentage: 10 },
    { role: 'UI/UX Designer', count: 20, percentage: 4 }
  ]

  const salaryRanges = [
    { role: 'Frontend Developer', min: '₹6 LPA', max: '₹15 LPA', avg: '₹10 LPA' },
    { role: 'MERN Stack Developer', min: '₹7 LPA', max: '₹18 LPA', avg: '₹12 LPA' },
    { role: 'SDE-1', min: '₹8 LPA', max: '₹20 LPA', avg: '₹13 LPA' },
    { role: 'Data Analyst', min: '₹6 LPA', max: '₹14 LPA', avg: '₹10 LPA' },
    { role: 'UI/UX Designer', min: '₹5 LPA', max: '₹12 LPA', avg: '₹8.5 LPA' }
  ]

  const cities = ['Bangalore', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad']

  const testimonials = [
    {
      name: 'Arjun Mehta',
      role: 'SDE-1 at Amazon',
      text: 'The placement team was incredibly supportive. They helped me prepare for interviews and connected me with the right opportunities.',
      rating: 5
    },
    {
      name: 'Kavya Nair',
      role: 'Frontend Dev at Microsoft',
      text: 'I got placed within 4 months of completing the course. The mock interviews were game-changers!',
      rating: 5
    },
    {
      name: 'Rohan Gupta',
      role: 'MERN Developer at Google',
      text: 'Best investment in my career. The curriculum is industry-relevant and the placement support is unmatched.',
      rating: 5
    }
  ]

  const placementProcess = [
    { step: 1, title: 'Training', description: 'Complete industry-relevant courses with hands-on projects' },
    { step: 2, title: 'Resume Building', description: 'Get your resume reviewed and optimized by experts' },
    { step: 3, title: 'Mock Interviews', description: 'Practice with industry professionals and get feedback' },
    { step: 4, title: 'Shortlisting', description: 'Get matched with relevant job openings' },
    { step: 5, title: 'Offers', description: 'Receive and negotiate job offers with our support' }
  ]

  const faqs = [
    {
      q: 'What is the eligibility criteria for placements?',
      a: 'Students who complete our courses with at least 80% attendance and submit all projects are eligible for placement assistance.'
    },
    {
      q: 'How long does it take to get placed?',
      a: 'On average, students get placed within 3-6 months after course completion. However, this varies based on individual performance and market conditions.'
    },
    {
      q: 'What skills are required for placements?',
      a: 'You need to complete the course curriculum, build projects, and demonstrate proficiency in the technologies you learned. We also help you develop soft skills.'
    },
    {
      q: 'How many interview attempts do I get?',
      a: 'We provide unlimited interview opportunities until you get placed. Our goal is your success!'
    },
    {
      q: 'How long is the placement support available?',
      a: 'Placement support is available for 12 months after course completion, including resume reviews, mock interviews, and job referrals.'
    },
    {
      q: 'Is there a placement guarantee?',
      a: 'We provide placement assistance, not a guarantee. However, our 95% placement rate speaks to our commitment. We support you until you get placed.'
    }
  ]

  return (
    <>
      <div className="bg-white min-h-screen">
        <Nav />

        {/* Hero Section - Clear Outcome-Focused Headline */}
        <section className="bg-[#4A90E2] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="text-center text-white mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Get Placed in Top Tech Companies
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                95% Placement Rate | Average CTC: ₹10 LPA | Average Time to First Offer: 4.2 months
              </p>
              
              {/* Strong CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-[#FF6B9D] hover:bg-[#FF5A8A] text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg"
                >
                  Apply Now
                </Link>
                <button className="bg-white text-[#4A90E2] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg">
                  Book Free Counselling
                </button>
                <button className="bg-[#00A17F] hover:bg-[#008F6F] text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg shadow-lg">
                  Download Placement Report
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Partners Logos */}
        <section className="bg-white py-12 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
              Our Students Work At
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors border border-gray-200"
                >
                  <div className="text-4xl mb-2">{company.logo}</div>
                  <h3 className="text-sm font-semibold text-gray-700 text-center">{company.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Outcomes Section */}
        <section className="bg-[#FF6B9D] py-16">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Key Outcomes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-white mb-2">95%</div>
                <div className="text-xl text-white/90">Placement Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-white mb-2">500+</div>
                <div className="text-xl text-white/90">Students Placed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-white mb-2">₹10 LPA</div>
                <div className="text-xl text-white/90">Average CTC</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-white mb-2">8</div>
                <div className="text-xl text-white/90">Cities Across India</div>
              </div>
            </div>
            
            {/* Cities */}
            <div className="mt-12 text-center">
              <p className="text-white/90 text-lg mb-4">Students placed in:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {cities.map((city, index) => (
                  <span key={index} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roles Students Get */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              Roles Our Students Get
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our students secure diverse roles across top tech companies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {roles.map((item, index) => (
                <div key={index} className="bg-[#E6F4FF] rounded-xl p-6 border-l-4 border-[#4A90E2]">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.role}</h3>
                    <span className="text-2xl font-bold text-[#4A90E2]">{item.count}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#4A90E2] h-3 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{item.percentage}% of placements</p>
                </div>
              ))}
            </div>

            {/* Salary Ranges Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-800 p-6 border-b border-gray-200">
                Role-wise Salary Ranges
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#E6F4FF]">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Role</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Min Salary</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Max Salary</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-800">Average</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {salaryRanges.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-800">{item.role}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-600">{item.min}</td>
                        <td className="px-6 py-4 text-sm text-center text-gray-600">{item.max}</td>
                        <td className="px-6 py-4 text-sm text-center font-bold text-[#FF6B9D]">{item.avg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Student Success Stories - Enhanced */}
        <section className="bg-[#E6F4FF] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Real stories from students who transformed their careers with AlphaDelving
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {placements.map((placement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-[#E6F4FF] flex items-center justify-center text-4xl mr-4">
                      {placement.photo}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{placement.name}</h3>
                      <p className="text-sm text-gray-600">{placement.background}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Course:</span>
                      <p className="text-base font-semibold text-gray-800">{placement.course}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Placed as:</span>
                      <p className="text-base font-semibold text-[#4A90E2]">{placement.role}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Company:</span>
                      <p className="text-base font-semibold text-gray-800">{placement.company}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">CTC:</span>
                      <p className="text-lg font-bold text-[#FF6B9D]">{placement.ctc}</p>
                    </div>
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-700 italic">"{placement.testimonial}"</p>
                      <div className="flex items-center mt-2">
                        {[...Array(placement.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Hear directly from our placed students about their journey
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 rounded-xl overflow-hidden aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">▶️</div>
                    <p className="text-gray-600">Video Testimonial {item}</p>
                    <p className="text-sm text-gray-500 mt-2">30-90 seconds</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Written Testimonials with Star Ratings */}
        <section className="bg-[#FCBA4D] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
              What Our Students Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.text}"</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Placement Process Step-by-Step */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              Our Placement Process
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              A structured approach to ensure your success
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {placementProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#E6F4FF] rounded-xl p-6 text-center h-full">
                    <div className="w-16 h-16 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < placementProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <span className="text-3xl text-[#4A90E2]">→</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Details */}
        <section className="bg-[#E6F4FF] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
              Comprehensive Placement Support
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Resume Building</h3>
                <p className="text-gray-600">Get your resume reviewed and optimized by industry experts</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">LinkedIn/GitHub Review</h3>
                <p className="text-gray-600">Professional profile optimization for better visibility</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Mock Interviews</h3>
                <p className="text-gray-600">Practice with industry professionals and get detailed feedback</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Referral Support</h3>
                <p className="text-gray-600">Get referrals to top companies through our network</p>
              </div>
            </div>
          </div>
        </section>

        {/* Placement Guarantee Explanation */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="bg-[#E6F4FF] rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
                Placement Assistance vs. Placement Guarantee
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <div>
                  <h3 className="font-bold text-[#4A90E2] mb-2">What We Provide:</h3>
                  <p className="mb-4">
                    We offer <strong>comprehensive placement assistance</strong> with a 95% success rate. 
                    Our commitment is to support you throughout your job search journey.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Unlimited interview opportunities</li>
                    <li>12 months of placement support</li>
                    <li>Resume and profile optimization</li>
                    <li>Mock interviews and feedback</li>
                    <li>Direct connections with hiring managers</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-bold text-[#FF6B9D] mb-2">Important Note:</h3>
                  <p>
                    While we don't offer a "placement guarantee," our track record and comprehensive support 
                    system ensure that dedicated students get placed. Your success depends on your commitment 
                    to learning and our commitment to supporting you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-[#00A17F] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 text-lg">{faq.q}</span>
                    <span className="text-2xl text-[#00A17F]">
                      {openFaq === index ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
              Talk to Our Placement Team
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-[#E6F4FF] rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white focus:outline-none focus:border-[#4A90E2]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white focus:outline-none focus:border-[#4A90E2]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white focus:outline-none focus:border-[#4A90E2]"
                    />
                  </div>
                  <div>
                    <textarea
                      rows="4"
                      placeholder="Message"
                      className="w-full px-4 py-3 rounded-lg border-2 border-white bg-white focus:outline-none focus:border-[#4A90E2] resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#4A90E2] hover:bg-[#3A7BC8] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">WhatsApp</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
                    Chat on WhatsApp
                  </button>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Call Us</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Email</h3>
                      <p className="text-gray-600">placements@alphadelving.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-[#FCBA4D] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              Trusted by Thousands
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white/80 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#4A90E2] mb-2">4.8/5</div>
                <div className="text-gray-700 font-semibold">Average Rating</div>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <div className="bg-white/80 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#4A90E2] mb-2">2.5k+</div>
                <div className="text-gray-700 font-semibold">Reviews</div>
              </div>
              <div className="bg-white/80 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#4A90E2] mb-2">10k+</div>
                <div className="text-gray-700 font-semibold">Community Members</div>
              </div>
              <div className="bg-white/80 rounded-xl p-6">
                <div className="text-4xl font-bold text-[#4A90E2] mb-2">50+</div>
                <div className="text-gray-700 font-semibold">Media Mentions</div>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <span className="bg-white/80 text-gray-800 px-6 py-3 rounded-full font-semibold">
                Featured in TechCrunch
              </span>
              <span className="bg-white/80 text-gray-800 px-6 py-3 rounded-full font-semibold">
                Rated #1 EdTech Platform
              </span>
              <span className="bg-white/80 text-gray-800 px-6 py-3 rounded-full font-semibold">
                Join 10k+ on Telegram
              </span>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Placements
