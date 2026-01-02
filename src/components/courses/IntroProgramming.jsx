import { Link } from 'react-router-dom'
import Nav from "../common/Nav";
import Footer from "../common/Footer";

function IntroProgramming() {
  return (
    <>
      <div className="bg-white min-h-screen">
        <Nav />

        {/* Top yellow section with course title and card */}
        <section className="bg-[#FFC34D] pt-10 pb-6">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-10 items-start">
            {/* Left card */}
            <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm">
              <img
                src="/courses2 1.png"
                alt="Introduction to Programming"
                className="w-full rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Course Details
              </h2>
              <ul className="space-y-3 text-sm text-gray-800">
                <li>📚 8 course materials</li>
                <li>🧩 2 Projects</li>
                <li>🎥 10 Videos</li>
              </ul>
              <Link to="/contact" className="block mt-6 w-full bg-[#FF3B7F] text-white font-semibold py-3 rounded-md text-sm hover:bg-[#e43372] transition-colors text-center">
                ENROLL NOW
              </Link>
            </div>

            {/* Right heading/meta */}
            <div className="flex-1 flex flex-col justify-end">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                Introduction to Programming
              </h1>
              <p className="text-xs text-gray-800 mb-4">
                ⏱ Duration: 3 weeks &nbsp; | &nbsp; 📂 3 Levels &nbsp; | &nbsp; ⭐ Status:
                Beginner
              </p>
            </div>
          </div>
          {/* Black divider bar under top section */}
          <div className="mt-6 h-4 bg-black" />
        </section>

        {/* Description + videos on light blue background */}
        <section className="bg-[#E6F4FF] py-8">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16 space-y-6">
            {/* Description */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-2">Description</h2>
              <p className="text-sm text-gray-800 leading-relaxed max-w-3xl">
                Understanding core programming concepts is necessary for starting a career
                in software development, data science and many more. This is your first
                step to becoming a world-class tech pro.
              </p>
            </div>

            {/* Videos list */}
            <div className="bg-white/70 rounded-md shadow-sm">
              <div className="px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <span className="text-lg">📺</span>
                <h2 className="font-semibold text-gray-900">Videos</h2>
              </div>
              <ul className="divide-y divide-gray-200 text-sm text-gray-800">
                {[
                  "Introduction to Programming",
                  "Understanding Syntax",
                  "Variables and Data Types",
                  "Control Structures",
                  "Functions and Modules",
                  "Introduction to Programming",
                ].map((title, idx) => (
                  <li
                    key={title + idx}
                    className="flex items-center justify-between px-4 py-3 hover:bg-[#F3F8FF]"
                  >
                    <span>{title}</span>
                    <span className="text-xs text-gray-600">02 : 10</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default IntroProgramming;


