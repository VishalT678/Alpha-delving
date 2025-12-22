import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-[#2173B3] w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Section - StackJunior Information */}
          <div className="text-white">
            <h3 className="text-2xl font-bold mb-4">StackJunior</h3>
            <p className="text-sm md:text-base leading-relaxed text-white/90">
              Is an ed-tech platform that trains kids and teenagers in programming and other tech skills
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="text-white">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm md:text-base text-white/90 hover:text-white transition-colors">
                  About StackJunior
                </a>
              </li>
              <li>
                <a href="/courses" className="text-sm md:text-base text-white/90 hover:text-white transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/career" className="text-sm md:text-base text-white/90 hover:text-white transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="/faqs" className="text-sm md:text-base text-white/90 hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm md:text-base text-white/90 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-sm md:text-base text-white/90 hover:text-white transition-colors">
                  Send Feedback
                </a>
              </li>
              <li>
                <a href="/partnerships" className="text-sm md:text-base text-white/90 hover:text-white transition-colors">
                  Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section - Socials & Contact Us */}
          <div className="text-white">
            {/* Socials */}
            <h4 className="text-lg font-bold mb-4">Socials</h4>
            <div className="flex gap-4 mb-8">
              <a 
                href="#" 
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-white/80 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>

            {/* Contact Us */}
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <p className="text-sm md:text-base text-white/90">+234 xxx xxx xxxx</p>
              <p className="text-sm md:text-base text-white/90">+234 xxx xxx xxxx</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - Darker Blue */}
      <div className="bg-[#1A5C8A] w-full py-4">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
          <p className="text-center text-white text-sm md:text-base">
            ©2022 - StackJunior. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

