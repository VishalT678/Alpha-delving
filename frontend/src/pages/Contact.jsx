import { Link } from 'react-router-dom'
import Nav from '../components/common/Nav'
import Footer from '../components/common/Footer'

function Contact() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Nav />

        {/* Hero Section - Yellow Background */}
        <section className="bg-[#F8C35C] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Title */}
              <div className="flex flex-col justify-center">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  CONTACT
                  <br />
                  US
                </h1>
              </div>

              {/* Right - Illustration */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/contact us 1.png"
                  alt="Contact Us"
                  className="w-full max-w-lg h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section - Light Blue Background */}
        <section className="bg-[#E6F4FF] py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8">
                Do you require assistance?
              </h2>

              <form className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#E6F4FF] bg-[#E6F4FF] focus:outline-none focus:border-[#4A90E2] text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#E6F4FF] bg-[#E6F4FF] focus:outline-none focus:border-[#4A90E2] text-gray-800"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#E6F4FF] bg-[#E6F4FF] focus:outline-none focus:border-[#4A90E2] text-gray-800"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#E6F4FF] bg-[#E6F4FF] focus:outline-none focus:border-[#4A90E2] text-gray-800"
                  />
                </div>

                {/* What can we help you with */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What can we help you with?
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border-2 border-[#E6F4FF] bg-[#E6F4FF] focus:outline-none focus:border-[#4A90E2] text-gray-800 appearance-none">
                    <option>Select an option</option>
                    <option>Course Enrollment</option>
                    <option>Technical Support</option>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Type message here..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#E6F4FF] bg-[#E6F4FF] focus:outline-none focus:border-[#4A90E2] text-gray-800 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-semibold px-12 py-3 rounded-lg transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>

            {/* CEO and CTO Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {/* CEO Card */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">CEO</h3>
                <p className="text-sm text-gray-600 mb-3">Chief Executive Officer</p>
                <p className="text-base text-gray-800 font-medium">+234 xxx xxx xxxx</p>
              </div>

              {/* CTO Card */}
              <div className="bg-white rounded-xl shadow-md p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">CTO</h3>
                <p className="text-sm text-gray-600 mb-3">Chief Technology Officer</p>
                <p className="text-base text-gray-800 font-medium">+234 xxx xxx xxxx</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

export default Contact

